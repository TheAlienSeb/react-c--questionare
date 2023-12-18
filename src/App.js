import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';


import home from './components/home';
import Quizinsrtuctions from './components/quiz/Quizinstructions';
import play from './components/quiz/play'

function App() {
  return (
    <Router>
      <Route path="/" exact component>{home}</Route>
      <Route path="/play/instructions" exact component={Quizinsrtuctions} />
      <Route path="/play/quiz" exact component={Quizinsrtuctions} />
    </Router>
  );
}

export default App;
