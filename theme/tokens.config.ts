import { defineTokens } from '@nuxtjs/design-tokens'

export default defineTokens({
  fonts: {
    primary: {
      value: 'Inter, sans-serif'
    },
    code: {
      value: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace'
    }
  },
  colors: {
    primary: {
      50: {
        value: '#d9e5ff'
      },
      100: { value: '#b3cbff' },
      200: { value: '#8db0ff' },
      300: { value: '#6696ff' },
      400: { value: '#407cff' },
      500: { value: '#1a62ff' },
      600: { value: '#0047e1' },
      700: { value: '#0035a9' },
      800: { value: '#002370' },
      900: { value: '#001238' }
    },
    gray: {
      50: { value: '#fafafa' },
      100: { value: '#f4f4f5' },
      200: { value: '#e4e4e7' },
      300: { value: '#d4d4d8' },
      400: { value: '#a1a1aa' },
      500: { value: '#71717a' },
      600: { value: '#52525b' },
      700: { value: '#3f3f46' },
      800: { value: '#27272a' },
      900: { value: '#18181b' }
    }
  },
  'border-radius': {
    'rounded-sm': { value: '0.125rem' }, /* 2px */
    rounded: { value: '0.25rem' }, /* 4px */
    'rounded-md': { value: '0.375rem' }, /* 6px */
    'rounded-lg': { value: '0.5rem' }, /* 8px */
    'rounded-xl': { value: '0.75rem' }, /* 12px */
    'rounded-2xl': { value: '1rem' }, /* 16px */
    'rounded-3xl': { value: '1.5rem' }, /* 24px */
    'rounded-full': { value: '9999px' }
  },
  shadow: {
    'drop-shadow-sm': { value: 'drop-shadow (0 1px 1px rgb(0 0 0 / 0.05))' },
    'drop-shadow': { value: 'drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06))' },
    'drop-shadow-md': { value: 'drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))' },
    'drop-shadow-lg': { value: 'drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))' },
    'drop-shadow-xl': { value: 'drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08))' },
    'drop-shadow-2xl': { value: 'drop-shadow(0 25px 25px rgb(0 0 0 / 0.15))' }
  },
  'font-size': {
    xs: { value: '12px' },
    sm: { value: '14px' },
    normal: { value: '16px' }
  },
  'font-weight': {
    normal: { value: '400' },
    medium: { value: '500' },
    semibold: { value: '600' }
  },
  'line-height': {
    'leading-5': { value: '1.25rem' }, /* 20px */
    'leading-none': { value: '1' },
    'leading-relaxed': { value: '1.625' }
  },
  spacing: {
    0: { value: '0px' },
    px: { value: '1px' },
    '0-5': { value: '0.125rem' }, /* 2px */
    1: { value: '0.25rem' }, /* 4px */
    '1-5': { value: '0.375rem' }, /* 6px */
    2: { value: '0.5rem' }, /* 8px */
    3: { value: '0.75rem' }, /* 12px */
    4: { value: '1rem' }, /* 16px */
    5: { value: '1.25rem' }, /* 20px */
    6: { value: '1.5rem' }, /* 24px */
    8: { value: '2rem' } /* 32px */
  },
  prose: {
    a: {
      color: { value: '{colors.primary.500}' },
      'font-weight': { value: '{font-weight.medium}' },
      'text-decoration': { value: 'none' },
      'hover-text-decoration': { value: 'underline' }
    },
    blockquote: {
      color: { value: '{colors.gray.500}' },
      'font-weight': { value: '{font-weight.medium}' },
      'border-left': { value: '2px solid {colors.gray.200}' },
      margin: { value: '{spacing.6} 0' },
      padding: { value: '0 0 0 {spacing.4}' }
    },
    code: {
      color: { value: '{colors.gray.200}' },
      'background-color': { value: '{colors.gray.800}' },
      margin: { value: '{spacing.4} 0' },
      padding: { value: '{spacing.4}' },
      'border-radius': { value: '{border-radius.rounded-lg}' },
      'line-height': { value: '{line-height.leading-relaxed}' },
      line: {
        'highlight-background-color': { value: '{colors.gray.700}' }
      },
      filename: {
        color: { value: '{colors.gray.400}' },
        'border-radius': { value: 'border-radius.rounded-lg' },
        'font-size': { value: '{font-size.xs}' },
        'line-height': { value: '{line-height.leading-none}' }
      }
    },
    'code-inline': {
      color: { value: '{colors.gray.800}' },
      'background-color': { value: '{colors.gray.100}' },
      'border-radius': { value: '{border-radius.rounded-md}' },
      padding: { value: '{spacing.1} {spacing.1-5} {spacing.1} {spacing.1-5}' },
      'font-size': { value: '{font-size.sm}' },
      'font-weight': { value: '{font-weight.normal}' }
    },
    em: {},
    h1: {},
    h2: {},
    h3: {},
    h4: {},
    hr: {
      margin: { value: '{spacing.8} 0' },
      'border-top': { value: '1px solid {colors.gray.200}' }
    },
    img: {
      margin: { value: '{spacing.4} 0' }
    },
    li: {
      margin: { value: '{spacing.3} 0' },
      padding: { value: '0 0 0 {spacing.2}' },
      ol: {
        color: { value: '{colors.gray.400}' }
      },
      ul: {
        color: { value: '{colors.gray.300}' }
      }
    },
    ol: {
      'list-style-type': { value: 'decimal' },
      margin: { value: '{spacing.5} 0' },
      padding: { value: '0 0 0 {spacing.6}' },
      nested: {
        margin: { value: '{spacing.2} 0 !important' }
      }
    },
    p: {
      margin: { value: '{spacing.4} 0' },
      'line-height': { value: '{line-height.leading-relaxed}' },
      br: {
        margin: { value: '{spacing.4} 0 0 0' }
      }
    },
    strong: {
      'font-weight': { value: '{font-weight.semibold}' }
    },
    table: {
      margin: { value: '{spacing.6} 0 {spacing.6} 0' },
      'font-size': { value: '{font-size.sm}' },
      'line-height': { value: '{line-height.leading-5}' }
    },
    tbody: {
      tr: {
        'border-bottom': { value: '2px solid {colors.gray.100}' }
      },
      td: {
        padding: { value: '{spacing.2}' }
      }
    },
    td: {},
    th: {},
    thead: {
      'border-bottom': { value: '1px solid {colors.gray.200}' },
      th: {
        color: { value: '{colors.gray.500}' },
        'font-weight': { value: '{font-weight.semibold}' },
        padding: { value: '0 {spacing.2} {spacing.2} {spacing.2}' }
      }
    },
    tr: {},
    ul: {
      'list-style-type': { value: 'disc' },
      margin: { value: '{spacing.5} 0' },
      padding: { value: '0 0 0 {spacing.6}' },
      nested: {
        margin: { value: '{spacing.2} 0 !important' }
      }
    }
  }
})
