import axios from 'axios';

const apiImages = axios.create({
    baseURL:'https://pokeres.bastionbot.org/images/pokemon'

});

export default apiImages;