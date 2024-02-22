import React from "react";
import appwriteService from "../appwrite/services";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage, userName }) {
  return (
    <Link to={`/post/${$id}`}>
      <div
        className="w-full bg-green-300  rounded-xl p-4 s
      "
      >
        <div className="m-auto rounded-xl mb-4 h-32 md:h-52  overflow-hidden">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="h-[100%] w-[100%]"
          />
        </div>
        <div className="text-xl font-bold overflow-hidden text-green-950">
          {title}
        </div>
        <h3 className="text-green-800">by {userName}</h3>
      </div>
    </Link>
  );
}

export default PostCard;
