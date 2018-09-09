import { BuildingLevel } from './buildingLevel'

export class Building {
  id: number;
  name: string;
  effect: string;
  level: number = 1;
  maxLevel: number = 1;
  //levels: BuildingLevel[];
}
