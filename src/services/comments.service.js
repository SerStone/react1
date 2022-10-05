import {axiosService} from "./axios.service";
import {urls} from "../config";

const commentService = {
    getAll:() => axiosService.get(urls.comments)
}
export {
    commentService
}