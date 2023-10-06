import React, { Component } from "react";
import ScreenItems from "../components/ScreenItems";

export class Projects extends Component {
  render() {
    return (
      <>
        <ScreenItems></ScreenItems>
        <main className="content">
          <section className="page">
            <div className="projectSection">
              <div className="projectList">
                <a className="text-btn"href="https://Avvards.ca">
                  <div className="projectTitle">Avvards</div>
                  <div className="projectCategory">Frontend</div>
                </a>
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default Projects;
