const sample = `USD was tied to the Gold Standard which allowed exchange back and Forth. The Govt wanted to create trust in itself it used to maintain $100M in reserves which started rapidly depleting when European investors exchanged their USD for Gold. During the crisis then locally called Great Depression (not redefined until 1929), about 1/3rd of US rail lines declared bankruptcy. JPM then started rapidly consolidating the companies and issuing shares to raise capital. The US economy was then rapidly falling as the gold reserves started depleting at $2M/h and finally reached $9M when Morgan said he personally knew of a $12M deal which would then empty the coffers. When asked on what to do he found a loophole in an old Civil War law which allowed him to bypass Congress and set up a deal where the Govt could buy gold from his private reserves from a syndicate of American & European investors. Within 22mins in America an 2 hours in London, the US Gold Bonds were completely sold. JP Morgan had bailed out the United States Govt from a tragedy.`;

const supported = () => {
    if ( 'speechSynthesis' in window ) return true;
    return false;
};

const speak = ( text, presets ) => {
    let msg = new SpeechSynthesisUtterance();

    msg.text = sample || text;
    msg.volume = parseFloat( presets.volume.value );
    msg.rate = parseFloat( presets.rate.value );
    msg.pitch = parseFloat( presets.pitch.value );
    msg.voice = speechSynthesis
        .getVoices()
        .filter( voice => voice.name == presets.voice.value )
    [ 0 ];

    window.speechSynthesis.speak( msg );
};

export const speakr = {
    supported,
    sample,
    speak
}