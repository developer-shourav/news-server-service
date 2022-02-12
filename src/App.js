
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';


const api = process.env.API_KEY ;
console.log(api);

function App() {
  const [news, setNews] =useState({});
  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=Apple&from=2022-02-12&sortBy=popularity&apiKey=${process.env.API_KEY}`)
    .then(res => res.json())
    .then(data => console.log(data))

  },[]);


  return (
    <div >
 
    </div>
  );
}

export default App;



