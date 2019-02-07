# reactland-upload-files

> react upload-files component

[![NPM](https://img.shields.io/npm/v/reactland-upload-files.svg)](https://www.npmjs.com/package/reactland-upload-files) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save reactland-upload-files
```

## Usage

```jsx
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
```

## License

MIT © [jfroussel](https://github.com/jfroussel)
