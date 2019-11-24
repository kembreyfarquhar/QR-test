const axios = require("axios");

module.exports = (req, res, next) => {
  //request will have firstname lastname company position email phone
  const code_string = "chanceembreyfarquhar";

  axios
    .post(
      `https://api.qrserver.com/v1/create-qr-code/?data=${code_string}&format=svg`
    )
    .then(res => {
      req.qr_code = res.data;
      next();
    })
    .catch(err => {
      res.status(500).json({ error: err.toString() });
    });
};
