<script>
    export let //
        level = 1,
        text = "";

    const color = (l) => {
        if (l === 1) return "192,48,48";
        return "192,48,48";
    };
</script>

<div class="alert fw3 p10 m20 †c mx-a rx5" style={`--col:${color(+level)}`}>
    {text}
</div>

<style>
    .alert {
        --col: 192, 48, 48;
        font-size: 1.1rem;
        background: rgba(var(--col), 0.6);
        border: 1px solid rgba(var(--col), 1);

        min-width: 200px;
        max-width: calc(90% - 30px);
    }
</style>
