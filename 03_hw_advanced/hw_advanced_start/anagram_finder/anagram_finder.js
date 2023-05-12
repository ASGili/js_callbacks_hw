const AnagramFinder = function (word) {
this.word = word.toLowerCase().split('')
};

AnagramFinder.prototype.findAnagrams = function (otherWords) {
    const result = otherWords.filter((wordInArray)=>wordInArray.split('').every((letterInArray)=>this.word.includes(letterInArray)))
    
    console.log(result)
    let length1 = (result)[0].length
    let length2 = this.word.length
    console.log(length1)
    console.log(length2)

    if (length1 === length2) {return result};
}
module.exports = AnagramFinder;
