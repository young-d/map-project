import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AssetProvider from './contexts/useAssetProvider';

ReactDOM.render(
  <AssetProvider>
    <App />
  </AssetProvider>,
  document.getElementById('root')
);
