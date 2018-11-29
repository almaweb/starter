import { AppState } from '@app/core';
import { HeaderPage } from '@app/aw-app/aw.models';

export const NIGHT_MODE_THEME = 'BLACK-THEME';

export type Language = 'en' | 'sk' | 'de' | 'fr' | 'es' | 'pt-br';

export interface SettingsState {
  language: string;
  theme: string;
  autoNightMode: boolean;
  nightTheme: string;
  stickyHeader: boolean;
  pageAnimations: boolean;
  pageAnimationsDisabled: boolean;
  elementsAnimations: boolean;
  hour: number;
  elementsHeaderPage: HeaderPage;
}

export interface State extends AppState {
  settings: SettingsState;
}
