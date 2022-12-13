import './App.css';
const clip1 = require('./assets/videos/clip1.mp4');
const phrase1 = require('./assets/audios/phrase1.mp4');

function App() {
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
        <p className="flow-text">My bad!</p>
      </div>
    </center>
  );
}

export default App;
