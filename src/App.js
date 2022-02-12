import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Newslist from "./components/Newslist/Newslist";

function App() {
  const [news, setNews] = useState({});
  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=Apple&from=2022-02-12&sortBy=popularity&apiKey=394b3210ba7544569f3f15fbc9d039b9`
    )
      .then((res) => res.json())
      .then((data) => setNews(data.articles));
  }, []);

  return (
    <div>
    
      <Row xs={1} md={3} className="g-4">
       {
        news.map(nw =>  <Newslist news ={nw} > </Newslist>) 
       }
      </Row>
    </div>
  );
}

export default App;
