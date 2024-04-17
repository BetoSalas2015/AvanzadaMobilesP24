const axios = require('axios');

class Busquedas {
    historial = [];

    constructor( ) {

    }

    async ciudad( lugar = '' ) {
        const consulta = axios.create({
            baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
            params: {
                limit: 5,
                language: 'es',
                'access_token': 'pk.eyJ1Ijoicm9iZXJ0b3NhbGF6YXJtYXJxdWV6IiwiYSI6ImNsMXdyejhqNTJ6bWozY3BjaTlkMHBqaTQifQ.e6d_r7x8mhfRqOKlK3QEQg'
            }
        });
        const resp = await consulta.get();
        return resp.data.features.map( (ubicacion) => ({
            id: ubicacion.id,
            lugar: ubicacion.place_name_es,
            lat: ubicacion.center[1],
            lon: ubicacion.center[0]
        }));
    }
}

module.exports = Busquedas;

