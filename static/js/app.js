const api = "https://finans.truncgil.com/v3/today.json";

function dovizKuru(api) {
  fetch(api)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      const USD = data.USD.Selling;
      const EUR = data.EUR.Selling;
      const GBP = data.GBP.Selling;
      const CHF = data.CHF.Selling;
      const CAD = data.CAD.Selling;

      const usdDegisim = data.USD.Change;
      const eurDegisim = data.EUR.Change;
      const gbpDegisim = data.GBP.Change;
      const chfDegisim = data.CHF.Change;
      const cadDegisim = data.CAD.Change;
      dovizDegisim(usdDegisim, eurDegisim, gbpDegisim, chfDegisim, cadDegisim);
      dovizEkle(USD, EUR, GBP, CHF, CAD);
    })
    .catch((err) => console.warn(err));
}

function dovizEkle(USD, EUR, GBP, CHF, CAD) {
  const dollar = document.getElementById("dovSatisUsd");
  dollar.textContent = USD.toString().slice(0, 5) + "₺";

  const euro = document.getElementById("dovSatisEur");
  euro.textContent = EUR.toString().slice(0, 5) + "₺";

  const sterlin = document.getElementById("dovSatisGbp");
  sterlin.textContent = GBP.toString().slice(0, 5) + "₺";

  const isvicrefrank = document.getElementById("dovSatisChf");
  isvicrefrank.textContent = CHF.toString().slice(0, 5) + "₺";

  const candollar = document.getElementById("dovSatisCad");
  candollar.textContent = CAD.toString().slice(0, 5) + "₺";
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
    dolarDegisim.textContent = usdDegisim;
    dolarDegisim.style.color = "red";
  } else {
    const dolarDegisim = document.getElementById("dovDegisimUsd");
    dolarDegisim.textContent = usdDegisim;
    dolarDegisim.style.color = "#37ad00";
  }

  if (eurDegisim[0] == "-") {
    const euroDegisim = document.getElementById("dovDegisimEur");
    euroDegisim.textContent = eurDegisim;
    euroDegisim.style.color = "red";
  } else {
    const euroDegisim = document.getElementById("dovDegisimEur");
    euroDegisim.textContent = eurDegisim;
    euroDegisim.style.color = "#37ad00";
  }

  if (gbpDegisim[0] == "-") {
    const sterlinDegisim = document.getElementById("dovDegisimGbp");
    sterlinDegisim.textContent = gbpDegisim;
    sterlinDegisim.style.color = "red";
  } else {
    const sterlinDegisim = document.getElementById("dovDegisimGbp");
    sterlinDegisim.textContent = gbpDegisim;
    sterlinDegisim.style.color = "#37ad00";
  }

  if (chfDegisim[0] == "-") {
    const frankDegisim = document.getElementById("dovDegisimChf");
    frankDegisim.textContent = chfDegisim;
    frankDegisim.style.color = "red";
  } else {
    const frankDegisim = document.getElementById("dovDegisimChf");
    frankDegisim.textContent = chfDegisim;
    frankDegisim.style.color = "#37ad00";
  }

  if (cadDegisim[0] == "-") {
    const kdolarDegisim = document.getElementById("dovDegisimCad");
    kdolarDegisim.textContent = cadDegisim;
    kdolarDegisim.style.color = "red";
  } else {
    const kdolarDegisim = document.getElementById("dovDegisimCad");
    kdolarDegisim.textContent = cadDegisim;
    kdolarDegisim.style.color = "#37ad00";
  }
}

dovizKuru(api);

const kriptoapi = "https://api.coincap.io/v2/assets";

