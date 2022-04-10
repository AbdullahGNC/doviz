window.onload = function () {
  console.log("slm");
  dovizTablo();
};

function dovizTablo() {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        mode:'no-cors',
        headers:{
            "accept": "application/json",
            "Access-Control-Allow-Origin":"*"
        }
      };
      
      fetch("https://api.genelpara.com/embed/para-birimleri.json", requestOptions)
        .then(response => response)
        .then(result => console.log(result.json()))
        .catch(error => console.log('error', error));
  var doviz_tablo = document.getElementById("doviz");
  var row = doviz_tablo.insertRow();
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(1);
  cell1.innerHTML = "selam ";
  cell2.innerHTML = "canom";
  cell3.innerHTML = "mehab";
}
