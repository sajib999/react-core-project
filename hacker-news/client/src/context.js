import React, { useContext, useEffect, useReducer } from "react";
import {
  HANDLE_PAGE,
  HANDLE_SEARCH, REMOVE_STORY, SET_LOADING,
  SET_STORIES
} from "./actions";
import reducer from "./reducer";

const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?";


const AppContext = React.createContext()

const initialState = {
  isLoading: true, 
  hits:[],
  page:0,
  nbPages: 0 ,
  query:'react'
}

export const AppProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchStories = async(url) => {
    dispatch({type:SET_LOADING})

    try {
      const response = await fetch(url)
      const data = await response.json()

      dispatch({type:SET_STORIES, payload:{hits:data.hits, nbPages:data.nbPages}})

    }
    catch(error){
      console.log(error.message)
    }
  }

  useEffect(() => {
    fetchStories(`${API_ENDPOINT}page=${state.page}&query=${state.query}`)
  },[state.page, state.query])

  const removeStory = (id) => {
    dispatch({type:REMOVE_STORY, payload:id})
  }

  const handleSearch = (query) => {
    dispatch({type:HANDLE_SEARCH, payload: query})
  }

  const handlePage = (value) => {
    dispatch({type:HANDLE_PAGE, payload:value})
  }

  return (
    <AppContext.Provider value={{...state, removeStory, handleSearch, handlePage}}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}