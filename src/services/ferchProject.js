export default async subject => {
  const url = `https://api.github.com/search/repositories?q=${subject}`;

  return fetch(url).then(response => response.json())
    .then(({ items }) => {
      const options = items.map(i => ({
        id: i.id,
        full_name: i.full_name,
        html_url: i.html_url,
        stargazers_count: i.stargazers_count,
        watchers_count: i.watchers_count
      }));

      console.log(options);
      return options;
    });
};
