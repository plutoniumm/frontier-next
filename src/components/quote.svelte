<script>
    export let //
        data = {},
        size = "md", // sm = 25%, md = 33%, lg = 50%, mx = 100%
        url = "#";

    let innerWidth;
    const quote = bojack[Math.round(Math.random() * bojack.length)];
</script>

<svelte:window bind:innerWidth />

<a href={url} class="m20 rx10 ƒ ƒ∑ {size}">
    <div class="cont m5 p10 ƒ-col ∆-bw">
        <div class="fw4 p5" style="line-height:1.5em;font-size:1.15em;">
            "{quote.quote}"
        </div>

        <div class="†r w-100">
            ~ {quote.by},
            {#if quote.source.special}
                {quote.source.special}
            {:else}
                Season: {quote.source.season} Episode: {quote.source.episode}
            {/if}
        </div>
    </div>
</a>

<style lang="scss">
    a {
        $red: #ff1111;
        $rainbow: ();
        @for $i from 0 through 6 {
            $stop: adjust-hue($red, calc($i / 6 * 360deg));
            $rainbow: append($rainbow, $stop, comma);
        }
        background: conic-gradient($rainbow);
        font-size: 18px;
        contain: content;
        min-width: 300px;
        display: inline-block;
        text-wrap: break-word;
        overflow: hidden;
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
        .cont {
            border-radius: 7px;
            background: #fff;
            width: calc(100% - 10px);
            height: calc(100% - 30px);
        }
    }
</style>
