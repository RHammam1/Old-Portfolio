import '@/styles/globals.css'
import React from 'react';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

function _app() {
  return (
    <div className="App">
      <Typewriter
  
       onInit={(typewriter)=> {
  
       typewriter
        
       .typeString("GeeksForGeeks")
         
       .pauseFor(1000)
       .deleteAll()
       .typeString("Welcomes You")
       .start();
       }}
       />
    </div>
  );
}



 