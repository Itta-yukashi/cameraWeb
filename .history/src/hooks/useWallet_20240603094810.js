// src/hooks/useWallet.js
'use client';

import { useState, useEffect } from 'react';
import { createWallet } from 'thirdweb/wallets';
import client from '../thirdwebClient';

const useWallet = () => {
  const [account, setAccount] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const wallet = createWallet('inApp');
    const connectWallet = async () => {
      try {
        const account = await wallet.connect({
          client,
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
