// src/hooks/useWallet.js
import { useState, useEffect } from 'react';
import { createWallet } from 'thirdweb/wallets';

const useWallet = () => {
  const [account, setAccount] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const wallet = createWallet('inApp');
    const connectWallet = async () => {
      try {
        const account = await wallet.connect({
          client: yourClientInstance,
          strategy: 'google',
        });
        setAccount(account);
      } catch (err) {
        setError(err);
      }
    };

    connectWallet();
  }, []);

  return { account, error };
};

export default useWallet;
