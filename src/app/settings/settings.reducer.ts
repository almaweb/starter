import { SettingsState, NIGHT_MODE_THEME } from './settings.model';
import { SettingsActions, SettingsActionTypes } from './settings.actions';

export const initialState: SettingsState = {
  language: 'en',
  theme: 'DEFAULT-THEME',
  autoNightMode: false,
  nightTheme: NIGHT_MODE_THEME,
  stickyHeader: true,
  pageAnimations: true,
  pageAnimationsDisabled: false,
  elementsAnimations: true,
  hour: 0,
  isVisible: false,
  title: null
};

export function settingsReducer(
  state: SettingsState = initialState,
  action: SettingsActions
): SettingsState {
  switch (action.type) {
    case SettingsActionTypes.CHANGE_LANGUAGE:
    case SettingsActionTypes.CHANGE_THEME:
    case SettingsActionTypes.CHANGE_AUTO_NIGHT_AUTO_MODE:
    case SettingsActionTypes.CHANGE_STICKY_HEADER:
    case SettingsActionTypes.CHANGE_ANIMATIONS_PAGE:
    case SettingsActionTypes.CHANGE_ANIMATIONS_ELEMENTS:
    case SettingsActionTypes.CHANGE_HOUR:
    case SettingsActionTypes.IS_VISIBLE_HEADER_PAGE:
      return { ...state, ...action.payload };

    case SettingsActionTypes.CHANGE_ANIMATIONS_PAGE_DISABLED:
      return {
        ...state,
        pageAnimations: false,
        pageAnimationsDisabled: action.payload.pageAnimationsDisabled
      };

    default:
      return state;
  }
}
