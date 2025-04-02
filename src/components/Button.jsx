const Button = ({ name }) => {
  return (
    <div>
      <button className="py-2 px-4 m-2 bg-gray-200 rounded-lg cursor-pointer">
        {name}
      </button>
    </div>
  );
};

export default Button;
