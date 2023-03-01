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
        <p className="subheading">Bhavan's Lloyds Vidya Niketan ,Wardha</p>
        <p className="content">I attended the same school for 12 years and completed my schooling with abhove 98% attendance rate each year. I also scored 88% in my SSC exam.</p>

        <p className="subheading">Dinanath Junior College , Nagpur</p>
        <p className="content">Scored 86% in my HSC exam and also attended IIT-HOME for JEE-main/advance(2020) preparation.</p>

        <p className="subheading">Dinanath Junior College , Nagpur</p>
        <p className="content">Scored 86% in my HSC exam and also attended IIT-HOME for JEE-main/advance(2020) preparation.</p>

      
      </div>
      <div className="rightcol">
          <p className="contact">8208938760</p>
          <p className="email">pratham111ingole@gmail.com</p>
          <p className="address">Hijewadi, Pune</p>
          <div className="links">
              <img className="images" src={git}></img>
              <img className="images" src={lin}></img>
              <img className="images" src={lc}></img>

          </div>
      </div>
    </div>
  );
}

export default App;
