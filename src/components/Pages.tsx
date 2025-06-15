import axios from "axios";
import React from "react";


const Pages = () => {
  
  return (
    <nav aria-label="Page navigation" className="my-3" style={{marginRight:"550px"}}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-auto">
            <ul className="pagination flex-wrap justify-content-center">
              <li className="page-item disabled">
                <span className="page-link">Previous</span>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">1</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">2</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">3</a>
              </li>
                <li className="page-item">
                <a className="page-link" href="#">4</a>
              </li>
                <li className="page-item">
                <a className="page-link" href="#">5</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">Next</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Pages;