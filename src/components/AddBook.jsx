import React from "react";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Add a New Book</h2>
      <form>
        <label>Title:</label>
        <input type="text" placeholder="Enter book title" />

        <label>Author:</label>
        <input type="text" placeholder="Enter author's name" />

        <label>Description:</label>
        <textarea placeholder="Enter book description"></textarea>

        <label>Cover Image URL:</label>
        <input type="url" placeholder="Enter image URL" />

        <button type="submit">Submit</button>
      </form>

      <button onClick={() => navigate("/")}>Go Back</button>
    </div>
  );
}

export default AddBook;
