import { defineTheme } from 'pinceau'

export default defineTheme({
  color: {
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
  typography: {
    verticalMargin: {
      sm: '16px',
      base: '32px'
    },
    letterSpacing: {
      tight: '-0.025em',
      wide: '0.025em'
    },
    fontSize: {
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
    fontWeight: {
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
    lead: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2'
    },
    color: {
      primary: {
        50: '{color.primary.50}',
        100: '{color.primary.100}',
        200: '{color.primary.200}',
        300: '{color.primary.300}',
        400: '{color.primary.400}',
        500: '{color.primary.500}',
        600: '{color.primary.600}',
        700: '{color.primary.700}',
        800: '{color.primary.800}',
        900: '{color.primary.900}'
      },
      secondary: {
        50: '{color.secondary.50}',
        100: '{color.secondary.100}',
        200: '{color.secondary.200}',
        300: '{color.secondary.300}',
        400: '{color.secondary.400}',
        500: '{color.secondary.500}',
        600: '{color.secondary.600}',
        700: '{color.secondary.700}',
        800: '{color.secondary.800}',
        900: '{color.secondary.900}'
      }
    }
  },
  prose: {
    p: {
      fontSize: '{typography.fontSize.base}',
      lineHeight: '{typography.lead.normal}',
      margin: '{typography.verticalMargin.base} 0',
      br: {
        margin: '{typography.verticalMargin.base} 0 0 0'
      }
    },
    h1: {
      margin: '0 0 2rem',
      fontSize: '{typography.fontSize.5xl}',
      lineHeight: '{typography.lead.tight}',
      fontWeight: '{typography.fontWeight.bold}',
      letterSpacing: '{typography.letterSpacing.tight}',
      iconSize: '{typography.fontSize.3xl}'
    },
    h2: {
      margin: '3rem 0 2rem',
      fontSize: '{typography.fontSize.4xl}',
      lineHeight: '{typography.lead.tight}',
      fontWeight: '{typography.fontWeight.semibold}',
      letterSpacing: '{typography.letterSpacing.tight}',
      iconSize: '{typography.fontSize.2xl}'
    },
    h3: {
      margin: '3rem 0 2rem',
      fontSize: '{typography.fontSize.3xl}',
      lineHeight: '{typography.lead.snug}',
      fontWeight: '{typography.fontWeight.semibold}',
      letterSpacing: '{typography.letterSpacing.tight}',
      iconSize: '{typography.fontSize.xl}'
    },
    h4: {
      margin: '3rem 0 2rem',
      fontSize: '{typography.fontSize.2xl}',
      lineHeight: '{typography.lead.snug}',
      fontWeight: '{typography.fontWeight.semibold}',
      letterSpacing: '{typography.letterSpacing.tight}',
      iconSize: '{typography.fontSize.lg}'
    },
    h5: {
      margin: '3rem 0 2rem',
      fontSize: '{typography.fontSize.xl}',
      lineHeight: '{typography.lead.snug}',
      fontWeight: '{typography.fontWeight.semibold}',
      iconSize: '{typography.fontSize.lg}'
    },
    h6: {
      margin: '3rem 0 2rem',
      fontSize: '{typography.fontSize.lg}',
      lineHeight: '{typography.lead.normal}',
      fontWeight: '{typography.fontWeight.semibold}',
      iconSize: '{typography.fontSize.base}'
    },
    strong: {
      fontWeight: '{typography.fontWeight.semibold}'
    },
    img: {
      margin: '{typography.verticalMargin.base} 0'
    },
    a: {
      textDecoration: 'none',
      color: {
        light: {
          default: 'inherit',
          hover: '{typography.color.primary.500}'
        },
        dark: {
          default: 'inherit',
          hover: '{typography.color.primary.400}'
        }
      },
      borderBottom: '{prose.a.borderWidth} {prose.a.borderStyle.default} {prose.a.borderColor.light.default}',
      borderWidth: '1px',
      borderColor: {
        light: {
          default: '{typography.color.secondary.400}',
          hover: '{typography.color.primary.500}'
        },
        dark: {
          default: '{typography.color.secondary.400}',
          hover: '{typography.color.primary.500}'
        }
      },
      borderStyle: {
        default: 'dashed',
        hover: 'solid'
      },
      borderDistance: '2px',
      fontWeight: '{typography.fontWeight.medium}',
      hasCode: {
        borderBottom: 'none'
      },
      code: {
        border: '{prose.a.borderWidth} {prose.a.borderStyle} {prose.a.code.borderColor.light.default}',
        borderColor: {
          light: {
            default: '{typography.color.secondary.400}',
            hover: '{typography.color.primary.500}'
          },
          dark: {
            default: '{typography.color.secondary.600}',
            hover: '{typography.color.primary.600}'
          }
        },
        color: {
          light: {
            hover: '{typography.color.primary.500}'
          },
          dark: {
            hover: '{typography.color.primary.300}'
          }
        },
        background: {
          light: {
            hover: '{typography.color.primary.50}'
          },
          dark: {
            hover: '{typography.color.primary.900}'
          }
        }
      }
    },
    blockquote: {
      margin: '{typography.verticalMargin.base} 0',
      padding: '0 0 0 24px',
      quotes: "'201C' '201D' '2018' '2019'",
      color: {
        light: '{typography.color.secondary.500}',
        dark: '{typography.color.secondary.400}'
      },
      borderLeft: '1px solid {prose.blockquote.borderColor.light}',
      borderColor: {
        light: '{typography.color.secondary.200}',
        dark: '{typography.color.secondary.700}'
      }
    },
    ul: {
      listStyleType: 'disc',
      margin: '{typography.verticalMargin.base} 0',
      padding: '0 0 0 21px',
      li: {
        markerColor: {
          light: '{typography.color.secondary.300}',
          dark: '{typography.color.secondary.800}'
        }
      }
    },
    ol: {
      listStyleType: 'decimal',
      margin: '{typography.verticalMargin.base} 0',
      padding: '0 0 0 21px',
      li: {
        markerColor: {
          light: '{typography.color.secondary.500}',
          dark: '{typography.color.secondary.500}'
        }
      }
    },
    li: {
      margin: '{typography.verticalMargin.sm} 0',
      listStylePosition: 'outside'
    },
    hr: {
      margin: '{typography.verticalMargin.base} 0',
      style: 'solid',
      width: '1px',
      color: {
        light: '{typography.color.secondary.200}',
        dark: '{typography.color.secondary.800}'
      }
    },
    table: {
      margin: '{typography.verticalMargin.base} 0',
      textAlign: 'left',
      fontSize: '{typography.fontSize.sm}',
      lineHeight: 'inherit'
    },
    thead: {
      border: 'none',
      borderBottom: '1px solid {prose.thead.borderColor.light}',
      borderColor: {
        light: '{typography.color.secondary.300}',
        dark: '{typography.color.secondary.600}'
      }
    },
    th: {
      color: {
        light: '{typography.color.secondary.600}',
        dark: '{typography.color.secondary.400}'
      },
      padding: '0 {typography.verticalMargin.sm} {typography.verticalMargin.sm} {typography.verticalMargin.sm}',
      fontWeight: '{typography.fontWeight.semibold}'
    },
    tbody: {
      tr: {
        borderBottom: '1px dashed {prose.tbody.tr.borderColor.light}',
        borderColor: {
          light: '{typography.color.secondary.300}',
          dark: '{typography.color.secondary.700}'
        }
      },
      td: {
        padding: '{typography.verticalMargin.sm}'
      },
      code: {
        inline: {
          fontSize: '{typography.fontSize.sm}'
        }
      }
    },
    code: {
      block: {
        fontSize: '{typography.fontSize.sm}',
        margin: '{typography.verticalMargin.base} 0',
        borderColor: {
          light: '{typography.color.secondary.200}',
          dark: '{typography.color.secondary.800}'
        },
        color: {
          light: '{typography.color.secondary.700}',
          dark: '{typography.color.secondary.200}'
        },
        backgroundColor: {
          light: '{typography.color.secondary.100}',
          dark: '{typography.color.secondary.900}'
        },
        pre: {
          padding: '{typography.verticalMargin.sm}'
        }
      },
      inline: {
        borderRadius: '0.375rem',
        padding: '0.25rem 0.375rem 0.25rem 0.375rem',
        fontSize: '{typography.fontSize.sm}',
        fontWeight: '{typography.fontWeight.normal}',
        color: {
          light: '{typography.color.secondary.700}',
          dark: '{typography.color.secondary.200}'
        },
        backgroundColor: {
          light: '{typography.color.secondary.100}',
          dark: '{typography.color.secondary.800}'
        }
      }
    }
  }
})
