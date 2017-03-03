const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
};

export function fetchData(url) {
  return fetch(url)
    .then((response) => checkStatus(response))
    .then((response) => {
      const contentType = response.headers.get('content-type');
      if (contentType.indexOf('json') >= 0) {
        return response.json();
      }
      else if (contentType.indexOf('html') >= 0 || contentType.indexOf('xml') >= 0) {
        return response.text();
      }
      else {
        throw Error(`unrecognized content type from ${url}`);
      }
    });
}
