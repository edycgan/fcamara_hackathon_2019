const app = require('../src/app');
const config = require('../configs/config.json');

const port = process.env.PORT || config.express.port;

app.listen(port, function () {
    console.log(`Node running on port ${port}`);
})