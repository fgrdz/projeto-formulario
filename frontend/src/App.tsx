import Banner from "./components/molecules/banner/banner";
import '../src/bootstrap.min.css'
import "./global.css"
import Cadastro from "./components/organisms/nav/Cadastro";
import LanguageSelector from "./language/LanguageSelector";

function App() {
  return (
    <div className="App">
        
      <Banner/>
      <div className="languages">
         <LanguageSelector />
         </div>
      <div className="container-man">

      
        <div className="nav-container">
         <Cadastro/>
        </div>
          
        </div>
      
    </div>
  );
}

export default App;
