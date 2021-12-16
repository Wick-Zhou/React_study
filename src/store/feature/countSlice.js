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
    },
    addCount(state, action) {
      const { data: { key } } = action.payload
      state.carList.map((item) => {
        if (item.key === key) {
          item.count += 1
        }
        return item
      })
    },
    oddCount(state, action) {
      const { data: { key } } = action.payload
      state.carList.map((item) => {
        if (item.key === key) {
          item.count = item.count > 1 ? item.count - 1 : 1
        }
        return item
      })
    },
    deleteGood(state, action) {
      const { data: { key } } = action.payload
      state.carList = state.carList.filter((item) => item.key !== key)
    },
    selected(state, action) {
      const { data: { key }, isSelect } = action.payload
      state.carList.find((item) => item.key === key).selected = isSelect
    },
    allSelected(state, action) {
      const { isSelect, changeRows } = action.payload
      changeRows.map((item) => {
        state.carList.map((item2) => {
          if (item.key === item2.key) {
            item2.selected = isSelect
          }
          return item2
        })
        return item
      })
    },
  },
})

export const {
  addShopCar, addCount, oddCount, deleteGood, selected, allSelected,
} = countSlice.actions
export default countSlice.reducer
