import express from 'express';

let app = express();

const PORT = process.env.PORT || process.env.NODE_PORT || 4200;

app.listen(PORT, (err) => {
    if (err) {
        throw err;
    }
    console.log(`Listening at ${PORT}`);
});