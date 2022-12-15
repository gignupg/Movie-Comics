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
      <div className="row">
        <h3>Introduction</h3>
      </div>
      <div className="row">
        <p className="flow-text col s8 offset-s2">
          Hancock is a superhero that people hate because he's very careless, damaging buildings and streets.
          He's visiting his human friend Ray and his wife Mary but his landing is very wreckless, damaging the street.
          The kids who are playing in the street don't like Hancock. Particularly a French kid named Michel.
        </p>
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
                <div className="collapsible-body">
                  {elem.text.subtitles.map((subtitle: string) => (
                    <p className='flow-text'>{subtitle}</p>
                  ))
                  }
                </div>
              </li>
              <li>
                <div className="collapsible-header"><i className="material-icons">g_translate</i>Translation</div>
                <div className="collapsible-body">
                  {elem.text.translation.map((translation: string) => (
                    <p className='flow-text'>{translation}</p>
                  ))
                  }
                </div>
              </li>
              {elem.text.vocabulary.length > 0 &&
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
                        {elem.text.vocabulary.map(([phrase, definition]: [string, string]) => (
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
