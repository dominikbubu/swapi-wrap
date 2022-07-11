const request = (url: string) => {
  const data = fetch(url).then((response) => response.json());
  return data;
};

export { request };
