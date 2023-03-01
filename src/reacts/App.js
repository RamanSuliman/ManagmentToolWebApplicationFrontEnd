import '../css/App.css';
import ReactDOM from 'react-dom';
import {Header} from "./components/view/header";
import {Body} from "./components/view/body";
import {Footer} from "./components/view/footer";

function App()
{
  return (
      <div className="page">
         <Header/>
         <Body/>
         <Footer/>
      </div>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));
export default App;
