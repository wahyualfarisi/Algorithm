function logestWord(sen){

    var arr = sen.match(/[a-z0-9]+/gi) //menghilangkan karakter aneh , dan menjadikan array
    
    var sorted = arr.sort( (a, b) => a.length - b.length )

    return sorted[0]

}

var str1 = logestWord('the $$$longest# word is coderbyte s!!!!!')
console.log(str1)