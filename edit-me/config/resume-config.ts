import { AccentColor, ColorMode, NeutralColor } from '@strum/colors';
import { ResumeConfig, ThemeSetting } from '../types/config';

export const resumeConfig: ResumeConfig = {
  accentColor: AccentColor.Cyan,
  neutralColor: NeutralColor.Sand,
  appTheme: ThemeSetting.System,
  imageTheme: ColorMode.Light,
  pdfTheme: ColorMode.Light,
};
