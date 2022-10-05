import {axiosService} from "./axios.service";
import {urls} from "../config";

const postService = {
    getAll:() => axiosService.get(urls.posts)
}
export {
  postService
}