<script>
    export let //
        icon = null,
        text = "Read More &rarr;";
</script>

<div class="wrap" {...$$props} on:click>
    <div class="btn p10 rx5 ƒ ∆-ct">
        {#if icon}
            {icon}
        {/if}
        {@html text}
    </div>
</div>

<style>
    .btn {
        text-wrap: break-word;
        width: 120px;
        color: #fff;
        background: linear-gradient(45deg, #2af, #00f);
    }
</style>
