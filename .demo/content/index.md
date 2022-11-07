# Nuxt Typography

> A Nuxt theme to get a beautiful and customisable typography with a set of prose components for [Nuxt Content](https://content.nuxtjs.org).

Repository is on GitHub: [nuxt-themes/typography](https://github.com/nuxt-themes/typography)

See also the [online playground](https://stackblitz.com/edit/nuxt-theme-typography?file=content/index.md) or using [Tailwind Typograhy content](/tailwind).

## Installation

```bash[npm]
npm install --save-dev @nuxt-themes/typography
```

## Usage

Add it to the `nuxt.config`:

```ts
export default defineNuxtConfig({
  extends: '@nuxt-themes/typography'
})
```

## Configuration

You can configure the typography by creating a `tokens.config.ts` in your project:

```ts
import { defineTheme, palette } from 'pinceau'

// Checkout all the properties to overwrite: https://github.com/nuxt-themes/prose/blob/main/tokens.config.ts
export default defineTheme({
  colors: {
    primary: palette('teal')
  }
})
```

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
![A Cool Image](/preview.png)
```

![A Cool Image](/preview.png) 

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
| 1 | Wonderful | Table |
| 2 | Wonderful | Data |
| 3 | Wonderful | Website |
```

| Key | Type | Description |
|-----|------| ------------|
| 1 | Wonderful | Table |
| 2 | Wonderful | Data |
| 3 | Wonderful | Website |

It also includes:
- `<ProseTbody>`
- `<ProseTd>`
- `<ProseTh>`
- `<ProseThead>`
- `<ProseTr>`
