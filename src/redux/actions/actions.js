export const addShopCarAction=(data) => {return {type: 'ADDSHOPCAR',data}}
export const addCountAction=(data) => {return {type: 'ADDCOUNT',data}}
export const oddCountAction=(data) => {return {type: 'ODDCOUNT',data}}
export const deleteFromShopCarAction=(data) => {return {type: 'DELETE',data}}
export const changeSelectedAction=(data,selected) => {return {type: 'SELECTED',data,selected}}
export const changeAllSelectedAction=(selected,data) => {return {type: 'ALLSELECTED',selected}}