import React, { Component } from "react";
import ScreenItems from "../components/ScreenItems";
import { FaLink } from "react-icons/fa";

export class Contacts extends Component {
  render() {
    return (
      <>
        <ScreenItems></ScreenItems>
        <main className="content">
          <section className="page">
            <div className="aboutSection">
              <p>
                <span>
                  <a href="https://www.linkedin.com/in/marcus-ebanks-60a3a9291/">
                    Linkedin <FaLink className="linkIcon" />
                  </a>
                </span>
                <span>
                  <a href="https://github.com/Potatodown?tab=repositories">
                    Github <FaLink className="linkIcon" />
                  </a>
                </span>
                <span>Email: marcusebanks12@gmail.com</span>
              </p>
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default Contacts;
