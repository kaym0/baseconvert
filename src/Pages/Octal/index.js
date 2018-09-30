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
        <Card
          className="conversion-card  col-xs-7 col-md-5 col-lg-4 col-xl-3"
          elevation={3}
        >
          <FormGroup className="form-group">
            <Text className="conversion-title col-xs-12 col-md-12 col-lg-12 col-xl-12">Convert Octal</Text>
            <div id="inputs">
              <InputGroup
                className="conversion-input"
                placeholder="Input octal"
                value={octal}
                onChange={this.onChange}
              />
              <Button
                disabled={octal.toString().length > 0 ? false : true}
                className="conversion-button"
                text="Convert"
                onClick={this.convert}
                rightIcon={<Icon className="convert-icon" icon="refresh" />}
              />
            </div>
            <Text className="conversion-result-label"> Decimal </Text>
            <TextArea
              fill
              readOnly
              className="conversion-result-text"
              value={decimal}
            />
            <Text className="conversion-result-label"> Binary </Text>
            <TextArea
              fill
              readOnly
              className="conversion-result-text"
              value={binary}
            />
            <Text className="conversion-result-label"> Hexidecimal </Text>
            <TextArea
              fill
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
