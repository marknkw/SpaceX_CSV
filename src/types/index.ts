export interface Ship {
  name: string;
  active: boolean;
  missions: Mission[];
}

export interface Mission {
  name: string;
}

export interface FinalData {
  ship_name: string;
  missions: string;
}
