export const api_config = {
  url: "http://localhost:3000/api",
  get: function (url) {
    return new Promise((resolve, reject) => {
      fetch(api_config.url + url)
        .then((e) => e.json())
        .then((e) => {
          resolve(e);
        });
    });
  },
};
