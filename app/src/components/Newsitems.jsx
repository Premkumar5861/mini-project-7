import React, { Component } from 'react'

export default class Newsitems extends Component {
  render() {
    let { title, description, url, linkurl, author, date, source } = this.props;

    // Don't render card at all if there’s no title or description
    if (!title && !description) return null;

    return (
      <div className="card h-100">
        {url && <img src={url} alt="news" className="card-img-top" />}

        <div className="card-body">
          {source && (
            <span
              className="badge rounded-pill bg-danger text-light"
              style={{
                display: "flex",
                justifyContent: "flex-end",
                position: "absolute",
                right: "0px",
                top: "0px",
              }}
            >
              {source}
            </span>
          )}

          {title && <h5 className="card-title">{title}</h5>}
          {description && <p className="card-text">{description}</p>}
          {author && <p>By: {author}</p>}
          {date && <p>Published At: {date}</p>}

          {linkurl && (
            <a href={linkurl} className="btn btn-danger" target="_blank" rel="noreferrer">
              Read More
            </a>
          )}
        </div>
      </div>
    );
  }
}
