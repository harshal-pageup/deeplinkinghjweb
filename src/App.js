import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  function openApp() {
    const appURL = "deeplinkinghj://product/1"; // Custom scheme URL for your app
    const fallbackURL =
      "https://play.google.com/store/apps/details?id=com.deeplinkinghj"; // Play Store link

    // Attempt to open the app
    window.location = appURL;

    // Fallback to Play Store after 2 seconds if the app is not installed
    setTimeout(() => {
      window.location = fallbackURL;
    }, 2000);
  }

  // Call the openApp function when the page loads
  window.onload = openApp;

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

        <button onClick={() => openApp()}>OPEN APP</button>
      </header>
    </div>
  );
}

export default App;
