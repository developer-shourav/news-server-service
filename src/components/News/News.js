import React from "react";

const News = (props) => {
    const {author, title, description, urlToImage, publishedAt, content} = props.post ;
  return (
    <div>
      <div className="col">
        <div className="card h-100">
          <img src={urlToImage} className="card-img-top" alt="news img" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h6><i>Author:{author}</i></h6>
            <p className="card-text">
              {description}
            </p>

            <p className="card-text">{content}</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Date: {publishedAt}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
