import { createTheme } from '@mui/material/styles';

// Material Design 3 color tokens
const materialColors = {
  primary: {
    main: '#6750A4',
    light: '#EADDFF',
    dark: '#21005D',
    contrastText: '#FFFFFF',
  },
  secondary: {
    main: '#625B71',
    light: '#E8DEF8',
    dark: '#1D192B',
    contrastText: '#FFFFFF',
  },
  tertiary: {
    main: '#7D5260',
    light: '#FFD8E4',
    dark: '#31111D',
    contrastText: '#FFFFFF',
  },
  error: {
    main: '#BA1A1A',
    light: '#FFDAD6',
    dark: '#410002',
    contrastText: '#FFFFFF',
  },
  warning: {
    main: '#7D5700',
    light: '#FFDF9C',
    dark: '#281900',
    contrastText: '#000000',
  },
  info: {
    main: '#006A6B',
    light: '#4FD8DA',
    dark: '#002020',
    contrastText: '#FFFFFF',
  },
  success: {
    main: '#006E1C',
    light: '#57E677',
    dark: '#002204',
    contrastText: '#FFFFFF',
  },
  background: {
    default: '#FFFBFE',
    paper: '#F7F2FA',
  },
  surface: {
    main: '#FFFBFE',
    variant: '#E7E0EC',
    container: '#F3EDF7',
    containerHigh: '#ECE6F0',
    containerHighest: '#E6E0E9',
  },
  outline: {
    main: '#79747E',
    variant: '#CAC4D0',
  },
  text: {
    primary: '#1C1B1F',
    secondary: '#49454F',
    disabled: '#C4C7C5',
  },
};

