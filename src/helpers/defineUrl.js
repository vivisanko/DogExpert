export const urlDictionary = (exactly, amount) => {
  const dictionary = {};
  const sourceApi = {
    list: "https://dog.ceo/api/breeds/list/all",
    breed: `https://dog.ceo/api/breed/${exactly}/images`,
    subBreed: `https://dog.ceo/api/breed/${exactly}/images`,
    random: `https://dog.ceo/api/breeds/image/random/${amount}`,
    breedRandom: `https://dog.ceo/api/breed/${exactly}/images/random/${amount}`,
    subBreedRandom: `https://dog.ceo/api/breed/${exactly}/images/random/${amount}`
  };
  Object.keys(sourceApi).map(key => {
    dictionary[key] = sourceApi[key];
    return dictionary;
  });
  return dictionary;
};

export function defineUrl({ source, exactly, amount }) {
  const url = urlDictionary(exactly, amount);
  console.log("url", url);
  console.log("url in helper", url[source]);

  return url[source];
}
