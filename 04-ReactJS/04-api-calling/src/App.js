import "./App.css";
import { useState, useEffect } from "react";
import { getPosts, getRandomUser } from "./api/index";
import PostCards from "./components/PostCards";
import UserCard from "./components/UserCard";

function App() {
  const [data, setData] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    getPosts().then((posts) => {
      setData(posts);
    });
  }, []);

  useEffect(() => {
    getRandomUser().then((userdata) => setUser(userdata));
  }, []);


  return (
   
    <div>

      <UserCard userProp = {user} />

    
    <div className="postCardContainer">
        {data ? (
          data.map((d) => <PostCards id={d.id} title={d.title} body={d.body} />)
        ) : (
          <p>No content found</p>
        )}
        </div>
      </div>
  );
}

export default App;
