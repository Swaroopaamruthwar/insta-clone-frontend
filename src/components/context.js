import { useContext, useState } from "react";
import React from "react";
const AppContext = React.createContext();
const AppProvider = (props) => {
  const BACKEND_URL = "https://insta-clone-backend-lcm6.onrender.com";
  const postsInitial = [];
  const [posts, setPosts] = useState(postsInitial);
  // Get all Posts
  const getPosts = async () => {
    // API Call
    const response = await fetch(`${BACKEND_URL}/posts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    console.log(json);
    setPosts(json.posts);
    console.log(posts);
  };
  // Add a Note
  const addPost = async (formdatas) => {
    // TODO: API Call
    // API Call
    const response = await fetch(`${BACKEND_URL}/posts`, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      //   body: JSON.stringify(formdatas),
      body: formdatas,
    });

    const post = await response.json();
    console.log(post.data);
    //setPosts(post.posts);
    setPosts(posts.concat(Array.from(post.data)));
  };
  console.log(posts);
  return (
    <AppContext.Provider value={{ posts, getPosts, addPost }}>
      {props.children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider, useGlobalContext };
