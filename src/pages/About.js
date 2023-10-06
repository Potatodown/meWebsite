import React, { Component } from 'react'
import ScreenItems from '../components/ScreenItems'
export class About extends Component {
  render() {
    return (
      <>
      <ScreenItems></ScreenItems>
      <main className='content'>
        <section className='page'>
          <div className='aboutSection'>
            <p className='aboutText'>
            <span>I started to learn programming from</span>
            <span>inspiration from game developers</span>
            <span>like 343.at Conestoga, I learned</span>
            <span>numerous programming languages,</span>
            <span>but had more interest in </span>
            <span>front-end programming I learned how</span>
            <span>rewarding it was making dynamic,</span>
            <span>clean, and intuitive website's</span>
            <span>so in my spare time I experimented</span>
            <span>with tools like React, Ruby, Python</span>
            <span>and tried to better master them in</span>
            <span>order to create even better projects.</span>
            <br/>
            <span>Besides that in my spare time I enjoy</span>
            <span>creating and editing videos, cooking,</span>
            <span>art, my love for gaming is still strong,</span>
            <span>and I love sci-fi / horror, which may</span>
            <span>or may not have inspired </span>
            <span>this websites design.</span>
            </p>
          </div>
        </section>
      </main>
      </>
    )
  }
}

export default About