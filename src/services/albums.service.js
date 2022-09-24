import {axiosService} from "./axios.service";

import {urls} from "../config";

const albumsService = {
    getAll:() => axiosService.get(urls.albums)
}

export {
    albumsService
}