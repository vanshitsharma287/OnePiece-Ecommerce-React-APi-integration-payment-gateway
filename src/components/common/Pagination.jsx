import "../../css/Pagination.css";
const Pagination = (props) => {
    const {limit, setLimit,totalItem,setSkip, skip} = props;
    const totalPages = Math.ceil(totalItem/limit);

    const handlePageChange = (pageNo) => {
        setSkip(limit * (pageNo - 1))
    }

    const currentPage = (skip/limit)+1;
     
    const handleActionBtn = (action) => {
        if(action == "increment") {
            currentPage == totalPages ? handlePageChange(1) : handlePageChange(currentPage+1)
        } else {
          currentPage == 1 ? handlePageChange(totalPages) : handlePageChange(currentPage-1)
        }
    }

    return(
        <section className="pagination">
            <button onClick={() => handleActionBtn("decrement")}>&lt;</button>
            {Array.from({ length: totalPages }, (_, index) => (
                <button onClick={() => handlePageChange(index+1)} className={currentPage == index+1 ? "active":""}>{index+1}</button>
            ))}
            <button onClick={() => handleActionBtn("increment")}>&gt;</button>
            <select value={limit} onChange={(e) => setLimit(e.target.value)}>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
            </select>

        </section>
    )

}
export default Pagination;