/**
 * //////////SPECIAL NUMBER OF 6174/////
 * 
 * 
 * step 1 : Any 4 Digit number ex: 2017
 * step 2 : Arrange the 4 digits in DESC and ASC order . ex: 7210 - 0127
 * step 3 : Subtract smaller number to bigger number 
 * step 4 : Repeat to step 2
 */

 /**
  * example 1 (2017)
  * 7210 - 0127 = 7083
  * 8730 - 0378 = 8352
  * 8532 - 2358 = 6174 
  */

  /**
   * example 2 (2018)
   * 8210 - 0128 = 8082
   * 8820 - 0288 = 8532
   * 8532 - 2358 = 6174
   */

   function kaprekaConstant(num)
   {
        const KAP = 6174;
        var count = 0;
        while(true){
            var num = evaluator(num);
            if(num === true){
                return count
            }
        }

        function evaluator(num)
        {
            count++
            console.log('count ', count);

            var minNumArr = num.toString().split('').sort()
            
            var maxNumArr = minNumArr.slice(0).reverse()

            var littleNum = parseInt(minNumArr.join(''), 10)
            var bigNum    = parseInt(maxNumArr.join(''), 10)
            console.log('big num', bigNum)

            while(bigNum < 1000){
                bigNum *= 10
            }

            return bigNum - littleNum === KAP ? true : bigNum - littleNum

        }
   }

   console.log(kaprekaConstant('2017'))