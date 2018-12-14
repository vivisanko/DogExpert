export const urlDictionary = (exactly, amount) => {
  const dictionary = {};
  const sourceApi = {
    list: "https://dog.ceo/api/breeds/list/all",
    breed: `https://dog.ceo/api/breed/${exactly}/images`,
    subBread: `https://dog.ceo/api/breed/${exactly}/images`,
    random: `https://dog.ceo/api/breeds/image/random/${amount}`,
    breadRandom: `https://dog.ceo/api/breed/${exactly}/images/random/${amount}`,
    subBreadRandom: `https://dog.ceo/api/breed/${exactly}/images/random/${amount}`
  };
  Object.keys(sourceApi).map(key => {
    dictionary[key] = sourceApi[key];
    return dictionary;
  });
  return dictionary;
};

export function defineUrl({ source = "list", exactly = "", amount = 1 }) {
  const url = urlDictionary(exactly, amount);
  console.log("url", url);
  console.log("url", url[source]);

  return url[source];
}
