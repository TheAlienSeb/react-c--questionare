import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/home';
import QuizInstructions from './components/quiz/Quizinstructions';
import Play from './components/quiz/play';
import QuizSummary from './components/quiz/QuizSummary';

const navigateTo = (path) => {
  console.log('Navigating to: ${path}'); 
  window.location.href = path; 
}

function App() {
  return (
    <Router basename="/github.io/react-c--questionare">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play/instructions" element={<QuizInstructions />} />
        <Route path="/play/quiz" element={<Play />} />
        <Route path="/play/quizSummary" element={<QuizSummary />} />
      </Routes>
    </Router>
  );
}

export default App;
