
module.exports = function numberToEnglish(n) {

    units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (n === 0) return 'zero';
    if (n < 20) return units[n];

    if (n < 100)
        return (
            tens[parseInt(n / 10)] +
            (n % 10 !== 0 ? ' ' : '') +
            units[n % 10]
        );

    let nString = n.toString();

    if (nString[1] === '0' && nString[2] === '0')
        return units[nString[0]] + ' hundred';
    else
        return (
            units[nString[0]] +
            ' hundred ' +
            numberToEnglish(parseInt(nString[1] + nString[2]))
        );

}
