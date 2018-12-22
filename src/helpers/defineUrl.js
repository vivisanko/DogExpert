export default function defineUrl({ source, exactly, amount }) {
  if (source === "list") {
    return "https://dog.ceo/api/breeds/list/all";
  }
  if (source === "breed" || source === "subBreed") {
    return `https://dog.ceo/api/breed/${exactly}/images`;
  }
  if (source === "random") {
    return `https://dog.ceo/api/breeds/image/random/${amount}`;
  }
  if (source === "breedRandom" || source === "subBreedRandom") {
    return `https://dog.ceo/api/breed/${exactly}/images/random/${amount}`;
  }
  throw new Error(`unknown source type: ${source} `);
}
