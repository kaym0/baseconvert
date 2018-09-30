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
    const { hexidecimal } = this.state;

    if (/^[0-9A-Fa-f]+$/.test(hexidecimal)) {
      let bin = parseInt(hexidecimal, 16).toString(2);
      let oct = parseInt(hexidecimal, 16).toString(8);
      let dec = parseInt(hexidecimal, 16);

      this.setState({
        decimal: dec,
        binary: bin,
        octal: oct
      });
    } else {
      this.setState({
        decimal: "The number selected is not a hexidecimal number.",
        binary: "The number selected is not a hexidecimal number.",
        octal: "The number selected is not a hexidecimal number."
      });
    }
  };

  onChange = e => {
    this.setState({
      hexidecimal: e.target.value
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
            <Text className="conversion-title col-xs-12 col-md-12 col-lg-12 col-xl-12">Convert Hexidecimal</Text>
            <div id="inputs">
              <InputGroup
                className="conversion-input"
                placeholder="Input hexidecimal"
                value={hexidecimal}
                onChange={this.onChange}
              />
              <Button
                disabled={hexidecimal.toString().length > 0 ? false : true}
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
            <Text className="conversion-result-label"> Octal </Text>
            <TextArea
              fill
              readOnly
              className="conversion-result-text"
              value={octal}
            />
          </FormGroup>
        </Card>
      </div>
    );
  }
}

export default DecimalPage;
