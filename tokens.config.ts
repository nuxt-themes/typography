import { defineTheme } from 'pinceau'
import { colors } from '@nuxt-themes/tokens/tokens'

export default defineTheme({
  colors: {
    primary: colors.indigoblue
  },
  typo: {
    xs: {
      fontSize: '{fontSizes.xs}',
      lineHeight: '{leads.normal}',
      letterSpacing: '{letterSpacings.wide}'
    },
    sm: {
      fontSize: '{fontSizes.sm}',
      lineHeight: '{leads.relaxed}'
    },
    base: {
      fontSize: '{fontSizes.base}',
      lineHeight: '{leads.relaxed}'
    },
    lg: {
      fontSize: '{fontSizes.lg}',
      lineHeight: '{leads.normal}'
    },
    xl: {
      fontSize: '{fontSizes.xl}',
      lineHeight: '{leads.snug}'
    },
    '2xl': {
      fontSize: '{fontSizes.2xl}',
      lineHeight: '{leads.snug}'
    },
    '3xl': {
      fontSize: '{fontSizes.3xl}',
      lineHeight: '{leads.snug}'
    },
    '4xl': {
      fontSize: '{fontSizes.4xl}',
      lineHeight: '{leads.tight}'
    },
    '5xl': {
      fontSize: '{fontSizes.5xl}',
      lineHeight: '{leads.tight}'
    },
    '6xl': {
      fontSize: '{fontSizes.6xl}',
      lineHeight: '{leads.tight}'
    },
    '7xl': {
      fontSize: '{fontSizes.7xl}',
      lineHeight: '{leads.tight}'
    },
    '8xl': {
      fontSize: '{fontSizes.8xl}',
      lineHeight: '{leads.tight}'
    },
    '9xl': {
      fontSize: '{fontSizes.9xl}',
      lineHeight: '{leads.tight}'
    }
  },
  prose: {
    verticalMargin: {
      sm: '{space.16}',
      base: '{space.32}'
    },
    p: {
      margin: '{prose.verticalMargin.base} 0',
      br: {
        margin: '{prose.verticalMargin.base} 0 0 0'
      }
    },
    h1: {
      margin: '0 0 2rem',
      fontSize: '{typo.5xl.fontSize}',
      lineHeight: '{typo.5xl.lineHeight}',
      fontWeight: '{fontWeights.bold}',
      letterSpacing: '{letterSpacings.tight}'
    },
    h2: {
      margin: '3rem 0 2rem',
      fontSize: '{typo.4xl.fontSize}',
      lineHeight: '{typo.4xl.lineHeight}',
      fontWeight: '{fontWeights.semibold}',
      letterSpacing: '{letterSpacings.tight}'
    },
    h3: {
      margin: '3rem 0 2rem',
      fontSize: '{typo.3xl.fontSize}',
      lineHeight: '{typo.3xl.lineHeight}',
      fontWeight: '{fontWeights.semibold}',
      letterSpacing: '{letterSpacings.tight}'
    },
    h4: {
      margin: '3rem 0 2rem',
      fontSize: '{typo.2xl.fontSize}',
      lineHeight: '{typo.2xl.lineHeight}',
      fontWeight: '{fontWeights.semibold}',
      letterSpacing: '{letterSpacings.tight}'
    },
    h5: {
      margin: '3rem 0 2rem',
      fontSize: '{typo.xl.fontSize}',
      lineHeight: '{typo.xl.lineHeight}'
    },
    h6: {
      margin: '3rem 0 2rem',
      fontSize: '{typo.lg.fontSize}',
      lineHeight: '{typo.lg.lineHeight}'
    },
    strong: {
      fontWeight: '{fontWeights.semibold}'
    },
    img: {
      margin: '{prose.verticalMargin.base} 0'
    },
    a: {
      textDecoration: 'none',
      color: {
        light: {
          default: 'inherit',
          hover: '{colors.primary.500}'
        },
        dark: {
          default: 'inherit',
          hover: '{colors.primary.400}'
        }
      },
      borderBottom: '{prose.a.borderWidth} {prose.a.borderStyle} {prose.a.borderColor.light.default}',
      borderWidth: '1px',
      borderColor: {
        light: {
          default: '{colors.gray.400}',
          hover: '{colors.primary.500}'
        },
        dark: {
          default: '{colors.gray.400}',
          hover: '{colors.primary.500}'
        }
      },
      borderStyle: {
        value: 'dashed'
      },
      borderDistance: '2px',
      fontWeight: '{fontWeights.medium}',
      hasCode: {
        borderBottom: 'none'
      },
      code: {
        border: '{prose.a.borderWidth} {prose.a.borderStyle} {prose.a.code.borderColor.light.default}',
        borderColor: {
          light: {
            default: '{colors.gray.400}',
            hover: '{colors.primary.500}'
          },
          dark: {
            default: '{colors.gray.600}',
            hover: '{colors.primary.600}'
          }
        },
        color: {
          light: {
            hover: '{colors.primary.500}'
          },
          dark: {
            hover: '{colors.primary.300}'
          }
        },
        background: {
          light: {
            hover: '{colors.primary.50}'
          },
          dark: {
            hover: '{colors.primary.900}'
          }
        }
      }
    },
    blockquote: {
      margin: '{prose.verticalMargin.base} 0',
      padding: '0 0 0 {space.24}',
      quotes: "'201C' '201D' '2018' '2019'",
      color: {
        light: '{colors.gray.500}',
        dark: '{colors.gray.400}'
      },
      borderLeft: '1px solid {prose.blockquote.borderColor.light}',
      borderColor: {
        light: '{colors.gray.200}',
        dark: '{colors.gray.700}'
      }
    },
    ul: {
      listStyleType: 'disc',
      margin: '{prose.verticalMargin.base} 0 {prose.verticalMargin.base} {prose.verticalMargin.sm}',
      li: {
        markerColor: {
          light: '{colors.gray.200}',
          dark: '{colors.gray.800}'
        }
      }
    },
    ol: {
      listStyleType: 'decimal',
      margin: '{prose.verticalMargin.base} 0 {prose.verticalMargin.base} {prose.verticalMargin.sm}',
      li: {
        markerColor: {
          light: '{colors.gray.400}',
          dark: '{colors.gray.600}'
        }
      }
    },
    li: {
      margin: '{prose.verticalMargin.sm} 0',
      listStylePosition: 'inside'
    },
    hr: {
      margin: '{prose.verticalMargin.base} 0',
      style: 'solid',
      width: '{borderWidths.sm}',
      color: {
        light: '{colors.gray.200}',
        dark: '{colors.gray.800}'
      }
    },
    table: {
      margin: '{prose.verticalMargin.base} 0',
      textAlign: 'left',
      fontSize: '{fontSizes.sm}',
      lineHeight: 'inherit'
    },
    thead: {
      border: 'none',
      borderBottom: '1px solid {prose.thead.borderColor.light}',
      borderColor: {
        light: '{colors.gray.300}',
        dark: '{colors.gray.600}'
      }
    },
    th: {
      color: {
        light: '{colors.gray.600}',
        dark: '{colors.gray.400}'
      },
      padding: '0 {space.8} {prose.verticalMargin.sm} {space.8}',
      fontWeight: '{fontWeights.semibold}'
    },
    tbody: {
      tr: {
        borderBottom: '1px dashed {prose.tbody.tr.borderColor.light}',
        borderColor: {
          light: '{colors.gray.300}',
          dark: '{colors.gray.700}'
        }
      },
      td: {
        padding: '{prose.verticalMargin.sm}'
      },
      code: {
        inline: {
          fontSize: '{fontSizes.sm}'
        }
      }
    },
    code: {
      block: {
        color: {
          light: '{colors.gray.700}',
          dark: '{colors.gray.200}'
        },
        backgroundColor: {
          light: '{colors.gray.100}',
          dark: '{colors.gray.800}'
        }
      },
      inline: {
        borderRadius: '{radii.sm}',
        padding: '0.25rem 0.375rem 0.25rem 0.375rem',
        fontSize: '{fontSizes.sm}',
        fontWeight: '{fontWeights.normal}',
        color: {
          light: '{colors.gray.700}',
          dark: '{colors.gray.200}'
        },
        backgroundColor: {
          light: '{colors.gray.100}',
          dark: '{colors.gray.800}'
        }
      }
    }
  }
})
