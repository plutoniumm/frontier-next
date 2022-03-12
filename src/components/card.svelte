<script>
    import { db, process } from "lib";

    import Button from "ui:button";

    export let //
        size = "md", // sm = 25%, md = 33%, lg = 50%, mx = 100%
        url,
        key;

    const promise = db.get(key);
</script>

<a href={url} class="m10 rx10 ƒ ƒ∑ {size}">
    {#await promise}
        <img
            class="w-100 ghost vibe"
            src="http://placehold.jp/1/ddd/ffffff/8x5.png"
            alt=""
        />
        <br />
        <div class="body p20 fw4">
            <mark class="vibe">SAMPLE TITLE</mark> <br /><br />
            <mark class="†j vibe" style="line-height: 1.5em;">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto nihil dignissimos velit vero quod quibusdam voluptate
                blanditiis expedita dolor veniam.
            </mark>
        </div>
    {:then post}
        <img
            class="w-100"
            src={process.image(post.count)}
            alt=""
            onerror="this.src='/icons/frontier.svg';this.onerror=null;"
        />
        <div class="body p20 fw4">
            <div class="meta">
                <span class="type">{post.type.toUpperCase()}</span> /
                <span class="date">{process.date.format(key)}</span>
            </div>
            <div class="title fw5">{@html post.title}</div>
            {#if size === "mx"}
                <br />
                <Button
                    style="top:4rem;"
                    data={{ text: "Read More", level: 1 }}
                    href={url}
                    client:media="(min-width: 768px)"
                />
            {/if}
        </div>
    {:catch error}
        {@const err = error}
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
        font-size: 18px;
        contain: content;
        min-width: 300px;
        display: inline-block;
        text-wrap: break-word;
        overflow: hidden;
        margin-bottom: 20px;
        box-shadow: 0 1px 2px rgba(54, 64, 67, 0.3),
            0 1px 3px 1px rgba(54, 64, 67, 0.15);
        transition: box-shadow 0.2s ease-in-out;
        &:hover {
            box-shadow: 0 4px 4px rgba(54, 64, 67, 0.3),
                0 8px 12px 6px rgba(54, 64, 67, 0.15);
        }
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
        }

        img {
            aspect-ratio: 16/10 !important;
        }
        .meta {
            color: #666;
        }
        .type {
            font-size: 0.92em;
        }
        .title {
            padding-top: 10px;
            font-size: 1.5em;
            height: 3em;
            overflow: hidden;
        }
    }
    mark {
        background: #ddd;
        color: #ddd;
    }
    .vibe {
        animation: vibe 1s infinite ease;
    }
</style>
