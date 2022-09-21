export const getData = (url) => {
  return fetch(url)
    .then((data) => {
      if (data.status !== 200) {
        throw new Error(`Error: ${data.status}`);
      }
      return data.json();
    })
    .catch((err) => {
      throw new Error(`Error: ${err}`);
    });
}