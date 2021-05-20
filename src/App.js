import './App.css';
import MainComponent from './component/MainComponent';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './redux/store';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <MainComponent />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
