import pkg from "predefined";
const { F } = pkg;


export const overlay = ( type, data ) => {
    if ( !window.fr_overlay ) window.fr_overlay = F( "#overlay" );

    if ( type = 'img' ) {
        const src = getComputedStyle( data )
            .getPropertyValue( "--bg" )
            .split( '"' )[ 1 ]
            .split( '"' )[ 0 ];
        const tx = data.innerText;

        const image = `<img width="80%" src="${ src }" />`;
        fr_overlay.classList.remove( 'd-n' )


        fr_overlay.innerHTML = `<div class="w-100 h-100 blur †c" style="padding-top:10vh;color:#fff;">
            <div
                class="p-abs p20"
                style="top:1em;right:1em;cursor:pointer;"
                onclick="fr_overlay.classList.add( 'd-n');this.parentElement.remove()">
                ✕
            </div>
            ${ image }
            <div class="fw3 p20" style="font-size:1.25rem;">${ tx }</div>
        </div>`
    }

    return 0;
}