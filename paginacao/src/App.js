import './App.css';
import { useEffect, useState } from "react";
import PaginationComponent from './components/PagenationComponent';
import PaginationSelector from './components/PaginationSelector';

function App() {
  // ter uma lista pra filtrar
  const [itens, setItens] = useState([])
  // construindo a lógica da paginação
  const [itensPerPage, setItensPerPage] = useState(10); // num de itens por page
  const [currentPage, setCurrentPage] = useState(0) // escolher a page a vê, por padrão começa da 1

  const pages = Math.ceil(itens.length / itensPerPage); // funçao math.ceil se resu for 11.1 arredonda pra 12
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = itens.slice(startIndex, endIndex);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
        .then(data => data)

      setItens(result)
    } 
    fetchData()
  }, [])

  useEffect(() => {
    setCurrentPage(0)
  }, [itensPerPage])

  return (
    <div className="App container">
      <h1>Paginação com React</h1>
      
        <div className="itensAll">
          {/*Interação dele / renderização*/}
          {currentItens.map(item => {
            return <div className='item'> <span>{item.id}</span> <span>{item.title}</span> <span>{item.completed}</span> </div>
          })}
        </div>

        {/*Importação*/}
        <PaginationComponent pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        <PaginationSelector  itensPerPage={itensPerPage} setItensPerPage={setItensPerPage}/>
    </div>
  );
}

export default App;
