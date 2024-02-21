import express, { Request, Response } from 'express';
const fetch = require('node-fetch');

const app = express();
const myToken = "d41a7d79228f0d450da3693d98f5697b";

app.get('/get-id-city/:state/:city', async (req: Request, res: Response) => {
    const city = req.params.city;
    const state = req.params.state;
    const urlIdCity: string = `https://apiadvisor.climatempo.com.br/api/v1/locale/city?name=${city}&state=${state}&token=${myToken}`;

    try {
        const response = await fetch(urlIdCity);
        const data = await response.json();
        res.json(data[0].id);
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
        res.status(500).send('Erro ao buscar dados');
    }
});

app.get('/climate', async (req: Request, res: Response) => {
    const country = "BR";//req.params.country;
    const urlClimate: string = `http://apiadvisor.climatempo.com.br/api/v1/anl/synoptic/locale/${country}?token=${myToken}`;
    try {
        const response = await fetch(urlClimate);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
        res.status(500).send('Erro ao buscar dados');
    }
});

app.get('/climate-rain/:idCity', async (req: Request, res: Response) => {
    const idCity = req.params.idCity;
    const urlClimateRain: string = `http://apiadvisor.climatempo.com.br/api/v1/climate/rain/locale/${idCity}?token=${myToken}`;
    try {
        const response = await fetch(urlClimateRain);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
        res.status(500).send('Erro ao buscar dados');
    }
});

// app.get('/climate-temperature/:idCity', async (req: Request, res: Response) => {
// const idCity = req.params.idCity;
//     try {
//         const urlClimateTemperature: string = `http://apiadvisor.climatempo.com.br/api/v1/climate/temperature/locale/${idCity}?token=${myToken}`;
//         const response = await fetch(urlClimateTemperature);
//         const data = await response.json();
//         res.json(data);
//     } catch (error) {
//         console.error('Erro ao buscar dados:', error);
//         res.status(500).send('Erro ao buscar dados');
//     }
// });

// app.get('/forecast-15-days/:idCity', async (req: Request, res: Response) => {
//     try {
//         const idCity = req.params.idCity;
//         const url_forecast_15_days: string = `http://apiadvisor.climatempo.com.br/api/v1forecast/locale/${idCity}/days/15?token=${myToken}`;
//         const response = await fetch(url_forecast_15_days);
//         const data = await response.json();
//         res.json(data);
//     } catch (error) {
//         console.error('Erro ao buscar dados:', error);
//         res.status(500).send('Erro ao buscar dados');
//     }
// });

// app.get('/forecast-72-hours/:idCity', async (req: Request, res: Response) => {
//     try {
//         const idCity = req.params.idCity;
//         const url_forecast_72_hours: string = `http://apiadvisor.climatempo.com.br/api/v1/forecast/locale/${idCity}/hours/72?token=${myToken}`;
//         const response = await fetch(url_forecast_72_hours);
//         const data = await response.json();
//         res.json(data);
//     } catch (error) {
//         console.error('Erro ao buscar dados:', error);
//         res.status(500).send('Erro ao buscar dados');
//     }
// });

app.listen(3000, () => {
    console.log('Example app listening on port http://localhost:3000/climate');
});
