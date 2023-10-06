import React, { Component } from "react";
import ScreenItems from "../components/ScreenItems";

export class Home extends Component {
  render() {
    return (
      <>
        <ScreenItems></ScreenItems>
        <main className="content">
          <section className="page">
            <div className="homeSection">
              <h2>
                <span>Hey, my Name is Marcus Ebanks and Welcome to my Website.</span>
              </h2>
              <p>
                <span>I'm a passionate computer programmer & frontend developer, and</span>
                <span>I hope you'll get to learn more about me and my strengths.</span>
              </p>
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default Home;
