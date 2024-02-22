import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/services";
import { useSelector } from "react-redux";
function MyPosts() {
  const [posts, setPosts] = useState([]);
  const userData = useSelector((state) => state.auth.userData);
  if (!userData) window.location.reload();
  function isAuthor(post, userData) {
    return post && userData ? post.userId === userData.$id : false;
  }

  appwriteService.getPosts([]).then((posts) => {
    if (posts) {
      setPosts(posts.documents);
    }
  });
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map(
            (post) =>
              isAuthor(post, userData) && (
                <div key={post.$id} className="p-2 w-1/2 md:w-1/4 lg:w-1/5">
                  <PostCard {...post} />
                </div>
              )
          )}
        </div>
      </Container>
    </div>
  );
}

export default MyPosts;
