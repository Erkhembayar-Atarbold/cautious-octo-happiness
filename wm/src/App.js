import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />

      <Main />
    </div>
  );
}

function Header() {
  return (
    <header>
      <nav>
        <li>
          <span>Company</span>
        </li>
      </nav>
    </header>
  );
}

function Main() {
  return (
    <div>
      {" "}
      <img></img>{" "}
    </div>
  );
}

export default App;
