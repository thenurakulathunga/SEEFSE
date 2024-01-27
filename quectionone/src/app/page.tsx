import Image from "next/image";
import Navbar from "./component/navbar/navbar";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <Navbar />
    </div>
  );
}
