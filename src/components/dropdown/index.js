import React from "react";
// import "./styles.css";
import {
  Container,
  Select,
  Wrapper,
  Item,
  Button,
  Labels,
  Ticker,
  Name,
  Row,
  Label
} from "./styles";

class Dropdown extends React.Component {
  state = {
    displayMenu: false,
    selected: this.props.placeholder
  };

  showDropdownMenu = event => {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener("click", this.hideDropdownMenu);
    });
  };

  hideDropdownMenu = () => {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener("click", this.hideDropdownMenu);
    });
  };

  renderOptions = () => {
    const { onClick, options } = this.props;
    return options.map(option => {
      const { name, status } = option;
      return (
        <Item key={name} onClick={() => onClick(option)}>
          <Row>
            <Name>{name}</Name>
            {status && <Ticker>{status}</Ticker>}
          </Row>
        </Item>
      );
    });
  };

  render() {
    const { displayMenu } = this.state;
    const { label, error, placeholder, value, status, width } = this.props;

    return (
      <Container>
        <Labels>
          <Label>{label}</Label>
          <Label>{error}</Label>
        </Labels>
        <Select>
          <Button onClick={this.showDropdownMenu}>
            <Row>
              <Name>{value}</Name>
            </Row>
          </Button>
          {displayMenu && <Wrapper>{this.renderOptions()}</Wrapper>}
        </Select>
      </Container>
    );
  }
}

export default Dropdown;
