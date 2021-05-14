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
    // If specific properties to search by were provided,
    if (searchBy.length) {
      // Iterate through each given property,
      for (const property of searchBy) {
        // And if the value of that particular property on the current item starts with the search term, return true
        if (item[property].startsWith(normalizedSearchTerm)) return true;
      }
    }

    // If properties to search by were not given, get the name of the object's properties,
    const itemProperties = Object.keys(item);
    // And search for values that begin with the search term in every property
    for (const property of itemProperties) {
      if (item[property].startsWith(normalizedSearchTerm)) return true;
    }
    return false;
  });
};

// Capitalize String
export const capitalizeString = (string) =>
  string.replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));
