<div class="p-fix w-100 h-100 blur †c">
    <div class="p-fix p20 fw7 X" on:click>✕</div>
    <slot />
</div>

<style>
    .blur {
        top: 0;
        left: 0;
        padding-top: 10vh;
        color: #fff;
    }
    .X {
        font-size: 2rem;
        top: 2em;
        right: 1em !important;
        cursor: pointer;
    }
</style>
