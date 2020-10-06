const express = require('express');
const app = express();

app.use(express.static(`./dist/wshfc-front`));
app.get(`/*`, function(req, res){
    res.sendFile(`index.html`, {root: `dist/wshfc-front/`}
    );
});

app.listen(process.env.PORT || 8080);