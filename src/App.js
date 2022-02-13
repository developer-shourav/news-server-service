import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

function App() {
  const [news, setNews] = useState({});
  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=Apple&from=2022-02-12&sortBy=popularity&apiKey=394b3210ba7544569f3f15fbc9d039b9`)
      .then((res) => res.json())
      .then((data) => setNews(data.articles));
  }, []);

  console.log(news);
  return (
    <div>
   <div class="row row-cols-1 row-cols-md-3 g-4">
  
  


</div>
    </div>
  );
}

export default App;
