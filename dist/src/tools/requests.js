"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_request_1 = require("graphql-request");
const requestQL = async (url, query) => await (0, graphql_request_1.request)(url, (0, graphql_request_1.gql) `
      ${query}
    `);
exports.default = {
    requestQL,
};
//# sourceMappingURL=requests.js.map