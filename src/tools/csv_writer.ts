import { createObjectCsvWriter } from "csv-writer";
import { FinalData } from "../types";

const writeCSV = async (records: FinalData[]) => {
  const csvWriter = await createObjectCsvWriter({
    path: `./csv/output.csv`, /** could have been written as path: `./csv/${Date.now()} - output.csv`, if a time-recording necessity were defined*/
    header: [
        { id: 'ship_name', title: 'SHIP_NAME' },
        { id: 'missions', title: 'MISSIONS' }
    ],
    fieldDelimiter: ",",
  });

  csvWriter.writeRecords(records);
};
export {writeCSV};
