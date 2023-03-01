import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

function _app({ Component, pageProps }) {
  return (
   <div className="bg-blue-500">
     <Component {...pageProps}/>
   </div>
  );
 }
