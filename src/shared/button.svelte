<script>
    export let //
        data = {
            level: 1,
            text: "Read More &rarr;",
            icon: null,
        };
</script>

<a class="p-rel btn rx5 l-{data.level}" href="#" {...$$props} on:click>
    <div class="ƒ ∆-ct">
        {#if data.icon}
            {data.icon}
        {/if}
        {data.text}
    </div>
</a>

<style>
    a {
        display: inline-block;
    }
    .btn {
        padding: 0.5em 1em;
        min-width: 100px;
        color: #fff;
        background: var(--theme);
        border: 1px solid transparent;
    }
    .l-1 {
        background: linear-gradient(
            45deg,
            rgba(var(--theme), 0.8),
            rgba(var(--theme), 1)
        );
    }
</style>
