import Description from "./components/Description";
import NavBar from "./components/NavBar";
import Sliders from "./components/Sliders";
import { useMediaQuery } from "@uidotdev/usehooks";

export default function App() {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  return (
    <div>
      <NavBar isMobile={isSmallDevice} />
      <Sliders isMobile={isSmallDevice} />
      <Description />
    </div>
  );
}
