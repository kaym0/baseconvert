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
    const { octal } = this.state;

    if (/^[0-7]+$/.test(octal)) {
      let dec = parseInt(octal, 8);
      let bin = parseInt(octal, 8).toString(2);
      let hex = parseInt(octal, 8)
        .toString(16)
        .toUpperCase();

      this.setState({
        decimal: dec,
        binary: bin,
        hexidecimal: hex
      });
    } else {
      this.setState({
        decimal: "The number selected is not a octal number.",
        binary: "The number selected is not a octal number.",
        hexidecimal: "The number selected is not a octal number."
      });
    }
  };

  onChange = e => {
    this.setState({
      octal: e.target.value
    });
  };

  render() {
    const { binary, decimal, hexidecimal, octal } = this.state;
    return (
      <div id="binary-conversion">
        <Card className="conversion-card" elevation={3}>
          <FormGroup>
            <Text className="conversion-title">Convert Octal</Text>
            <InputGroup
              className="conversion-input"
              placeholder="Octal"
              value={octal}
              onChange={this.onChange}
            />
            <Button
              disabled={octal.toString().length > 0 ? false : true}
              rightIcon="refresh"
              className="conversion-button"
              text="Convert"
              onClick={this.convert}
            />
            <Text className="conversion-result-label"> Decimal </Text>
            <TextArea
              readOnly
              className="conversion-result-text"
              value={decimal}
            />
            <Text className="conversion-result-label"> Binary </Text>
            <TextArea
              readOnly
              className="conversion-result-text"
              value={binary}
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
