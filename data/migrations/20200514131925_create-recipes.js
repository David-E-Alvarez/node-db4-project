
exports.up = function(knex) {
    return knex.schema
        .createTable('recipes', tbl => {
            tbl.increments('id');
            tbl.string('name').notNullable();
            tbl.text('description');
            tbl.integer('num_of_ingredients');
            tbl.string('ingredient');
            tbl.float('qty_of_ingredient_in_rec');
            tbl.text('instructions');
        })
        .createTable('ingredients', tbl => {
            tbl.increments();
            tbl.string('name').notNullable();
            tbl.text('description');
            tbl.integer('recipe_id')
                .references('id')
                .inTable('recipes');
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes');
};
