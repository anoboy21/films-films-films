import { mapToArray } from "../../helpers";
import { Post, PostPayload } from "../../types";
import { postsDB } from "../../utils/axios";

const save = async (post: PostPayload) => {
  const response = await postsDB.post("/posts.json", post);
  return response.data;
};

const getAll = async (): Promise<Post[]> => {
  const response = await postsDB.get("/posts.json");
  return mapToArray(response.data);
};

const get = async (id: string): Promise<Post> => {
  const response = await postsDB.get(`/posts/${id}.json`);
  return response.data;
};

const patch = async (payload: Post) => {
  await postsDB.patch(`/posts/${payload.id}.json`);
};

export const postApi = { save, getAll, get, patch };
