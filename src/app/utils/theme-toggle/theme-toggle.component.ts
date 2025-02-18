import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgComponent } from '../svg/svg.component';
import { ThemeItem } from '../../model/themeItem';
import { Svg } from '../../model/svg';
import {SVGThemeButtonFabric} from '../fabric/svgThemeButtonFabric'


@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule, SvgComponent],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.scss'
})

export class ThemeToggleComponent {
  private _themeList: ThemeItem[] = [];
  private _svgTag: Svg;
  private _svgThemeButtonFabric;
  
  public currentTheme: ThemeItem;
  @Output() themeChanged = new EventEmitter<string>();

  constructor(){
    
    this._svgThemeButtonFabric =  new SVGThemeButtonFabric();
    this._svgTag = this._svgThemeButtonFabric.CreateSVG(this.CheckId);
    this.currentTheme = this._svgThemeButtonFabric.GetThemeItem("light");

    let itemLight = this._svgThemeButtonFabric.GetThemeItem("light");
    let itemDark = this._svgThemeButtonFabric.GetThemeItem("dark");
    let itemAuto = this._svgThemeButtonFabric.GetThemeItem("auto");
    this.onThemeChange(itemLight);
    this._themeList.push(itemLight, itemDark, itemAuto);
    
  }

  get ThemeList(): ThemeItem[]{
    return this._themeList;
  }

  get SvgTag(): Svg{
    return this._svgTag;
  }

  get CheckId(): string {
    return "check2";
  }

  get RefCheckId(): string {
    return `#${this.CheckId}`;
  }

  onThemeChange(themeItem: ThemeItem) {
    if(themeItem == null){
      return;
    }

    this.currentTheme.Pressed = false;
    this.currentTheme = themeItem;
    this.currentTheme.Pressed = true;
    this.themeChanged.emit(this.currentTheme.Id);
  }
}