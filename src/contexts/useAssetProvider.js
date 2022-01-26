import React, { useState, useContext } from 'react';

const AssetContext = React.createContext();

export const useAssetContext = () => useContext(AssetContext);

const AssetProvider = ({ children }) => {
  const [assetState, setAssetState] = useState({
    addressToggled: false,
    assetAPI: {},
  });

  const updateAsset = ({ ...props }) =>
    setAssetState({ ...assetState, ...props });

  return (
    <AssetContext.Provider
      value={{
        assetState,
        updateAsset,
      }}>
      {children}
    </AssetContext.Provider>
  );
};

export default AssetProvider;
