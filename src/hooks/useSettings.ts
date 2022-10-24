// All npm packages 
import { useEffect, useState } from "react";

// All Components, molecules, hooks, custom files 
import { defaultSettings, SettingsModel } from "../models";

export const useSettings = () => {
  const [settings, setSettings] = useState<SettingsModel>(defaultSettings);

  useEffect(() => {
    const existingSettings = localStorage.getItem("settings");
    if (existingSettings) {
      setSettings(JSON.parse(existingSettings));
    } else {
      setSettings(defaultSettings);
      localStorage.setItem("settings", JSON.stringify(defaultSettings));
    }
  }, []);

  return {
    settings,
  };
};
