import React from 'react';
import './App.css';
import {Layout} from "./features/layout/Layout";
import {CharacterList} from "./features/characterList/CharacterList";

function App() {
    return (
        <div className="App">
            <Layout>
                <CharacterList/>
            </Layout>
        </div>
    );
}

export default App;
