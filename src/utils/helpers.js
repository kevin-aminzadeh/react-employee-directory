// Sort an array of objects by given property key and order
const sortObjArr = (dataArray, { property, order }) => {
  if (!dataArray.length) return;

  // Create a new array to hold a sorted version of given data
  let sortedArr = [...dataArray].sort((a, b) => {
    return a[property] > b[property] ? 1 : b[property] > a[property] ? -1 : 0;
  });

  // If order is not "desc", return the sorted data array,
  if (order !== "desc") return sortedArr;

  // Otherwise create a reversed version of sorted data and return that instead (sorted in descending order)
  const descSortedArr = [...sortedArr].reverse();

  return descSortedArr;
};

export default sortObjArr;
