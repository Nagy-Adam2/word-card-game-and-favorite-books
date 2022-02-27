import React, { useState } from "react";
import { IState as Props } from "./Book";

interface IProps {
  book: Props["book"]
  setBook: React.Dispatch<React.SetStateAction<Props["book"]>>
}

const Form: React.FC<IProps> = ({ book, setBook }) => {

  const [input, setInput] = useState({
    title: "",
    author: "",
    years: ""
  })
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }
  
  const handleClick = (): void => {
    if(
      !input.title ||
      !input.author ||
      !input.years
    ) {
      return
    }
  
    setBook([
      ...book,
      {
        title: input.title,
        author: input.author,
        years: parseInt(input.years)
      }
    ]);
  
    setInput({
        title: "",
        author: "",
        years: ""
    })
  }

  return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="Book title"
        className="AddToList-input"
        value={input.title}
        onChange={handleChange}
        name="title"
      />
      <input
        type="text"
        placeholder="Author of the book"
        className="AddToList-input"
        value={input.author}
        onChange={handleChange}
        name="author"
      />
      <input
        type="number"
        placeholder="Year of publication"
        className="AddToList-input"
        value={input.years}
        onChange={handleChange}
        name="years"
      />
      <button
        className="AddToList-btn"
        onClick={handleClick}
      >
        Add to list
      </button>
    </div>
  )

}

export default Form;