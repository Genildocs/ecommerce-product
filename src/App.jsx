import { useState } from 'react';
import Description from './components/Description';
import NavBar from './components/NavBar';
import Sliders from './components/Sliders';
import { useMediaQuery } from '@uidotdev/usehooks';

export default function App() {
  const isSmallDevice = useMediaQuery('only screen and (max-width : 768px)');
  const [modalOpen, setModalOpen] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <div>
      <NavBar isMobile={isSmallDevice} setModal={setModalOpen} count={count} />
      <Sliders isMobile={isSmallDevice} />
      <Description isModal={modalOpen} count={count} setCount={setCount} />
    </div>
  );
}
