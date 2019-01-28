const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const cnpj_registred = [
    '61190658000106',
    '00000000542245',
    '17298092000130',
    '60872504000123'
];

const validTokens = [
    '23456789'
];

app.get('/quote/:cnpj', function (req, res) {
    if (req.headers.authorization && validTokens.indexOf(req.headers.authorization) > -1) {
        const result = cnpj_registred.indexOf(req.params.cnpj) > -1;
        if (result) {
            return res.send(200, {
                message: 'CNPJ encontrado.',
                success: true,
            });
        }
        return res.send(404, {
            message: 'CNPJ não encontrado.',
            success: false
        });
    }
    return res.send(401, {
        message: 'Não autorizado.',
        success: false,
    });
});

app.listen(process.env.PORT || 8080);