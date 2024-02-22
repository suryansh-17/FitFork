import React from "react";
import appwriteService from "../appwrite/services";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage, userName }) {
  return (
    <Link to={`/post/${$id}`}>
      <div
        className="w-full bg-gray-100 rounded-xl p-4 s
      "
      >
        <div className="m-auto rounded-xl mb-4 h-32 overflow-hidden">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="h-[100%] w-[100%]"
          />
        </div>
        <div className="text-xl font-bold overflow-hidden">{title}</div>
        <h3>by {userName}</h3>
      </div>
    </Link>
  );
}

export default PostCard;
