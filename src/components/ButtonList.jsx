import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Gaming",
    "Cooking",
    "News",
    "Cricket",
    "Soccer",
    "Live",
    "Songs",
    "Valentines",
  ];
  return (
    <div className="flex m-4">
      {list.map((item) => (
        <Button key={item} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
