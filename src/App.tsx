import { useEffect } from 'react';
import './App.css';
import M from "materialize-css";
const clip1 = require('./assets/videos/clip1.mp4');
const phrase1 = require('./assets/audios/phrase1.mp4');
const scene2 = require('./assets/images/scene2.png');
const phrase2 = require('./assets/audios/phrase2.mp4');
const definitions = {
  myBad: "Used to acknowledge responsibility for a mistake. \"Sorry about the confusion. It's my bad!\"",
  asshole: "An unpleasant or stupid person. \"Some asshole had parked so I couldn't get out.\""
};

function App() {
  useEffect(() => {
    var elements = document.querySelectorAll('.collapsible');
    for (let i = 0; i < elements.length; i++) {
      const elem = elements[i];
      if (elem) M.Collapsible.init(elem, { accordion: false });
    }
  }, []);

  return (
    <center>
      <div className="row">
        <h1>Hancock</h1>
      </div>
      <div className="row">
        <h2>Call Me A**hole One More Time</h2>
      </div>
      <div className="row">
        <video controls>
          <source src={clip1} type="video/mp4" />
        </video>
      </div>
      <div className="row">
        <audio controls>
          <source src={phrase1} type="audio/mpeg" />
        </audio>
      </div>
      <div className="row">
        <ul className="collapsible col s10 offset-s1">
          <li>
            <div className="collapsible-header"><i className="material-icons">subtitles</i>Subtitles</div>
            <div className="collapsible-body"><span className='flow-text'>My bad! Everybody alright?</span></div>
          </li>
          <li>
            <div className="collapsible-header"><i className="material-icons">school</i>Vocabulary</div>
            <div className="collapsible-body left-align">
              <table className='striped'>
                <thead>
                  <tr>
                    <th>Phrase</th>
                    <th>Definition</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>My bad</td>
                    <td>{definitions.myBad}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </li>
        </ul>
      </div>
      <div className="row">
        <img src={scene2} alt=''></img>
      </div>
      <div className="row">
        <audio controls>
          <source src={phrase2} type="audio/mpeg" />
        </audio>
      </div>
      <div className="row">
        <ul className="collapsible col s10 offset-s1">
          <li>
            <div className="collapsible-header"><i className="material-icons">subtitles</i>Subtitles</div>
            <div className="collapsible-body"><span className='flow-text'>He's an asshole!</span></div>
          </li>
          <li>
            <div className="collapsible-header"><i className="material-icons">school</i>Vocabulary</div>
            <div className="collapsible-body left-align">
              <table className='striped'>
                <thead>
                  <tr>
                    <th>Phrase</th>
                    <th>Definition</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Asshole [Insult]</td>
                    <td>{definitions.asshole}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </li>
        </ul>
      </div>
    </center >
  );
}

export default App;
