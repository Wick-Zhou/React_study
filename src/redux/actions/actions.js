import {
  ADDSHOPCAR,
  ADDCOUNT,
  ODDCOUNT,
  DELETE,
  SELECTED,
  ALLSELECTED,
  LOGIN,
  ISLOADING,
  LOGOUT
} from '../actionType'


export const addShopCarAction = (data) => { return { type: ADDSHOPCAR, data } }
export const addCountAction = (data) => { return { type: ADDCOUNT, data } }
export const oddCountAction = (data) => { return { type: ODDCOUNT, data } }
export const deleteFromShopCarAction = (data) => { return { type: DELETE, data } }
export const changeSelectedAction = (data, selected) => { return { type: SELECTED, data, selected } }
export const changeAllSelectedAction = (selected) => { return { type: ALLSELECTED, selected } }
export const loginAction = (username) => { return { type: LOGIN, username } }
export const isloadingAction = (data) => { return { type: ISLOADING, data } }
export const logoutAction = () => { return { type: LOGOUT } }