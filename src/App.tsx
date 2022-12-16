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
            <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
              <iframe
                src={elem.video}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                title="video1.mp4"
              ></iframe>
            </div>
          }
          {elem.audio &&
            <div className="col s12 m10 offset-m1">
              <div className='row'>
                <h4 className="header">Audio Dialog</h4>
              </div>
              <div className="card horizontal">
                <div className="card-stacked">
                  <div className="card-content">
                    <div>
                      <iframe
                        width="100%"
                        height="20"
                        frameBorder="no"
                        title={elem.audio}
                        src={elem.audio}
                      ></iframe>
                      <div
                        style={{
                          fontSize: '10px',
                          color: '#cccccc',
                          lineBreak: 'anywhere',
                          wordBreak: 'normal',
                          overflow: 'hidden',
                          whiteSpace: 'nowrap',
                          textOverflow: 'ellipsis',
                          fontFamily: 'Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif',
                          fontWeight: 100
                        }}>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
          {elem.text &&
            <ul className="collapsible col s12 m10 offset-m1">
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
      ))
      }
    </center >
  );
}

export default App;