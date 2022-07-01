import API from "./_config";

export interface PostType {
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
}

export function fetchPost(id: string) {
  return API.get<PostType>(`/posts/${id}`);
}
