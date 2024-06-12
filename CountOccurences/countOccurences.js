const countOccurence = (str, char) => {
    // let count = 0;
    // for (let i = 0; i < str.length; i++) {
    //     if (str[i] === char) {
    //         count++;
    //     }
    // }
    // return count;

    //use split method
    return str.split(char).length - 1;
}

export default countOccurence;