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

class DecimalPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      binary: "",
      decimal: "",
      octal: "",
      hexidecimal: ""
    };
    this.onChange = this.onChange.bind(this);
    this.convert = this.convert.bind(this);
  }

  convert = () => {
    const { decimal  } = this.state;

    if (/^[0-9]+$/.test(decimal)) {
      let bin = parseInt(decimal).toString(2);
      let oct = parseInt(decimal).toString(8);
      let hex = parseInt(decimal).toString(16).toUpperCase();

      this.setState({
        hexidecimal: hex,
        binary: bin,
        octal: oct
      });
    } else {
      this.setState({
        binary: "The number selected is not a decimal number.",
        hexidecimal: "The number selected is not a decimal number.",
        octal: "The number selected is not a decimal number."
      });
    }
  };

  onChange = e => {
    this.setState({
      decimal: e.target.value
    });
  };

  render() {
    const { binary, decimal, hexidecimal, octal } = this.state;
    return (
      <div id="binary-conversion">
        <Card className="conversion-card" elevation={3}>
          <FormGroup>
            <Text className="conversion-title">Convert Decimal</Text>
            <InputGroup
              className="conversion-input"
              placeholder="Decimal"
              value={decimal}
              onChange={this.onChange}
            />
            <Button
              disabled={decimal.toString().length > 0 ? false : true}
              rightIcon="refresh"
              className="conversion-button"
              text="Convert"
              onClick={this.convert}
            />
            <Text className="conversion-result-label"> Binary </Text>
            <TextArea
              readOnly
              className="conversion-result-text"
              value={binary}
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
          </FormGroup>
        </Card>
      </div>
    );
  }
}

export default DecimalPage;
