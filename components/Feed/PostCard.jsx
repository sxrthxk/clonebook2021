import React, { useState } from "react";
import Image from "next/image";
import { FaEllipsisH, FaRegCommentAlt } from "react-icons/fa";
import { TiArrowForwardOutline } from "react-icons/ti";
import { FiThumbsUp } from "react-icons/fi";
import ImageModal from "./ImageModal";

const PostCard = ({ author, avi, postImage, content, feeling }) => {
  const [modal, setModal] = useState(false);

  const modalHandler = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className="w-full m-3 bg-white p-3 rounded-2xl">
      {/* START POST HEADER */}
      <div className="flex justify-between items-center">
        <div className="flex">
          <Image
            src={avi}
            width={40}
            height={40}
            alt="Profile Photo"
            className="rounded-full"
          ></Image>
          <div className="flex flex-col pl-3">
            <div className="inline-flex">
              <h2 className="font-semibold">{author} </h2>
              {feeling && (
                <span className="whitespace-pre"> is feeling {feeling}.</span>
              )}
            </div>
            <p className="text-sm text-gray-500">16m</p>
          </div>
        </div>
        <FaEllipsisH className="mb-3 mt-0 mx-2 rounded-full hover:bg-gray-200 p-1.5 text-3xl cursor-pointer"/>
      </div>
      {/* END POST HEADER */}

      {/* START POST CONTENT */}
      <div className="w-full py-2">
        {content && content}

        {postImage && (
          <>
            <Image
              src={postImage}
              layout="responsive"
              onClick={modalHandler}
              className="cursor-pointer"
            />
            {modal && <ImageModal src={postImage} closeModal={closeModal} />}
          </>
        )}
      </div>
      {/* END POST CONTENT */}
      <hr />
      {/* START POST FOOTER */}
      <div className="flex justify-between items-center mt-2">
        <div className="flex items-center justify-between hover:bg-gray-200 py-1 px-2 rounded-lg transition-all cursor-pointer">
          <FiThumbsUp className="h-4 px-2 w-auto" />
          Like
        </div>
        <div className="flex items-center justify-between hover:bg-gray-200 py-1 px-2 rounded-lg transition-all cursor-pointer">
          <FaRegCommentAlt className="h-4 px-2 w-auto" />
          Comment
        </div>
        <div className="flex items-center justify-between hover:bg-gray-200 py-1 px-2 rounded-lg transition-all cursor-pointer">
          <TiArrowForwardOutline className="h-4 px-2 w-auto" />
          Share
        </div>
      </div>
      {/* </div> */}
      {/* END POST FOOTER */}
    </div>
  );
};

export default PostCard;