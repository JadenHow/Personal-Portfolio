import React, {useState} from 'react'
import "./about.css"
import Me2 from "../../img/me2.JPG"
import KLCC from "../../img/KLCC.jpg"

const About = () => {
  const [img1, setImg1] = useState(true);
  return (
    <div className="a">
        <div className="a-left">
            <div className="a-card-bg"></div>
            <div className="a-card">
              {/* <img src={Me2} alt="" className="a-img" /> */}
              {img1 ? <img src={Me2} alt="" className="a-img"/> : <img src={KLCC} alt="" className="a-img2"/>}
            </div>
        </div>
        <div className="a-right">
          <h1 className="a-title">About Me</h1>
          
          <p className="a-desc-1">
          I was born in Malaysia and had been living there for most of my life. I'm currently in Canada to pursue a degree in Computer Science at the University of Toronto. 
          </p>
          <p className="a-desc-2">
          My dream career is to be a software engineer, as I would like to solve more challenging problems and collaborate with like-minded people to help make people's lives easier. 
          </p>

          <div className="a-right-list">
          <p className="a-desc-3">
          Some of my technical skill sets include: 
          <ul>
            <li>Python</li>
            <li>Java</li>
            <li>C</li>
            <li>C#</li>
          </ul>
          </p>
          <p className="a-desc-4">
          I'm also capable of: 
          <ul>
            <li>HTML & CSS</li>
            <li>JavaScript</li>
            <li>NestJs</li>
            <li>ReactJs</li>
            <li>NodeJs</li>
            <li>ExpressJs</li>
          </ul>
          </p>
          <p className="a-desc-5">
          My hobbies include:
          <ul>
            <li>Basketball</li>
            <li>Badminton</li>
            <li>Frisbee</li>
            <li>Rock Climbing</li>
            <li>Cooking</li>
            <li>Photography</li>
            <li>Programming</li>
          </ul>
          </p>
          </div>

          <button onClick={() => {setImg1(!img1)}}>Click here to see a picture I took in Malaysia!</button>
        </div>
        
    </div>
  )
}

export default About