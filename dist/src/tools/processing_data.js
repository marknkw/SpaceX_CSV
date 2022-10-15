"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.process_data = void 0;
const process_mission = async (data) => (await data.map((m) => m.name)).join(",");
const process_ship = async (data) => await {
    ship_name: data.name,
    missions: await process_mission(data.missions),
};
const process_data = async (data) => await Promise.all(data.ships.filter((s) => s.active).map(process_ship));
exports.process_data = process_data;
//# sourceMappingURL=processing_data.js.map