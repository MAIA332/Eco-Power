import Navbar from "./components/navbar";
import Image from "next/image";
import Submenu from "./components/submenu";

export default function Home() {
  return (
   <div>
      <Navbar/>
       <div>
          <div className="bg-gray-100">
            <Submenu/>
          </div>
          <div className="relative">
              <Image src="/1920x1080.svg" alt="Person holding Samsung Galaxy S23 Ultra" className="w-full" width={100} height={100}/>
              <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-center">
                  <h2 className="text-white text-4xl font-bold">Eco Power</h2>
                  <p className="text-white text-xl">Galaxy, AI <i className="fas fa-star text-blue-500"></i> chegou</p>
                  <button className="mt-4 px-6 py-2 border border-white text-white">COMPRAR AGORA</button>
              </div>
              <div className="absolute bottom-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-center">
                  <h2 className="text-white text-4xl font-bold">Skill Nível <span className="text-blue-500">S</span></h2>
              </div>
          </div>
          <div className="fixed right-0 top-1/2 transform -translate-y-1/2">
              <button className="bg-black text-white px-4 py-2">Feedback</button>
          </div>
          <div className="fixed right-4 bottom-4">
              <Image src="/50x50.svg" alt="Chat icon" className="rounded-full" width={100} height={100}/>
          </div>
      </div>
   </div>
  );
}
