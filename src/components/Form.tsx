import { useState } from "react";
import { db } from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const Form = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    address: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    checked: true,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value, type, checked } = e.target as HTMLInputElement;
    setForm((prev) => ({
      ...prev,
      [id === "gridCheck" ? "checked" : id === "inputPassword4" ? "email" : id === "inputEmail4" ? "fullName" : id.replace("input", "").toLowerCase()]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "submissions"), form);
      alert("Form submitted!");
      setForm({
        fullName: "",
        email: "",
        address: "",
        address2: "",
        city: "",
        state: "",
        zip: "",
        checked: false,
      });
    } catch (error) {
      if (error instanceof Error) {
        alert("Error submitting form: " + error.message);
      } else {
        alert("Error submitting form: " + String(error));
      }
    }
  };

  return (
    <div className="container my-4">
      <form className="row g-3 justify-content-center" onSubmit={handleSubmit}>
        <div className="col-12 col-md-6">
          <label htmlFor="inputEmail4" className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="inputEmail4"
            value={form.fullName}
            onChange={handleChange}
          />
        </div>
        <div className="col-12 col-md-6">
          <label htmlFor="inputPassword4" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="inputPassword4"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
            value={form.address}
            onChange={handleChange}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress2" className="form-label">Address 2</label>
          <input
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder="Apartment, studio, or floor"
            value={form.address2}
            onChange={handleChange}
          />
        </div>
        <div className="col-12 col-md-4">
          <label htmlFor="inputCity" className="form-label">City</label>
          <input
            type="text"
            className="form-control"
            id="inputCity"
            value={form.city}
            onChange={handleChange}
          />
        </div>
        <div className="col-12 col-md-4">
          <label htmlFor="inputState" className="form-label">State</label>
          <select
            id="inputState"
            className="form-select"
            value={form.state}
            onChange={handleChange}
          >
            <option value="">Select State</option>
            <option value="Punjab">Punjab</option>
            <option value="Delhi">Delhi</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="Himanchal Pradesh">Himanchal Pradesh</option>
          </select>
        </div>
        <div className="col-12 col-md-4">
          <label htmlFor="inputZip" className="form-label">Zip</label>
          <input
            type="text"
            className="form-control"
            id="inputZip"
            value={form.zip}
            onChange={handleChange}
          />
        </div>
        <div className="col-12">
          <div className="form-check mt-2">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
              checked={form.checked}
              onChange={handleChange}
            />
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