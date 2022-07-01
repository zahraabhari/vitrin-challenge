import { Theme } from "@mui/material";
import { createReducer } from "redux-act";
import { changeTheme } from "../actions/theme";

import { Themes, lightTheme, darkTheme } from "../../constants/theme";

const defaultState = { theme: lightTheme };

export default function themeReducer(state = defaultState, action: any) {
  switch (action.type) {
    case "CHANGE_THEME":
      return {
        ...state,
        theme: Themes.find((item) => item.palette.mode === action.payload),
      };
    default:
      return state;
  }
}
