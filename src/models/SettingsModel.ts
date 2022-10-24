export type ThemeType =  "dark";
export type UnitType = "metric" | "imperial";

/* Defined the type*/
export interface SettingsModel {
  theme: ThemeType;
  unit: UnitType;
}

/* Defined the type*/
export const defaultSettings: SettingsModel = {
  theme: "dark",
  unit: "metric",
};
