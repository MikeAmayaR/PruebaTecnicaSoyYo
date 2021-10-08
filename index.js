'use strict';

import bodyParser from 'body-parser';
import express from 'express';
import soyyoRoute from './route/SoyyoRoute.js';
const app = express();
const port = 3000;

app.use(bodyParser.json({ limit: '60mb' }));
app.use(bodyParser.urlencoded({ limit: '60mb', extended: false }));

app.use("/test-soyyo/entities", soyyoRoute);

app.get('/develop/health', (req, res) => res.status(200).send({
    message: 'Service Working.'
}));

app.listen(port, () => {
    console.log(`Server is running on PORT ${port}`);
});
export default app;