function kriptoKuru(kriptoapi) {
  fetch(kriptoapi)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.data[0]);
      const BTC = data.data[0].priceUsd;
      const ETH = data.data[1].priceUsd;
      const USDT = data.data[2].priceUsd;
      const BNB = data.data[3].priceUsd;
      const USDC = data.data[4].priceUsd;
      const XRP = data.data[5].priceUsd;
      const SOL = data.data[6].priceUsd;
      const ADA = data.data[7].priceUsd;
      const LUNA = data.data[8].priceUsd;
      const AVAX = data.data[9].priceUsd;

      const btcDegisim = data.data[0].changePercent24Hr;
      const ethDegisim = data.data[1].changePercent24Hr;
      const usdtDegisim = data.data[2].changePercent24Hr;
      const bnbDegisim = data.data[3].changePercent24Hr;
      const usdcDegisim = data.data[4].changePercent24Hr;
      const xrpDegisim = data.data[5].changePercent24Hr;
      const solDegisim = data.data[6].changePercent24Hr;
      const adaDegisim = data.data[7].changePercent24Hr;
      const lunaDegisim = data.data[8].changePercent24Hr;
      const avaxDegisim = data.data[9].changePercent24Hr;

      kriptoDegisim(
        btcDegisim,
        ethDegisim,
        usdtDegisim,
        bnbDegisim,
        usdcDegisim,
        xrpDegisim,
        solDegisim,
        adaDegisim,
        lunaDegisim,
        avaxDegisim
      );
      kriptoEkle(BTC, ETH, USDT, BNB, USDC, XRP, SOL, ADA, LUNA, AVAX);
    })
    .catch((err) => console.warn(err));
}

function kriptoEkle(BTC, ETH, USDT, BNB, USDC, XRP, SOL, ADA, LUNA, AVAX) {
  const bitcoin = document.getElementById("dovSatisBtc");
  bitcoin.textContent = "$" + BTC.toString().slice(0, 8);

  const ether = document.getElementById("dovSatisEth");
  ether.textContent = "$" + ETH.toString().slice(0, 8);

  const usdtether = document.getElementById("dovSatisUsdt");
  usdtether.textContent = "$" + USDT.toString().slice(0, 8);

  const binance = document.getElementById("dovSatisBnb");
  binance.textContent = "$" + BNB.toString().slice(0, 8);

  const usdcoin = document.getElementById("dovSatisUsdc");
  usdcoin.textContent = "$" + USDC.toString().slice(0, 8);

  const xrpcoin = document.getElementById("dovSatisXrp");
  xrpcoin.textContent = "$" + XRP.toString().slice(0, 8);

  const solana = document.getElementById("dovSatisSol");
  solana.textContent = "$" + SOL.toString().slice(0, 8);

  const cardano = document.getElementById("dovSatisAda");
  cardano.textContent = "$" + ADA.toString().slice(0, 8);

  const terraluna = document.getElementById("dovSatisLuna");
  terraluna.textContent = "$" + LUNA.toString().slice(0, 8);

  const avalanche = document.getElementById("dovSatisAvax");
  avalanche.textContent = "$" + AVAX.toString().slice(0, 8);
}

