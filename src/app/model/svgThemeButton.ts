import { ThemeItem } from "./themeItem";

export class SvgThemeButton{

    private _themeItems: Map<string, ThemeItem> = new Map<string, ThemeItem>();
    
    constructor(){
      this._themeItems.set("light", new ThemeItem("sun-fill", "Light", "light"));
      this._themeItems.set("dark", new ThemeItem("moon-stars-fill", "Dark", "dark"));
      this._themeItems.set("auto",new ThemeItem("circle-half", "Auto", "auto"));
    }

    getThemeItem(itemId: string): ThemeItem{
        let value = this._themeItems.get(itemId);
        return value ?? new ThemeItem("", "", "", false);
    }
}