// Material Design 3 typography scale
const materialTypography = {
  fontFamily: [
    'Roboto',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  // Display styles
  h1: {
    fontSize: '3.5rem', // 56px - Display Large
    fontWeight: 400,
    lineHeight: 1.14,
    letterSpacing: '-0.25px',
  },
  h2: {
    fontSize: '2.8125rem', // 45px - Display Medium
    fontWeight: 400,
    lineHeight: 1.16,
    letterSpacing: 0,
  },
  h3: {
    fontSize: '2.25rem', // 36px - Display Small
    fontWeight: 400,
    lineHeight: 1.22,
    letterSpacing: 0,
  },
  // Headline styles
  h4: {
    fontSize: '2rem', // 32px - Headline Large
    fontWeight: 400,
    lineHeight: 1.25,
    letterSpacing: 0,
  },
  h5: {
    fontSize: '1.75rem', // 28px - Headline Medium
    fontWeight: 400,
    lineHeight: 1.29,
    letterSpacing: 0,
  },
  h6: {
    fontSize: '1.5rem', // 24px - Headline Small
    fontWeight: 400,
    lineHeight: 1.33,
    letterSpacing: 0,
  },
  // Title styles
  subtitle1: {
    fontSize: '1.375rem', // 22px - Title Large
    fontWeight: 400,
    lineHeight: 1.27,
    letterSpacing: 0,
  },
  subtitle2: {
    fontSize: '1rem', // 16px - Title Medium
    fontWeight: 500,
    lineHeight: 1.5,
    letterSpacing: '0.15px',
  },
  // Body styles
  body1: {
    fontSize: '1rem', // 16px - Body Large
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: '0.5px',
  },
  body2: {
    fontSize: '0.875rem', // 14px - Body Medium
    fontWeight: 400,
    lineHeight: 1.43,
    letterSpacing: '0.25px',
  },
  // Label styles
  button: {
    fontSize: '0.875rem', // 14px - Label Large
    fontWeight: 500,
    lineHeight: 1.43,
    letterSpacing: '0.1px',
    textTransform: 'none',
  },
  caption: {
    fontSize: '0.75rem', // 12px - Label Medium
    fontWeight: 500,
    lineHeight: 1.33,
    letterSpacing: '0.5px',
  },
  overline: {
    fontSize: '0.6875rem', // 11px - Label Small
    fontWeight: 500,
    lineHeight: 1.45,
    letterSpacing: '0.5px',
    textTransform: 'none',
  },
};

// Material Design 3 shape tokens
const materialShape = {
  borderRadius: {
    none: 0,
    extraSmall: 4,
    small: 8,
    medium: 12,
    large: 16,
    extraLarge: 28,
    full: 9999,
  },
};

// Material Design 3 elevation tokens
const materialElevations = [
  'none',
  '0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
  '0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)',
  '0px 1px 3px 0px rgba(0, 0, 0, 0.3), 0px 4px 8px 3px rgba(0, 0, 0, 0.15)',
  '0px 2px 3px 0px rgba(0, 0, 0, 0.3), 0px 6px 10px 4px rgba(0, 0, 0, 0.15)',
  '0px 4px 4px 0px rgba(0, 0, 0, 0.3), 0px 8px 12px 6px rgba(0, 0, 0, 0.15)',
];

// Create Material Design 3 theme
const materialTheme = createTheme({
  palette: {
    mode: 'light',
    ...materialColors,
    divider: materialColors.outline.variant,
  },
  typography: materialTypography,
  shape: {
    borderRadius: materialShape.borderRadius.medium,
  },
  shadows: materialElevations,
  components: {
    // Button component overrides
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: materialShape.borderRadius.large,
          textTransform: 'none',
          fontWeight: 500,
          fontSize: '0.875rem',
          lineHeight: 1.43,
          letterSpacing: '0.1px',
          minHeight: 40,
          paddingLeft: 24,
          paddingRight: 24,
          paddingTop: 10,
          paddingBottom: 10,
          boxShadow: 'none',
          '&:hover': {
            boxShadow: materialElevations[1],
          },
        },
        contained: {
          backgroundColor: materialColors.primary.main,
          color: materialColors.primary.contrastText,
          '&:hover': {
            backgroundColor: materialColors.primary.dark,
            boxShadow: materialElevations[2],
          },
          '&:disabled': {
            backgroundColor: `${materialColors.text.disabled}1F`,
            color: materialColors.text.disabled,
          },
        },
        outlined: {
          borderColor: materialColors.outline.main,
          color: materialColors.primary.main,
          backgroundColor: 'transparent',
          '&:hover': {
            backgroundColor: `${materialColors.primary.main}08`,
            borderColor: materialColors.primary.main,
          },
        },
        text: {
          color: materialColors.primary.main,
          backgroundColor: 'transparent',
          '&:hover': {
            backgroundColor: `${materialColors.primary.main}08`,
          },
        },
      },
    },
    // Card component overrides
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: materialShape.borderRadius.medium,
          backgroundColor: materialColors.surface.container,
          boxShadow: materialElevations[1],
          '&:hover': {
            boxShadow: materialElevations[2],
          },
        },
      },
    },
    // Dialog component overrides
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: materialShape.borderRadius.extraLarge,
          backgroundColor: materialColors.surface.containerHigh,
          boxShadow: materialElevations[3],
        },
      },
    },
    // Paper component overrides
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: materialShape.borderRadius.medium,
          backgroundColor: materialColors.surface.container,
        },
        elevation1: {
          boxShadow: materialElevations[1],
        },
        elevation2: {
          boxShadow: materialElevations[2],
        },
        elevation3: {
          boxShadow: materialElevations[3],
        },
      },
    },
    // Chip component overrides
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: materialShape.borderRadius.small,
          backgroundColor: materialColors.surface.containerHigh,
          color: materialColors.text.primary,
          fontSize: '0.875rem',
          fontWeight: 500,
          '&.MuiChip-filled': {
            backgroundColor: materialColors.secondary.light,
            color: materialColors.secondary.dark,
          },
        },
      },
    },
    // TextField component overrides
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: materialShape.borderRadius.extraSmall,
            backgroundColor: materialColors.surface.container,
            '& fieldset': {
              borderColor: materialColors.outline.main,
            },
            '&:hover fieldset': {
              borderColor: materialColors.text.primary,
            },
            '&.Mui-focused fieldset': {
              borderColor: materialColors.primary.main,
            },
          },
        },
      },
    },
    // AppBar component overrides
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: materialColors.surface.container,
          color: materialColors.text.primary,
          boxShadow: materialElevations[2],
        },
      },
    },
    // Fab component overrides
    MuiFab: {
      styleOverrides: {
        root: {
          backgroundColor: materialColors.primary.main,
          color: materialColors.primary.contrastText,
          boxShadow: materialElevations[3],
          '&:hover': {
            backgroundColor: materialColors.primary.dark,
            boxShadow: materialElevations[4],
          },
        },
      },
    },
  },
  // Custom Material Design 3 tokens
  customTokens: {
    colors: materialColors,
    shape: materialShape,
    elevations: materialElevations,
  },
});

export default materialTheme;

// Export individual tokens for use in other components
export { materialColors, materialTypography, materialShape, materialElevations };