<script>
    export let //
        path;

    import { db, process } from "lib";
    import Overlay from "ui:overlay";

    let //
        large = false;

    const getTitle = (global) => {
        const { title, part } = global;
        window.title = `${title} | Frontier`;
        return `${part ? `Part ${part} | ` : ""}${title}`;
    };

    const flip = () => (large = !large);

    const promise = Promise.all([db.get(path), db.related(path)]);
</script>

<div class="†c">
    {#await promise}
        Preparing the article for you...
    {:then reply}
        {@const response = reply[0]}
        {@const related = process.related(reply[1], path)}

        <h1>{getTitle(response)}</h1>

        <div class="nav w-100 ƒ ∆-bw">
            <a href={related.prev}>
                {#if related.prev}&larr; Prev{:else}&nbsp;{/if}
            </a>

            <div>{process.date.format(path)}</div>

            <a href={related.next}>
                {#if related.next}Next &rarr;{:else}&nbsp;{/if}
            </a>
        </div>

        <div on:click={flip} class="img p-rel w-100">
            <img
                class="w-100"
                src={process.image(response.count)}
                alt={response.cover}
            />
            <div class="cover p-abs w-100">{response.cover}</div>
        </div>

        {#if large}
            <Overlay state={large} on:click={flip}>
                <img
                    width="80%"
                    src={process.image(response?.count)}
                    alt={response?.cover}
                />
                <div class="fw3 p20" style="font-size:1.25rem;">
                    {response?.cover}
                </div>
            </Overlay>
        {/if}
    {/await}
</div>

<style lang="scss">
    .nav {
        padding: 5px 0;
    }
    .img {
        overflow: hidden;
        height: 300px !important;
    }
    .cover {
        background: linear-gradient(transparent, #000);
        font-size: 1.5rem;
        color: #fff;
        padding: 1em 0;
        bottom: 0;
    }
</style>
