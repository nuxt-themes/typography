# Prose Components

A list of Prose components currently implemented.

Here is a list of all the Prose components currently implemented.

To overwrite a prose component, create a component with the same name in your project `components/content/` directory (ex: `components/content/ProseA.vue`).

## A big paragraph

Lorem ipsum dolor sit amet, **consectetur adipiscing elit**. Maecenas at sollicitudin sapien. Etiam sit amet aliquet sapien. Vestibulum tristique maximus luctus. Cras sem mi, semper non nisi sit amet, rutrum bibendum dui. Quisque dictum lectus vel diam gravida interdum. Proin `const test = 'test'`{lang="ts"}. Aliquam erat volutpat. Nunc volutpat pulvinar viverra. Proin lacinia fringilla fermentum. Duis nec purus orci. In _hac habitasse platea_ dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor diam a eros maximus, at commodo odio pellentesque.

Fusce rutrum accumsan neque. Nunc malesuada _efficitur fringilla_. Mauris vel justo massa. Nunc eget nunc ante. Donec quis est et arcu maximus blandit. Cras vestibulum nisl magna, in mollis velit auctor in. Phasellus nec leo facilisis, commodo turpis volutpat, semper ex. **Nullam vel erat laoreet**, dapibus lectus quis, consectetur libero. Donec feugiat sem non ullamcorper dictum.

Nullam massa tortor, posuere vel imperdiet in, placerat a libero. Vestibulum dictum velit magna, at dictum ex luctus nec. Curabitur fermentum metus ut ligula tincidunt dictum. Suspendisse tristique lorem nec molestie euismod. Aliquam lacinia, neque nec efficitur gravida, nibh libero interdum massa, quis sagittis ante enim et leo. Duis et varius mauris. Quisque aliquam egestas augue vel egestas. In sed sodales dolor, ac molestie justo. Quisque porttitor arcu **id massa congue**, at molestie ex efficitur. Nullam tempus nisi et mollis malesuada. Phasellus aliquam lacinia eros tincidunt tempor. Curabitur `hendrerit urna fermentum tempus` venenatis. Suspendisse a turpis tincidunt, dictum arcu eget, suscipit sem. Ut egestas fringilla dui molestie sollicitudin. Suspendisse est nibh, ultrices quis aliquet sed, interdum vel lectus. Duis et consequat ligula.

Pellentesque pharetra neque ut elementum pulvinar. Mauris accumsan nisi quis sem congue, cursus consequat _diam commodo_. Suspendisse diam nisi, sodales sit amet enim vitae, laoreet cursus ipsum. Nulla et nibh dignissim, pretium dui imperdiet, aliquet mauris. Sed nec libero sed ante aliquet vestibulum. Aenean facilisis sem purus, eu aliquam sapien sollicitudin in. Nulla accumsan tortor eget nisl tristique, vel posuere nisl aliquet. Proin euismod rhoncus purus, id *porta felis egestas* at.

Etiam lobortis at dolor vitae suscipit. Fusce cursus nisl ut nulla facilisis gravida. Aliquam ac sodales eros, ut posuere neque. Vivamus fermentum turpis ut elit porta, eget rhoncus tellus laoreet. Proin mattis eu purus eu sollicitudin. Nullam eu commodo orci. Donec quis odio eget ex finibus bibendum.

## `ProseA`

