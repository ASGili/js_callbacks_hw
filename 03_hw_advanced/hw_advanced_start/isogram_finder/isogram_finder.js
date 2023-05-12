const IsogramFinder = function (word) {
    this.word = word.toLowerCase().split('')
};

IsogramFinder.prototype.isIsogram = function () {
    const resultBoolean = this.word.every((letterInWord)=>
        {if ((this.word.filter((letter)=>letter === letterInWord).length-1)===0){
        return true
    };
});
    console.log(resultBoolean)
    return resultBoolean
};

module.exports = IsogramFinder;