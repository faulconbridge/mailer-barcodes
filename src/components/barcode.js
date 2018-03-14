import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Dropzone from 'react-dropzone';
import Button from 'material-ui/Button';

class Accept extends React.Component {
  constructor(props) {
    super(props);
    this.handleContentsChange = this.handleContentsChange.bind(this);
    this.handleDisabledChange = this.handleDisabledChange.bind(this);
  }
  
  handleContentsChange(e) {
    this.props.onContentsChange(e);
  }
  
  handleDisabledChange(e) {
    this.props.onDisabledChange(e);
  }
  render() {
    return (
      <section>
        <div className="dropzone">
          <Dropzone
            accept="text/csv"
            onDrop={(accepted, rejected) => {
              accepted.forEach(file => {
                const reader = new FileReader();

                reader.onload = () => {
                  const fileAsBinaryString = reader.result;

                  var upload = {
                    name: file.name,
                    payload: fileAsBinaryString
                  };

                  this.handleContentsChange(upload);
                  this.handleDisabledChange(false);
                };
                reader.onabort = () => console.log('file reading was aborted');
                reader.onerror = () => console.log('file reading has failed');
        
                reader.readAsBinaryString(file);
              });
            }}
            style={{
              margin: '20px auto',
              width: '300px',
              height: '200px',
              padding: '15px',
              borderWidth: '2px',
              borderColor: 'rgb(102, 102, 102)',
              borderStyle: 'dashed',
              borderRadius: '5px'}}>
            <a className="active">
              Drag and drop your files here to get started, or click to select
              files to upload.</a>
          </Dropzone>
        </div>
      </section>
    );
  }
}

class DownloadButton extends React.Component {
  CSVToArray(payload) {
    var strDelimiter = ",";
    var objPattern = new RegExp(
      (
        "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +
        "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +
        "([^\"\\" + strDelimiter + "\\r\\n]*))"
      ),
      "gi"
    );

    var arrData = [[]];
    var arrMatches = null;
    while (arrMatches = objPattern.exec(payload.payload)) {
      var strMatchedDelimiter = arrMatches[ 1 ];
      if(
        strMatchedDelimiter.length &&
        strMatchedDelimiter !== strDelimiter
      ) {
        arrData.push( [] );
      }

      var strMatchedValue;
      if(arrMatches[2]) {
        strMatchedValue = arrMatches[ 2 ].replace(
          new RegExp( "\"\"", "g" ),
          "\""
        );
      } else {
        strMatchedValue = arrMatches[ 3 ];
      }
      arrData[ arrData.length - 1 ].push( strMatchedValue );
    }

    var output = []
    for(var i = 0; i < arrData.length; i++) {
        output[i] = '$DP$' + arrData[i][0] + '$' + arrData[i][1]
    }
    return(output);
  }

  ArrayToCode39(input) {
    console.log(input);
    JsBarcode("#barcode", input[0], {
      format: "CODE39",
      mod43: true
    });

    var canvas = document.getElementById("barcode");
    // var ctx = canvas.getContext("2d");
    // ctx.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL("image/png");

    console.log(dataURL.replace(/^data:image\/(png|jpg);base64,/, ""));

    var link = document.createElement("a");
    link.download = 'sample.png';
    link.href = dataURL;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  render() {
    const disabled = this.props.disabled;
    const contents = this.CSVToArray(this.props.contents);

    return (
      <div>
        <Button
          variant="raised"
          color="secondary"
          disabled={disabled}
          onClick={this.ArrayToCode39.bind(this, contents)}
          style={{
            margin: '20px auto',
            position: 'relative',
            display: 'block'
          }}
        >
          Download Barcodes
        </Button>
      </div>
    );
  }
}

class Barcoder extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      accepted: [],
      contents: [],
      disabled: true
    };
    
    this.handleContentsChange = this.handleContentsChange.bind(this);
    this.handleDisabledChange = this.handleDisabledChange.bind(this);
  }

  handleContentsChange(contents) {
    this.setState({
      contents: contents
    });
  }
  
  handleDisabledChange(disabled) {
    this.setState({
      disabled: disabled
    })
  }

  render() {
    return (
      <div>
        <Accept
          accepted={this.state.accepted}
          contents={this.state.contents}
          disabled={this.state.disabled}
          onContentsChange={this.handleContentsChange}
          onDisabledChange={this.handleDisabledChange}
        />
        <DownloadButton
          contents={this.state.contents}
          disabled={this.state.disabled}
        />
        <canvas
          id="barcode"
          style={{display: 'hidden'}}>
        </canvas>
      </div>
    );
  }
}

export default (Barcoder);
