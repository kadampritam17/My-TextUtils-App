import './App.css';
import AboutF from './components/AboutF';
import NavbarF from './components/NavbarF';
import TextForm from './components/TextFormF';

function App() {
  return (
    <div className="App">
      <NavbarF title="TextUtils" about="About"/>
      {/* <NavbarF /> */}
      <div className="container my-3">
      <TextForm heading="Enter the text to analyze below"/>
      <AboutF/>
      </div>
    </div>
  );
}

export default App;
