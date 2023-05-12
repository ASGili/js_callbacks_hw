const UpperCaser = function (words) {
    this.words = words
}

UpperCaser.prototype.toUpperCase = function () {
    const uppered = this.words.map((element) => element.toUpperCase()
    )
    return uppered
}

module.exports = UpperCaser;
