// const initState={key:'',name:'',count:'',price:'',selected:''}
const carList=[]
export default function countReducer(pre=carList,action){
  // console.log(pre,action);
  const {type,selected:isSelect,data={}} = action
  const {key,name,price,selected}=data
  switch (type){
    case 'ADDSHOPCAR':
      let newState=[...pre]
      if(newState.find(item => item.key===key)===undefined){
        newState.push({key,name,count:1,price,selected})
      }else{
        newState.find(item => item.key===key).count++
      }
      return newState

    case 'ADDCOUNT':
      let addCount = pre.map(item=>{
        if(item.key===key){
          ++item.count
        }
        return item
      })
      return addCount

    case 'ODDCOUNT':
      let oddCount = pre.map(item=>{
        if(item.key===key){
          item.count=item.count>1?item.count-1:1
        }
        return item
      })
      return oddCount

    case 'DELETE':
      let deletedShopCar=pre.filter(item => item.key!==key)
      return deletedShopCar

    case 'SELECTED':
      let newState2=[...pre]
      newState2.find(item => item.key === key).selected = isSelect
      return newState2
    
    case 'ALLSELECTED':
      let newState3 = pre.map(item => {
        item.selected = isSelect
        return item
      })
      return newState3
    
    default:
      return pre
  }
}