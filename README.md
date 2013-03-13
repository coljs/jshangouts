# JSHangouts

Hangouts coordinados por ColombiaJS

## Cómo Modificar Esto?

Está ordenado de la siguiente forma:

- index.html: contiene todo el home, en él se encuentra un YAML con la información del siguiente hangout. Es importante marcar `next_active` con `true` si se desea la presentación de éste, de lo contrario se mostrará el último hangout.
- _posts: contiene los posts de la página, todos heredan del mismo layout. Cada post contiene un YAML al que se le pueden agregar: `youtube_id` con el id al video del hangout y `slides` con el id al slideshare de la presentación.
- _drafts: contiene los drafts que eventualmente se pasarán a `_posts`