function kriptoDegisim(
  btcDegisim,
  ethDegisim,
  usdtDegisim,
  bnbDegisim,
  usdcDegisim,
  xrpDegisim,
  solDegisim,
  adaDegisim,
  lunaDegisim,
  avaxDegisim
) {
  if (btcDegisim[0] == "-") {
    const bitcoinDegisim = document.getElementById("dovDegisimBtc");
    bitcoinDegisim.textContent = "%" + btcDegisim.toString().slice(0, 5);
    bitcoinDegisim.style.color = "red";
  } else {
    const bitcoinDegisim = document.getElementById("dovDegisimBtc");
    bitcoinDegisim.textContent = "%" + btcDegisim.toString().slice(0, 4);
    bitcoinDegisim.style.color = "#37ad00";
  }

  if (ethDegisim[0] == "-") {
    const etherDegisim = document.getElementById("dovDegisimEth");
    etherDegisim.textContent = "%" + ethDegisim.toString().slice(0, 5);
    etherDegisim.style.color = "red";
  } else {
    const etherDegisim = document.getElementById("dovDegisimEth");
    etherDegisim.textContent = "%" + ethDegisim.toString().slice(0, 4);
    etherDegisim.style.color = "#37ad00";
  }

  if (usdtDegisim[0] == "-") {
    const usdtetDegisim = document.getElementById("dovDegisimUsdt");
    usdtetDegisim.textContent = "%" + usdtDegisim.toString().slice(0, 5);
    usdtetDegisim.style.color = "red";
  } else {
    const usdtetDegisim = document.getElementById("dovDegisimUsdt");
    usdtetDegisim.textContent = "%" + usdtDegisim.toString().slice(0, 4);
    usdtetDegisim.style.color = "#37ad00";
  }

  if (bnbDegisim[0] == "-") {
    const binanceDegisim = document.getElementById("dovDegisimBnb");
    binanceDegisim.textContent = "%" + bnbDegisim.toString().slice(0, 5);
    binanceDegisim.style.color = "red";
  } else {
    const binanceDegisim = document.getElementById("dovDegisimBnb");
    binanceDegisim.textContent = "%" + bnbDegisim.toString().slice(0, 4);
    binanceDegisim.style.color = "#37ad00";
  }

  if (usdcDegisim[0] == "-") {
    const usdcoinDegisim = document.getElementById("dovDegisimUsdc");
    usdcoinDegisim.textContent = "%" + usdcDegisim.toString().slice(0, 5);
    usdcoinDegisim.style.color = "red";
  } else {
    const usdcoinDegisim = document.getElementById("dovDegisimUsdc");
    usdcoinDegisim.textContent = "%" + usdcDegisim.toString().slice(0, 4);
    usdcoinDegisim.style.color = "#37ad00";
  }
  if (xrpDegisim[0] == "-") {
    const xrpcoinDegisim = document.getElementById("dovDegisimXrp");
    xrpcoinDegisim.textContent = "%" + xrpDegisim.toString().slice(0, 5);
    xrpcoinDegisim.style.color = "red";
  } else {
    const xrpcoinDegisim = document.getElementById("dovDegisimXrp");
    xrpcoinDegisim.textContent = "%" + xrpDegisim.toString().slice(0, 4);
    xrpcoinDegisim.style.color = "#37ad00";
  }
  if (solDegisim[0] == "-") {
    const solcoinDegisim = document.getElementById("dovDegisimSol");
    solcoinDegisim.textContent = "%" + solDegisim.toString().slice(0, 5);
    solcoinDegisim.style.color = "red";
  } else {
    const solcoinDegisim = document.getElementById("dovDegisimSol");
    solcoinDegisim.textContent = "%" + solDegisim.toString().slice(0, 4);
    solcoinDegisim.style.color = "#37ad00";
  }
  if (adaDegisim[0] == "-") {
    const adacoinDegisim = document.getElementById("dovDegisimAda");
    adacoinDegisim.textContent = "%" + adaDegisim.toString().slice(0, 5);
    adacoinDegisim.style.color = "red";
  } else {
    const adacoinDegisim = document.getElementById("dovDegisimAda");
    adacoinDegisim.textContent = "%" + adaDegisim.toString().slice(0, 4);
    adacoinDegisim.style.color = "#37ad00";
  }
  if (lunaDegisim[0] == "-") {
    const lunacoinDegisim = document.getElementById("dovDegisimLuna");
    lunacoinDegisim.textContent = "%" + lunaDegisim.toString().slice(0, 5);
    lunacoinDegisim.style.color = "red";
  } else {
    const lunacoinDegisim = document.getElementById("dovDegisimLuna");
    lunacoinDegisim.textContent = "%" + lunaDegisim.toString().slice(0, 4);
    lunacoinDegisim.style.color = "#37ad00";
  }
  if (avaxDegisim[0] == "-") {
    const avaxcoinDegisim = document.getElementById("dovDegisimAvax");
    avaxcoinDegisim.textContent = "%" + avaxDegisim.toString().slice(0, 5);
    avaxcoinDegisim.style.color = "red";
  } else {
    const avaxcoinDegisim = document.getElementById("dovDegisimAvax");
    avaxcoinDegisim.textContent = "%" + avaxDegisim.toString().slice(0, 4);
    avaxcoinDegisim.style.color = "#37ad00";
  }

  

}

