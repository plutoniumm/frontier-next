<script>
    import { db, process } from "lib";

    export let //
        size = 3,
        url,
        key;

    const promise = db.get(key);

    // const schema = {
    //     type: String,
    //     title: String,
    //     description: String,
    //     count: Number,
    //     source: [] ||{},
    //     cover: String
    // }
</script>

<a href={url} class="p10 m10">
    {#await promise}
        {key}
    {:then post}
        <div class="head">
            <div class="meta">
                <!-- TYPE ICON -->
                <span class="date">{post.type}</span>
            </div>
            <div class="title">{post.title}</div>
            {#if post.description}
                <div class="description">{post.description}</div>
            {/if}
        </div>
        <img src={process.image(post.count)} alt="" />
    {/await}
</a>

<style lang="scss">
    a {
        display: inline-block;
        img {
            width: 100px;
            aspect-ratio: 16/10;
            object-fit: cover;
        }
    }
</style>
