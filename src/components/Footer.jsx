import React from 'react';
import IconReact from './IconReact.jsx';

export default function Footer() {
  return (
    <footer className="relative px-4 py-8 md:px-8">
      <p className="flex items-center justify-center gap-5">
        Desenvolvido em React:{' '}
        <span>
          <IconReact />
        </span>
      </p>
      <p className="text-center"> © Copyright 2025. All Rights Reserved </p>
      <p>Code created on 02/24/2025 by genildocs</p>
      {/*<FloatingBox />*/}
    </footer>
  );
}
