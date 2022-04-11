const api = "http://api.exchangeratesapi.io/v1/latest?access_key=5e4c405f557feeffbbe7a6b6adbfcd92"

function dovizKuru(api) {
  fetch(api)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    const TRY = data.rates.TRY;
    const USD = TRY / data.rates.USD;
    const EUR = TRY / data.rates.EUR;
    const GBP = TRY / data.rates.GBP; 
    const CHF = TRY / data.rates.CHF;
    const CAD = TRY / data.rates.CAD;

    dovizEkle(USD, EUR, GBP, CHF)

  })
  .catch((err) => console.warn(err));
  
}

function dovizEkle(USD,EUR,GBP,CHF){
  const dollar = document.getElementById('dovSatisUsd');
  dollar.textContent = USD.toString().slice(0, 5);

  const euro = document.getElementById('dovSatisEur');
  euro.textContent = EUR.toString().slice(0, 5);

  const sterlin = document.getElementById('dovSatisGbp');
  sterlin.textContent = GBP.toString().slice(0, 5);

  const isvicrefrank = document.getElementById('dovSatisChf');
  isvicrefrank.textContent = CHF.toString().slice(0, 5);

  const candollar = document.getElementById('dovSatisChf');
  candollar.textContent = CAD.toString().slice(0, 5);

}

dovizKuru(api);
