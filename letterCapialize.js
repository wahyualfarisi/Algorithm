/**
 * 
 * This challenge requires you to capitalize the first letter of each word. 
 * To do this, we'll create an array of words, then loop through each word and capitalize the first letter, 
 * and then combine these words back into one string. Below is some simple code to accomplish this:
 */

 function Lettercapitalize(str){

    var words = str.split(" ")

    for(var i = 0; i<words.length; i++){
       words[i] = words[i].substring(0,1).toUpperCase() + words[i].substring(1)
       
    }

    return words.join(" ")
 }

 const str1 = Lettercapitalize('wahyu alfarisi') // expected output : Wahyu Alfarisi

 console.log(str1)
