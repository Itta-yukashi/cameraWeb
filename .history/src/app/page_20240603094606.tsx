
// src/pages/Home.js
import React from 'react';
import BBSCardList from './components/BBSCardList';
import useWallet from '././hooks/useWallet';

export default function Home() {
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
}
