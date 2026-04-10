import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// Import your game components here
import Home from './screens/Home';
import ImposterGame from './screens/ImposterGame';
import WordleGame from './screens/WordleGame';
import SpellingBeeGame from './screens/SpellingBeeGame';

const App = () => {
    const [currentScreen, setCurrentScreen] = useState('Home');

    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/imposter">Imposter Game</Link></li>
                        <li><Link to="/wordle">Wordle Game</Link></li>
                        <li><Link to="/spellingbee">Spelling Bee Game</Link></li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/imposter">
                        <ImposterGame />
                    </Route>
                    <Route path="/wordle">
                        <WordleGame />
                    </Route>
                    <Route path="/spellingbee">
                        <SpellingBeeGame />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;