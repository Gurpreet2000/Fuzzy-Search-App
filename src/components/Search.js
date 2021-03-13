import React, { useEffect, useState } from "react";

const Search = ({ data, fuzzySearch }) => {
  const [debounceTerm, setDebounceTerm] = useState("");
  const [term, setTerm] = useState("");
  const [results, setResults] = useState(data);

  useEffect(() => {
    const timerId = setTimeout(() => setDebounceTerm(term), 500);
    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    setResults(data.filter((d) => fuzzySearch(debounceTerm.toLowerCase(), d)));
  }, [debounceTerm, data, fuzzySearch]);

  const renderList = results.map((result, idx) => {
    return (
      <div key={idx} className="item">
        <div className="content"></div>
        <a className="ui blue inverted small header" href={result.link}>
          {`${result.title} -> (${result.link})`}
        </a>
        <div className="description">
          {result.timeStamp} | {result.comments} comments
        </div>
      </div>
    );
  });
  return (
    <div className="ui inverted segment">
      <div className="ui fluid inverted icon input ">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setTerm(e.target.value)}
          value={term}
        />
        <i className="search icon"></i>
      </div>

      <div className="ui divided inverted list">{renderList}</div>
    </div>
  );
};

export default Search;
