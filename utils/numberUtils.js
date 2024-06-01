// utils/numberUtils.js
export function convertIntToStr(x) {
    const numAsString = x.toString();
    const digits = [];

    for (let i = 0; i < numAsString.length; i++) {
        const digit = parseInt(numAsString.charAt(i), 10);
        digits.push(digit);
    }

    return digits;
}
