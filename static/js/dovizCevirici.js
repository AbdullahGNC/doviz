let json;
let Selector1;
let Selector2;

function makeConvert() {
  const httpRequest = new XMLHttpRequest();
  httpRequest.onload = function () {
    if (httpRequest.status === 200) {
      json = JSON.parse(httpRequest.responseText);
    } else {
      alert("There is an error");
    }
    let amount = document.querySelector("input").value;
    if (amount > 0) {
      let selector1 = document.querySelector(".money1").value;
      let selector2 = document.querySelector(".money2").value;
      for (v in json.rates) {
        if (selector1 === v) {
          Selector1 = json.rates[v];
          break;
        } else {
          Selector1 = 1;
        }
      }
      for (v in json.rates) {
        if (selector2 === v) {
          Selector2 = json.rates[v];
          break;
        } else {
          Selector2 = 1;
        }
      }
      let selector = Selector2 / Selector1;
      let result = amount * selector;

      document.getElementById("sonuc").value =
        result.toFixed(2) + " " + selector2;
    }
  };
  httpRequest.open(
    "GET",
    "http://api.exchangeratesapi.io/v1/latest?access_key=5e4c405f557feeffbbe7a6b6adbfcd92&format=1"
  );
  httpRequest.send();
}
