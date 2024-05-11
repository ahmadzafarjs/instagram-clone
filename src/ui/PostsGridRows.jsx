import PostGrid from "./PostGrid";

function PostsGridRows() {
  return (
    <section>
      <div className="grid grid-cols-3 gap-1 mb-12">
        <PostGrid />
        <PostGrid />
        <PostGrid />
        <PostGrid />
        <PostGrid />
        <PostGrid />
        <PostGrid />
        <PostGrid />
        <PostGrid />
        <PostGrid />
      </div>
    </section>
  );
}

export default PostsGridRows;
