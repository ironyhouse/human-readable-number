module.exports = function toReadable (number) {
    let firstTen = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let secondTen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    
    function getNumber(num) {
        if (num == 0) return "zero";
        else return getHundred(num).trim();
    }
    function getTen(num) {
        if (num < 10) return firstTen[num];
        else if (num >= 10 && num < 20) return secondTen[num - 10];
        else {
            return tens[Math.floor(num / 10)] + " " + firstTen[num % 10];
        }
    }
    function getHundred(num) {
        if (num > 99) {
            return firstTen[Math.floor(num / 100)] + " hundred " + getTen(num % 100);
        } else {
            return getTen(num);
        }
    }

    return getNumber(number);
};
