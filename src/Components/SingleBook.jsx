import React from "react";
import Books from "../db/db.json";
import { Link, useParams } from "react-router-dom";
import "./SingleBook.css";
import * as Icon from "react-bootstrap-icons";
function SingleBook() {
  const { id } = useParams();
  const book = Books.filter((book) => id == book.id);
  return (
    <div className="single_book container my-5 ">
      {book &&
        book.map((item) => (
          <div key={item.id} className="row">
            <div className="col-xl-4 col-lg-12 text-center">
              <img src={item.img} alt="" />
            </div>
            <div className="about col-xl-4 offset-1">
              <p>{item.author}</p>
              <h1 className="display-4">{item.name}</h1>
              <kbd>{item.pice}</kbd>
              <p>{item.description}</p>
              <Link style={{ fontSize: "1.5rem", color: "black" }} to="/">
                <Icon.House />
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
}

export default SingleBook;
