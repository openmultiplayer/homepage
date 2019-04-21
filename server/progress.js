const graphql = require('@octokit/graphql');

const { GITHUB_TOKEN } = process.env;

const QUERY = `{ 
  repository(owner: "Y-Less", name: "open.mp") {
    pullRequests(first: 100) {
      nodes {
        title
          reviews(first: 1) {
           users: nodes {
            user: author {
              name: login
            }
          }
        }
        author {
          name: login
        }
        mergedBy {
          name: login
        }
        state
      }
    }
  }
}`;

module.exports = async (req, res) => {
  res.json(
    await graphql(QUERY, {
      headers: {
        authorization: ['token', GITHUB_TOKEN].join(' ')
      }
    })
  );
};
