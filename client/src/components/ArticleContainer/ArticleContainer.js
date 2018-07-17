import React from 'react';

const ArticleContainer = props => {
  console.log(props.results);
  return props.results.map(result => (
    <div key={result._id}>
      <h4 href={result.web_url}>{result.headline.main}</h4>
      <p>{result.snippet}</p>
      <p>{result.pub_date}</p>
      <p>{result.web_url}</p>
      <button
        id={result._id}
        title={result.headline.main}
        url={result.multimedia.web_url}
        date={result.pub_date}
        onClick={props.saveArticle}
      >
        Save
      </button>
      <button
        id={result._id}
        title={result.headline.main}
        url={result.multimedia.web_url}
        date={result.pub_date}
        onClick={props.deleteArticle}
      >
        Delete
      </button>
    </div>
  ));
};
export default ArticleContainer;
