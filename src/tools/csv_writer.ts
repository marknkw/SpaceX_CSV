import { createObjectCsvWriter } from "csv-writer";
import { FinalData } from "../types";

const writeCSV = async (records: FinalData[]) => {
  const csvWriter = createObjectCsvWriter({
    path: `./csv/output.csv`,
    header: [
      { id: 'ship_name', title: 'SHIP_NAME' },
      { id: 'missions', title: 'MISSIONS' }
    ],
    fieldDelimiter: ",",
  });

  csvWriter.writeRecords(records);
};
export {writeCSV};
