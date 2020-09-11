import React, { useState, useEffect } from "react";
import { createAma } from "./apiAdmin";
import { signin, isAuthenticated } from "../auth/authenticate";
import Menu from "../core/menu";
import { Link } from "react-router-dom";
const AddProduct = () => {
  const [values, setValues] = useState({
    embeddedlink: "",
    routename: "",
    title: "",
    error: "",
    loading: false,
    formData: "",
  });

  const { user } = isAuthenticated();
  const { embeddedlink, routename, title, error, loading, formData } = values;

  useEffect(() => {
    setValues({ ...values, formData: new FormData() });
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: "", loading: true });
    createAma(user._id, formData).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          embeddedlink: "",
          routename: "",
          title: "",
          error: "",
          loading: false,
          formData: "",
        });
      }
    });
  };

  const handleChange = (name) => (event) => {
    const value = name === "photo" ? event.target.file[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const newPostForm = () => (
    <div>
      <form
        className="mb-3"
        onSubmit={onSubmit}
        style={{ backgroundColor: "white" }}
      >
        <div className="form-group">
          <label className="text-muted">Title</label>
          <input
            onChange={handleChange("title")}
            type="text"
            className="form-control"
            value={title}
          />
        </div>
        <div className="form-group">
          <label className="text-muted">Embedded Link</label>
          <input
            onChange={handleChange("embeddedlink")}
            type="text"
            className="form-control"
            value={embeddedlink}
          />
        </div>
        <div className="form-group">
          <label className="text-muted">Route Name</label>

          <input
            onChange={handleChange("routename")}
            type="text"
            className="form-control"
            value={routename}
          />
        </div>

        <button className="btn btn-outline-primary">Create AMA</button>
      </form>
    </div>
  );

  return (
    <div className="container">
      <div className="row">
        <Menu />
        <div className="col-md-8 offset-md-2">{newPostForm()}</div>
        <Link className="btn btn-outline-primary" to="/admin">
          Back to Admin
        </Link>
      </div>
    </div>
  );
};

export default AddProduct;
