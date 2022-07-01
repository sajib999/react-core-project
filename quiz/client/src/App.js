import React from "react";
import { useGlobalContext } from "./context";
import Loading from "./Loading";
import Modal from "./Modal";
import "./sass/style.scss";
import Waiting from "./SetupForm";

const App = () => {
  const {loading, waiting, checkAnswer, index, correct, nextQuestion, questions} = useGlobalContext()

  if(loading){
    return <Loading/>
  }
  if(waiting){
    return <Waiting/>
  }

  const {question, correct_answer, incorrect_answers} = questions[index]

  const tempIndex = Math.floor(Math.random() * 4)
  const answers = [...incorrect_answers]

  if(tempIndex === 3){
    answers.push(correct_answer)
  }
  else {
    answers.push(answers[tempIndex])
    answers[tempIndex] = correct_answer
  }


  return (
    <main>
      <Modal/>
      <section className="quiz">
        <p className="correct-answers">
          Correct Answer: {correct} / {index}
        </p>
        <article className="container">
          <h2 dangerouslySetInnerHTML={{__html:question}}/>
          <div className="btn-container">
            {
              answers.map((answer, index) => (
                <button key={index} className='answer-btn' onClick={()=> checkAnswer(correct_answer === answer)} dangerouslySetInnerHTML={{__html:answer}}/>
              ))
            }
          </div>
        </article>
        <button className="next-question" onClick={nextQuestion}>Next Question</button>
      </section>
    </main>
  );
};

export default App;


