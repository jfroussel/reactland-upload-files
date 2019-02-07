import React, { Component } from 'react'

import UploadFiles from 'reactland-upload-files'

export default class App extends Component {
  render() {
    return (
      <div>
        <div>
        <UploadFiles
          title='File Upload'
          message='Drag Files to Upload'
          chooseButtonTitle='choose a file'
          uploadButtonTitle='upload'
        />
      </div>
      <div>
        <UploadFiles
          title='import de fichiers'
          message='Glissez et deposez vos fichiers ici'
          chooseButtonTitle='choisir vos fichiers'
          uploadButtonTitle='importer'
        />
      </div>

      </div>
      
    )
  }
}
