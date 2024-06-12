const titleCase = (str) => {
  let splitStr = str.toLowerCase().split(" ");
  console.log(splitStr);
  for (let i = 0; i < splitStr.length; i++) {
    splitStr[i] = splitStr[i][0].toUpperCase() + splitStr[i].slice(1);
  }
  return splitStr.join(" ");
};
console.log(titleCase("This is going to be fun"));
