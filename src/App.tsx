import { useEffect } from 'react';
import './App.css';
import M from "materialize-css";
import data from './data';

function App() {
  useEffect(() => {
    var elements = document.querySelectorAll('.collapsible');
    for (let i = 0; i < elements.length; i++) {
      const elem = elements[i];
      if (elem) M.Collapsible.init(elem, { accordion: false });
    }
  });

  return (
    <center>
      <div className="row">
        <h1>Hancock</h1>
      </div>
      <div className="row">
        <h2>Call Me A**hole One More Time</h2>
      </div>
      {data.map(elem => (
        <div className="row">
          {elem.video &&
            <video controls>
              <source src={elem.video} type="video/mp4" />
            </video>
          }
          {elem.audio &&
            <audio controls>
              <source src={elem.audio} type="audio/mpeg" />
            </audio>
          }
          {elem.text &&
            <ul className="collapsible col s10 offset-s1">
              <li>
                <div className="collapsible-header"><i className="material-icons">subtitles</i>Subtitles</div>
                <div className="collapsible-body"><span className='flow-text'>{elem.text.subtitle}</span></div>
              </li>
              {elem.text.vocabulary.length &&
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
                        {elem.text.vocabulary.map(([phrase, definition]) => (
                          <tr>
                            <td>{phrase}</td>
                            <td>{definition}</td>
                          </tr>
                        ))
                        }
                      </tbody>
                    </table>
                  </div>
                </li>
              }
            </ul>
          }
          {elem.image &&
            <img src={elem.image} alt=''></img>
          }
        </div>
      ))}
    </center >
  );
}

export default App;
