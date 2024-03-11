import React, { useEffect, useState } from "react";
import Books from "../db/db.json";
import "./Baner.css";
import { useNavigate } from "react-router-dom";
function Baner({ titleName }) {
  const [books, setBooks] = useState([...Books]);
  const [books_, setBooks_] = useState([...Books]);
  const navigate = useNavigate();
  const handleClik = (id) => {
    navigate("/singlebook/" + id);
  };
  const _books = books.filter((e) =>
    e.name.toLocaleLowerCase().includes(titleName.toLocaleLowerCase())
  );
  useEffect(() => {
    const filterBooks = () => {
      if (titleName === "") {
        setBooks(books_);
      } else {
        setBooks(_books);
      }
    };
    filterBooks();
  }, [titleName]);
  return (
    <div className="container p-2 my-5 ">
      <div className="my-row row justify-content-center">
        {books &&
          books.map((book) => (
            <div
              key={book.id}
              className="my-col col-7 col-sm-5 col-md-4  col-xl-3 "
            >
              <img
                onClick={() => handleClik(book.id)}
                src={book.img}
                alt={book.img}
              />
              <p>{book.author}</p>
              <h4>{book.name}</h4>
              <kbd>{book.pice}</kbd>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Baner;
