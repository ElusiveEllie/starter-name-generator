const adjectives = ['Yellow', 'Aggressive', 'Cheerful', 'Charmful', "Tiny", "Bothersome", "Gwumpy", "Feathery"];
const nouns = ['Rock', 'Beaver', 'Door', "Lamp", "Ink", "Box", "Feather", "Waltz"];

const generator = () => {
  return adjectives[Math.floor(Math.random() * adjectives.length)] + " " + nouns[Math.floor(Math.random() * adjectives.length)];
}

module.exports = generator
