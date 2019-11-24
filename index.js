const server = require("./api/server");

const port = process.env.PORT || 4300;
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));
