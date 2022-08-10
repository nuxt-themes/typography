# Prose

::docs-component{name="A"}
#code
```md
[Nuxt3](https://v3.nuxtjs.org)
```
#render
[Nuxt3](https://v3.nuxtjs.org)
::

::docs-component{name="Blockquote"}
#code
```md
> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
```
#render
> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
::

::docs-component{name="Code"}
#code
```md
    ```js [nuxt.config.js]
    const a = 'a';
    ```
```

#render

```js [nuxt.config.js]
const a = 'a';
```

::

::docs-component{name="Code inline"}
#code
```md
This is an inline code: `nuxt.config.ts`
<br>
This is a link code: [`nuxt.config.ts`](https://v3.nuxtjs.org/guide/directory-structure/nuxt.config)
<br>
This is a table code:
| `key` |
|-------|
| foo   |

This is a title link code:

#### [`nuxt.config.ts`](https://v3.nuxtjs.org/guide/directory-structure/nuxt.config)
```
#render
This is an inline code: `nuxt.config.ts`
<br>
This is a link code: [`nuxt.config.ts`](https://v3.nuxtjs.org/guide/directory-structure/nuxt.config)
<br>
This is a table code:
| `key` |
|-------|
| foo   |

This is a title link code:

#### [`nuxt.config.ts`](https://v3.nuxtjs.org/guide/directory-structure/nuxt.config)
::

::docs-component{name="Em"}
#code
```md
*This is italic text*
```
#render
*This is italic text*
::

::docs-component{name="H1"}
#code
```md
# Heading
```
#render
# Heading
::

::docs-component{name="H2"}
#code
```md
## Heading
```
#render
## Heading
::

::docs-component{name="H3"}
#code
```md
### Heading
```
#render
### Heading
::

::docs-component{name="H4"}
#code
```md
#### Heading
```
#render
#### Heading
::

::docs-component{name="Hr"}
#code
```md
---
```
#render
---
::

::docs-component{name="Img"}
#code
```md
![alt text](https://picsum.photos/200)
```
#render
FIXME
<!-- ![alt text](https://picsum.photos/200) -->
::

::docs-component{name="Li"}
#code
```md
- This is a list item
```
#render
- This is a list item
::

::docs-component{name="Ol"}
#code
```md
1. This is a list item
2. This is another list item
```
#render
1. This is a list item
2. This is another list item
::

::docs-component{name="P"}
#code
```md
This is a paragraph
<br>
This is another one
```
#render
This is a paragraph
<br>
This is another one
::

::docs-component{name="Strong"}
#code
```md
**This is bold text**
```
#render
**This is bold text**
::

::docs-component{name="Table"}
#code
```md
| key | value |
|-----|-------|
| 1   | a     |
| 2   | b     |
```
#render
| key | value |
|-----|-------|
| 1   | a     |
| 2   | b     |
::

::docs-component{name="Ul"}
#code
```md
- This is a list item
- This is another list item
```
#render
- This is a list item
- This is another list item
::
