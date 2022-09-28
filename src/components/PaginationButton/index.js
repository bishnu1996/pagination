
function PaginationButton(props) {
  return (
    <a href="#" 
        className={props.isActive?"page active":"page"}
        key={props.pageNo}
        onClick={props.onClick}
        >{props.pageNo}</a>
  );
}

export default PaginationButton;
