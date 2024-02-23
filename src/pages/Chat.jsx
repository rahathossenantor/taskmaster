import { useGetPostsQuery } from "../redux/features/api/baseApi";

const Chat = () => {
  const { data: posts = [] } = useGetPostsQuery();

  return (
    <div>
      <h1 className="text-center text-4xl mt-4 mb-2">Feed</h1>
      <div className="border">
        {
          posts?.map(post =>
            <div key={post.id} className="border m-3 p-3 text-center">
              <h3 className="text-2xl mb-1">{post.title}</h3>
              <p>{post.body}</p>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Chat;
