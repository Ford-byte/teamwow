import axios from 'axios';
import express from 'express';

const app = express();
app.use(express.json());


axios.get('https://api.spotify.com/v1/search?q=Bilog+Na+Naman+Ang+Buwan&type=track', {
    headers: {
        'Authorization': 'Bearer BQBaUBH0YEQcXT2lU8rLb_YsvRTQkA1OUjOMCQNZnuckXYyi9jzDiB4uaWl1x7hY_c1EQrj7Eh7ZQsj3z2o22Xy5EORxVD7iFFTO38ikJuD0tEd2SlXpWFsNHVxKDUp99j8sBsoQ1_0Czi7lJU6nFNZ4IlWplSanDjgf40XG_VvMJToNAXr-z-4rgxiTjrYVIBpRYJc3u3lvsyezTG0'
    }
}).then((data) => {
    console.log(data.data.tracks.items[1].id);
})