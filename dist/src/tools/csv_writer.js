"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeCSV = void 0;
const csv_writer_1 = require("csv-writer");
const writeCSV = async (records) => {
    const csvWriter = (0, csv_writer_1.createObjectCsvWriter)({
        path: `./csv/output.csv`,
        header: [
            { id: 'ship_name', title: 'SHIP_NAME' },
            { id: 'missions', title: 'MISSIONS' }
        ],
        fieldDelimiter: ",",
    });
    csvWriter.writeRecords(records);
};
exports.writeCSV = writeCSV;
//# sourceMappingURL=csv_writer.js.map