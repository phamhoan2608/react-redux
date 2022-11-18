import { createSlice } from "@reduxjs/toolkit"

export const hackerNewSlice = createSlice({
  name: "hackerNew",
  initialState: {
    hits: [],
    loading: false,
    errorMessage: ""
  },
  reducers: {
    setHackerNew: (state, action) => ({
      ...state,
      hits: action.payload
    }),
    getHackerNew() {},
    setLoading: (state, action) => ({
      ...state,
      loading: action.payload
    }),
    setErrorMessage: (state, action) => ({
      ...state,
      errorMessage: action.payload
    })
  }
})

export const {setHackerNew,getHackerNew,setLoading, setErrorMessage} = hackerNewSlice.actions
export default hackerNewSlice.reducer

