import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' exact Component={ProductListing} />
          <Route path='/product/:productId' exact Component={ProductDetail} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
