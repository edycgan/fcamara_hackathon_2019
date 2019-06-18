const app = require('../src/app');
const config = require('../configs/config.json');

const port = config.express.port;
const host = config.express.host;

app.listen(port,host, function () {
    console.log(`Node running on port ${port}`);
})