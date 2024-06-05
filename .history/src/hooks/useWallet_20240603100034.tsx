// src/hooks/useWallet.ts
'use client';

import { useState, useEffect } from 'react';
import { createWallet, Account } from 'thirdweb/wallets';
import client from './thirdwebClient';

type UseWalletResult = {
  account: Account | null;
  error: Error | null;
};

const useWallet = (): UseWalletResult => {
  const [account, setAccount] = useState<Account | null>(null);
  const [error, setError] = useState<Error | null>(null);

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
        if (err instanceof Error) {
          setError(err);
        } else {
          setError(new Error('An unknown error occurred'));
        }
      }
    };

    connectWallet();
  }, []);

  return { account, error };
};

export default useWallet;
