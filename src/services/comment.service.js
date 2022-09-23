import {axiosService} from "./axios.servce";
import {urls} from "../config";

const commentService = {
    getComments: (postId) => axiosService.get(`${urls.comments}/?postId=${postId}`),
    createComment:(comment) => axiosService.post(urls.comments,comment)
}


export {
    commentService
}