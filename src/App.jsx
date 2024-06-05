import NavBar from "./components/NavBar";
import SliderMobile from "./components/SliderMobile";
import { useMediaQuery } from "@uidotdev/usehooks";

export default function App() {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  return (
    <div>
      <NavBar isMobile={isSmallDevice} />
      <SliderMobile isMobile={isSmallDevice} />
    </div>
  );
}
