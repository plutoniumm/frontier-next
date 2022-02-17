<script>
    export let //
        path;

    import { db, process } from "lib";

    const promise = Promise.all([db.get(path), db.related(path)]);
</script>

<div class="†c">
    {#await promise}
        Preparing the article for you...
    {:then reply}
        {@const response = reply[0]}
        {@const related = process.related(reply[1], path)}

        <h1>
            {#if response.part}Part {response.part} |{/if}
            {response.title}
        </h1>

        <title>{response.title} | Frontier</title>

        <div class="nav w-100 ƒ ∆-bw">
            {#if related.prev}
                <a href={related.prev}>&larr; Prev</a>
            {:else}
                <div>&nbsp</div>
            {/if}

            <div>{process.date.format(path)}</div>

            {#if related.next}
                <a href={related.next}>Next &rarr;</a>
            {:else}
                <div>&nbsp</div>
            {/if}
        </div>

        <div class="img p-rel w-100">
            <img src={process.image(response.count)} alt="" />
            <div class="cover p-abs w-100">{response.cover}</div>
        </div>
        <!-- <div class="sources">
            {JSON.stringify(response.source)}
        </div> -->
    {/await}
</div>

<style lang="scss">
    .nav {
        padding: 5px 0;
    }
    img {
        width: 100%;
        max-height: 300px;
    }
    .cover {
        background: linear-gradient(transparent, #000);
        font-size: 1.5rem;
        color: #fff;
        padding: 1em 0;
        bottom: 0;
    }
</style>
