import API from "./_config";

export interface Post{
  userId?: number
  id?: number
  title?: string
  body?: string
}

export function fetchPost(id:string){
  return API.get<Post>(`/posts/${id}`)
}