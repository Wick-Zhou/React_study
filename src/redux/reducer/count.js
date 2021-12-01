const initState={count:0}
export default function countReducer(pre=initState,action){
  const {type,data}=action
  switch (type){
    case 'ADD':
      return {count : pre.count+data}
    case 'ODD':
      return {count : pre.count-data}
    default:
      return pre
  }
}