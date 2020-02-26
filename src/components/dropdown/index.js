import React from "react";

import { Container, Select, Wrapper, Item, Button, Labels, Name, Row, Label } from "./styles";

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
    const { onSelect, options, showKey } = this.props;
    return Object.keys(options).map(key => {
      let name = showKey ? `${key} (${options[key]})` : options[key]
      return (
        <Item disabled key={name} onClick={() => onSelect(key)}>
          <Row>
            <Name>{name}</Name>
          </Row>
        </Item>
      );
    });
  };

  render() {
    const { displayMenu } = this.state;
    const { label, error, value, placeholder, options, showKey } = this.props;
    let display = showKey ? `${value} (${options[value]})` : value
    return (
      <Container>
        <Labels>
          <Label>{label}</Label>
          <Label>{error}</Label>
        </Labels>
        <Select>
          <Button onClick={this.showDropdownMenu}>
            <Row>
              <Name>{!value ? placeholder : display }</Name>
            </Row>
          </Button>
          {displayMenu && <Wrapper>{this.renderOptions()}</Wrapper>}
        </Select>
      </Container>
    );
  }
}

export default Dropdown;
