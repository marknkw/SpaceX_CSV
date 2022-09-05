import { request, gql } from "graphql-request";

const requestQL = async (url: string, query: string) =>
  await request(
    url,
    gql`
      ${query}
    `
  );

export default {
  requestQL,
};
