import React from "react";
import { IState as IProps } from "./Book"

const List: React.FC<IProps> = ({ book }) => {
  const renderList = (): JSX.Element[] => {
    return book.map((booke) => {
      return (
        <li className="List">
          <div className="List-header">
            <h2>{booke.title}</h2>
          </div>
          <p>{booke.author}</p>
          <p>{booke.years}</p>
        </li>
      )
    })
  }
  return (
    <ul className="Unordered-list-padding-left">
      {renderList()}
    </ul>
  )
}

export default List;