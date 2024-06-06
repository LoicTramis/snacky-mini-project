import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./components/HomePage";

function App() {
  /*
    For prep time 5min base time + 10 sec per ingredient rounded  (+ random between 1 and 5 min ?)
  */
  return (
    <>
      <Header />
      <HomePage />
      <Footer />
    </>
  );
}

export default App;
