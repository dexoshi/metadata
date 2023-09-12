const fs = require("fs");
const cards = require("./cards.json");

for (var i = 0; i < 256; i++) {
  const metadata = {
    name: `0x${Number(i).toString(16).padStart(2, "0").toUpperCase()}`,
    image: `ipfs://bafybeigxvgxcaukp6xnmz3ksya4sghptxrdlns5gghqvuvz6tadpirpc5m/${i}.png`,
    cacheImage: `https://github.com/dexoshi/cards/blob/main/cards/${i}.png?raw=true`,
    description: `Dexoshi Card #${i}`,
    external_url: "https://www.lensfrens.xyz/dexoshi.lens",
    attributes: [
      {
        trait_type: "ID",
        value: i,
      },
      {
        trait_type: "Hex",
        value: `0x${Number(i).toString(16).padStart(2, "0").toUpperCase()}`,
      },
      {
        trait_type: "Stars",
        value: cards[i].stars,
      },
      {
        trait_type: "Class",
        value: cards[i].class,
      },
    ],
  };

  // write
  fs.writeFileSync(`./metadata/${i}.json`, JSON.stringify(metadata, null, 2));
}
