import Navbar from "./component/navbar/navbar";
import BottomNAV from "./component/navbar/bottomnav";
import About from "./sections/about/about";
import Cards from "./sections/cards/page";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <Navbar />
      <BottomNAV />
      <About />
      <Cards />
    </div>
  );
}
