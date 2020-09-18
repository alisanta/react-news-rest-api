import React from "react";
import "./styles.css";
import NewsFeed from "./components/Newsfeed";

export default function App() {
  return (
    <div className="App">
      <h1>News Retriever</h1>
      <NewsFeed />
    </div>
  );
}
