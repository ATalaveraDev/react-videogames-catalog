import React, { Component } from 'react';
import './App.css';

import Videogame from '../components/Videogame/Videogame';

class App extends Component {
  state = {
    videogames: [
      {
        id: 'a1',
        title: 'Castlevania',
        platform: 'Super Nes',
        status: 'Finished'
      },
      {
        id: 'a2',
        title: 'Octopath Traveller',
        platform: 'Switch',
        status: 'Not Finished'
      }
    ]
  };

  render() {
    const videogames = this.state.videogames.map((videogame) => <Videogame key={videogame.id} />);

    return (
      <div className="App">
        <header>
          <h1>My Videogames</h1>
        </header>
        <section>
          {videogames}
        </section>
      </div>
    );
  }
}

export default App;
