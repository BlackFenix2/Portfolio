export default function search(collection, searchTerm) {
  return collection.filter(
    item =>
      `${item.title} ${item.description}`
        .toUpperCase()
        .indexOf(searchTerm.toUpperCase()) >= 0
  );
}
