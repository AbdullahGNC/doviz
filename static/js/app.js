const api = "https://api.genelpara.com/embed/doviz.json";

function dovizKuru(api) {
  fetch(api)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      const USD = data.USD.satis;
      const EUR = data.EUR.satis;
      const GBP = data.GBP.satis;
      const CHF = data.CHF.satis;
      const CAD = data.CAD.satis;

      const usdDegisim = data.USD.degisim;
      const eurDegisim = data.EUR.degisim;
      const gbpDegisim = data.GBP.degisim;
      const chfDegisim = data.CHF.degisim;
      const cadDegisim = data.CAD.degisim;
      dovizDegisim(usdDegisim, eurDegisim, gbpDegisim, chfDegisim, cadDegisim);
      dovizEkle(USD, EUR, GBP, CHF, CAD);
    })
    .catch((err) => console.warn(err));
}

function dovizEkle(USD, EUR, GBP, CHF, CAD) {
  const dollar = document.getElementById("dovSatisUsd");
  dollar.textContent = USD.toString().slice(0, 5) + '₺';

  const euro = document.getElementById("dovSatisEur");
  euro.textContent = EUR.toString().slice(0, 5) + '₺';

  const sterlin = document.getElementById("dovSatisGbp");
  sterlin.textContent = GBP.toString().slice(0, 5) + '₺';

  const isvicrefrank = document.getElementById("dovSatisChf");
  isvicrefrank.textContent = CHF.toString().slice(0, 5) + '₺';

  const candollar = document.getElementById("dovSatisCad");
  candollar.textContent = CAD.toString().slice(0, 5) + '₺';
}

function dovizDegisim(
  usdDegisim,
  eurDegisim,
  gbpDegisim,
  chfDegisim,
  cadDegisim
) {
  if (usdDegisim[0] == "-") {
    const dolarDegisim = document.getElementById("dovDegisimUsd");
    dolarDegisim.textContent = "%" + usdDegisim;
    dolarDegisim.style.color = "red";
  } else {
    const dolarDegisim = document.getElementById("dovDegisimUsd");
    dolarDegisim.textContent = "%" + usdDegisim;
    dolarDegisim.style.color = "#37ad00";
  }

  if (eurDegisim[0] == "-") {
    const euroDegisim = document.getElementById("dovDegisimEur");
    euroDegisim.textContent = "%" + eurDegisim;
    euroDegisim.style.color = "red";
  } else {
    const euroDegisim = document.getElementById("dovDegisimEur");
    euroDegisim.textContent = "%" + eurDegisim;
    euroDegisim.style.color = "#37ad00";
  }

  if (gbpDegisim[0] == "-") {
    const sterlinDegisim = document.getElementById("dovDegisimGbp");
    sterlinDegisim.textContent = "%" + gbpDegisim;
    sterlinDegisim.style.color = "red";
  } else {
    const sterlinDegisim = document.getElementById("dovDegisimGbp");
    sterlinDegisim.textContent = "%" + gbpDegisim;
    sterlinDegisim.style.color = "#37ad00";
  }

  if (chfDegisim[0] == "-") {
    const frankDegisim = document.getElementById("dovDegisimChf");
    frankDegisim.textContent = "%" + chfDegisim;
    frankDegisim.style.color = "red";
  } else {
    const frankDegisim = document.getElementById("dovDegisimChf");
    frankDegisim.textContent = "%" + chfDegisim;
    frankDegisim.style.color = "#37ad00";
  }

  if (cadDegisim[0] == "-") {
    const kdolarDegisim = document.getElementById("dovDegisimCad");
    kdolarDegisim.textContent = "%" + cadDegisim;
    kdolarDegisim.style.color = "red";
  } else {
    const kdolarDegisim = document.getElementById("dovDegisimCad");
    kdolarDegisim.textContent = "%" + cadDegisim;
    kdolarDegisim.style.color = "#37ad00";
  }
}

dovizKuru(api);

const kriptoapi = "https://api.genelpara.com/embed/kripto.json";

