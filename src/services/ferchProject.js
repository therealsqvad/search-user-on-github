export default function makeAndHandleRequest(query) {
  return fetch(`https://api.github.com/search/repositories?q=${query}`)
    .then(resp => resp.json())
    .then(({ items, total_count }) => { /* eslint-disable-line camelcase */
      const options = items.map(i => ({
        id: i.id,
        full_name: i.full_name,
        html_url: i.html_url,
        stargazers_count: i.stargazers_count,
        watchers_count: i.watchers_count
      }));

      return { options, total_count };
    });
}
