const { PORT } = require('./config/globals');
const { getConnection } = require('../src/dao/db/connection');
const app = require('./server');

getConnection().then((message) => {
    console.log(message);
    app.listen(PORT, () => {
        console.log(`Listen on port: ${PORT}`);
    })
}).catch(console.log);