import {highestInArray} from '../utils/highestInArray'
const fetchRecentAlbum = async() => {
    const endpoint = `https://jsonplaceholder.typicode.com/photos`;
    const response = await fetch(endpoint);
    const data = await response.json();

    return data.map((albumId) =>({
        ...albumId, title: highestInArray([...albumId.title, ...albumId.thumbnailUrl])
    }));
};
  
export default fetchRecentAlbum;