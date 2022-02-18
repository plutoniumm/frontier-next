<script>
    import { speaker } from "lib";

    const state = {
        is_playing: false,
    };

    const presets = {
        voice: "Samantha",
        volume: 0.1,
        rate: 2,
        pitch: 2,
    };

    speaker.speak(1, presets);
    const ppHandler = () => {
        console.log(state.is_playing);
        if (state.is_playing) {
            window.speechSynthesis.pause();
            state.is_playing = false;
        } else {
            window.speechSynthesis.resume();
            state.is_playing = true;
        }
    };
</script>

{#if speaker.supported()}
    <div class="player ƒ ∆-bw p20 p-fix">
        <label for="voice">
            <span>Voice</span>
            <select bind:value={presets.voice}>
                {#each window.speechSynthesis.getVoices() as voice}
                    <option value={voice.name}>{voice.name}</option>
                {/each}
            </select>
        </label>

        <label>
            <span>Volume</span>
            <input
                class="hover"
                bind:value={presets.volume}
                type="range"
                min="0"
                max="1"
                step="0.05"
            />
        </label>

        <button on:click={ppHandler}> PlayPause </button>

        <label>
            <span>Rate</span>
            <input
                bind:value={presets.rate}
                type="range"
                min="0.2"
                max="5"
                step="0.2"
            />
        </label>

        <label>
            <span>Pitch</span>
            <input
                bind:value={presets.pitch}
                type="range"
                min="0"
                max="2"
                step="0.1"
            />
        </label>
    </div>
{/if}

<style lang="scss">
    .player {
        width: calc(100% - 40px);
        background: #fff;
        box-shadow: 0 -0.1rem 1rem rgba(0, 0, 0, 0.2);
        bottom: 0;
        z-index: 100;
    }
    input[type="range"] {
        position: relative;
        top: 0.25rem;
    }
</style>
