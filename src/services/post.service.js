import {axiosService} from "./axios.servce";
import {urls} from "../config";

const postService = {
    getPosts: (userId) => axiosService.get(`${urls.posts}/?userId=${userId}`),
    createPost:(post) => axiosService.post(urls.posts,post)
}
export {
    postService
}