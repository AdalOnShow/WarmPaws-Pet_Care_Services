

const WinterCareTips = () => {
  const winterTips = [
    {
      id: 1,
      title: "Keep Them Warm Indoors",
      description:
        "Ensure your pet has a cozy, draft-free place to sleep with warm blankets or a heated pet bed.",
      image: "https://www.switzerveterinaryclinic.com/blog/wp-content/uploads/2023/11/iStock-1446898945-1-2000x1500.jpg"
    },
    {
      id: 2,
      title: "Limit Outdoor Time",
      description:
        "Avoid long walks during extreme cold. Shorter, more frequent walks are better for your pet’s comfort.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5WTY0HAqDi0FVtzwNMc3s9fXh4Ga6tRcf_g&s"
    },
    {
      id: 3,
      title: "Use Pet-Friendly Paw Balm",
      description:
        "Protect your pet’s paws from salt and ice with a moisturizing balm after every walk.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSAynaIbPhTKlG-Hk8Sr1ptbVZcxUO3BEbb-WEeh-ugWDedXIbGddjkO52Z8Dul3UbMCU&usqp=CAU"
    }
  ];

  return (
    <section className="py-12 bg-blue-50">
      <div className="max-w-11/12 mx-auto px-4 text-center">
        <h2 data-aos="fade-right" className="text-3xl font-bold text-gray-800 mb-8">
          Winter Care Tips for Pets
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {winterTips.map((tip) => (
            <div
              data-aos="fade-up"
              key={tip.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-5 flex flex-col items-center"
            >
              <img
                src={tip.image}
                alt={tip.title}
                className="w-24 h-24 object-cover rounded-full mb-4 border-4 border-blue-100"
              />
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                {tip.title}
              </h3>
              <p className="text-gray-500 text-sm">{tip.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WinterCareTips;
