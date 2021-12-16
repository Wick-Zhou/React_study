import { createSlice } from '@reduxjs/toolkit'

export const countSlice = createSlice({
  name: 'count',
  initialState: {
    carList: [],
  },
  reducers: {
    addShopCar(state, action) {
      const {
        data: {
          key, name, price, selected,
        },
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
      const { data: { key } } = action.payload
      state.carList.map((item) => {
        if (item.key === key) {
          item.count += 1
        }
        return item
      })
      return state
    },
    oddCount(state, action) {
      const { data: { key } } = action.payload
      state.carList.map((item) => {
        if (item.key === key) {
          item.count = item.count > 1 ? item.count - 1 : 1
        }
        return item
      })
      return state
    },
    deleteGood(state, action) {
      const { data: { key } } = action.payload
      state.carList = state.carList.filter((item) => item.key !== key)
      return state
    },
    selected(state, action) {
      const { data: { key }, isSelect } = action.payload
      state.carList.find((item) => item.key === key).selected = isSelect
      return state
    },
    allSelected(state, action) {
      const { isSelect } = action.payload
      state.carList.map((item) => {
        item.selected = isSelect
        return item
      })
      return state
    },
  },
})

export const {
  addShopCar, addCount, oddCount, deleteGood, selected, allSelected,
} = countSlice.actions
export default countSlice.reducer
