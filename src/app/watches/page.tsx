import React from "react";

const Watches = () => {
  const watchData = [
    {
      id: 1,
      name: "Datejust-36",
      price: 12995,
      description: "Oyster,36 mm, Oystersteel and white gold",
      image: "/rolex-1.jpg",
    },
    {
      id: 2,
      name: "Sky-Dweller",
      price: 17500,
      description: "Oyster, 42 mm Everose gold",
      image: "/rolex-2.jpg",
    },
    {
      id: 3,
      name: "Day-Date 36",
      price: 37500,
      description: "Oyster, 36 mm, platinum",
      image: "/rolex-3.jpg",
    },
    {
      id: 4,
      name: "1908",
      price: 29200,
      description: "39 mm, platinum, polished finish",
      image: "/rolex-4.jpg",
    },
    {
      id: 5,
      name: "Yatch-Master 42",
      price: 31800,
      description: "Oyster, 42 mm, yellow gold",
      image: "/rolex-5.jpg",
    },
    {
      id: 6,
      name: "Air-King",
      price: 7100,
      description: "Oyster, 40 mm, Oystersteel",
      image: "/rolex-6.jpg",
    },
  ];

  return (
    <div>
      <div className="watches">
        {watchData.map((watch) => (
            <div key={watch.id} className="watch-card">
            <img src={watch.image} alt={watch.name} />
            <h3>{watch.name}</h3>
            <p>{watch.description}</p>
            <div className="price">${watch.price}</div>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Watches;
