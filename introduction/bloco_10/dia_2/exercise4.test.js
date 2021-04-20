const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

describe('testing url github repos', () => {
  const url = 'https://api.github.com/orgs/tryber/repos';

  it('url name on list', async () => {
    const getName = await getRepos(url);
    expect(getName).toContain('sd-01-week4-5-project-todo-list');
    expect(getName).toContain('sd-01-week4-5-project-meme-generator');
  });

});