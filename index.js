const fs = require("fs");
const cards = require("./cards.json");

for (let card in cards) {
  const metadata = {
    name: `0x${Number(card).toString(16).padStart(2, "0").toUpperCase()}`,
    image: `ipfs://bafybeigxvgxcaukp6xnmz3ksya4sghptxrdlns5gghqvuvz6tadpirpc5m/${card}.png`,
    cacheImage: `https://github.com/dexoshi/cards/blob/main/cards/${card}.png?raw=true`,
    description: `Dexoshi Card #${card}`,
    external_url: "https://www.lensfrens.xyz/dexoshi.lens",
    attributes: [
      {
        trait_type: "ID",
        value: Number(card),
      },
      {
        trait_type: "Hex",
        value: `0x${Number(card).toString(16).padStart(2, "0").toUpperCase()}`,
      },
      {
        trait_type: "Stars",
        value: cards[card].stars,
      },
      {
        trait_type: "Class",
        value: cards[card].class,
      },
    ],
  };

  // write
  fs.writeFileSync(`./metadata/${card}.json`, JSON.stringify(metadata, null, 2));
}
