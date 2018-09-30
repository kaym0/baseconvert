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
        <Card className="conversion-card col-xs-6 col-md-5 col-lg-4 col-xl-3" elevation={3}>
          <FormGroup>
            <Text className="conversion-title">Convert Hexidecimal</Text>
            <InputGroup
              className="conversion-input"
              placeholder="Hexidecimal"
              value={hexidecimal}
              onChange={this.onChange}
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
            <Text className="conversion-result-label"> Octal </Text>
            <TextArea
              readOnly
              className="conversion-result-text"
              value={octal}
            />
            <Button
              disabled={hexidecimal.toString().length > 0 ? false : true}
              rightIcon="refresh"
              className="conversion-button"
              text="Convert"
              onClick={this.convert}
            />
          </FormGroup>
        </Card>
      </div>
    );
  }
}

export default DecimalPage;
