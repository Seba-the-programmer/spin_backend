const express = require('express');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3200;

app.get('/', (req ,res) => {
    res.send('It works!')
})

app.listen(PORT, () => {
  console.log(`Your server is running on http://localhost:${PORT}`);
});
