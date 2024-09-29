import React from 'react';
import QuizForm from './components/QuizForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-3xl font-bold text-gray-800">Online Quiz App</h1>
        <QuizForm />
      </header>
    </div>
  );
}

export default App;
