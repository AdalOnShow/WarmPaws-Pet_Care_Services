import React from "react";

const recipes = [
  {
    id: 1,
    name: "Warm Chicken Stew",
    image: "https://www.budgetbytes.com/wp-content/uploads/2021/10/Chicken-Stew-V2.jpg",
    description: "Protein-packed meal to keep your dog cozy during cold evenings.",
  },
  {
    id: 2,
    name: "Pumpkin Oatmeal Biscuits",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx3-Wr10OkSorgCqYBxvTriRrwO1LJyWlJXA&s",
    description: "Crunchy, fiber-rich treats that boost digestion and immunity.",
  },
  {
    id: 3,
    name: "Salmon & Sweet Potato Bowl",
    image: "https://giveitsomethyme.com/wp-content/uploads/2023/03/jerk-salmon.jpg",
    description: "Omega-rich bowl that promotes shiny fur and strong joints.",
  },
  {
    id: 4,
    name: "Warm Veggie Soup",
    image: "https://static.wixstatic.com/media/2ff504_b9dcea119a814ca7a95af71c557863b5~mv2.png/v1/fill/w_568,h_536,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2ff504_b9dcea119a814ca7a95af71c557863b5~mv2.png",
    description: "Gentle, soothing soup for senior pets during chilly nights.",
  },
];

const WinterRecipes = () => {
  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-11/12 mx-auto px-5 text-center">
        <h2 data-aos="fade-right" className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          Healthy Winter Recipes for Pets
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Delicious, vet-approved recipes to keep your pets warm, nourished, and full of energy during the cold season.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {recipes.map((recipe) => (
            <div
              data-aos="fade-up"
              key={recipe.id}
              className="group relative rounded-2xl overflow-hidden shadow-lg bg-white/30 backdrop-blur-md border border-white/40 transition-all duration-300 hover:shadow-2xl"
            >
              <img
                src={recipe.image}
                alt={recipe.name}
                className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="p-5 text-left">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {recipe.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{recipe.description}</p>

                <button className="btn btn-info text-white transition-all duration-300">
                  View Recipe
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WinterRecipes;
