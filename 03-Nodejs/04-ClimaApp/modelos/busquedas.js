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
        console.log(resp.data);
        return []
    }
}

module.exports = Busquedas;