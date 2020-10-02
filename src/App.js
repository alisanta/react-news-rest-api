import React from "react";
import "./styles.css";
import moment from "moment";
import NewsFeed from "./components/Newsfeed";
/*
export default function App() {
  return (
    <div className="App">
      <h1>News Retriever</h1>
      <NewsFeed />
    </div>
  );
}
*/
class App extends React.Component {
  constructor() {
    super()
  }
  anotherMethod() {}
  render() {
    const todayDate = new moment();

    return (
      <div className="App">
        <h1>News Retriever {todayDate.format("MMMM Do YYYY, h:mm:ss a")} </h1>
        <h2>{this.props.sourceName}</h2>
        <NewsFeed />
      </div>
    );
  }
}
export default App;
