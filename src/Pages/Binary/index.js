import React, { Component } from "react";
import "./index.css";
import {
  Card,
  InputGroup,
  FormGroup,
  TextArea,
  Text,
  Button,
  Icon
} from "@blueprintjs/core";

class BinaryPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      binary: "",
      decimal: "",
      octal: "",
      hexidecimal: ""
    };
    this.updateBinary = this.updateBinary.bind(this);
    this.convertBinary = this.convertBinary.bind(this);
  }

  convertBinary = () => {
    const { binary } = this.state;

    if (/^[01]+$/.test(binary)) {
      let bin = parseInt(binary, 2).toString(10);
      let hex = parseInt(binary, 2)
        .toString(16)
        .toUpperCase();
      let oct = parseInt(binary, 2).toString(8);

      this.setState({
        hexidecimal: hex,
        decimal: bin,
        octal: oct
      });
    } else {
      this.setState({
        decimal: "The number selected is not a binary number.",
        hexidecimal: "The number selected is not a binary number.",
        octal: "The number selected is not a binary number."
      });
    }
  };

  updateBinary = e => {
    this.setState({
      binary: e.target.value
    });
  };

  render() {
    const { binary, decimal, hexidecimal, octal } = this.state;
    return (
      <div id="binary-conversion">
        <Card
          className="conversion-card  col-xs-7 col-md-5 col-lg-4 col-xl-3"
          elevation={3}
        >
          <FormGroup className="form-group">
            <Text className="conversion-title col-xs-12 col-md-12 col-lg-12 col-xl-12">Convert Binary</Text>
            <div id="inputs">
              <InputGroup
                className="conversion-input"
                placeholder="Input binary"
                value={decimal}
                onChange={this.onChange}
              />
              <Button
                disabled={binary.toString().length > 0 ? false : true}
                className="conversion-button"
                text="Convert"
                onClick={this.convertBinary}
                rightIcon={<Icon className="convert-icon" icon="refresh" />}
              />
            </div>
            <Text className="conversion-result-label"> Decimal </Text>
            <TextArea
              readOnly
              fill
              className="conversion-result-text"
              value={decimal}
            />
            <Text className="conversion-result-label"> Octal </Text>
            <TextArea
              readOnly
              fill
              className="conversion-result-text"
              value={octal}
            />
            <Text className="conversion-result-label"> Hexidecimal </Text>
            <TextArea
              readOnly
              fill
              className="conversion-result-text"
              value={hexidecimal}
            />
          </FormGroup>
        </Card>
      </div>
    );
  }
}

export default BinaryPage;
