import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [dollars, setDollars] = useState(0);
  const [selectedCoin, setSelectedCoin] = useState({
    coinName: "default",
    coinPrice: 0,
    coinSymbol: "",
  });
  const onSelect = (event) => {
    const selectedValue = JSON.parse(event.target.value);

    setSelectedCoin({
      coinName: selectedValue.name,
      coinPrice: selectedValue.quotes.USD.price,
      coinSymbol: selectedValue.symbol,
    });
  };
  const onChange = (event) => {
    setDollars(event.target.value);
  };
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  console.log(selectedCoin.coinName);
  console.log(selectedCoin.coinPrice);

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <label>코인: </label>
          <select onChange={onSelect}>
            <option value="default">환전하고 싶은 코인을 선택하세요</option>
            {coins.map((coin) => (
              <option value={JSON.stringify(coin)} key={coin.id}>
                {coin.name}
              </option>
            ))}
          </select>
          <div>
            <label>달러: </label>
            <input value={dollars} type="number" onChange={onChange} />
            {selectedCoin.coinName === "default" ? null : (
              <div>
                ${dollars}를 {selectedCoin.coinName}으로 환전하면
                {dollars / selectedCoin.coinPrice} ({selectedCoin.coinSymbol})
                입니다.
              </div>
            )}
          </div>
        </div>
      )}

      <ul>
        {coins.map((coin) => (
          <li key={coin.id}>
            {coin.name} ({coin.symbol}): ${coin.quotes.USD.price}USD
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
