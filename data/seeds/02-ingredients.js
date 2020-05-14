
exports.seed = function(knex) {
  return knex('ingredients').insert([   
    { name: "egg", description: "organic, free-range, and grande", recipe_id: 1 },
    { name: "bacon", description: "happy healthy pigs from family business", recipe_id: 1}
  ]);
};
