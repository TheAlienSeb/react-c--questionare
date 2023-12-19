import React, { Fragment, Component } from "react";
import { Helmet } from "react-helmet";
import M from 'materialize-css';


import questions from '../../questions.json';
import isEmpty from "../../utils/is-empty";

class Play extends Component {
    constructor(props) {
      super(props);
      this.state = {
        questions,
        currentQuestion: {},
        nextQuestion: {},
        previousQuestion: {},
        answer: '',
        numberOfQuestions: 0,
        numberOfAnsweredQuestions: 0,
        currentQuestionIndex: 0,
        score: 0,
        correctAnswers: 0,
        wrongAnswers: 0,
        hints: 5,
        time: {}
      };
    }
  
    componentDidMount() {
      const { questions, currentQuestion, nextQuestion, previousQuestion } = this.state;
      this.displayQuestions(questions, currentQuestion, nextQuestion, previousQuestion);
    }
  

    displayQuestions = (questions = this.state.questions,currentQuestion,nextQuestion,previousQuestion) => {
        let { currentQuestionIndex } = this.state;
        if (!isEmpty(this.state.questions)) {
            questions = this.state.questions;
            currentQuestion = questions[currentQuestionIndex];
            nextQuestion = questions[currentQuestionIndex + 1];
            previousQuestion = questions[currentQuestionIndex - 1];
            const answer = currentQuestion.answer;
            this.setState({
                currentQuestion,
                nextQuestion,
                previousQuestion,
                numberOfQuestions:questions.length,
                answer
            });
        }
    };

    handleOptionClick = (e) => {
        if (e.target.innerHTML.toLowerCase() === this.state.answer.toLowerCase()) {
            this.correctAnswer();
        } else {
            this.wrongAnswer();
        }
    }

    correctAnswer = () =>{
        M.toast({
            html: 'Correct Answer!',
            classes: 'toast-valid',
            displaylength: 1500
        });
        this.setState(prevState => ({
            score: prevState.score + 1,
            correctAnswers: prevState.correctAnswers + 1,
            currentQuestionIndex: prevState.currentQuestionIndex + 1,
            numberOfAnsweredQuestions: prevState.numberOfAnsweredQuestions + 1
        }), () => {
            this.displayQuestions(this.state.questions,this.state.currentQuestion,this.state.nextQuestion,this.state.previousQuestion);
        });
 }


 wrongAnswer = () =>{
    navigator.vibrate(1000)
    M.toast({
        html: 'Wrong Answer!',
        classes: 'toast-invalid',
        displaylength: 1500
    });
    this.setState(prevState => ({
        wrongAnswers: prevState.wrongAnswers + 1,
        currentQuestionIndex: prevState.currentQuestionIndex + 1,
        numberOfAnsweredQuestions: prevState.numberOfAnsweredQuestions + 1
    }), () => {
        this.displayQuestions(this.state.questions,this.state.currentQuestion,this.state.nextQuestion,this.state.previousQuestion);
    });
}

    render() {
        const { currentQuestion, currentQuestionIndex, numberOfQuestions } = this.state;

        return(
            <Fragment>
                    <Helmet>
                    <title>C++ Quiz</title>
                    </Helmet>
                    <div className="questions">
                        <div className="lifeline-container">
                            <p>
                                <span className="mdi mdi-lightbulb-on-outline mdi-24px lifeline-icon"></span>
                                <span className="lifeline">5</span>
                            
                            </p>
                        </div>
                        <div className="timer-container">
                            <p>
                                <span className="left" style={{float: 'left'}}>{currentQuestionIndex + 1} of {numberOfQuestions}</span>
                                <span className="right" style={{float: 'right'}}>2:15
                                    <span className="mdi mdi-clock-outline mdi-24px"></span>
                                </span>
                                
                            </p>
                        </div>
                        <h5>{currentQuestion.question}</h5>
                        <div className="options-container">
                            <p onClick={this.handleOptionClick} className="option">{currentQuestion.optionA}</p>
                            <p onClick={this.handleOptionClick} className="option">{currentQuestion.optionB}</p>
                        </div>
                        <div className="options-container">
                            <p onClick={this.handleOptionClick} className="option">{currentQuestion.optionC}</p>
                            <p onClick={this.handleOptionClick} className="option">{currentQuestion.optionD}</p>
                        </div>
                        <div className="button-container">
                            <button>Previous</button>
                            <button>Next</button>
                            <button>End Early</button>
                        </div>
                    </div>
            </Fragment>
        );
    }
}


export default Play;