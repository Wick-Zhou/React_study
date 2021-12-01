const initState=0
export default function countReducer(pre,action){
  if(pre===undefined) pre=initState
  // console.log(pre,action);
  const {type,data}=action
  switch (type){
    case 'jia':
      return pre+data
    case 'jian':
      return pre-data
    default:
      return pre
  }
}