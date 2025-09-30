// /**
//  * Типізація HTTP-запитів з Axios
//  *
//  * https://dummyjson.com/docs/posts
//  */

import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
  userId: number;
}

interface GetPostsResponse {
  posts: Post[];
  total: number;
  skip: number;
  limit: number;
}

const getAllPosts = async () => {
  const response = await axios.get<GetPostsResponse>(
    "https://dummyjson.com/posts"
  );
  return response.data;
};

// getAllPosts().then(data => {
//   console.log(data.posts);
// });

const getPostById = async (postId: number) => {
  const response = await axios.get<Post>(
    `https://dummyjson.com/posts/${postId}`
  );
  return response.data;
};

getPostById(1).then(data => {
  console.log(data);
});
//   .then(({ body }) => {
//   console.log(body);
// });

const createPost = async (newPost: Post) => {
  const response = await axios.post<Post>(
    "https://dummyjson.com/posts/add",
    newPost
  );
  return response.data;
};

const postInfo: Post = {
  id: 1,
  title: "His mother had always taught him",
  body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
  tags: ["history", "american", "crime"],
  reactions: {
    likes: 12,
    dislikes: 125,
  },
  views: 1305,
  userId: 11,
};

createPost(postInfo).then(response => {
  console.log(response.id);
});