kriptoKuru(kriptoapi);

const altinapi = "https://finans.truncgil.com/v3/today.json";

function altinKuru(altinapi) {
  fetch(altinapi)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      const GA = data["gram-altin"].Selling;
      const CA = data["ceyrek-altin"].Selling;
      const YA = data["yarim-altin"].Selling;
      const TA = data["tam-altin"].Selling;
      const ATA = data["ata-altin"].Selling;

      const CAdegisim = data["ata-altin"].Change;
      const GAdegisim = data["ata-altin"].Change;
      const YAdegisim = data["ata-altin"].Change;
      const TAdegisim = data["ata-altin"].Change;
      const ATAdegisim = data["ata-altin"].Change;

      altinDegisim(GAdegisim, CAdegisim, YAdegisim, TAdegisim, ATAdegisim);
      altinEkle(GA, CA, YA, TA, ATA);
    })
    .catch((err) => console.warn(err));
}

function altinEkle(GA, CA, YA, TA, ATA) {
  const gramaltin = document.getElementById("dovSatisG");
  gramaltin.textContent = GA.toString().slice(0, 6) + "₺";

  const ceyrekaltin = document.getElementById("dovSatisC");
  ceyrekaltin.textContent = CA.toString().slice(0, 7) + "₺";

  const yarimaltin = document.getElementById("dovSatisY");
  yarimaltin.textContent = YA.toString().slice(0, 7) + "₺";

  const tamaltin = document.getElementById("dovSatisT");
  tamaltin.textContent = TA.toString().slice(0, 7) + "₺";

  const ataaltin = document.getElementById("dovSatisA");
  ataaltin.textContent = ATA.toString().slice(0, 7) + "₺";
}

function altinDegisim(GAdegisim, CAdegisim, YAdegisim, TAdegisim, ATAdegisim) {
  if (GAdegisim[0] == "-") {
    const gramDegisim = document.getElementById("dovDegisimG");
    gramDegisim.textContent = GAdegisim;
    gramDegisim.style.color = "red";
  } else {
    const gramDegisim = document.getElementById("dovDegisimG");
    gramDegisim.textContent = GAdegisim;
    gramDegisim.style.color = "#37ad00";
  }

  if (CAdegisim[0] == "-") {
    const ceyrekDegisim = document.getElementById("dovDegisimC");
    ceyrekDegisim.textContent = CAdegisim;
    ceyrekDegisim.style.color = "red";
  } else {
    const ceyrekDegisim = document.getElementById("dovDegisimC");
    ceyrekDegisim.textContent = CAdegisim;
    ceyrekDegisim.style.color = "#37ad00";
  }

  if (YAdegisim[0] == "-") {
    const yarimDegisim = document.getElementById("dovDegisimY");
    yarimDegisim.textContent = YAdegisim;
    yarimDegisim.style.color = "red";
  } else {
    const yarimDegisim = document.getElementById("dovDegisimY");
    yarimDegisim.textContent = YAdegisim;
    yarimDegisim.style.color = "#37ad00";
  }

  if (TAdegisim[0] == "-") {
    const tamDegisim = document.getElementById("dovDegisimT");
    tamDegisim.textContent = TAdegisim;
    tamDegisim.style.color = "red";
  } else {
    const tamDegisim = document.getElementById("dovDegisimT");
    tamDegisim.textContent = TAdegisim;
    tamDegisim.style.color = "#37ad00";
  }

  if (ATAdegisim[0] == "-") {
    const ataDegisim = document.getElementById("dovDegisimA");
    ataDegisim.textContent = ATAdegisim;
    ataDegisim.style.color = "red";
  } else {
    const ataDegisim = document.getElementById("dovDegisimA");
    ataDegisim.textContent = ATAdegisim;
    ataDegisim.style.color = "#37ad00";
  }
}

altinKuru(altinapi);
