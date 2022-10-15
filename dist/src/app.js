"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tools_1 = require("./tools");
const app = async () => {
    const query = `
    {
      ships {
        name
        active
        missions {
          name
        }
      }
    }
  `;
    const url_query = "https://api.spacex.land/graphql/";
    const result = await tools_1.Requests.requestQL(url_query, query);
    (0, tools_1.writeCSV)(await (0, tools_1.process_data)(result));
    console.log("Done...");
};
app();
//# sourceMappingURL=app.js.map