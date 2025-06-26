import React from 'react';
import './intro.css';
import Me from 'assets/me.jpg';

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello! My name is</h2>
          <h1 className="i-name">Jaden How</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Software Engineer</div>
              <div className="i-title-item">Backend Engineer</div>
              <div className="i-title-item">Software Developer</div>
              <div className="i-title-item">Full-Stack Developer</div>
            </div>
          </div>
          <div className="i-desc">
            I&apos;m a Computer Science Specialist at the University of Toronto, passionate about backend engineering and solving real-world problems through code. I enjoy building reliable systems and continuously expanding my technical toolkit.
          </div>
        </div>
      </div>

      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
