function checkAnagrams(firstString, secondString) {
    if (firstString.length !== secondString.length) {
        return "NO";
    }

    const sortedFirst = firstString.split('').sort().join('');
    const sortedSecond = secondString.split('').sort().join('');

    return sortedFirst === sortedSecond ? "YES" : "NO";
}

const firstString = "listen";
const secondString = "silent";
console.log(checkAnagrams(firstString, secondString));
