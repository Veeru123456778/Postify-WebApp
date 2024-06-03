import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/userContext";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Navbar from "../components/Navbar";

const Home = () => {
  const { token, setToken } = useContext(UserContext);
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const onRefresh = async () => {
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        setToken(storedToken);
      } else {
        navigate("/signin");
      }
    };

    onRefresh();
  }, [navigate, setToken]);

  useEffect(() => {
    if (token) {
      fetchPosts();
    }
  }, [token, page]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
      );
      setPosts((prevPosts) => [...prevPosts, ...response.data]);
      setHasMore(response.data.length > 0);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const fetchMoreData = () => {
    setPage(page + 1);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto p-4">
        <InfiniteScroll
          dataLength={posts.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<h4 className="text-center">Loading...</h4>}
          endMessage={<p className="text-center">No more posts</p>}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
            {posts.map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden lg:w-full"
              >
                <img
                  src={`https://source.unsplash.com/random/300x200?sig=${post.id}`}
                  alt="Post"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 h-[50%] overflow-auto hide-scrollbar">
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-700">{post.body}</p>
                </div>
              </div>
            ))}
          </div>
        </InfiniteScroll>
      </main>
    </div>
  );
};

export default Home;
