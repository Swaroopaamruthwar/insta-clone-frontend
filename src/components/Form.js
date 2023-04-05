import React from "react";
import { useGlobalContext } from "./context";
import "./form.css";
import Header from "./Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Form() {
  const navigate = useNavigate();
  const { addPost } = useGlobalContext();
  const [post, setPost] = useState({
    PostImage: "",
    author: "",
    location: "",
    description: "",
    date: "",
  });
  const [image, setImage] = useState("");
  const handleClick = async (e) => {
    e.preventDefault();
    const formdatas = new FormData();
    formdatas.append("PostImage", image);
    formdatas.append("author", post.author);
    formdatas.append("location", post.location);
    formdatas.append("description", post.description);
    formdatas.append("date", post.date);
    console.log(formdatas);
    console.log(image.name);
    addPost(formdatas);
    setPost({
      PostImage: "",
      author: "",
      location: "",
      description: "",
      date: "",
    });
    // window.location.reload(false);
    navigate("/posts");
  };
  const onChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };
  const FileChange = (e) => {
    setImage(e.target.files[0]);
    console.log(e.target.files);
  };
  return (
    <div>
      <Header />
      <form encType="multipart/form-data">
        <div className="mb-3  my-5 mx-auto  border d-flex justify-content-center align-items-center flex-column">
          <input
            className="form-control mt-3 custom-width text-center"
            type="file"
            id="formFile"
            filename="PostImage"
            onChange={(e) => {
              FileChange(e);
            }}
          />
          <div className="input-group mb-3 width-custom mt-3">
            <input
              type="text"
              name="author"
              className="form-control me-3 "
              placeholder="Author"
              aria-label="Author"
              value={post.author}
              onChange={onChange}
            />
            <input
              type="text"
              name="location"
              value={post.location}
              className="form-control"
              placeholder="Location"
              aria-label="Location"
              onChange={onChange}
            />
          </div>
          <input
            type="text"
            name="description"
            value={post.description}
            className="form-control custom-width mb-3"
            placeholder="Description"
            aria-label="Description"
            onChange={onChange}
          />
          <input
            type="date"
            name="date"
            className="form-control custom-width mb-3"
            placeholder="date"
            aria-label="date"
            value={post.date}
            onChange={onChange}
          />
          <button
            type="button"
            className="btn btn-light mb-3"
            onClick={handleClick}
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
