import Util from '../util/util.js';
import ServiceSoyYo from '../service/SoyyoService.js';

const util = new Util();

class SoyyoController {
    static async getEntities(req, res) {
        let body = req.body
        if (body.endId < body.startId) {
            util.setSuccess(200, 'SY01', 'El endId no puede ser menor a startId', 'error', {});
            return util.send(res);
        }
        if (body.endId > 20 ||  body.endId < 1 ) {
            util.setSuccess(200, 'SY01', 'endId no puede ser mayor a 20 ni menor de 1', 'error', {});
            return util.send(res);
        }
        if (body.startId.length > 20 ||  body.startId.length < 1 ) {
            util.setSuccess(200, 'SY01', 'startId no puede ser mayor a 20 ni menor de 1', 'error', {});
            return util.send(res);
        }
        if (typeof body.startId !== "number" || typeof body.endId !== "number") {
            util.setSuccess(200, 'SY01', 'startId y endId deben ser de tipo numero', 'error', {});
            return util.send(res);
        }
        try {
            let listEntities = [];
            let min = Math.min(body.startId, body.endId);
            let max = Math.max(body.startId, body.endId);
            let output = Array.from({
                length: max - min + 1
            }, (v, i) => i + min);
            if (body.startId > body.endId) output.reverse();
            for (let item of output) {
                let consultaEntidades = await ServiceSoyYo.getEntities(item);
                listEntities.push(consultaEntidades.data);
            }
            util.setSuccess(200, 'SY02', 'Respuesta Consumo Entidades', 'success',
                listEntities
            );
            return util.send(res);
        } catch (error) {
            console.log(error);
        }
    }
}
export default SoyyoController;