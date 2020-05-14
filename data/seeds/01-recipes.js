
exports.seed = function(knex) {
  return knex('recipes').insert([   
    { 
      name: "bacon & eggs", 
      description: "classic home diner style recipe",
      num_of_ingredients: 2,
      ingredient: "egg",
      qty_of_ingredient_in_rec: 2.0,
      instructions: {
        steps: ["step 1: get eggs", "step 2: get bacon", "step 3: cook"]
      }
    },
  ]);
};
