import { defineTheme } from 'pinceau'

export default defineTheme({
  typography: {
    verticalMargin: {
      sm: '32px',
      base: '32px'
    },
    letterSpacings: {
      tight: '-0.025em',
      wide: '0.025em'
    },
    fontSizes: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '30px',
      '4xl': '36px',
      '5xl': '48px',
      '6xl': '60px',
      '7xl': '72px',
      '8xl': '96px',
      '9xl': '128px'
    },
    fontWeights: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900'
    },
    leads: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2'
    },
    colors: {
      primary: {
        50: '#d9e5ff',
        100: '#b3cbff',
        200: '#8db0ff',
        300: '#6696ff',
        400: '#407cff',
        500: '#1a62ff',
        600: '#0047e1',
        700: '#0035a9',
        800: '#002370',
        900: '#001238'
      },
      secondary: {
        50: '#fafafa',
        100: '#f4f4f5',
        200: '#e4e4e7',
        300: '#D4d4d8',
        400: '#a1a1aa',
        500: '#71717A',
        600: '#52525B',
        700: '#3f3f46',
        800: '#27272A',
        900: '#18181B'
      }
    },
    surface: {
      elevated: {
        background: {
          initial: '{colors.gray.200}',
          dark: '{colors.gray.700}'
        }
      }
    }
  },
  prose: {
    p: {
      margin: '{typography.verticalMargin.base} 0',
      br: {
        margin: '{typography.verticalMargin.base} 0 0 0'
      }
    },
    h1: {
      margin: '0 0 2rem',
      fontSize: '{typography.fontSizes.5xl}',
      lineHeight: '{typography.leads.tight}',
      fontWeight: '{typography.fontWeights.bold}',
      letterSpacing: '{typography.letterSpacings.tight}',
      iconSize: '{typography.3xl.fontSize}'
    },
    h2: {
      margin: '3rem 0 2rem',
      fontSize: '{typography.fontSizes.4xl}',
      lineHeight: '{typography.leads.tight}',
      fontWeight: '{typography.fontWeights.semibold}',
      letterSpacing: '{typography.letterSpacings.tight}',
      iconSize: '{typography.2xl.fontSize}'
    },
    h3: {
      margin: '3rem 0 2rem',
      fontSize: '{typography.fontSizes.3xl}',
      lineHeight: '{typography.leads.snug}',
      fontWeight: '{typography.fontWeights.semibold}',
      letterSpacing: '{typography.letterSpacings.tight}',
      iconSize: '{typography.xl.fontSize}'
    },
    h4: {
      margin: '3rem 0 2rem',
      fontSize: '{typography.fontSizes.2xl}',
      lineHeight: '{typography.leads.snug}',
      fontWeight: '{typography.fontWeights.semibold}',
      letterSpacing: '{typography.letterSpacings.tight}',
      iconSize: '{typography.lg.fontSize}'
    },
    h5: {
      margin: '3rem 0 2rem',
      fontSize: '{typography.fontSizes.xl}',
      lineHeight: '{typography.leads.snug}',
      fontWeight: '{typography.fontWeights.semibold}',
      iconSize: '{typography.lg.fontSize}'
    },
    h6: {
      margin: '3rem 0 2rem',
      fontSize: '{typography.fontSizes.lg}',
      lineHeight: '{typography.leads.normal}',
      fontWeight: '{typography.fontWeights.semibold}',
      iconSize: '{typography.base.fontSize}'
    },
    strong: {
      fontWeight: '{typography.fontWeights.semibold}'
    },
    img: {
      margin: '{typography.verticalMargin.base} 0'
    },
    a: {
      textDecoration: 'none',
      color: {
        light: {
          default: 'inherit',
          hover: '{typography.colors.primary.500}'
        },
        dark: {
          default: 'inherit',
          hover: '{typography.colors.primary.400}'
        }
      },
      borderBottom: '{prose.a.borderWidth} {prose.a.borderStyle} {prose.a.borderColor.light.default}',
      borderWidth: '1px',
      borderColor: {
        light: {
          default: '{typography.colors.secondary.400}',
          hover: '{typography.colors.primary.500}'
        },
        dark: {
          default: '{typography.colors.secondary.400}',
          hover: '{typography.colors.primary.500}'
        }
      },
      borderStyle: {
        value: 'dashed'
      },
      borderDistance: '2px',
      fontWeight: '{typography.fontWeights.medium}',
      hasCode: {
        borderBottom: 'none'
      },
      code: {
        border: '{prose.a.borderWidth} {prose.a.borderStyle} {prose.a.code.borderColor.light.default}',
        borderColor: {
          light: {
            default: '{typography.colors.secondary.400}',
            hover: '{typography.colors.primary.500}'
          },
          dark: {
            default: '{typography.colors.secondary.600}',
            hover: '{typography.colors.primary.600}'
          }
        },
        color: {
          light: {
            hover: '{typography.colors.primary.500}'
          },
          dark: {
            hover: '{typography.colors.primary.300}'
          }
        },
        background: {
          light: {
            hover: '{typography.colors.primary.50}'
          },
          dark: {
            hover: '{typography.colors.primary.900}'
          }
        }
      }
    },
    blockquote: {
      margin: '{typography.verticalMargin.base} 0',
      padding: '0 0 0 24px',
      quotes: "'201C' '201D' '2018' '2019'",
      color: {
        light: '{typography.colors.secondary.500}',
        dark: '{typography.colors.secondary.400}'
      },
      borderLeft: '1px solid {prose.blockquote.borderColor.light}',
      borderColor: {
        light: '{typography.colors.secondary.200}',
        dark: '{typography.colors.secondary.700}'
      }
    },
    ul: {
      listStyleType: 'disc',
      margin: '{typography.verticalMargin.base} 0 {typography.verticalMargin.base} {typography.verticalMargin.sm}',
      li: {
        markerColor: {
          light: '{typography.colors.secondary.200}',
          dark: '{typography.colors.secondary.800}'
        }
      }
    },
    ol: {
      listStyleType: 'decimal',
      margin: '{typography.verticalMargin.base} 0 {typography.verticalMargin.base} {typography.verticalMargin.sm}',
      li: {
        markerColor: {
          light: '{typography.colors.secondary.400}',
          dark: '{typography.colors.secondary.600}'
        }
      }
    },
    li: {
      margin: '{typography.verticalMargin.sm} 0',
      listStylePosition: 'inside'
    },
    hr: {
      margin: '{typography.verticalMargin.base} 0',
      style: 'solid',
      width: '1px',
      color: {
        light: '{typography.colors.secondary.200}',
        dark: '{typography.colors.secondary.800}'
      }
    },
    table: {
      margin: '{typography.verticalMargin.base} 0',
      textAlign: 'left',
      fontSize: '{typography.fontSizes.sm}',
      lineHeight: 'inherit'
    },
    thead: {
      border: 'none',
      borderBottom: '1px solid {prose.thead.borderColor.light}',
      borderColor: {
        light: '{typography.colors.secondary.300}',
        dark: '{typography.colors.secondary.600}'
      }
    },
    th: {
      color: {
        light: '{typography.colors.secondary.600}',
        dark: '{typography.colors.secondary.400}'
      },
      padding: '0 8px {typography.verticalMargin.sm} 8px',
      fontWeight: '{typography.fontWeights.semibold}'
    },
    tbody: {
      tr: {
        borderBottom: '1px dashed {prose.tbody.tr.borderColor.light}',
        borderColor: {
          light: '{typography.colors.secondary.300}',
          dark: '{typography.colors.secondary.700}'
        }
      },
      td: {
        padding: '{typography.verticalMargin.sm}'
      },
      code: {
        inline: {
          fontSize: '{typography.fontSizes.sm}'
        }
      }
    },
    code: {
      block: {
        color: {
          light: '{typography.colors.secondary.700}',
          dark: '{typography.colors.secondary.200}'
        },
        backgroundColor: {
          light: '{typography.colors.secondary.100}',
          dark: '{typography.colors.secondary.800}'
        }
      },
      inline: {
        borderRadius: '0.375rem',
        padding: '0.25rem 0.375rem 0.25rem 0.375rem',
        fontSize: '{typography.fontSizes.sm}',
        fontWeight: '{typography.fontWeights.normal}',
        color: {
          light: '{typography.colors.secondary.700}',
          dark: '{typography.colors.secondary.200}'
        },
        backgroundColor: {
          light: '{typography.colors.secondary.100}',
          dark: '{typography.colors.secondary.800}'
        }
      }
    }
  }
})
