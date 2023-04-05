import "./Postview.css";
import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { useEffect } from "react";
import { BsSuitHeart } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import Moment from "react-moment";
import Header from "./Header";
import uuid from "react-uuid";
import { useGlobalContext } from "./context";
const Postview = () => {
  // const [post, setPost] = useState([]);
  const { posts, getPosts } = useGlobalContext();
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(64);
  const [hasBorder, setHasBorder] = useState(false);

  const handleClick = () => {
    setHasBorder(false);
    if (!liked) {
      setLikes((prevLikes) => prevLikes + 1);
    } else {
      setLikes((prevLikes) => prevLikes - 1);
    }
    setLiked(!liked);
  };
  const removeBorder = () => {
    setHasBorder(false);
  };
  console.log(posts);
  // const getUsers = async () => {
  //   const response = await fetch(`http://localhost:3004/user`);
  //   setPost(await response.json());
  // };
  // useEffect(() => {
  //   getUsers();
  // }, []);
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div className="site-container">
      <Header />
      <div className="body">
        {posts.map((ele, idx) => {
          return (
            <div className="body-content" key={uuid()}>
              <div className="card-datails">
                <div className="info top">
                  <div className=" card-top name-location">
                    <span>
                      <strong>{ele.author}</strong>
                    </span>
                    <span className="location">{ele.location}</span>
                  </div>
                  <div className="card-top three-dots">
                    <BsThreeDots />
                  </div>
                </div>
                <div className="info middle">
                  <p key={idx}>
                    <img
                      src={`https://insta-clone-backend-lcm6.onrender.com/${ele.PostImage}`}
                      id="postimg"
                    ></img>
                  </p>
                </div>
                <div className="info middle-bottom">
                  <div className="middle-bottom-left">
                    <div className=" icon heart-icon">
                      <div className="likes">
                        <span
                          className="btn"
                          onClick={handleClick}
                          style={{
                            border: hasBorder ? "1px solid black" : "none",
                          }}
                        >
                          {liked ? (
                            <AiFillHeart
                              style={{ color: liked ? "red" : "white" }}
                            />
                          ) : (
                            <BsSuitHeart />
                          )}
                        </span>
                      </div>
                      <div className="likes-number">
                        <p key={idx}>{likes} likes</p>
                      </div>
                    </div>
                    <div className="icon">
                      <span
                        className="btn"
                        style={{
                          border: hasBorder ? "1px solid black" : "none",
                        }}
                        onClick={removeBorder}
                      >
                        <FiSend />
                      </span>
                    </div>
                  </div>
                  <div className="middle-bottom-right">
                    <p key={idx}>
                      {<Moment format="YYYY/MM/DD">{ele.date}</Moment>}
                    </p>
                  </div>
                </div>

                <div className="info bottom">
                  <p key={idx}>{ele.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Postview;
