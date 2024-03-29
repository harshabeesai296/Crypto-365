import "./Uniswap.css";

const UniSwap = () => {
  return (
    <div className="uniswap">
      <h1>Swap ERC-20 tokens on UniSwap</h1>
      <iframe
        src="https://app.uniswap.org/#/swap?outputCurrency=0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359"
        id="myUniPortal"
      />
    </div>
  );
};

export default UniSwap;
