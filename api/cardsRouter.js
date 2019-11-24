require("dotenv").config();

const router = require("express").Router();
const cloudinary = require("cloudinary").v2;

const Cards = require("./cardsModel");
const generateQRCode = require("./generateQRCode");

router.post("/:id", generateQRCode, async (req, res) => {
  const cardObj = {
    user_id: req.params.id,
    ...req.body,
    qr_code: req.qr_code
  };

  console.log(req.qr_code);
  console.log(typeof req.qr_code);

  //   res.send("ok");

  //   cloudinary.uploader.upload(
  //     `data:image/png;base64,${req.qr_code.toString("base64")}`,
  //     function(error, result) {
  //       console.log(result);
  //       console.log(error);
  //     }
  //   );

  Cards.add(cardObj)
    .then(saved => res.status(201).json(saved))
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err.toString() });
    });
});

router.get("/:id", (req, res) => {
  res.setHeader("Content-Type", "image/svg+xml");

  Cards.findById(req.params.id)
    .then(card => {
      let img = card.qr_code;
      res.end(img);
    })
    .catch(err => res.status(500).json({ error: err.toString() }));
});

module.exports = router;
