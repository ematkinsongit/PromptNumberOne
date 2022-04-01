import Form from "./Components/Form";
import { useState, useEffect } from "react";
import PostsList from "./Components/PostsList";

function App() {
  const [postList, setPostList] = useState([]);
  const [intervalIdInState, setIntervalIdInState] = useState(null);
  const storageData = JSON.parse(localStorage.getItem("postsInStorage"));
  const addPost = (post) => {
    setPostList([...postList, post]);
  };

  useEffect(() => {
    localStorage.setItem("postsInStorage", JSON.stringify(postList));
  }, [postList]);
  useEffect(() => {
    if (storageData) {
      setPostList(storageData);
    }
  }, []);

  useEffect(() => {
    if (intervalIdInState !== null) {
      clearInterval(intervalIdInState);
    }
    const intervalId = setInterval(
      () => {
        //DO SOMETHING HERE
      },

      20000
    );
    setIntervalIdInState(intervalId);
    return () => {
      clearInterval(intervalIdInState);
    };
  }, [postList]);
  return (
    <div className="App">
      <Form addPost={addPost} />
      <PostsList postList={postList} />
    </div>
  );
}

export default App;
