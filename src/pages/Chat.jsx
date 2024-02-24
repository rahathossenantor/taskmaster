import { useForm } from "react-hook-form";
import { useGetPostsQuery } from "../redux/features/api/baseApi";

const Chat = () => {
  const { data: posts = [] } = useGetPostsQuery();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div>
      <h1 className="text-center text-4xl mt-4 mb-2">Feed</h1>
      <div className="border">
        <div className="border p-3 m-3 text-center">
          <form onSubmit={handleSubmit(onSubmit)} className="flex gap-3 items-center justify-center">
            <input type="text" id="post" className="w-full rounded-xl" {...register("post")} />
            <button className="btn bg-blue-600 text-white">Post</button>
          </form>
        </div>
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