function kriptoKuru(kriptoapi) {
  fetch(kriptoapi)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const BTC = data.BTC.satis
      const ETH = data.ETH.satis
      const USDT = data.USDT.satis
      const BNB = data.BNB.satis
      const USDC = data.USDC.satis

      const btcDegisim = data.BTC.degisim
      const ethDegisim = data.ETH.degisim
      const usdtDegisim = data.USDT.degisim
      const bnbDegisim = data.BNB.degisim
      const usdcDegisim = data.USDC.degisim

      kriptoDegisim(btcDegisim, ethDegisim, usdtDegisim, bnbDegisim, usdcDegisim);
      kriptoEkle(BTC, ETH, USDT, BNB, USDC)
    })
    .catch((err) => console.warn(err));
}

function kriptoEkle(BTC, ETH, USDT, BNB, USDC) {
  const bitcoin = document.getElementById("dovSatisBtc");
  bitcoin.textContent = '$' + BTC.toString().slice(0, 8);

  const ether = document.getElementById("dovSatisEth");
  ether.textContent = '$' + ETH.toString().slice(0, 8);

  const usdtether = document.getElementById("dovSatisUsdt");
  usdtether.textContent = '$' + USDT.toString().slice(0, 8);

  const binance = document.getElementById("dovSatisBnb");
  binance.textContent = '$' + BNB.toString().slice(0, 8);

  const usdcoin = document.getElementById("dovSatisUsdc");
  usdcoin.textContent = '$' + USDC.toString().slice(0, 8);
}

function kriptoDegisim(btcDegisim, ethDegisim, usdtDegisim, bnbDegisim, usdcDegisim) {
  if (btcDegisim[0] == "-") {
    const bitcoinDegisim = document.getElementById("dovDegisimBtc");
    bitcoinDegisim.textContent = "%" + btcDegisim;
    bitcoinDegisim.style.color = "red";
  } else {
    const bitcoinDegisim = document.getElementById("dovDegisimBtc");
    bitcoinDegisim.textContent = "%" + btcDegisim;
    bitcoinDegisim.style.color = "#37ad00";
  }

  if (ethDegisim[0] == "-") {
    const etherDegisim = document.getElementById("dovDegisimEth");
    etherDegisim.textContent = "%" + ethDegisim;
    etherDegisim.style.color = "red";
  } else {
    const etherDegisim = document.getElementById("dovDegisimEth");
    etherDegisim.textContent = "%" + ethDegisim;
    etherDegisim.style.color = "#37ad00";
  }

  if (usdtDegisim[0] == "-") {
    const usdtetDegisim = document.getElementById("dovDegisimUsdt");
    usdtetDegisim.textContent = "%" + usdtDegisim;
    usdtetDegisim.style.color = "red";
  } else {
    const usdtetDegisim = document.getElementById("dovDegisimUsdt");
    usdtetDegisim.textContent = "%" + usdtDegisim;
    usdtetDegisim.style.color = "#37ad00";
  }

  if (bnbDegisim[0] == "-") {
    const binanceDegisim = document.getElementById("dovDegisimBnb");
    binanceDegisim.textContent = "%" + bnbDegisim;
    binanceDegisim.style.color = "red";
  } else {
    const binanceDegisim = document.getElementById("dovDegisimBnb");
    binanceDegisim.textContent = "%" + bnbDegisim;
    binanceDegisim.style.color = "#37ad00";
  }

  if (usdcDegisim[0] == "-") {
    const usdcoinDegisim = document.getElementById("dovDegisimUsdc");
    usdcoinDegisim.textContent = "%" + usdcDegisim;
    usdcoinDegisim.style.color = "red";
  } else {
    const usdcoinDegisim = document.getElementById("dovDegisimUsdc");
    usdcoinDegisim.textContent = "%" + usdcDegisim;
    usdcoinDegisim.style.color = "#37ad00";
  }
}

kriptoKuru(kriptoapi)

const altinapi = 'https://api.genelpara.com/embed/altin.json'

function altinKuru(altinapi) {
  fetch(altinapi).then((res) => res.json())
    .then((data) => {
      console.log(data);

      const GA = data.GA.satis
      const CA = data.C.satis
      const YA = data.Y.satis
      const TA = data.T.satis
      const ATA = data.ATA.satis;

      const GAdegisim = data.GA.degisim
      const CAdegisim = data.C.degisim
      const YAdegisim = data.Y.degisim
      const TAdegisim = data.T.degisim
      const ATAdegisim = data.ATA.degisim

      altinDegisim(GAdegisim, CAdegisim, YAdegisim, TAdegisim, ATAdegisim)
      altinEkle(GA, CA, YA, TA, ATA)

    })
    .catch((err) => console.warn(err));
}

