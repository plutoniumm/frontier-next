<script>
    export let //
        path,
        content;

    import { db } from "lib";

    let metadata = db.get(path);
</script>

<h1>{path}</h1>
<h2>{content.description}</h2>
<img src={content.image} alt="" />
<article class="mx-a">
    <slot />
</article>

<style>
    article {
        max-width: 1200px;
    }
</style>
