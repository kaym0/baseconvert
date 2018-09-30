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
    const { decimal } = this.state;

    if (/^[0-9]+$/.test(decimal)) {
      let bin = Number(decimal).toString(2);
      let oct = Number(decimal).toString(8);
      let hex = Number(decimal)
        .toString(16)
        .toUpperCase();

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
        <Card
          className="conversion-card col-xs-7 col-md-5 col-lg-4 col-xl-3"
          elevation={3}
        >
          <FormGroup className="form-group">
            <Text className="conversion-title col-xs-12 col-md-12 col-lg-12 col-xl-12">
              Convert Decimal
            </Text>
            <div id="inputs">
              <InputGroup
                className="conversion-input"
                placeholder="Input decimal"
                value={decimal}
                onChange={this.onChange}
              />
              <Button
                disabled={decimal.toString().length > 0 ? false : true}
                rightIcon={<Icon className="convert-icon" icon="refresh"/>}
                className="conversion-button"
                text="Convert"
                onClick={this.convert}
              />
            </div>
            <Text className="conversion-result-label"> Binary </Text>
            <TextArea
              fill
              readOnly
              className="conversion-result-text"
              value={binary}
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

export default DecimalPage;
