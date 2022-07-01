/* eslint-disable no-unused-vars */

import axios from 'axios';
import React, { useContext, useState } from "react";

const table = {
  sports: 21,
  history: 23,
  politics: 24,
};

const API_ENDPOINT = "https://opentdb.com/api.php?";

const url = "";
const tempUrl =
  "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple";


  const AppContext = React.createContext()


  export const AppProvider = ({children}) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [waiting, setWaiting] = useState(true)
    const [questions, setQuestions] = useState([])
    const [index, setIndex] = useState(0)
    const [correct, setCorrect] = useState(0)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [quiz, setQuiz] = useState({amount: 10, difficulty: 'easy', category:'sports'})


    const fetchQuestion = async(url) => {
      setLoading(true)
    setWaiting(false)

      try {
        const response = await axios.get(url)
        if(response){
          const data = response.data.results
          if(data.length > 1){
            setQuestions(data)
            setWaiting(false)
            setLoading(false)
            setError(false)
          }
          else {
            setWaiting(true)
            setError(true)
          }
        }
        else {
          setWaiting(true)
        }

      }
      catch(error){
        console.log(error.message)
      }
    } 

    const nextQuestion = () => {
      setIndex((oldIndex) => {
        const index = oldIndex + 1 
        if(index > questions.length - 1){
          openModal()
          return 0
        }
        else {
          return index 
        }
      })
    }

    const checkAnswer = (value) => {
      if(value){
        setCorrect((oldCorrect) => oldCorrect + 1)
      }
      nextQuestion()
    }

    const openModal = () => {
      setIsModalOpen(true)
    }
    const closeModal = () => {
      setIsModalOpen(false)
      setWaiting(true)
      setCorrect(0)
    }

    const handleChange = (e) => {
      const name = e.target.name 
      const value = e.target.value 

      setQuiz({...quiz, [name]:value})
    }

    const handleSubmit = (e) => {
      e.preventDefault()

      const {amount, difficulty, category} = quiz 

      const url = `${API_ENDPOINT}amount=${amount}&difficulty=${difficulty}&category=${table[category]}&type=multiple`

      fetchQuestion(url)
    }

    return (
      <AppContext.Provider value={{handleSubmit, handleChange, checkAnswer, openModal, closeModal, nextQuestion, loading, error, index, correct, questions, isModalOpen, quiz, waiting}}>
        {children}
      </AppContext.Provider>
    )
  }

  export const useGlobalContext = () => {
    return useContext(AppContext)
  }





