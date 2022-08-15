function checkCashRegister(price, cash, cid) {

  const unitChange = {
    PENNY: 0.01, 
    NICKEL:0.05, 
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1.0,
    FIVE: 5.0,
    TEN: 10.0,
    TWENTY: 20.0,
    "ONE HUNDRED": 100.0
  }
  
  let totalCid = 0
  for(let money of cid){
    totalCid += money[1]
  }

  totalCid = totalCid.toFixed(2)
  let changeGive = cash - price
  const changeArray = []

  if(changeGive > totalCid){
    return{status:"INSUFFICIENT_FUNDS", change: []}
    } else if(changeGive.toFixed(2) === totalCid){
        return{
          status:"CLOSED",
          change: cid
        }
      }else{
        cid = cid.reverse()
        for(let money of cid){
          const[unit,value] = money;
          const add = [unit, 0]

          while(changeGive >= unitChange[unit] && value>0){
            add[1] += unitChange[unit]
            value -= unitChange[unit]
            changeGive -= unitChange[unit]
            changeGive = changeGive.toFixed(2)
          }
          if(add[1]>0){
            changeArray.push(add)
          }
        }
      }
      if(changeGive >0){
        return{
          status: "INSUFFICIENT_FUNDS", change: []}
        }
        return{
          status: "OPEN",
          change: changeArray
        }
      }
    

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], 
["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