function altinEkle(GA, CA, YA, TA, ATA) {
  const gramaltin = document.getElementById('dovSatisG')
  gramaltin.textContent = GA.toString().slice(0, 6) + '₺';

  const ceyrekaltin = document.getElementById('dovSatisC')
  ceyrekaltin.textContent = CA.toString().slice(0, 7) + '₺'

  const yarimaltin = document.getElementById('dovSatisY')
  yarimaltin.textContent = YA.toString().slice(0, 7) + '₺'

  const tamaltin = document.getElementById('dovSatisT')
  tamaltin.textContent = TA.toString().slice(0, 7) + '₺'

  const ataaltin = document.getElementById('dovSatisA')
  ataaltin.textContent = ATA.toString().slice(0, 7) + '₺'


}

function altinDegisim(GAdegisim, CAdegisim, YAdegisim, TAdegisim, ATAdegisim) {
  if (GAdegisim[0] == "-") {
    const gramDegisim = document.getElementById("dovDegisimG");
    gramDegisim.textContent = "%" + GAdegisim;
    gramDegisim.style.color = "red";
  } else {
    const gramDegisim = document.getElementById("dovDegisimG");
    gramDegisim.textContent = "%" + GAdegisim;
    gramDegisim.style.color = "#37ad00";
  }

  if (CAdegisim[0] == "-") {
    const ceyrekDegisim = document.getElementById("dovDegisimC");
    ceyrekDegisim.textContent = "%" + CAdegisim;
    ceyrekDegisim.style.color = "red";
  } else {
    const ceyrekDegisim = document.getElementById("dovDegisimC");
    ceyrekDegisim.textContent = "%" + CAdegisim;
    ceyrekDegisim.style.color = "#37ad00";
  }

  if (YAdegisim[0] == "-") {
    const yarimDegisim = document.getElementById("dovDegisimY");
    yarimDegisim.textContent = "%" + YAdegisim;
    yarimDegisim.style.color = "red";
  } else {
    const yarimDegisim = document.getElementById("dovDegisimY");
    yarimDegisim.textContent = "%" + YAdegisim;
    yarimDegisim.style.color = "#37ad00";
  }

  if (TAdegisim[0] == "-") {
    const tamDegisim = document.getElementById("dovDegisimT");
    tamDegisim.textContent = "%" + TAdegisim;
    tamDegisim.style.color = "red";
  } else {
    const tamDegisim = document.getElementById("dovDegisimT");
    tamDegisim.textContent = "%" + TAdegisim;
    tamDegisim.style.color = "#37ad00";
  }

  if (ATAdegisim[0] == "-") {
    const ataDegisim = document.getElementById("dovDegisimA");
    ataDegisim.textContent = "%" + ATAdegisim;
    ataDegisim.style.color = "red";
  } else {
    const ataDegisim = document.getElementById("dovDegisimA");
    ataDegisim.textContent = "%" + ATAdegisim;
    ataDegisim.style.color = "#37ad00";
  }
}

altinKuru(altinapi)

const namazApi = 'https://api.genelpara.com/embed/namaz-vakitleri.json'

function namazVakti(namazApi) {
  fetch(namazApi).then((res) => res.json())
    .then((data) => {
      console.log(data.ankara);

      const imsak = document.getElementById('imsak');
      imsak.innerHTML = data.ankara.imsak

      const gunes = document.getElementById('gunes');
      gunes.innerHTML = data.ankara.gunes

      const ogle = document.getElementById('ogle');
      ogle.innerHTML = data.ankara.ogle

      const ikindi = document.getElementById('ikindi');
      ikindi.innerHTML = data.ankara.ikindi

      const aksam = document.getElementById('aksam');
      aksam.innerHTML = data.ankara.aksam

      const yatsi = document.getElementById('yatsi');
      yatsi.innerHTML = data.ankara.yatsi
    })
    .catch((err) => console.warn(err));
}
//csa
namazVakti(namazApi)

