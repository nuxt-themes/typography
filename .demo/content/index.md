---
image: preview.jpg
---

# Nuxt Typography

A Nuxt theme to get a beautiful and customisable typography with a set of prose components for [Nuxt Content](https://content.nuxtjs.org).

Repository is on GitHub: [nuxt-themes/typography](https://github.com/nuxt-themes/typography)

See also the [online playground](https://stackblitz.com/edit/nuxt-theme-typography?file=content/index.md).

Some examples:
- [Basic example](/example)
- [Tailwind Typograhy content](/tailwind)
- [Dynamic GitHub Readme viewer](https://nuxt-typo-readme.vercel.app)

## Installation

```bash[npm]
npm install --save-dev @nuxt-themes/typography
```

## Usage

Add it to the `nuxt.config`:

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  extends: '@nuxt-themes/typography'
})
```

## Configuration

You can change the whole appearance of Prose components via `tokens.config.ts` file.

You can check out all the available keys by looking at the [source of this file](https://github.com/nuxt-themes/typography/tree/main/tokens.config.ts).

Tokens are divided between two keys:

- `typography` rules general style tokens reused in the other category
- `prose` rules per-component style tokens, that feeds from `typography`

Editing `typography` is more suited if you want to modify or adapt the general appearance of your typography.

Editing `prose` is more suited if you want to modify or adapt the appearance of a specific prose component.

### Configuration example

```ts [tokens.config.ts]
import { defineTheme } from pinceau


export default defineTheme({
  typography: {
    // This will change the general line-break size
    letterSpacings: {
      tight: '-0.035em',
      wide: '0.035em'
    },
  },
  prose: {
    // This will change the fontSize of the `<ProseH1>` component
    h1: {
      fontSize: '{typography.2xl.fontSize}'
    }
  }
})
```

### Icons

To customize the icons used in Nuxt Typography, use the `prose` property in your `app.config.ts`:

```ts [app.config.ts]
export default defineAppConfig({
  prose: {
    // Default icon for all headings on hover
    headings: {
      icon: 'ph:anchor'
    },
    // Icon used for h1 headings
    h1: {
      icon: 'ph:link'
    },
    // Remove icon on h2 headings
    h2: {
      icon: false
    },
    // Icon used for the copy button on code blocks
    copyButton: {
      iconCopy: 'ph:copy',
      iconCopied: 'ph:check'
    }
  }
})
```

Note that under the hood, Nuxt Typography uses [nuxt-icon](https://github.com/nuxt-modules/icon), this mean that you can use a custom component name or any name coming from [icones.js.org](https://icones.js.org).

## Prose Components

Nuxt Typography expose a set of prose components that work seamlessly with [Nuxt Content](https://content.nuxtjs.org).

To overwrite a prose component, create a component with the same name in your project `components/content/` directory (ex: `components/content/ProseA.vue`).

### `<ProseA>`

```md [Code]
[Link](/api/components/prose)
````

[Link](/api/components/prose)

### `<ProseBlockquote>`

```md [Code]
> Block quote
````

> Block quote

### `<ProseCode>`

```md [Code]
\```javascript
export default () => {
  console.log('Code block')
}
\```
```

```ts
export default () => {
  console.log('Code block')
}
```

Check out the [highlight options](https://content.nuxtjs.org/api/configuration#highlight) for more about the syntax highlighting.

### `<ProseCodeInline>`

```md [Code]
`code inline`.

`const codeInline: string = 'highlighted code inline'`{lang="ts"}
```

`code inline`.

`const codeInline: string = 'highlighted code inline'`{lang="ts"}

### `<ProseH1>`


# H1 Heading

```md [Code]
# H1 Heading
```

### `<ProseH2>`

```md [Code]
## H2 Heading
```

  ## H2 Heading

### `<ProseH3>`

```md [Code]
### H3 Heading
```

### H3 Heading

### `<ProseH4>`

```md [Code]
#### H4 Heading
```
  
#### H4 Heading

### `<ProseH5>`

```md [Code]
##### H5 Heading
```

##### H5 Heading

### `<ProseH6>`

```md [Code]
###### H6 Heading
```

###### H6 Heading

### `<ProseHr>`

```md [Code]
---
```

---

### `<ProseImg>`

```md [Code]
![A Cool Image](/preview.jpg)
```

![A Cool Image](/preview.jpg) 

### `<ProseUl>`

```md [Code]
- Just
- An
- Unordered
- List
```

- Just
- An
- Unordered
- List

It also include the `<ProseLi>` component.

### `<ProseOl>`

```md [Code]
1. Foo
2. Bar
3. Baz
```

1. Foo
2. Bar
3. Baz

It also include the `<ProseLi>` component.

### `<ProseP>`

```md [Code]
Just a paragraph.
```

Just a paragraph.

### `<ProseStrong>`

```md [Code]
**Just a strong paragraph.**
```

**Just a strong paragraph.**

### `<ProseEm>`

```md [Code]
_Just an italic paragraph._
```

_Just an italic paragraph._

### `<ProseTable>`

```md [Code]
| Key | Type | Description |
|-----|------| ------------|
| 1 | Wonderful | Table with `some long code snippet example` |
| 2 | Wonderful | Data |
| 3 | Wonderful | Website |
```

| Key | Type | Description |
|-----|------| ------------|
| 1 | Wonderful | Table with `some long code snippet example` |
| 2 | Wonderful | Data |
| 3 | Wonderful | Website |

It also includes:
- `<ProseTbody>`
- `<ProseTd>`
- `<ProseTh>`
- `<ProseThead>`
- `<ProseTr>`
