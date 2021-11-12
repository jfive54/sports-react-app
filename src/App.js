import '@vtmn/css/dist/index.css';
import '@vtmn/icons/dist/vitamix/font/vitamix.css';
import '@vtmn/css-text-input/dist/index.css';

import 'typeface-roboto';
import 'typeface-roboto-condensed';

import "./App.css";
import SportList from "./components/SportList";

function App() {
  return (
    <div className="App">
      <SportList></SportList>
    </div>
  );
}

export default App;
