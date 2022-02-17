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
        <img
            class="rx5"
            style="--w:100%"
            src={process.image(post.count)}
            alt=""
        />
        <div class="body fw4">
            <div class="meta">
                <span class="type">{post.type.toUpperCase()}</span> /
                <span class="date">{process.date.format(key)}</span>
            </div>
            <div class="title fw7">{@html post.title}</div>
            {#if post.description}
                <div class="description">{post.description}</div>
            {/if}
        </div>
    {/await}
</a>

<style lang="scss">
    a {
        display: inline-block;
        text-wrap: break-word;
        overflow: hidden;
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
                --w: 50% !important;
                margin-right: 15px;
            }
        }

        img {
            width: var(--w);
            height: calc(var(--w) * 0.625);
            object-fit: cover;
        }
        .body {
            padding: 10px 0;
        }
        .meta {
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
        }
    }
</style>
