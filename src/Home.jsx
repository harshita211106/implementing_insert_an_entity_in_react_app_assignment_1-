import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Book Library</h1>
      <Link to="/add-book">
        <button>Add Book</button>
      </Link>
    </div>
  );
}

export default Home;
