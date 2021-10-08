import axios from 'axios';

class SoyyoService {
    static async getEntities(entity) {
        let response = null;
        let request = {
            headers: {
                "content-type": "application/json"
            },
            method: "GET",
            url: "https://awovcw7p76.execute-api.us-east-1.amazonaws.com/dev/entity/v2.1/entities/" + entity,
            json: true
        };
        try {
            response = getDataIdAxios(request);
        } catch (error) {
            console.log(error);
        }
        return response;
    }
}
async function getDataIdAxios(request) {
    try {
        return await axios({
            method: request.method,
            url: request.url,
            data: request.data,
            headers: request.headers,
            json: true
        })
    } catch (error) {
        console.log(error);
    }
}
export default SoyyoService;