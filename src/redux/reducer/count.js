const initState={key:'',name:'',count:0,price:0}
const carList=[]
export default function countReducer(pre=initState,action){
  // console.log(pre,action);
  const {type,data={key:0}} = action
  const {key,name,price}=data
  switch (type){
    case 'ADDSHOPCAR':
      if(carList.find(item => item.key===key)===undefined){
        carList.push({key,name,count:1,price})
      }else{
        carList.find(item => item.key===key).count++
      }
      return {carList}

    case 'ADDCOUNT':
      pre.carList.map(item=>{
        if(item.key===key){
          ++item.count
        }
        return item
      })
      return {carList}

    case 'ODDCOUNT':
      pre.carList.map(item=>{
        if(item.key===key){
          item.count=item.count>1?item.count-1:1
        }
        return item
      })
      return {carList}

    default:
      return pre
  }
}