import React, { Component } from 'react'
import NavigationBar from './NavigationBar'

export class ScreenItems extends Component {
  render() {
    return (
        <>
        <header className='siteHeader'><NavigationBar></NavigationBar></header>
        <div className='background' id='background'></div>
        <div className='frame'>
          <div className='frame_line frame_line-left'></div>
          <div className='frame_line frame_line-right'></div>
          <div className='frame_line frame_line-topandbottom'></div>
          <div className='frame_line frame_line-topandbottom'></div>
        </div>
      </>
    )
  }
}

export default ScreenItems