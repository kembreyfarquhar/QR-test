const db = require("../data/dbConfig");

module.exports = {
  add,
  findById
};

function findById(id) {
  return db("cards")
    .where({ id })
    .first();
}

async function add(card) {
  const [newCard] = await db("cards")
    .insert(card)
    .returning("*");

  return newCard;
}
