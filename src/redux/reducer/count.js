// const initState={key:'',name:'',count:0,price:0,selected:true}
const carList=[]
export default function countReducer(pre={carList:carList},action){
  // console.log(pre,action);
  const {type,data={key:0},selected:isSelect} = action
  const {key,name,price,selected}=data
  switch (type){
    case 'ADDSHOPCAR':
      if(pre.carList.find(item => item.key===key)===undefined){
        pre.carList.push({key,name,count:1,price,selected})
      }else{
        pre.carList.find(item => item.key===key).count++
      }
      return {carList:pre.carList}

    case 'ADDCOUNT':
      let addCount = pre.carList.map(item=>{
        if(item.key===key){
          ++item.count
        }
        return item
      })
      return {carList:addCount}

    case 'ODDCOUNT':
      let oddCount = pre.carList.map(item=>{
        if(item.key===key){
          item.count=item.count>1?item.count-1:1
        }
        return item
      })
      return {carList:oddCount}

    case 'DELETE':
      let deletedShopCar=pre.carList.filter(item => item.key!==key)
      return {carList:deletedShopCar}

    case 'SELECTED':
      // pre.carList.find(item => item.key=key).selected=isSelect
      // return {carList:pre.carList}
    default:
      return pre
  }
}