import { useEffect, useState } from 'react';

const HomePage: React.FC = () => {
  const [showText, setShowText] = useState<boolean>(false);
  const[ moveToCorner , setMoveToCorner] = useState<boolean>(false);
  const [showNavItems, setShowNavItems] =  useState<boolean>(false);

  useEffect(() => {
    // Show the text after 2.5 seconds
    const sequence = [
        { action: () => setShowText(true), delay: 500 },       // Slide in panel
        { action: () => setMoveToCorner(true), delay: 1000 },    // Move text to corner
        { action: () => setShowNavItems(true), delay: 500}        // Show navbar
      ];
  
      const timers = sequence.map(({ action, delay }, i) => 
        setTimeout(action, sequence.slice(0, i).reduce((acc, curr) => acc + curr.delay, delay))
      );
  
      return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background image - appears immediately */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/download (1).jpeg')" }}
      />
      
      {/* Text overlay - slides in after delay */}
      <div 
        className={`absolute top-0 left-0 h-full w-full bg-[#F2E2E1] transition-all duration-1000 ease-in-out transform 
            ${
          showText ? 'translate-x-0' : '-translate-x-full'
        }  ${
            moveToCorner ? 'h-auto w-auto bg-white text-sm' : 'bg-[#F2E2E1]'
          } flex items-center justify-center`}
      >

         {/* Text container that moves to corner */}

         <div 
          className={ `transition-all duration-1000 ease-in-out  ${
            moveToCorner 
              ? '  absolute top-4 left-4 items-start' 
              : 'h-full w-full flex items-center justify-center'
          } flex ` }
        > 

        <h1 className=" text-6xl font-extrabold text-black-500 font-fancy transition-all duration-700 ${
            moveToCorner ? ' scale-75 origin-top-left  ' : ''
          }">
          REINVENT
        </h1>

         {/* Nav Items - appears beside logo */}
         {moveToCorner && (
            <div className={`flex flex-row items-center space-x-3 ml-6 ${
              showNavItems ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
            } transition-all duration-500 delay-300`}>
              <a href="#" className="text-gray-700 basis-3xs text-2xl text-bold cursor-pointer hover:text-pink-500 transition">Home</a>
              <a href="#" className="text-gray-700 text-2xl cursor-pointer hover:text-pink-500 transition">Products</a>
              <a href="#" className="text-gray-700 text-2xl cursor-pointer hover:text-pink-500 transition">Contact</a>
              
            </div>
         )}
        </div>
      </div>
  </div>
  );
};

export default HomePage;