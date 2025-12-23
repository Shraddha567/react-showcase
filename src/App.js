import React from 'react';
import Header from './components/Header';
import Showcase from './components/Showcase';
import Footer from './components/Footer';
import './styles/main.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Showcase />
      </main>
      <Footer />
    </div>
  );
}

export default App;