import { Requests, writeCSV, process_data,  } from "./tools";

const app = async () => {
  const query: string = `
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
  const url_query: string = "https://api.spacex.land/graphql/";

  const result = await Requests.requestQL(url_query, query);

  writeCSV(await process_data(result))
};

app();
