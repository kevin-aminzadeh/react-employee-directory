// Sort an array of objects by given property key and order
export const sortObjArr = (dataArray, { property, order }) => {
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

// Filter dataset based on search term
export const searchObjArr = (searchTerm, dataSet, searchBy = []) => {
  // Normalizer search input (convert searchTerm to lowercase)
  const normalizedSearchTerm = searchTerm.toLowerCase();

  return dataSet.filter((item) => {
    if (searchBy.length) {
      for (const property of searchBy) {
        if (item[property].startsWith(normalizedSearchTerm)) return true;
      }
      return false;
    }

    const itemProperties = Object.keys(item);
    for (const property of itemProperties) {
      if (item[property].startsWith(normalizedSearchTerm)) return true;
    }
  });
};

// Capitalize String
export const capitalizeString = (string) =>
  string.replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));
