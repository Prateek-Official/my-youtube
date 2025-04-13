import { USER_ICON } from "../utils/constants";

const Comments = ({ name, comment, replies }) => {
  console.log(replies);
  return (
    <>
      <div className="flex items-center gap-2 my-1.5 bg-gray-100 p-2 rounded-lg">
        <img alt="user" src={USER_ICON} className="w-[5%] h-[5%]" />
        <div>
          <p className="font-bold">{name}</p>
          <p className="mt-0.5">{comment}</p>
        </div>
      </div>

      <div className="ml-8 border-l-1 border-l-black">
        {replies.map((reply, index) => (
          <Comments
            key={index}
            name={reply.name}
            comment={reply.comment}
            replies={reply.replies}
          />
        ))}
      </div>
    </>
  );
};

export default Comments;
