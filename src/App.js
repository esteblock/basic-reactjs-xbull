import logo from './logo.svg';
import './App.css';
import { xBullWalletConnect } from '@creit-tech/xbull-wallet-connect';

async function getPublicKey()  {
  console.log("🚀 ~ getPublicKey: Will read the Public Key")
  const bridge = new xBullWalletConnect();
  console.log("🚀 ~ getPublicKey ~ bridge just created:", bridge)
  const publicKey = await bridge.connect();
  console.log("🚀 ~ getPublicKey ~ publicKey:", publicKey)
  bridge.closeConnections();
  console.log("🚀 ~ getPublicKey ~ bridge after closing connectins:", bridge)
  return publicKey;

}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={getPublicKey}>Click to console.log Public Key</button>
      </header>
    </div>
  );
}

export default App;
