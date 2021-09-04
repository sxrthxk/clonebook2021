import React from "react";
import PostCard from "./PostCard";
import avi from "../../assets//pngs/noavi.png";
import someimage from "../../assets/mockups/Screenshot (12).png";
import wall from '../../assets/mockups/maksym-tymchyk-xHlfZni6UWw-unsplash (1).jpg'

const Posts = () => {
  const posts = [
    {
      id: 1,
      author: "Hanma Baki",
      feeling: "happy",
      avi: avi,
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi incidunt rerum, laboriosam quaerat at rem repellendus atque, ex consectetur magni beatae aliquam reiciendis placeat tempore, ipsam eius ullam vero sit?",
      postImage: someimage,
    },
    {
        id: 2,
        author: "Ohma Tokita",
        avi: avi,
        content: "Hey this works!"
    },
    {
        id: 3,
        author: "Sarthak Gupta",
        avi: avi,
        feeling: "amazed",
        content: "Can't believe the responsiveness😲😲😲"
    }
  ];

  return (
    <>
      {posts.map((post) => (
        <PostCard 
        key={post.id} 
        author={post.author}
        avi={post.avi}
        content={post.content}
        postImage={post.postImage}
        feeling={post.feeling}
        />
      ))}
    </>
  );
};

export default Posts;
