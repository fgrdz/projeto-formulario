import Banner from "./components/molecules/banner/banner";
import Forms from "./components/molecules/form/Forms";
import Listagem from "./components/molecules/listagem/Listagem";
import Nav from "./components/organisms/nav/Nav";
import "./global.css"
function App() {
  return (
    <div className="App">
      <Banner/>
      <div className="nav-container">
         <Nav/>
      </div>
    </div>
  );
}

export default App;
