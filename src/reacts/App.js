import '../css/App.css';
import ReactDOM from 'react-dom';
import {Counter} from "./components/counter";
import {LoginPage} from"./components/login";

function App()
{
  return (
      <div>
          <Counter/>
          <LoginPage/>
      </div>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));
export default App;
