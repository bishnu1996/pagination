import {useState} from 'react';
import PaginationButton from '../PaginationButton';
import PrevButton from '../PrevButton';
import NextButton from '../NextButton';
import "./style.css"


function Pagination() {
  const pageSize = 10;
  const totalData = 65;
  const [currentPage,setCurrentPage] = useState(1);

  const onPageClick = (i)=>{
    setCurrentPage(i)
  }
  const getPageNumbers = ()=>{
    let pageNumber = [];
    for(let i = 1; i < Math.ceil(totalData/pageSize);i++){
      pageNumber.push(
        <PaginationButton isActive={currentPage === i} onClick = {()=>onPageClick(i)} pageNo = {i} key={i}/>
        // <a href="#" 
        // className={currentPage === i?"page active":"page"}
        // key={i}
        // onClick={()=>onPageClick(i)}
        // >{i}</a>
      );
    }
    return pageNumber;
  }

  const prevButtonHandler = ()=>{
    if(currentPage > 1){
      setCurrentPage(currentPage - 1);
      console.log("ckick previous button");
    }
    
  }
  const nextButtonHandler = ()=>{
    if(currentPage < Math.ceil(totalData/pageSize)-1){
      setCurrentPage(currentPage + 1);
      console.log('click next button')
    }
    
  }
  return (
  <div className="container">
    <h2>pagination</h2>
    <div className="pagination" id="pagination">
    <PrevButton onClick = {prevButtonHandler}/>
      {getPageNumbers()}
    <NextButton onClick = {nextButtonHandler} />
    </div>
  </div>
  );
}

export default Pagination;
