import React, { Component, Fragment, useEffect, useState } from 'react'; 
import { Helmet } from "react-helmet"; 
import { useLocation, Link } from 'react-router-dom';

class QuizSummary extends Component {
    constructor (props) {
        super(props); 
        this.state = {
            score: 0, 
            numberOfQuestions: 0, 
            numberOfAnsweredQuestions: 0, 
            correctAnswers: 0, 
            wrongAnswers: 0, 
            hintsUsed: 0, 
            fiftyFiftyUsed: 0
        }; 
    }

    componentDidMount() {
        const { quizSummaryData } = this.props; 
        if (quizSummaryData && quizSummaryData.numberOfQuestions != 0) {
            this.setState({
                score: (quizSummaryData.score / quizSummaryData.numberOfQuestions) * 100, 
                numberOfQuestions: quizSummaryData.numberOfQuestions, 
                numberOfAnsweredQuestions: quizSummaryData.correctAnswers + quizSummaryData.wrongAnswers, 
                correctAnswers: quizSummaryData.correctAnswers, 
                wrongAnswers: quizSummaryData.wrongAnswer, 
                hintsUsed: quizSummaryData.hintsUsed, 
                fiftyFiftyUsed: quizSummaryData.fiftyFiftyUsed
            });
        }
    }

    render () {
        console.log('quizSummaryData in QuizSummary:', this.props.quizSummaryData); 

        const quizSummaryData = this.props.quizSummaryData;  
        let stats, remark;
        if (quizSummaryData != undefined) {
            const score = quizSummaryData.score;
            if (score <= 30) {
                remark = "Try harder.."; 
            } 
            else if (score <= 50) {
                remark = "Getting there but still not good."; 
            }
            else if (score <= 70) {
                remark = "You're almost good."; 
            }
            else if (score >= 71 && score <= 84) {
                remark = "You did great!"; 
            }
            else {
                remark = "You're amazing!!"; 
            }
            stats = (
                <Fragment>
                    <div>
                        <span className="mdi mdi-check-circle-outline success-icon"></span>
                    </div>
                    <h1>Quiz has ended</h1>
                    <div className="container">
                        <h4>{remark}</h4>
                        <h2>Your Score: {quizSummaryData.score.toFixed(0)}&#37;</h2>
                        <span className="stat left">Total number of questions: </span>
                        <span className="stat right">{quizSummaryData.numberOfQuestions}</span><br />

                        <span className="stat left">Number of attempted questions: </span>
                        <span className="stat right">{quizSummaryData.numberOfAnsweredQuestions}</span><br />

                        <span className="stat left">Number of correct answers: </span>
                        <span className="stat right">{quizSummaryData.correctAnswers}</span><br />

                        <span className="stat left">Number of wrong answers: </span>
                        <span className="stat right">{quizSummaryData.wrongAnswers}</span><br />

                        <span className="stat left">Hints used: </span>
                        <span className="stat right">{quizSummaryData.hintsUsed}</span><br />

                        <span className="stat left">50/50 used: </span>
                        <span className="stat right">{quizSummaryData.fiftyFiftyUsed}</span>   
                    </div>
                    <section>
                        <ul>
                            <li>
                                <Link to ="/">Back to Home</Link>
                            </li>
                            <li>
                                <Link to ="/play/quiz">Play Again</Link>
                            </li>
                        </ul>
                    </section>
                </Fragment>
            )
        }
        else {
            stats = (
                <section>
                    <h1 className="no-stats">No Statistics Available</h1>
                    <ul>
                        <li>
                            <Link to ="/">Back to Home</Link>
                        </li>
                        <li>
                            <Link to ="/play/quiz">Take a Quiz</Link>
                        </li>
                    </ul>
            </section>
            );
        }
        return (
            <Fragment>
                <Helmet><title>Quiz App - Summary</title></Helmet>
                {stats}
            </Fragment>
        )
    }
}; 

const QuizSummaryWrapper = () => {
    const location = useLocation();
    const [quizSummaryData, setQuizSummaryData] = useState({
        score: 0,
        numberOfQuestions: 0,
        numberOfAnsweredQuestions: 0,
        correctAnswers: 0,
        wrongAnswer: 0,
        hintsUsed: 0,
        fiftyFiftyUsed: 0
    });

    useEffect(() => {
        const { state } = location;
        if (state && state.playerStats) {
            setQuizSummaryData(state.playerStats); 
        }
    }, [location]);

    return <QuizSummary quizSummaryData={quizSummaryData} />;
};

export default QuizSummaryWrapper; 