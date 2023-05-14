const AnagramFinder = function (word) {
this.word = word.toLowerCase().split('')
};

AnagramFinder.prototype.findAnagrams = function (otherWords) {
    const result = otherWords.filter((wordInArray)=>wordInArray.toLowerCase().split('').every((letterInArray)=>this.word.includes(letterInArray)))
    
    if (result.length == 0) {
       result.push("a")} //using a one letter string as one letter can never be an anagram of anything else.

    let length1 = result[0].length
    let length2 = this.word.length
    // console.log(length1)
    // console.log(length2)

    if (length1 === length2) {return result}
    else {return []};

    console.log(result)
    return result;

}

module.exports = AnagramFinder;
