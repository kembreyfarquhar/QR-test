exports.up = function(knex) {
  return knex.schema.createTable("cards", tbl => {
    tbl.increments();

    tbl.integer("user_id").notNullable();

    tbl.string("first_name");

    tbl.string("last_name");

    tbl.string("company");

    tbl.string("position");

    tbl.string("phone");

    tbl.text("qr_code").unique();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cards");
};
