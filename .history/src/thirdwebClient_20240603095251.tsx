// src/pages/Home.tsx
'use client';

import React from 'react';
import BBSCardList from './components/BBSCardList';
import useWallet from '../hooks/useWallet';

const Home: React.FC = () => {
  const { account, error } = useWallet();

  if (error) {
    return <div>エラーが発生しました: {error.message}</div>;
  }

  return (
    <main>
      {account ? (
        <div>
          <p>ウォレット接続済み: {account.address}</p>
          <BBSCardList />
        </div>
      ) : (
        <div>ウォレットに接続中...</div>
      )}
    </main>
  );
};

export default Home;
