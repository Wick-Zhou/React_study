import { createSlice } from '@reduxjs/toolkit'

export const countSlice = createSlice({
  name: 'count',
  initialState: {
    carList: [],
  },
  reducers: {
    addShopCar(state, action) {
      console.log(state, action)
      // const newState = [...state]
      const {
        key, name, price, selected,
      } = action.payload
      if (state.carList.find((item) => item.key === key) === undefined) {
        state.carList.push({
          key, name, count: 1, price, selected,
        })
      } else {
        state.carList.find((item) => item.key === key).count += 1
      }
      return state
    },
    addCount(state, action) {
      const { payload: { key } } = action
      state.carList.map((item) => {
        if (item.key === key) {
          item.count += 1
        }
        return item
      })
      return state
    },
    oddCount(state, action) {
      const { payload: { key } } = action
      state.carList.map((item) => {
        if (item.key === key) {
          item.count = item.count > 1 ? item.count - 1 : 1
        }
        return item
      })
      return state
    },
    deleteGood(state, action) {
      const { data: { key } } = action
      const deletedShopCar = state.filter((item) => item.key !== key)
      return deletedShopCar
    },
    selected(state, action) {
      const { data: { key }, isSelect } = action
      const newState2 = [...state]
      newState2.find((item) => item.key === key).selected = isSelect
      return newState2
    },
    allSelected(state, action) {
      const { isSelect } = action
      const newState3 = state.map((item) => {
        item.selected = isSelect
        return item
      })
      return newState3
    },
  },
})

export const {
  addShopCar, addCount, oddCount, deleteGood, selected, allSelected,
} = countSlice.actions
export default countSlice.reducer
