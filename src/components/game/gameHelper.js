const randomInteger = max => {
  let random = Math.random() * max;
  random = Math.floor(random);
  return random;
};

export const createRandomBreeds = (size, arr, complexity) => {
  const randomArr = new Array(size ** 2 / complexity).fill(true);
  const result = [];
  randomArr.forEach(() => {
    const randomIndex = randomInteger(arr.length);
    result.push(arr[randomIndex]);
  });

  return result;
};

export const createGameQuery = (arrBreeds, complexity) => {
  const query = arrBreeds.map(breed => {
    const params = {
      source: "breedRandom",
      exactly: breed,
      amount: complexity
    };
    return params;
  });
  return query;
};

export const createRandomSource = arr =>
  arr.flatMap(el => el.message.map(img => ({ breed: el.exactly, image: img })));

export const shuffleSource = arr => {
  const result = arr;
  if (arr !== undefined) {
    for (let i = 0; i < result.length; i += 1) {
      const el = result[i];
      const randomInd = randomInteger(result.length);
      result[i] = result[randomInd];
      result[randomInd] = el;
    }
    for (let i = 0; i < result.length; i += 1) {
      result[i].id = i;
      result[i].isActive = true;
    }
  }
  return result;
};
