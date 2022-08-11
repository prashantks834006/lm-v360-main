import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import CustomerDetailsSection from './modules/CustomerDetailsSection';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <CustomerDetailsSection />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
