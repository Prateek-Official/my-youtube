import Comments from "./Comments";

const CommentsContainer = () => {
  const totalComments = [
    {
      name: "Prateek Verma",
      comment:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad quidem,exercitationem sapiente maiores corrupti ipsum pariatur similique ab a",
      replies: [
        {
          name: "Prateek Verma",
          comment:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad quidem,exercitationem sapiente maiores corrupti ipsum pariatur similique ab a",
          replies: [
            {
              name: "Prateek Verma",
              comment:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad quidem,exercitationem sapiente maiores corrupti ipsum pariatur similique ab a",
              replies: [],
            },
          ],
        },
      ],
    },
    {
      name: "Prateek Verma",
      comment:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad quidem,exercitationem sapiente maiores corrupti ipsum pariatur similique ab a",
      replies: [
        {
          name: "Prateek Verma",
          comment:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad quidem,exercitationem sapiente maiores corrupti ipsum pariatur similique ab a",
          replies: [],
        },
        {
          name: "Prateek Verma",
          comment:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad quidem,exercitationem sapiente maiores corrupti ipsum pariatur similique ab a",
          replies: [
            {
              name: "Prateek Verma",
              comment:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad quidem,exercitationem sapiente maiores corrupti ipsum pariatur similique ab a",
              replies: [
                {
                  name: "Prateek Verma",
                  comment:
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad quidem,exercitationem sapiente maiores corrupti ipsum pariatur similique ab a",
                  replies: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Prateek Verma",
      comment:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad quidem,exercitationem sapiente maiores corrupti ipsum pariatur similique ab a",
      replies: [
        {
          name: "Prateek Verma",
          comment:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad quidem,exercitationem sapiente maiores corrupti ipsum pariatur similique ab a",
          replies: [
            {
              name: "Prateek Verma",
              comment:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad quidem,exercitationem sapiente maiores corrupti ipsum pariatur similique ab a",
              replies: [
                {
                  name: "Prateek Verma",
                  comment:
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad quidem,exercitationem sapiente maiores corrupti ipsum pariatur similique ab a",
                  replies: [],
                },
              ],
            },
          ],
        },
        {
          name: "Prateek Verma",
          comment:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad quidem,exercitationem sapiente maiores corrupti ipsum pariatur similique ab a",
          replies: [
            {
              name: "Prateek Verma",
              comment:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad quidem,exercitationem sapiente maiores corrupti ipsum pariatur similique ab a",
              replies: [],
            },
          ],
        },
      ],
    },
    {
      name: "Prateek Verma",
      comment:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad quidem,exercitationem sapiente maiores corrupti ipsum pariatur similique ab a",
      replies: [
        {
          name: "Prateek Verma",
          comment:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad quidem,exercitationem sapiente maiores corrupti ipsum pariatur similique ab a",
          replies: [
            {
              name: "Prateek Verma",
              comment:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad quidem,exercitationem sapiente maiores corrupti ipsum pariatur similique ab a",
              replies: [
                {
                  name: "Prateek Verma",
                  comment:
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad quidem,exercitationem sapiente maiores corrupti ipsum pariatur similique ab a",
                  replies: [
                    {
                      name: "Prateek Verma",
                      comment:
                        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad quidem,exercitationem sapiente maiores corrupti ipsum pariatur similique ab a",
                      replies: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Prateek Verma",
      comment:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad quidem,exercitationem sapiente maiores corrupti ipsum pariatur similique ab a",
      replies: [],
    },
    {
      name: "Prateek Verma",
      comment:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad quidem,exercitationem sapiente maiores corrupti ipsum pariatur similique ab a",
      replies: [
        {
          name: "Prateek Verma",
          comment:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad quidem,exercitationem sapiente maiores corrupti ipsum pariatur similique ab a",
          replies: [],
        },
      ],
    },
  ];

  return (
    <div className="my-16">
      <h1 className="text-3xl font-bold">Comments...</h1>

      <div className="mt-6">
        {totalComments.map((cmt, index) => (
          <div className="my-8">
            <Comments
              key={index}
              name={cmt.name}
              comment={cmt.comment}
              replies={cmt.replies}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentsContainer;
