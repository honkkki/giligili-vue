import axios from 'axios';

const postVideo = form => axios.post('http://127.0.0.1:3000/api/v1/videos', form).then(res => res.data);

const getVideo = id => axios.get('http://127.0.0.1:3000/api/v1/video/${id}', id).then(res => res.data);

//const getVideos = form => axios.post('/api/v1/videos', form).then(res => res.data);

export {
    postVideo,
    getVideo,

}
