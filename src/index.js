import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UploadImg from '../upload.svg'
import './styles.scss'
import ProgressBar from 'react-bootstrap/ProgressBar'
import axios from 'axios'
import _ from 'lodash'

const END_POINT = 'http://localhost:8000/upload'

const style = {
  progress: {
    width: 50
  }
}

export default class UploadFiles extends Component {
  constructor(props) {
    super(props)
    this.state = {
      label: '',
      value: '45',
      now: 60,
      selectedFile: '',
      loader: 0

    }
  }

  handleSelectedFile = event => {
    
    this.setState({
      selectedFile: event.target.files,
      loader: 0
    })
  } 
  

  handleUpload = () => {
    
    const data = new FormData()
    for(var i = 0; i < this.state.selectedFile.length; i++) {
      data.append('file', this.state.selectedFile[i], this.state.selectedFile[i].name)
    }
    
    axios
      .post(END_POINT, data, {
        onUploadProgress: ProgressEvent => {
          this.setState({
            loader: (ProgressEvent.loaded / ProgressEvent.total) * 100,
          })
        },
      })
      .then(res => {
        console.log('status :', res.statusText)
      })
      
  }

  bytesToSize(bytes) {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
    if (bytes === 0) return 'n/a'
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10)
    if (i === 0) return `${bytes} ${sizes[i]})`
    return `${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`
  }

  resetFiles = () => {
    if (this.state.selectedFile) {
      this.setState({ selectedFile: '' })
    }
  }

  static propTypes = {
    //text: PropTypes.string
  }

  render() {
    const { value } = this.state
    const { title, message, chooseButtonTitle, uploadButtonTitle } = this.props
   
    const Upload = () => {
      return (
        [...this.state.selectedFile].map((e, i) => {
          return (
            <div className="row" key={i}>
              <div className="col-1">
                <div>
                  <i className=" far fa-file-code" style={{ color: 'rgb(208, 213, 218)', fontSize: 30, paddingTop: '1.8rem' }}  ></i>
                </div>
              </div>
              <div className="container col-11">
                <div className="font-weight-light" style={{ fontSize: 13 }}>{e.name}</div>
                <span className="font-weight-light" style={{ fontSize: 10 }}>{this.bytesToSize(e.size)} {`(${e.type})`}</span>
                <div>
                  <div>
                    <ProgressBar
                      animated
                      now={this.state.now}
                      label={`${this.state.now}%`}
                    />
                  </div>
                </div>
                <div className="font-weight-light" style={{ fontSize: 10 }}>40% Done </div>
                <hr />
              </div>
            </div>
          )

        })
      )
    }

    const RenderResetButton = () => {
      return (
        <div type="button" className="btn btn-sm btn-info" onClick={this.resetFiles}>reset</div>
      )
    }

    return (

      <div className="container pt-5">
        <form id="myform" onSubmit={this.handleSubmit}>
          <div className="row pt-3">
            <div className="col-4 text-center mr-2" style={{ border: 'solid 1px rgb(226, 227, 228)' }}>
              <h3 className="text-center text-uppercase font-weight-lighter">{title}</h3>
              <div className="fileUpload">
                <img className="svg" src={UploadImg}></img>
                <div className="font-weight-lighter pb-3">{message}</div>
                <div className="wrapper">
                  <input
                    type="file"
                    multiple
                    id="file"
                    onChange={this.handleSelectedFile}
                  />
                  {
                    this.state.selectedFile
                      ? <button type="submit" onClick={this.handleUpload}>{uploadButtonTitle}</button>
                      : <label htmlFor="file">{chooseButtonTitle}</label>
                  }

                </div>
              </div>
              <code></code>
            </div>
            <div className="col-7" style={{ border: 'solid 1px rgb(226, 227, 228)' }}>
              <div className="font-weight-lighter">UPLOADING ... {`${this.state.selectedFile.length} file(s)`}</div>
              <div className="text-right">
                {
                  this.state.selectedFile ? <RenderResetButton /> : null
                }

              </div>
              <div className="container" >
                <div>
                  <Upload />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div >



    )
  }
}
