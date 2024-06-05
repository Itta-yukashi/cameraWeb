// src/pages/Home.tsx
'use client';

import React from 'react';
import BBSCardList from './components/BBSCardList';
import QrcodeReaderComponent from './QrcodeReaderComponent';

const Home: React.FC = () => {


  return (
    <main>
    
    <QrcodeReaderComponent />
    </main>
  );
};

export default Home;
