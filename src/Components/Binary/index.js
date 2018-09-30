import React, { Component } from "react";
import "./index.css";
import {
  Card,
  InputGroup,
  FormGroup,
  TextArea,
  Text,
  Button
} from "@blueprintjs/core";

class BinaryToDecimal extends Component {
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
        <Card className="conversion-card col-xs-6 col-md-5 col-lg-4 col-xl-3" elevation={3}>
          <FormGroup>
            <Text className="conversion-title">Convert Binary</Text>
            <InputGroup
              className="conversion-input"
              placeholder="Binary"
              value={binary}
              onChange={this.updateBinary}
            />
            <Text className="conversion-result-label"> Decimal </Text>
            <TextArea
              readOnly
              className="conversion-result-text"
              value={decimal}
            />
            <Text className="conversion-result-label"> Octal </Text>
            <TextArea
              readOnly
              className="conversion-result-text"
              value={octal}
            />
            <Text className="conversion-result-label"> Hexidecimal </Text>
            <TextArea
              readOnly
              className="conversion-result-text"
              value={hexidecimal}
            />
            <Button
              disabled={binary.toString().length > 0 ? false : true}
              rightIcon="refresh"
              className="conversion-button"
              text="Convert"
              onClick={this.convertBinary}
            />
          </FormGroup>
        </Card>
      </div>
    );
  }
}

export default BinaryToDecimal;
