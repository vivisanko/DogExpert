export default function fetchGetData(url) {
  return fetch(url).then(resp => {
    if (resp.status !== 200) {
      Promise.reject(new Error(resp.statusText));
    }
    return resp.json();
  });
}
