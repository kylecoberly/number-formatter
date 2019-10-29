function originalFormatter(value){
    const stringifiedValue = value.toString();
    const separatedValue = [];
    let j = stringifiedValue.length;
    for (
        let i = stringifiedValue.length - 3;
        i > -stringifiedValue.length;
        i -= 3
    ) {
        separatedValue.unshift(stringifiedValue.substring(i, j));
        j -= 3;
    }
    return separatedValue.filter(word => word.length > 0).join(',');
}

function proceduralFormatter(number){
    const characters = number.toString().split("").reverse();

    let formattedArray = []
    for (let index = characters.length; index > 0; index--){
        formattedArray.push(characters[index - 1])
        if ((index - 1) % 3 === 0 && index !== 1){
            formattedArray.push(",")
        }
    }
    return formattedArray.join("")
}

const { flow, chunk, reverse, split, join, flatten, map } = require("lodash/fp")
function functionalFormatter(number){
    return flow([
        split(""),
        reverse,
        chunk(3),
        map(flow([reverse, join("")])),
        flatten,
        reverse,
        join(",")
    ])(number.toString())
}

function builtInFormatter(number){
    return number.toLocaleString()
}

module.exports = {
    originalFormatter,
    proceduralFormatter,
    functionalFormatter,
    builtInFormatter,
}
