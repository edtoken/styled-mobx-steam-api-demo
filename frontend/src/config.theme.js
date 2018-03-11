// Base theme constants

import { IS_DEVELOPMENT } from "./config";
import { createTheme } from "./helpers/Theme";

const PRIMARY_TEXT_COLOR = "#c6d4df";
const ACCENT_TEXT_COLOR = "rgb(204, 51, 0)";

const MAIN_BACKGROUND_COLOR = "#1b2838";
const HEADER_BACKGROUND_COLOR = "#171a21";

const PAPER_BACKGROUND_COLOR = "rgba(0, 0, 0, 0.4)";

const INPUT_BACKGROUND_COLOR = "#2a3f5a";
const INPUT_TEXT_COLOR = "#909090";

const ROW_MAX_WIDTH = "940px";

const BODY_FONT_SIZE = "12px";
const PAGE_TITLE_FONT_SIZE = "2.1rem";
const PAGE_SUB_TITLE_FONT_SIZE = "1.4rem";

// Theme
export const THEME = createTheme({
  body: {
    fontSize: BODY_FONT_SIZE,
    color: PRIMARY_TEXT_COLOR,
    background: MAIN_BACKGROUND_COLOR
  },

  root: {
    Input: {
      root: {
        background: INPUT_BACKGROUND_COLOR,
        color: INPUT_TEXT_COLOR,
        borderRadius: "3px"
      }
    },
    Button: {
      root: {
        border: "none",
        cursor: "pointer",
        display: "inline-block",
        borderRadius: "2px",
        padding: "1px 1rem",
        lineHeight: "1.4rem"
      },
      primary: theme => ({
        ...theme.root.Button.root,
        color: "#D2E885",
        background: "linear-gradient( to bottom, #a4d007 5%, #536904 95%)"
      }),
      secondary: theme => ({
        ...theme.root.Button.root
      }),
      disabled: theme => ({
        ...theme.root.Button.root
      })
    },
    RowComponent: {
      root: {
        maxWidth: ROW_MAX_WIDTH
      }
    },
    PaperComponent: {
      root: {
        background: PAPER_BACKGROUND_COLOR
      }
    },
    InfoComponent: {
      root: {
        fontSize: ".8rem"
      },
      accent: theme => ({
        ...theme.root.InfoComponent.root,
        color: ACCENT_TEXT_COLOR
      })
    }
  },

  overrides: {
    // override component styles
    LayoutContainer: {
      root: {}
    },
    LayoutHeader: {
      root: {
        background: HEADER_BACKGROUND_COLOR
      }
    },
    PageTitle: {
      root: {
        fontSize: PAGE_TITLE_FONT_SIZE
      }
    },
    PageSubTitle: {
      root: {
        fontSize: PAGE_SUB_TITLE_FONT_SIZE
      }
    },
    MainFormUsersInput: {
      root: theme => ({
        ...theme.root.Input.root,
        minWidth: "200px"
      })
    },
    MainFormUsersAddButton: {
      root: theme => ({
        ...theme.root.Button.primary
      }),
      disabled: theme => ({
        ...theme.root.Button.disabled
      })
    }
  }
});

if (IS_DEVELOPMENT) {
  console.info("Theme", THEME);
}
