const sumNumber = (num) => {
  if (num > 10) {
    const newNum = num.toString().split("")
    let sum = 0
    for (let i = 0; i < newNum.length; i++) {
      sum += parseInt(newNum[i])
      console.log("sum",sum)

      if(sum > 10) {
        const newResult = sum.toString().split("")
        let result = 0
        for (let i = 0; i < newResult.length; i++) {
          result += parseInt(newResult[i])  
        }
        console.log("result",result)

      }
    }
  
  }
}
sumNumber()