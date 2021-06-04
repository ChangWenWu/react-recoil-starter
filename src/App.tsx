import React from 'react';
import { hot } from 'react-hot-loader/root';
import { RecoilRoot } from 'recoil';
import Home from './pages/home';

function App() {
    return (
        <RecoilRoot>
            <Home />
        </RecoilRoot>
    );
}

export default hot(App);
