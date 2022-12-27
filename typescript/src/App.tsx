import { Button } from '@mui/material'
import React, { Component } from 'react'
import HttpNoerror from './Components/HttpNoerror'
import Httpsrequest from './Components/Httpsrequest'


export class App extends Component {
  render() {
    return (
      <div>
        <Httpsrequest />
        {/* <HttpNoerror /> */}
      </div>
    )
  }
}

export default App