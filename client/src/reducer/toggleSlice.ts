import { createSlice } from '@reduxjs/toolkit'
import { type PayloadAction } from '@reduxjs/toolkit'
import { type Projects } from '../utils/links'

type InitialStates = {
  menuBar: boolean
  projectNum: number
}

const initialState: InitialStates = {
  menuBar: false,
  projectNum: 0,
}

export const toggleSlice = createSlice({
  name: 'toggle',
  initialState,
  reducers: {
    openMenuBar: (state) => {
      state.menuBar = !state.menuBar
    },
    changeLeft: (state, actions: PayloadAction<Projects[]>) => {
      const length = actions.payload.length - 1
      console.log('left', 'length', length)
      console.log(state.projectNum)
      if (state.projectNum === 0) {
        state.projectNum = length
        console.log('-1')
        return
      }
      state.projectNum = state.projectNum - 1
      console.log('+1')
    },
    changeRight: (state, actions: PayloadAction<Projects[]>) => {
      const length = actions.payload.length - 1
      if (state.projectNum === length) {
        state.projectNum = 0
        return
      }
      state.projectNum = state.projectNum + 1
    },
  },
})

export const { openMenuBar, changeLeft, changeRight } = toggleSlice.actions
export default toggleSlice.reducer
