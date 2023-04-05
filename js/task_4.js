const capitalize = (string) => {
  let newString = string.toLowerCase().split("");
  return newString[0].toUpperCase() + newString.slice(1).join("");
};

module.exports = capitalize;
