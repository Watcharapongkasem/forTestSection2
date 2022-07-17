import fetch from "./node_modules/node-fetch/src/index.js";

const getResult = (FundName) => {
  fetch("https://codequiz.azurewebsites.net/", {
    headers: {
      cookie: "hasCookie=true",
    },
  })
    .then(async (res) => await res.text())
    .then((res) => {      
      let pattern = `<td>\s*${FundName}\s*<\/td><td>([0-9]*.[0-9]*)<\/td>`
      let regExg = new RegExp(pattern,"g");
      let result = regExg.exec(res)
      console.log(result[1]);
    });
};

process.argv.forEach(function (val, index, array) {
  if(index==2){
    getResult(val)
  }
});