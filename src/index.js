import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UploadImg from '../upload.svg'


const style = {
  title: {
    color: '#d0d5da',
    fontWeight: 300
  },
  fileUpload: {
    border: 'dashed 2px #d0d5da',
    borderBottom: 'none',
    width: "auto",
    minHeight: 200,

  },
  svg: {
    margin: 10

  },
  message: {
    color: '#d0d5da',
    paddingBottom: 20
  },
  button: {
    backgroundColor: '#20c997',
    color: '#fff',
    height: '4rem',
    lineHeight: '4rem'
  },
  header: {
    backgroundColor: '#343a40',
    color: '#fff',
    height: '2rem',
    padding: 5
  },
  containerUploading: {
    height: 'auto',
    border: 'solid 1px #d0d5da',
  },
  progress: {
    width: '25%'
  },
  fileIconContainer: {
   paddingLeft: 30,
   paddingTop: 10
    
  },
  fileIcon: {
    fontSize: 40,
    color: '#d0d5da'
  }

}


export default class UploadFiles extends Component {
  static propTypes = {
    //text: PropTypes.string
  }

  render() {

    const Upload = () => {
      return (
        <div className="row">
          <div className="col-1" style={style.fileIconContainer}>
            <i className="far fa-file-code" style={style.fileIcon}></i>
          </div>
          <div className="container col-11">
            <div>My Uploade.jpg</div>
            <div>
              <div className="progress">
                <div className="progress-bar bg-info" role="progressbar" style={style.progress} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div>40% Done </div>
          </div>
        </div>

      )
    }

    return (
      <div className="container pt-5">
        <h3 style={style.title}>File Upload</h3>
        <div className="row pt-3">
          <div className="col-4 text-center">
            <div style={style.fileUpload}>
              <img src={UploadImg} style={style.svg}></img>
              <div style={style.message}>Drag Files to Upload</div>
            </div>
            <div style={style.button}><span style={{ lineHeight: '50%' }}>BROWSER FILES</span></div>
          </div>
          <div className="col-8">
            <div style={style.header}>UPLOADING ...</div>
            <div style={style.containerUploading}>
              <div>
                <Upload />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
