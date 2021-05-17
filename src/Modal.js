import React from 'react';
import './modal.css';

const Modal = ({show, coin,handelClose}) => {



    const showHideClassName = show ? "modal display-block" : "modal display-none";

    if(coin.name) {
        return (
            <div>
                <div className={showHideClassName}>
                    <section className="modal-main">
                        <div className="btn-div">
                            <button type="button" className="close-button" onClick={handelClose}>
                            X
                            </button>
                        </div>

                        
    
    
    
                        <div className="coin-modal">
                            <div className="coin-modal-container">
                                <img
                                    src={coin.image}
                                    alt={coin.name}
                                    className="coin-image"
                                />
                                <h1 className="coin-name">{coin.name}</h1>
                                <p className="coin-modal-symbol">{coin.symbol}</p>
                                <p className="coin-current">
                                   Rs {coin.current_price.toLocaleString()}
                                </p>

                                {coin.price_change_percentage_24h < 0 ? (
                                    <p className="coin-percent red center">
                                            {coin.price_change_percentage_24h.toFixed(2)}
                                        %</p>
                                    ) : (
                                        <p className="coin-percent green center">
                                            {coin.price_change_percentage_24h.toFixed(2)}
                                        %</p>
                                    )
                                }
                                <p className="coin-current">
                                <strong>Mkt Cap: Rs </strong><br></br>{coin.market_cap.toLocaleString()}
                                </p>
                            </div>
                        </div>
    
    
    
    
    
    
                    </section>
                </div>
            </div>
        )
    }else {
        return(
            <div></div>
        )
    }

    
}

export default Modal;
