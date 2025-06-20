
import React from "react";

const Form: React.FC = () => {
  return (
    <div className="container my-4">
      <form className="row g-3 justify-content-center">
        <div className="col-12 col-md-6">
          <label htmlFor="inputEmail4" className="form-label">Full Name</label>
          <input type="text" className="form-control" id="inputEmail4" />
        </div>
        <div className="col-12 col-md-6">
          <label htmlFor="inputPassword4" className="form-label">Email</label>
          <input type="email" className="form-control" id="inputPassword4" />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">Address</label>
          <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress2" className="form-label">Address 2</label>
          <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
        </div>
        <div className="col-12 col-md-4">
          <label htmlFor="inputCity" className="form-label">City</label>
          <input type="text" className="form-control" id="inputCity" />
        </div>
        <div className="col-12 col-md-4">
          <label htmlFor="inputState" className="form-label">State</label>
          <select id="inputState" className="form-select">
            <option value="">Select State</option>
            <option value="volvo">Punjab</option>
            <option value="saab">Delhi</option>
            <option value="opel">Uttarakhand</option>
            <option value="audi">Himanchal Pradesh</option>
          </select>
        </div>
        <div className="col-12 col-md-4">
          <label htmlFor="inputZip" className="form-label">Zip</label>
          <input type="text" className="form-control" id="inputZip" />
        </div>
        <div className="col-12">
          <div className="form-check mt-2">
            <input className="form-check-input" type="checkbox" id="gridCheck" />
            <label className="form-check-label" htmlFor="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary mt-2 mb-3">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;