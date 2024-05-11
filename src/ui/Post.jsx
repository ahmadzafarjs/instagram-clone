import { useState } from "react";
import { motion } from "framer-motion";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoBookmarkOutline } from "react-icons/io5";

import { IoMdHeart } from "react-icons/io";
import { IoBookmark } from "react-icons/io5";
import { Link } from "react-router-dom";

function Post() {
  const [isLike, setIsLike] = useState(false);
  const [isSave, setIsSave] = useState(false);
  const [truncatedText, setTruncatedText] = useState(true);
  return (
    <article className="max-w-[470px] border-b  overflow-hidden mb-2 pb-2">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 1 },
        }}
      >
        <div>
          {/*Post Header*/}
          <div className="flex items-center h-20">
            {/*Profile Picture*/}
            <div className="mx-3 sm:ml-2">
              <div className="w-12 h-12 overflow-hidden rounded-full flex items-center justify-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3znAm4yEmRaWeCLnfynJQScYaPdJF8iMo5BN9m6nJgQ&s"
                  alt="dummy"
                />
              </div>
            </div>
            {/*Username*/}
            <div>
              <div>
                <Link to="" className="text-stone-900 font-semibold text-md">
                  Laiba Furqan
                </Link>
                <div>
                  <span className="text-stone-600 italic text-sm">3h.</span>
                </div>
              </div>
            </div>
          </div>
          {/*Post Body/Image*/}
          <div>
            <div>
              <img
                className="max-w-[470px] w-full"
                // src="https://images.unsplash.com/photo-1676545736963-98c64e6ff281?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                src="/post.jpg"
                alt="dummy-post"
              />
            </div>
          </div>
          {/*Post Footer*/}
          <div>
            <div className="mx-3 sm:mx-0">
              {/*Like and Save Operations*/}
              <section className="my-3 flex justify-between">
                <div>
                  <span onClick={() => setIsLike(!isLike)}>
                    {isLike ? (
                      <IoMdHeart className="text-3xl cursor-pointer text-red-600  transition" />
                    ) : (
                      <IoIosHeartEmpty className="text-3xl cursor-pointer hover:text-stone-500 transition" />
                    )}
                  </span>
                </div>
                <div>
                  <span onClick={() => setIsSave(!isSave)}>
                    {isSave ? (
                      <IoBookmark className="text-3xl cursor-pointer text-yellow-600 transition" />
                    ) : (
                      <IoBookmarkOutline className="text-3xl cursor-pointer hover:text-stone-500 transition" />
                    )}
                  </span>
                </div>
              </section>
              {/*Likes*/}
              <div>
                <p className="font-semibold text-sm mb-2">551 Likes</p>
              </div>
              {/*Post Description*/}
              <section>
                <p className="text-sm text-stone-800">
                  {truncatedText
                    ? `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
                     explicabo accusantium eveniet, neque earum sint aperiam
                    inventore, sit nesciunt totam officia! Sequi ipsum quasi
                     voluptates. Optio, repudiandae itaque. Ab, sit`.slice(
                        0,
                        60
                      )
                    : `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
                     explicabo accusantium eveniet, neque earum sint aperiam
                      inventore, sit nesciunt totam officia! Sequi ipsum quasi
                     voluptates. Optio, repudiandae itaque. Ab, sit. `}
                </p>
                <span
                  className="cursor-pointer text-sm text-stone-500"
                  onClick={() => setTruncatedText(!truncatedText)}
                >
                  {truncatedText ? "...more" : "...less"}
                </span>
              </section>
              {/*View Comments*/}
              <div className="my-1">
                <button className="text-sm text-stone-500">
                  View all 200 comments
                </button>
              </div>
              {/*Add Comments*/}
              <form className="flex" action="">
                <input
                  className="w-full outline-none text-sm"
                  type="text"
                  placeholder="Add a comment..."
                />
                <button className="text-sky-700">Post</button>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </article>
  );
}

export default Post;
