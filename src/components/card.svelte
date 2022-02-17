<script>
    import { db, process } from "lib";

    export let //
        size = "md", // sm = 25%, md = 33%, lg = 50%, mx = 100%
        url,
        key;

    const promise = db.get(key);
</script>

<a href={url} class="m10 ƒ ƒ∑ {size}">
    {#await promise}
        {url}
    {:then post}
        <img class="rx5 w-100" src={process.image(post.count)} alt="" />
        <div class="body fw4">
            <div class="meta">
                <span class="type">{post.type.toUpperCase()}</span> /
                <span class="date">{process.date.format(key)}</span>
            </div>
            <div class="title fw7">{@html post.title}</div>
            <div class="description">
                {#if post.description}
                    {post.description}
                {:else}
                    <i class="more">Read More &rarr;</i>
                {/if}
            </div>
        </div>
    {/await}
</a>

<style lang="scss">
    a {
        display: inline-block;
        text-wrap: break-word;
        overflow: hidden;
        margin-bottom: 20px;
        &.sm {
            width: calc(25% - 20px);
        }
        &.md {
            width: calc(33% - 20px);
        }
        &.lg {
            width: calc(50% - 20px);
        }
        &.mx {
            width: calc(100% - 20px);
            img {
                width: 50%;
            }
            .body {
                padding: 0 10px;
            }
        }

        img {
            aspect-ratio: 16/10;
            object-fit: cover;
        }
        .body {
            padding: 10px 0;
        }
        .meta,
        .more {
            color: #666;
        }
        .type {
            font-size: 0.92em;
        }
        .date {
            padding: 5px 0;
        }
        .title {
            padding: 5px 0;
            font-size: 1.75rem;
            height: 3em;
            overflow: hidden;
        }
    }
</style>
