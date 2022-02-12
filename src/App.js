import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import{ Row, Col, Card, Button, Spinner} from 'react-bootstrap';



function App() {
  return (
    <div >
     <Row xs={1} md={2} className="g-4">
  {Array.from({ length: 4 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
  
</Row>
<Button variant='success' className='text-warning p-4 fw-bold fs-1  border shadow-lg mt-5 ms-5 rounded-pill'> Click Here</Button>
<div className="App mt-5 ">
<Spinner animation="grow" variant='info' />
</div>
    </div>
  );
}

export default App;



