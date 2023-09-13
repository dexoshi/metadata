const fs = require("fs");
const cards = require("./cards.json");

for (let card in cards) {
  const metadata = {
    name: `0x${Number(card).toString(16).padStart(2, "0").toUpperCase()}`,
    image: `https://ipfs.io/ipfs/bafybeiazjjtzjyvbrif6sgvzmuakhhnpo6jyrxfasaf36queafcvd4xqhq/${card}.gif`,
    cacheImage: `https://github.com/dexoshi/cards/blob/main/gif/${card}.gif?raw=true`,
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
