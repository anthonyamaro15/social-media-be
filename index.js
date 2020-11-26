require("dotenv").config();
const server = require("./api/server");


const PORT = process.env.PORT || 4002;


server.listen(PORT, () => console.log(`sever running in ${PORT}`));