import Avatar from "./Avatar";
function PostPreview() {
  return (
    <div className="grid grid-cols-[auto_auto]">
      {/* Image Preview */}
      <div className="h-[80vh] ">
        <div className="h-full">
          <img
            className="h-full"
            src="https://images.unsplash.com/photo-1598214886806-c87b84b7078b?q=80&w=1625&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
      <div className="bg-amber-300 max-w-[400px]">
        <div>
          <Avatar
            url="https://i.pinimg.com/236x/6f/21/8f/6f218f08cba91d3da0a832fcdd6dfc43.jpg"
            alt="avatar"
            h="12"
            w="12"
          />
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default PostPreview;
