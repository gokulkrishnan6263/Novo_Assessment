import React, { useState, useEffect } from "react";
import { Search, Filter, Stopwatch } from "react-bootstrap-icons";
import useFetch from "../hooks/usefetch";
import SettlementModal from "../Components/common/SettlementModal";

export default function History() {
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [totalPages, setTotalPages] = useState(1);
  const [showSettlement, setShowSettlement] = useState(false);

  const url = `/wallet/api/v1/transaction_history?service_id=111&page=${currentPage}`;
  const { data, loading, error } = useFetch(url);

  useEffect(() => {
    if (data?.total_pages) setTotalPages(data.total_pages);
  }, [data]);

  const transactions = data?.transactions || [];

  const filteredData = transactions.filter(
    (item) =>
      item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.account?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.amount?.toString().includes(searchTerm)
  );

  const getStatusClass = (status) => {
    return {
      Pending: "bg-warning text-dark",
      Failed: "bg-danger",
      Success: "bg-success",
    }[status] || "bg-secondary";
  };

  return (
    <div className="container-fluid p-4">
     
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4">
        <h4 className="fw-semibold mb-2 mb-md-0">Settlement History</h4>
        <button className="btn btn-outline-success">Download statement</button>
      </div>

     
      <div className="d-flex mb-3 gap-2">
        <div className="input-group mb-3">
          <span className="input-group-text bg-white border-end-0">
            <Search />
          </span>
          <input
            type="text"
            className="form-control border-start-0"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button
          className="btn btn-success p-2 d-flex align-items-center justify-content-center"
          style={{ width: "40px", height: "40px" }}
          aria-label="Filter"
        >
          <Filter />
        </button>
      </div>

     
      <div className="alert alert-success d-flex justify-content-between align-items-center">
        <span>
          <Stopwatch className="fs-2 me-3" />
          Today's total collection will be auto-settled by{" "}
          <strong className="text-success me-1">08:00AM, 23rd Oct'22</strong> Tomorrow.
        </span>
        <button
          className="btn btn-success"
          onClick={() => setShowSettlement(true)}
        >
          Settle Now!
        </button>
      </div>

      
      <div className="table-responsive shadow-sm rounded">
        <table className="table align-middle">
          <thead className="table-light">
            <tr>
              <th>Name</th>
              <th>Date & Time</th>
              <th>Account</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr>
                <td colSpan="6" className="text-center">
                  Loading...
                </td>
              </tr>
            )}
            {error && (
              <tr>
                <td colSpan="6" className="text-center text-danger">
                  {error.message || error}
                </td>
              </tr>
            )}
            {!loading && filteredData.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center text-muted">
                  No transactions found.
                </td>
              </tr>
            )}
            {!loading &&
              filteredData.map((row, index) => (
                <tr key={index}>
                  <td>{row.name}</td>
                  <td>{row.date}</td>
                  <td>{row.account}</td>
                  <td className="fw-medium">{row.amount}</td>
                  <td>
                    <span className={`badge ${getStatusClass(row.status)}`}>
                      {row.status}
                    </span>
                  </td>
                  <td>
                    <a href="#!" className="text-success text-decoration-none">
                      View
                    </a>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <nav className="mt-3">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage === 0 ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
            >
              ◀
            </button>
          </li>
          {[...Array(totalPages)].map((_, i) => (
            <li key={i} className={`page-item ${currentPage === i ? "active" : ""}`}>
              <button className="page-link" onClick={() => setCurrentPage(i)}>
                {i + 1}
              </button>
            </li>
          ))}
          <li className={`page-item ${currentPage === totalPages - 1 ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))
              }
            >
              ▶
            </button>
          </li>
        </ul>
      </nav>

      
      <SettlementModal
        show={showSettlement}
        onClose={() => setShowSettlement(false)}
      />
    </div>
  );
}
