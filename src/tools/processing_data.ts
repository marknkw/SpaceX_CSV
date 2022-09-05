import type { Mission, Ship, FinalData } from "../types";

const process_mission = async (data: Mission[]): Promise<string> =>
  (await data.map((m: Mission) => m.name)).join(",");

const process_ship = async (data: Ship): Promise<FinalData> =>
  await {
    ship_name: data.name,
    missions: await process_mission(data.missions),
  };

const process_data = async (data: any): Promise<FinalData[]> =>
  await Promise.all(data.ships.filter((s: Ship) => s.active).map(process_ship));

export { process_data };
