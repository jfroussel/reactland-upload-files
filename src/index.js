import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UploadImg from '../upload.svg'
import './styles.scss'
import ProgressBar from 'react-bootstrap/ProgressBar'


const style = {
  progress: {
    width: 50
  }
}

export default class UploadFiles extends Component {
  constructor(props) {
    super(props)
    this.state = {
      files: '',
      label: '',
      value: '45'
    }

    this.fileInput = React.createRef()
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
   
  }

  handleChange(event) {
    event.preventDefault()
    this.setState({ files: this.fileInput.current.files })
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log(this.state.files)
  }

  bytesToSize(bytes) {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
    if (bytes === 0) return 'n/a'
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10)
    if (i === 0) return `${bytes} ${sizes[i]})`
    return `${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`
  }

  Reset() {
    if (!this.state.files) {
      return this.setState({ files: '' })
    }
  }

  static propTypes = {
    //text: PropTypes.string
  }

  render() {
    const {value} = this.state
    
    console.log(this.state.files.length)
    const Upload = () => {
      return (
        [...this.state.files].map((e, i) => {
          return (
            <div className="row" key={i}>
              <div className="col-1">
                <div style={{}}>
                  <i className=" far fa-file-code" style={{ color: 'rgb(208, 213, 218)', fontSize: 30, paddingTop:'1.8rem' }}  ></i>
                </div>
              </div>
              <div className="container col-11">
                <div className="font-weight-light" style={{fontSize:13}}>{e.name}</div>
                <span className="font-weight-light" style={{fontSize:10}}>{this.bytesToSize(e.size)} {`(${e.type})`}</span>
                <div>
                  <div>
                    <ProgressBar animated now={45} />
                  </div>
                </div>
                <div className="font-weight-light" style={{fontSize:10}}>40% Done </div>
                <hr />
              </div>
            </div>
          )

        })
      )
    }

    const RenderResetButton = () => {
      return (
        <button className="btn btn-sm btn-info">reset</button>
      )
    }

    return (

      <div className="container pt-5">
        <form onSubmit={this.handleSubmit}>
          <div className="row pt-3">
            <div className="col-4 text-center mr-2" style={{ border: 'solid 1px rgb(226, 227, 228)' }}>
              <h3 className="text-center text-uppercase font-weight-lighter">File Upload</h3>
              <div className="fileUpload">
                <img className="svg" src={UploadImg}></img>
                <div className="font-weight-lighter pb-3">Drag Files to Upload</div>
                <div className="wrapper">
                  <input
                    type="file"
                    multiple
                    id="file"
                    ref={this.fileInput}
                    onChange={this.handleChange}
                  />
                  {
                    this.state.files
                    ? <button type="submit">Upload</button>
                    : <label htmlFor="file">choose a file</label>
                  }
                  
                </div>
              </div>
              <code></code>
            </div>
            <div className="col-7" style={{ border: 'solid 1px rgb(226, 227, 228)'}}>
              <div className="font-weight-lighter">UPLOADING ... {`${this.state.files.length} file(s)` }</div>
              <div className="text-right">
                {
                  this.state.files ? <RenderResetButton /> : null
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
