import './App.css';
import CalcWrapper from './CalcWrapper'
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'

function App() {
  return (
    <div id="App">
      <ReactNotification />
      <CalcWrapper />
    </div>
  );
}

export default App;
