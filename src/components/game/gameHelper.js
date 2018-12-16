export const createRandomBreeds = (size, arr) => {
  const randomArr = new Array(size ** 2 / 2).fill(true);
  const randomInteger = max => {
    let random = Math.random() * max;
    random = Math.floor(random);
    return random;
  };
  const result = [];
  randomArr.forEach(() => {
    const randomIndex = randomInteger(arr.length);
    console.log("if", result.includes(arr[randomInteger]));

    // while (result.includes(arr[randomIndex])) {
    //   randomIndex = randomInteger(arr.length);
    // }
    result.push(arr[randomIndex]);
  });

  return result;
};

export const createGameQuery = arrBreeds => {
  const query = arrBreeds.map(breed => {
    const params = {
      source: "breedRandom",
      exactly: breed,
      amount: 2
    };
    return params;
  });
  console.log("query", query);

  return query;
};

export const createRandomSource = arr =>
  arr.flatMap(el => el.message.map(img => ({ breed: el.exactly, image: img })));
