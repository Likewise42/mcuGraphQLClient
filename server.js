import express from 'express';

let app = express();

const PORT = process.env.PORT || process.env.NODE_PORT || 4200;

console.log(`process.env.node_env = ${process.env.NODE_ENV}`);

app.use(express.static(__dirname + '/dist/mcu-test/'));

app.get('/*', function (req, res) {
    res.sendFile(__dirname + '/dist/mcu-test/index.html');
})

app.listen(PORT, (err) => {
    if (err) {
        throw err;
    }
    console.log(`Listening at ${PORT}`);
});