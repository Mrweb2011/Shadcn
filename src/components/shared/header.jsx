import React from 'react';

function App() {
  return (
    <div className="App">
    <header className='flex py-5 px-28 bg-black text-white justify-between items-center fixed z-10'>
        <h2>WORKOUT</h2>
        <div className="flex gap-2 items-center">
            <ul className='flex gap-5 font-semibold'>
                <li>Home</li>
                <li>Programs</li>
            </ul>
            <button className='bg-black text-white border-1.5 border-gray-400 p-1'><GoSun /></button>
            <button className='bg-black text-white border-1.5 border-gray-400 p-1'><LuMoon /></button>
            <button className="bg-[rgb(49, 49, 49)] border-none p-2 rounded"><a className='text-white font-semibold' href="">Join Free</a></button>
        </div>
    </header>
    <div className="border-2 border-gray-400">
    </div>
    </div>
  );
}

export default App;