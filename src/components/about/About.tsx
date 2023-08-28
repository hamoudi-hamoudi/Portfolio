import React from "react";
import "./about.css";
import about from "../../assets/about.png";
import { FaAward, FaRegWindowRestore } from "react-icons/fa";

const About: React.FC = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About ME</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={about} alt="about.me.image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="icon" />
              <h4>Experience</h4>
              <p>
                intensive learning practical skills on full stack web
                development at HYF bootcamp
              </p>
            </article>
          </div>
          <div className="about__cards">
            <article className="about__card">
              <FaRegWindowRestore className="icon" />
              <h4>Projects</h4>
              <p>+3 completed projects</p>
            </article>
          </div>
          <p>
            I'm a recent graduate in web development, eager to apply my skills
            for creating user-friendly websites that deliver seamless
            experiences.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
