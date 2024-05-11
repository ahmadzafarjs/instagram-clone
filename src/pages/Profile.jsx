import Avatar from "../ui/Avatar";
import PostsGridRows from "../ui/PostsGridRows";

function Profile() {
  return (
    <div>
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-center gap-7 mt-12 px-5 sm:px-0">
        {/* Profile Picture */}
        <div className="w-[100px] h-[100px] flex items-center justify-center">
          <div>
            <Avatar
              url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs-XmkL7gPqsEQH81QmLSwsJGO1c-aSCssCy4n4m0Bjg&s"
              alt="me"
              h="20"
              w="20"
            />
          </div>
        </div>
        {/* Name Info */}
        <div className=" max-w-[470px]">
          <div>
            <span className="text-3xl">maryamnawaz002</span>
          </div>
          <div className="my-2 flex gap-5">
            <div>
              <span className="font-semibold">9</span>
              <span>-posts</span>
            </div>
            <div>
              <span className="font-semibold">1M</span>
              <span>-followers</span>
            </div>
            <div>
              <span className="font-semibold">3</span>
              <span>-following</span>
            </div>
          </div>
          <div className="my-3">
            <h3 className="font-bold">Maryam Nawaz</h3>
            <p className="text-stone-700 text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic sint
              nulla aspernatur modi quas rem maiores a laborum, deserunt dicta.
            </p>
          </div>
          <div>
            <a
              className="text-blue-600 underline"
              href="https://www.codebakery.online"
            >
              www.codebakery.online
            </a>
          </div>
        </div>
      </div>
      {/* Posts Grid */}
      <hr className="my-12" />
      <PostsGridRows />
    </div>
  );
}

export default Profile;
