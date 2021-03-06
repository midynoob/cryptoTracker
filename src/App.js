import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Coin from './Coin';
import Modal from './Modal';
import ScrollToTop from './ScrollToTop';


function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  const [show, setShow] = useState(false);
  const [coinInModal, setCoinInModal] = useState({});

  const getCoins = async() => {
    axios
      .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(res => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch(error => console.log(error))
  }


  useEffect(() => {
    getCoins()

    const interval = setInterval(()=>{
      getCoins()
     },10000)

    return() => clearInterval(interval)
      
  }, []);



  // useEffect(() => {
  //   axios
  //     .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false')
  //     .then(res => {
  //       setCoins(res.data);
  //     })
  //     .catch(error => console.log(error))
  // }, []);

  const handleChange = e => {
    setSearch(e.target.value)
  }
  
  const filteredCoins = coins.filter(coin => 
    coin.name.toLowerCase().includes(search.toLowerCase())
    )

  const showModal = (coin) => {
    console.log("show");
    setShow(true);
    console.log(show);
    setCoinInModal(coin);
    console.log(coin.name);
  }

  const hideModal = (e) => {
    console.log("dont show");
    setShow(false);
    console.log(show);
  }

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search a currency</h1>
        <form>
          <input type="text" className="coin-input" 
            placeholder="Search.." onChange={handleChange} />
        </form>

      </div>
      <Modal show={show} coin={coinInModal} handelClose={e => hideModal()}>
          <p>Modal</p>
      </Modal>
      {filteredCoins.map(coin => {
        return(
          <div key={coin.id} onClick={e => showModal(coin)}>
            <Coin key={coin.id} name={coin.name}
              image={coin.image}
              symbol={coin.symbol}
              marketcap={coin.market_cap}
              price={coin.current_price}
              priceChange = {coin.price_change_percentage_24h}
              volume={coin.total_volume}
              
            />
          </div>
        )
      })}
      <ScrollToTop />
    </div>
  );
}

export default App;
