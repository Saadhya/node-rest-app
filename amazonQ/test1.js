function calculateDistancebetweentwopoints(start, end)
{
    var R = 6371; // km
    var dLat = toRad(end.lat - start.lat);
    var dLon = toRad(end.lon - start.lon);
    var lat1 = toRad(start.lat);
    var lat2 = toRad(end.lat);

    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d;
}

// match the user input to A U.S phone number format
function matchUserInputPhone(input) {
    const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return regex.test(input);
}

// match the user input to U.S. zip code format
function matchUserInput(input) {
    const regex = /^[0-9]{5}(?:-[0-9]{4})?$/;
    return regex.test(input);
}

// js function to check if a string is palidrome, ignoring spaces, punctuation and case
function isPalindrome(str) {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}

module.exports = {
    calculateDistancebetweentwopoints,
    matchUserInput,
    matchUserInputPhone
};






