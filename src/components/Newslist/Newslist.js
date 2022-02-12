import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Newslist = (props) => {
    const {author,title,description, urlToImage, content, publishedAt} = props.news ;
    return (
        <Col>
        <Card>
          <Card.Img variant="top" src={urlToImage} />
          <p>{description}</p>
          <small>{publishedAt}</small>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <h6><i>Author:{author}</i></h6>
            <Card.Text>
              {content}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default Newslist;