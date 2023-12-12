import logo from './logo.svg';
import './App.css';
const App = () => {
  const APP_ID = "8261458d";
  const APP_KEY = "25eb968a4ea3c128f462fa861ff1786f";

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type= "text" />
        <button className="search-button" type="submit">Search</button>
      </form>
    </div>
  );
}

export default App;
