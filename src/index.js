import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UploadImg from '../upload.svg'
import './styles.scss'


export default class UploadFiles extends Component {
  static propTypes = {
    //text: PropTypes.string
  }

  render() {

    const Upload = () => {
      return (
        <div className="row">
          <div className="col-1 fileIconContainer">
            <i className="far fa-file-code fileIcon" ></i>
          </div>
          <div className="container col-11">
            <div>My Uploade.jpg</div>
            <div>
              <div className="progress">
                <div className="progress-bar bg-info progress" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div>40% Done </div>
          </div>
        </div>

      )
    }

    return (
      <div className="container pt-5">
        <h3 className="title">File Upload</h3>
        <div className="row pt-3">
          <div className="col-4 text-center">
            <div className="fileUpload">
              <img  className="svg"src={UploadImg}></img>
              <div className="message">Drag Files to Upload</div>
              <div className="wrapper">
                <input type="file" multiple id="file" />
                <label htmlFor="file">choose a file</label>
              </div>
            </div>

          </div>
          <div className="col-8">
            <div className="header">UPLOADING ...</div>
            <div  className="containerUploading">
              <div>
                <Upload />
              </div>
            </div>

          </div>
        </div>
      </div >
    )
  }
}
