export interface PlayerList {
  name: string;
  overall: number;
  secondaryPosition: string;
}

export interface PlayerOption {
  name: string;
  overall: number;
  image: string;
}

export interface PlayerPostion {
  position: string;
  options: PlayerOption[];
}

export interface TeamList {
  name: string;
  conference: string;
}
