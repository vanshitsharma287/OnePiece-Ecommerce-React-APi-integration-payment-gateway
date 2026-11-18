import "../../css/Pagination.css";
const Pagination = (props) => {
    const { limit, totalItem, onPageChange, skip } = props;
    const totalPages = Math.ceil(totalItem/limit);

    const currentPage = (skip/limit)+1;
     
    const handleActionBtn = (action) => {
        if(action == "increment") {
            currentPage == totalPages ? onPageChange(1) : onPageChange(currentPage+1)
        } else {
          currentPage == 1 ? onPageChange(totalPages) : onPageChange(currentPage-1)
        }
    }
    if(totalItem == 0) {
        return null;
    }

    return(
        <section className="pagination">
            <button onClick={() => handleActionBtn("decrement")}>&lt;</button>
            {Array.from({ length: totalPages }, (_, index) => (
                <button onClick={() => onPageChange(index+1)} className={currentPage == index+1 ? "active":""}>{index+1}</button>
            ))}
            <button onClick={() => handleActionBtn("increment")}>&gt;</button>
            <select value={limit} onChange={(e) => onPageChange(1, Number(e.target.value))}>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
            </select>

        </section>
    )

}
export default Pagination;