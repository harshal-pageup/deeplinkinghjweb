import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  function openApp() {
    const appURL = "deeplinkinghj://product/1"; // Custom scheme URL for your app
    const fallbackURL = window.location.href; // Current web URL

    // Create an iframe to attempt to open the app
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.src = appURL;
    document.body.appendChild(iframe);

    // Remove iframe after 2 seconds and redirect to the fallback URL
    setTimeout(() => {
      document.body.removeChild(iframe);
      window.location.href = fallbackURL;
    }, 2000);
  }

  useEffect(() => {
    openApp();
  }, []);

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
