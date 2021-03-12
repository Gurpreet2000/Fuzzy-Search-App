import "../index.css";
import React from "react";
import Search from "./Search";

const App = () => {
  const data = [
    {
      title: "Stephen Hawking has died",
      link: "http://www.bbc.com/news/uk-43396008",
      timeStamp: "3 Years ago",
      comments: 436,
    },
    {
      title: "A Message to Our Customers",
      link: "http://www.apple.com/customer-letter/",
      timeStamp: "5 Years ago",
      comments: 967,
    },
    {
      title: "Steve Jobs has passed away",
      link: "http://www.apple.com/steve-jobs/",
      timeStamp: "9 Years ago",
      comments: 376,
    },
    {
      title: "YouTube-dl has received a DMCA takedown from RIAA",
      link:
        "https://github.com/github/dmca/blob/master/2020/10/2020-10-23-RIAA.md",
      timeStamp: "5 months ago",
      comments: 1411,
    },
  ];

  const fuzzySearch = (pattern, obj) => {
    const str = Object.values(obj).join("").toLowerCase();
    pattern = ".*" + pattern.split("").join(".*") + ".*";
    const reg = new RegExp(pattern);
    return reg.test(str);
  };

  return (
    <div className="ui container">
      <Search data={data} fuzzySearch={fuzzySearch} />
    </div>
  );
};

export default App;
