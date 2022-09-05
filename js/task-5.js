const inputData = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 4, name: "Item 4" },
  { id: 7, name: "Item 7" },
];

function normalizationData(data) {
  const entitiesObj = {};
  const arrayId = [];
  const resultData = {};
  data.forEach((item) => {
    let itemId = item.id;
    entitiesObj[itemId] = item;
    arrayId.push(itemId);
  });
  resultData.entities = entitiesObj;
  resultData.byId = arrayId;
  return resultData;
}

// const inputData = [
//   it('should return normalized data', () => {
//     expect(normalize(inputData)).toEqual({
//       entities: {
//         1: { id: 1, name: "Item 1" },
//         2: { id: 2, name: "Item 2" },
//         4: { id: 4, name: "Item 4" },
//         7: { id: 7, name: "Item 7" },
//       },
//       byId: [1, 2, 4, 7],
//     });
//   });
console.log(normalizationData(inputData));
