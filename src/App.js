import React from "react";
import Search from "./components/Search";

function App() {
  return (
    <div className="ui grid container center aligned">
      <div className="twelve wide column" style={{marginTop: 1+'em'}}>
        <Search />
      </div>
    </div>
  );
}

export default App;
