import { useState } from 'react';
import Description from './components/Description';
import NavBar from './components/NavBar';
import Sliders from './components/Sliders';
import { useMediaQuery } from '@uidotdev/usehooks';
import SliderDesktop from './components/SliderDesktop';

export default function App() {
  const isSmallDevice = useMediaQuery('only screen and (max-width : 768px)');
  const [modalOpen, setModalOpen] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <div>
      <NavBar isMobile={isSmallDevice} setModal={setModalOpen} count={count} />
      <Sliders isMobile={isSmallDevice} />
      <div className="md:flex md:mx-16 lg:mx-32 2xl:mx-64 md:mt-10">
        <SliderDesktop />
        <Description isModal={modalOpen} count={count} setCount={setCount} />
      </div>
    </div>
  );
}
