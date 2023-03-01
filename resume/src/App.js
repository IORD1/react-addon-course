import logo from './logo.svg';
import lin from './lin.png';
import lc from './lc.png';
import git from './git.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="leftcol">
        <p className='myname'>Prathmesh Ingole</p>
        <p className="heading">Education</p>
        <p className="subheading">Bhavan's Lloyds Vidya Niketan, Wardha</p>
        <p className="content">I attended the same school for 12 years and completed my schooling with abhove 98% attendance rate each year. I also scored 88% in my SSC exam.</p>

        <p className="subheading">Dinanath Junior College  Nagpur</p>
        <p className="content">Scored 86% in my HSC exam and also attended IIT-HOME for JEE-main/advance(2020) preparation.</p>

        <p className="subheading">International Institute of Information Technology, Pune</p>
        <p className="content">Persuing Bachelors degree in Computer Engineering, having average SGPA's around 8.8 (first sem - fifth sem).Current Semester: 6tth</p>

        <p className="heading">Projects</p>
        <p className="subheading">Project in basic C++</p>
        <p className="content">1. Application to test different sorting algorithms by calculating actual time required to sort arrays</p>
        <p className="content">2. Made Menu based Ticket booking system by applying OOP's concepts</p>
        
        <p className="subheading">Click Here to see Projects in Responsive Web</p>
        <p className="subheading">Click Here to see Projects with Javascript DSA</p>
        <p className="content">1. Addition to above projects : Built a weather Applications with apis and deployed with GitHub Pages</p>

        <p className="subheading">Click Here to see Projects with Front-End Libraries</p>

        <p className="subheading">Click Here to see Projects with Firebase Database</p>
        <p className="content">(A chat application having a Firebase backend and deployed using Firebase, also adding linear elliptic crytogrphic signaturing methods to application)</p>

        <p className="subheading">Basic project in DBMS using MySql, XAMP and HTML</p>
        <p className="subheading">Intelligent Traffic Light System with IoT</p>



      </div>
      <div className="rightcol">
        <div className="upperlinks">
          <p className="contact">8208938760</p>
          <p className="email">pratham111ingole@gmail.com</p>
          <p className="address">Hijewadi, Pune</p>
          <div className="links">
              <img className="images" src={git}></img>
              <img className="images" src={lin}></img>
              <img className="images" src={lc}></img>

          </div>

        </div>

          <p className="heading">SKILLS & TECHNOLOGIES</p>
          <p className="content">FCC certification in Responsive Web, Javascript DSA and Front-End Libraries including ReactJs</p>
          <p className="content">Currently working with React-Native and Firebase</p>

          <p className="heading">Hackathons</p>
          <ul>
          <li><p className="content">Won First at college level hackathon(spree of Coding at I2IT Dhruva)</p></li>
          <li><p className="content">Participated in Leetcode's weekly contests</p></li>
          <li><p className="content">Participated in Global HackWeek(dec 2022)</p></li>
          <li><p className="content">Participated in FinHack 2022</p></li>
          </ul>

          <p className="heading">Languages</p>
          <div className="langcontainer">
            <div className="lang">
            <p className="content">C++</p>
            <p className="content">Javascript</p>
            <p className="content">ReactJs</p>
            <p className="content">Python</p>
            <p className="content">Java</p>
            <p className="content">C</p>

            </div>
            <div className="rate">
            <p className="content">⭐⭐⭐⭐</p>
            <p className="content">⭐⭐⭐⭐</p>
            <p className="content">⭐⭐⭐</p>
            <p className="content">⭐⭐</p>
            <p className="content">⭐⭐</p>
            <p className="content">⭐</p>

            </div>
          </div>

          <p className="heading">Others</p>
          <p className="content">-A Member of NSS and Attended winter Camp</p>
          <p className="content">-Constant Audience of Pune Tech Community Meetups</p>
          <p className="content">-Love to Trek and Eat</p>

      </div>
    </div>
  );
}

export default App;
