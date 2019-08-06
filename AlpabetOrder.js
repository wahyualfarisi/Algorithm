/**
 * 
 * order alphabetical string
 * case "wahyu" => ahuwy
 */ 

 function orderAlphabetical(str)
 {
     var char = str.split('')
     var sorted = char.sort()

     return sorted.join('')
 }

 console.log(orderAlphabetical('hello guys'))