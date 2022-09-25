import {axiosService} from "./axios.service";

import {urls} from "../config";

const postService = {
    getAll:(id)=> axiosService.get(urls.posts+'/'+id)
}

export {
    postService
}