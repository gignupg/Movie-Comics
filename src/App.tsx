import { useState, useEffect } from 'react';
import './App.css';
import M from "materialize-css";
import media from './media';
import content from './content';
import googleForm from './googleForm';

type Region = 'en' | 'es' | 'de';

const language = window.navigator.language.replace(/-.*/, '');
const defLang = language === 'es' || language === 'de' ? language : 'en';

function App() {
  const [region, setRegion] = useState<Region>(defLang);

  const updateRegion = (elem: Element) => {
    setRegion(elem.id as Region);
  };

  useEffect(() => {
    const elements = document.querySelectorAll('.collapsible');
    for (let i = 0; i < elements.length; i++) {
      const elem = elements[i];
      if (elem) M.Collapsible.init(elem, { accordion: false });
    }
    const elem = document.querySelector('.tabs');
    if (elem) {
      const instance = M.Tabs.init(elem, { onShow: updateRegion });
      instance.select(defLang);
    }
  }, []);

  return (
    <center>
      <div className="col s12">
        <ul className="tabs">
          <li className="tab col s3"><a href="#en">English</a></li>
          <li className="tab col s3"><a href="#es">Español</a></li>
          <li className="tab col s3"><a href="#de">Deutsch</a></li>
        </ul>
      </div>
      <div id="en" className="col s12"></div>
      <div id="es" className="col s12"></div>
      <div id="de" className="col s12"></div>
      <div className="row">
        <h1>{content.title[region]}</h1>
      </div>
      <div className="row">
        <p className="flow-text col s8 offset-s2">{content.usageInstructions[region]}</p>
      </div>
      <div className="row">
        <h3>{content.context[region]}</h3>
      </div>
      <div className="row">
        <p className="flow-text col s8 offset-s2">{content.introductoryText[region]}</p>
      </div>
      {media.map((elem) => (
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
            <div className="col s12 m10 offset-m1" >
              <div className='row'>
                <h4 className="header">{content.audio[region]}</h4>
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
                <div className="collapsible-header"><i className="material-icons">subtitles</i>{content.subtitles[region]}</div>
                <div className="collapsible-body">
                  {elem.text.subtitles.en.map((subtitle: string) => (
                    <p className='flow-text'>{subtitle}</p>
                  ))
                  }
                </div>
              </li>
              {region !== 'en' &&
                <li>
                  <div className="collapsible-header"><i className="material-icons">g_translate</i>{content.translation[region]}</div>
                  <div className="collapsible-body">
                    {elem.text.translation[region].map((translation: string) => (
                      <p className='flow-text'>{translation}</p>
                    ))
                    }
                  </div>
                </li>
              }

              {elem.text.vocabulary.length > 0 &&
                <li>
                  <div className="collapsible-header"><i className="material-icons">school</i>{content.vocabulary[region]}</div>
                  <div className="collapsible-body left-align">
                    <table className='striped'>
                      <thead>
                        <tr>
                          <th>Phrase</th>
                          <th>Definition</th>
                        </tr>
                      </thead>
                      <tbody>
                        {elem.text.vocabulary.map(([phrase, definition]: string[]) => (
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
      <div className='row'>
        <iframe
          src={googleForm[region]}
          width='100%'
          height='1600'
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="Google Forms"
        >
          Loading…
        </iframe>
      </div>
    </center >
  );
}

export default App;