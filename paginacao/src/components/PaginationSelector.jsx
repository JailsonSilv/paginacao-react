import React from 'react'
import "../App.css"

const PaginationSelector = ({itensPerPage, setItensPerPage}) => {
  return (
    <div>
        Itens por página:
        <select value={itensPerPage} onChange= {(e) => setItensPerPage(Number(e.target.value))}>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={25}>25</option>
            <option value={30}>30</option>
        </select>
      </div>
  )
}

export default PaginationSelector