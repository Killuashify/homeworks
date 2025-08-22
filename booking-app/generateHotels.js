const fs = require("fs");

const db = JSON.parse(fs.readFileSync("db.json", "utf8"));

const hotels = [];

db.destination.forEach((dest) => {
  for (let i = 1; i <= 3; i++) {
    hotels.push({
      id: hotels.length + 1,
      name: `${dest.label} Hotel ${i}`,
      destinationId: dest.value,
      price: Math.floor(Math.random() * 200) + 50,
      rating: (Math.random() * 2 + 3).toFixed(1),
    });
  }
});

db.hotels = hotels;

fs.writeFileSync("db.json", JSON.stringify(db, null, 2));

console.log("✅ Згенеровано готелі для всіх destination!");