[:icon{name="fa-brands:github" class="inline -mt-1 w-6"} Source](https://github.com/nuxt/content/tree/main/src/runtime/components/Prose/ProseA.vue)

  ```markdown [Code]
  [Link](/api/components/prose)
  ````

  [Link](/api/components/prose)

## `ProseBlockquote`

[:icon{name="fa-brands:github" class="inline -mt-1 w-6"} Source](https://github.com/nuxt/content/tree/main/src/runtime/components/Prose/ProseBlockquote.vue)

  ```markdown [Code]
  > Block quote
  ````

  > Block quote

## `ProseCode`

[:icon{name="fa-brands:github" class="inline -mt-1 w-6"} Source](https://github.com/nuxt/content/tree/main/src/runtime/components/Prose/ProseCode.vue)

  ```markdown [Code]
    ```javascript
    export default () => {
      console.log('Code block')
    }
    ```
  ```

  ```javascript
  export default () => {
    console.log('Code block')
  }
  ```


Check out the [highlight options](/api/configuration#highlight) for more about the syntax highlighting.

## `ProseCodeInline`

[:icon{name="fa-brands:github" class="inline -mt-1 w-6"} Source](https://github.com/nuxt/content/tree/main/src/runtime/components/Prose/ProseCodeInline.vue)

`code inline`.

  ```markdown [Code]
    `code inline`.

    `const codeInline: string = 'highlighted code inline'`{lang="ts"}
  ```

  `code inline`.

  `const codeInline: string = 'highlighted code inline'`{lang="ts"}

## `ProseH1`

[:icon{name="fa-brands:github" class="inline -mt-1 w-6"} Source](https://github.com/nuxt/content/tree/main/src/runtime/components/Prose/ProseH1.vue)

  ```markdown [Code]
  # H1 Heading
  ```

  # H1 Heading

## `ProseH2`

[:icon{name="fa-brands:github" class="inline -mt-1 w-6"} Source](https://github.com/nuxt/content/tree/main/src/runtime/components/Prose/ProseH2.vue)

  ```markdown [Code]
  ## H2 Heading
  ```

  ## H2 Heading

## `ProseH3`

[:icon{name="fa-brands:github" class="inline -mt-1 w-6"} Source](https://github.com/nuxt/content/tree/main/src/runtime/components/Prose/ProseH3.vue)

  ```markdown [Code]
  ## H3 Heading
  ```

  ## H3 Heading

## `ProseH4`

[:icon{name="fa-brands:github" class="inline -mt-1 w-6"} Source](https://github.com/nuxt/content/tree/main/src/runtime/components/Prose/ProseH4.vue)

  ```markdown [Code]
  ## H4 Heading
  ```
  
  ## H4 Heading

## `ProseH5`

[:icon{name="fa-brands:github" class="inline -mt-1 w-6"} Source](https://github.com/nuxt/content/tree/main/src/runtime/components/Prose/ProseH5.vue)

  ```markdown [Code]
  ## H5 Heading
  ```

  ## H5 Heading

## `ProseH6`

[:icon{name="fa-brands:github" class="inline -mt-1 w-6"} Source](https://github.com/nuxt/content/tree/main/src/runtime/components/Prose/ProseH6.vue)

  ```markdown [Code]
  ## H6 Heading
  ```

  ## H6 Heading

## `ProseHr`

[:icon{name="fa-brands:github" class="inline -mt-1 w-6"} Source](https://github.com/nuxt/content/tree/main/src/runtime/components/Prose/ProseHr.vue)

  ```markdown [Code]
  Divider under.

  ---

  Divider above.
  ```

  Divider under.

  ---

  Divider above.

## `ProseImg`

[:icon{name="fa-brands:github" class="inline -mt-1 w-6"} Source](https://github.com/nuxt/content/tree/main/src/runtime/components/Prose/ProseImg.vue)

  ```markdown [Code]
  ![A Cool Image](/preview.png)
  ```

  ![A Cool Image](/preview.png)

## `ProseUl`

[:icon{name="fa-brands:github" class="inline -mt-1 w-6"} Source](https://github.com/nuxt/content/tree/main/src/runtime/components/Prose/ProseUl.vue)

  ```markdown [Code]
  - Just
  - An
  - Unordered
  - List
  ```

  - Just
  - An
  - Unordered
  - List

## `ProseLi`

[:icon{name="fa-brands:github" class="inline -mt-1 w-6"} Source](https://github.com/nuxt/content/tree/main/src/runtime/components/Prose/ProseLi.vue)

  ```markdown [Code]
  - List element
  ```

  - List element

## `ProseOl`

[:icon{name="fa-brands:github" class="inline -mt-1 w-6"} Source](https://github.com/nuxt/content/tree/main/src/runtime/components/Prose/ProseOl.vue)

  ```markdown [Code]
  1. Foo
  2. Bar
  3. Baz
  ```

  1. Foo
  2. Bar
  3. Baz

## `ProseP`

[:icon{name="fa-brands:github" class="inline -mt-1 w-6"} Source](https://github.com/nuxt/content/tree/main/src/runtime/components/Prose/ProseP.vue)

  ```markdown [Code]
  Just a paragraph.
  ```

  Just a paragraph.

## `ProseStrong`

[:icon{name="fa-brands:github" class="inline -mt-1 w-6"} Source](https://github.com/nuxt/content/tree/main/src/runtime/components/Prose/ProseStrong.vue)

  ```markdown [Code]
  **Just a strong paragraph.**
  ```

  **Just a strong paragraph.**

## `ProseEm`

[:icon{name="fa-brands:github" class="inline -mt-1 w-6"} Source](https://github.com/nuxt/content/tree/main/src/runtime/components/Prose/ProseEm.vue)

  ```markdown [Code]
  _Just an italic paragraph._
  ```

  _Just an italic paragraph._

## `ProseTable`

[:icon{name="fa-brands:github" class="inline -mt-1 w-6"} Source](https://github.com/nuxt/content/tree/main/src/runtime/components/Prose/ProseTable.vue)

  ```markdown [Code]
  | Key | Type | Description |
  |---------|--------| -----|
  | 1 | Wonderful | Table |
  | 2 | Wonderful | Data |
  | 3 | Wonderful | Website |
  ```

  | Key | Type | Description |
  |---------|--------| -----|
  | 1 | Wonderful | Table |
  | 2 | Wonderful | Data |
  | 3 | Wonderful | Website |

## `ProseTbody`

[:icon{name="fa-brands:github" class="inline -mt-1 w-6"} Source](https://github.com/nuxt/content/tree/main/src/runtime/components/Prose/ProseTbody.vue)

Included in **ProseTable** example.

## `ProseTd`

[:icon{name="fa-brands:github" class="inline -mt-1 w-6"} Source](https://github.com/nuxt/content/tree/main/src/runtime/components/Prose/ProseTd.vue)

Included in **ProseTable** example.

## `ProseTh`

[:icon{name="fa-brands:github" class="inline -mt-1 w-6"} Source](https://github.com/nuxt/content/tree/main/src/runtime/components/Prose/ProseTh.vue)

Included in **ProseTable** example.

## `ProseThead`

[:icon{name="fa-brands:github" class="inline -mt-1 w-6"} Source](https://github.com/nuxt/content/tree/main/src/runtime/components/Prose/ProseThead.vue)

Included in **ProseTable** example.

## `ProseTr`

[:icon{name="fa-brands:github" class="inline -mt-1 w-6"} Source](https://github.com/nuxt/content/tree/main/src/runtime/components/Prose/ProseTr.vue)

Included in **ProseTable** example.
