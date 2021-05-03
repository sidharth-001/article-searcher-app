import React from "react";
import axios from "axios";
import Search from "./components/Search";

function App() {
  return (
    <div className="ui grid container center aligned">
      <div className="eight wide column">
        <Search />
      </div>
    </div>
  );
}

export default App;
