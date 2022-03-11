<script>
    export let //
        level = 1,
        text = "";

    const color = (l) => {
        if (l === 1) return "192,48,48";
        if (l === 5) return "48,192,48";
        return "192,48,48";
    };
</script>

<div
    onclick="this.remove()"
    class="alert fw3 p10 †c rx5 ƒ ∆-bw"
    style={`--col:${color(+level)}`}
>
    <span>&nbsp;</span>
    {text}
    <span>&#10005;</span>
</div>

<style>
    .alert {
        cursor: pointer;
        --col: 192, 48, 48;
        font-size: 1.1rem;
        margin: 10px auto;
        background: rgba(var(--col), 0.6);
        border: 1px solid rgba(var(--col), 1);

        min-width: 50vw;
        max-width: calc(90% - 30px);
    }
</style>
