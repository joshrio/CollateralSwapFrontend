import getAddresses from "../providers/getAddresses"
import getGasPrice from "./GasStation"
import { MakerToMakerOptions } from "./Platforms"

import DSProxy from "../abi/DSProxy.json"
import ProxyRegistry from "../abi/ProxyRegistry.json"
import CdpManager from "../abi/CdpManager.json"
import SwapActions from "../contracts/SwapActions.json"

/**
 * @param {  } web3 The web3 instance (usually metamask or their wallet)
 * @param {  } account The account to use for sending transactions
 * @param { Number } cdpId The CDP / Vault ID
 * @param { Boolean } option Whether the CDP is converting ETH collateral to BAT, or vice versa
 */
export const performSwap = async (web3, account, cdpId, option) => {
  let addresses = getAddresses()

  let cdpManager = addresses.maker.cdpManager
  let jug = addresses.maker.jug
  let ethJoin = addresses.maker.ethJoin
  let batJoin = addresses.maker.batJoin
  let daiJoin = addresses.maker.daiJoin

  let daiAddress = addresses.tokens.dai
  let batAddress = addresses.tokens.bat
  let ethAddress = addresses.aave.ethAddress

  let myProxyAddress = await getUsersProxy(web3, account)

  let data
  if (MakerToMakerOptions[option] === MakerToMakerOptions.ETHBAT) {
		data = web3.eth.abi.encodeParameters(
			["address", "uint", "address", "address", "address", "address", "address", "address", "address", "bytes32"],
			[myProxyAddress, cdpId, batAddress, ethAddress, cdpManager, ethJoin, daiJoin, batJoin, jug, web3.utils.utf8ToHex(addresses.maker.ilkBatA)]
		)
  } else if (MakerToMakerOptions[option] === MakerToMakerOptions.BATETH) {
		data = web3.eth.abi.encodeParameters(
			["address", "uint", "address", "address", "address", "address", "address", "address", "address", "bytes32"],
			[myProxyAddress, cdpId, ethAddress, batAddress, cdpManager, ethJoin, daiJoin, batJoin, jug, web3.utils.utf8ToHex(addresses.maker.ilkEthA)]
		)
  } else {
		throw Error(`Invalid option: ${option}`)
  }

  let networkId = await web3.eth.net.getId()
  let deployedNetwork = SwapActions.networks[networkId]
  let swapActions = new web3.eth.Contract(
    SwapActions.abi,
    deployedNetwork && deployedNetwork.address
  )

  let flashloanCalldata = swapActions.methods
    .swapCollateral(
      cdpManager,
      addresses.collateralSwap.beta,
      daiAddress,
      cdpId,
      data
    )
    .encodeABI()

  let myProxyInstance = new web3.eth.Contract(DSProxy, myProxyAddress)
  let gasPrice = await getGasPrice()

  let response = await myProxyInstance.methods
    .execute(addresses.collateralSwap.beta, flashloanCalldata)
    .send({
      from: account,
      gas: 1000000,
      gasPrice: web3.utils.toWei(`${gasPrice}`, "gwei")
    })

  console.log(response)
  return response
}

export const getUsersProxy = async (web3, account) => {
  let proxyRegistryInstance = new web3.eth.Contract(
    ProxyRegistry,
    getAddresses().maker.proxyRegistry
  )
  let proxyAddress = await proxyRegistryInstance.methods
    .proxies(account)
    .call()
  return proxyAddress === "0x0000000000000000000000000000000000000000"
    ? null
    : proxyAddress
}

export const getUserCdps = async (proxyAddress, web3) => {
  let cdpManagerInstance = new web3.eth.Contract(
    CdpManager,
    getAddresses().maker.cdpManager
  )

  let count = await cdpManagerInstance.methods.count(proxyAddress).call()
  let cdps = {}
  if (count > 0) {
    let lastCdp = await cdpManagerInstance.methods.last(proxyAddress).call()
    let lastCdpIlk = web3.utils.hexToAscii(await cdpManagerInstance.methods.ilks(lastCdp).call())
    cdps[lastCdp] = lastCdpIlk

    for (let i = 1; i < count; i++) {
      let linkedList = await cdpManagerInstance.methods.list(lastCdp).call()
      lastCdp = linkedList.prev
      lastCdpIlk = web3.utils.hexToAscii(await cdpManagerInstance.methods.ilks(lastCdp).call())
		  cdps[lastCdp] = lastCdpIlk
    }
  }
  return cdps
}