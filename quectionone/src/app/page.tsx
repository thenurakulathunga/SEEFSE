import Image from "next/image";
import Navbar from "./component/navbar/navbar";
import BottomNAV from "./component/navbar/bottomnav";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <Navbar />
      <BottomNAV />
    </div>
  );
}
