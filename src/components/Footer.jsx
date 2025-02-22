import React from 'react';
import IconReact from './IconReact.jsx';
import FloatingBox from "./FloatingBox.jsx";
export default function Footer() {

  return (
    <footer className="relative px-4 py-8 md:px-8">
      <p className="flex items-center justify-center gap-5">
        Desenvolvido em React:{' '}
        <span>
          <IconReact />
        </span>
      </p>
      {/*<FloatingBox />*/}
    </footer>
  );
}
