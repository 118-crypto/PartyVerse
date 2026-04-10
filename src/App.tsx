import React, { useState } from 'react';
import Home from './screens/Home';
import ImposterGame from './games/imposter/ImposterGame';
import WordleGame from './games/wordle/WordleGame';
import SpellingBeeGame from './games/spellingbee/SpellingBeeGame';
import MyPacks from './screens/MyPacks';

type Screen = 'home' | 'imposter' | 'wordle' | 'spellingbee' | 'mypacks';

const App: React.FC = () => {
    const [currentScreen, setCurrentScreen] = useState<Screen>('home');
    return (
        <div className="app-container">
            {currentScreen === 'home' && <Home onSelectGame={setCurrentScreen} />}
            {currentScreen === 'imposter' && <ImposterGame onBack={() => setCurrentScreen('home')} />}
            {currentScreen === 'wordle' && <WordleGame onBack={() => setCurrentScreen('home')} />}
            {currentScreen === 'spellingbee' && <SpellingBeeGame onBack={() => setCurrentScreen('home')} />}
            {currentScreen === 'mypacks' && <MyPacks onBack={() => setCurrentScreen('home')} />}
        </div>
    );
};

export default App;