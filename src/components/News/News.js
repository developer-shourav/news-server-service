import React from "react";
import { Card, Col } from "react-bootstrap";

const News = (props) => {
    const {author, title, description, urlToImage, publishedAt, content} = props.post ;
  return (
    <div>
      <Col>
            <Card>
              <Card.Img variant="top" src={urlToImage} />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <h6><i>{author}</i></h6>
                <p>{description}</p>
                <Card.Text>
                  {content}
                </Card.Text>
                <small>{publishedAt}</small>
              </Card.Body>
              
            </Card>
          </Col>
       
    </div>
  );
};

export default News;
