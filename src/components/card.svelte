<script>
    import { db, process } from "lib";

    import Button from "ui:button";

    export let //
        size = "md", // sm = 25%, md = 33%, lg = 50%, mx = 100%
        url,
        key;

    const promise = db.get(key);
</script>

<a href={url} class="m10 ƒ ƒ∑ {size}">
    {#await promise}
        <img
            class="rx5 w-100 ghost vibe"
            src="https://via.placeholder.com/8x5/bbb.webp?text=O"
            alt=""
        />
        <br />
        <div class="body fw4" style="background:#fff;">
            <mark>SAMPLE TITLE</mark> <br /><br />
            <mark class="†j" style="line-height: 1.5em;">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto nihil dignissimos velit vero quod quibusdam voluptate
                blanditiis expedita dolor veniam.
            </mark>
        </div>
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
                    <i class="more">Click to Go &rarr;</i>
                {/if}
                {#if size === "mx"}
                    <Button
                        class="p-rel"
                        style="top:4rem;"
                        text="Read More"
                        on:click={(window.location.href = url)}
                        client:media="(min-width: 768px)"
                    />
                {/if}
            </div>
        </div>
    {/await}
</a>

<style lang="scss">
    @keyframes vibe {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0.66;
        }
        100% {
            opacity: 1;
        }
    }
    a {
        contain: content;
        min-width: 300px;
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
    mark {
        background: #bbb;
        color: #bbb;
        animation: vibe 1s infinite ease;
    }
    .vibe {
        animation: vibe 1s infinite ease;
    }
</style>
