const graphql = require('@octokit/graphql');

const { GITHUB_TOKEN } = process.env;

const QUERY = `{
  repository(owner: "Y-Less", name: "open.mp") {
    labels(first: 10, query: "Public") {
      nodes {
        issues(first: 10, orderBy: {field: UPDATED_AT, direction: DESC}) {
          nodes {
            updatedAt
            title
            author {
              name: login
            }
            state
          }
        }
        pullRequests(first: 10, orderBy: {field: UPDATED_AT, direction: DESC}) {
          nodes {
            updatedAt
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
