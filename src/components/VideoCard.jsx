const VideoCard = ({ info }) => {
//   console.log(info);

  if (!info) {
    return null;
  }

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const { viewCount } = statistics;

  return (
    <div className="w-72 p-4 m-4 shadow-md overflow-hidden rounded-xl h-[450px]">
      <img src={thumbnails?.medium?.url} alt="card thumbnail" className="rounded-xl" />
      <h1 className="font-bold text-lg leading-6 my-2">{title}</h1>
      <p>{channelTitle}</p>
      <p>{viewCount} views</p>
    </div>
  );
};

export default VideoCard;
