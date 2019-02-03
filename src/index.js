import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UploadImg from '../upload.svg'
import './styles.scss'

const style = {
  progress: {
    width: 50
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
          <div className="col-1">
            <div style={{}}>
              <i className=" far fa-file-code pt-3" style={{ color: 'rgb(208, 213, 218)', fontSize: 30 }}  ></i>
            </div>
          </div>
          <div className="container col-11">
            <div>My Uploade.jpg</div>
            <span>25 Mo</span>
            <div>
              <div className="progress">
                <div className="progress-bar" role="progressbar" styles={style.progres} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div>40% Done </div>
            <hr />
          </div>
        </div>
      )
    }

    return (

      <div className="container pt-5">
        <form>
          <div className="row pt-3">
            <div className="col-4 text-center">
              <h3 className="text-center text-uppercase font-weight-lighter">File Upload</h3>
              <div className="fileUpload">
                <img className="svg" src={UploadImg}></img>
                <div className="font-weight-lighter pb-3">Drag Files to Upload</div>
                <div className="wrapper">
                  <input type="file" multiple id="file" />
                  <label htmlFor="file">choose a file</label>
                </div>
              </div>
            </div>
            <div className="col-8">
              <div className="font-weight-lighter">UPLOADING ...</div>
              <div className="container">
                <div>
                  <Upload />
                  <Upload />
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
