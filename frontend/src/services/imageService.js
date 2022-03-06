
import axios from 'axios';
import {API_URL} from './httpService';



export function addImage ( data ) {

    const imageData = new FormData() ;
    imageData.append('file',JSON.stringify(data));
    console.log('imageService--->data',data);
    console.log('addImage***********imageData',imageData);
    const config = {

        headers: {
            'content-type': 'multipart/form-data'
        },

    };

  //  Flatted.stringify(data);
 //   Flatted.parse(JSON.stringify(data));
    return axios.post(`${API_URL}/image/upload`,imageData,config).then(res => console.log('statusText',res.statusText));
}

const imageService = {
    addImage,
   
}

export default imageService;