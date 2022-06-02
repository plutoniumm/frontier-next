const getComponent = async ( name ) => {
    const link = document.createElement( 'link' );
    link.rel = 'stylesheet';
    link.href = `/macro/styles/${ name }.css`;
    document.head.appendChild( link );

    const script = document.createElement( 'script' );
    script.src = `/macro/dist/${ name }.js`;
    document.body.appendChild( script );

    return true;
};

const placeholderDiv = ( node ) => {
    const id = `frnt_${ ( Math.random() * 1e18 ).toString( 36 ) }`;

    const div = document.createElement( 'div' );
    div.id = id;
    node.parentNode.replaceChild( div, node );

    return div;
}

export const getCode = ( node ) => {
    const raw_text = node.textContent;
    if ( !raw_text.includes( '[[' ) ) return null;
    else {
        const type = raw_text.split( '[[' )[ 1 ].split( ']]' )[ 0 ];
        const selector = `[[${ type }]]`;

        const [ config_text, main_text ] = raw_text.split( selector ).slice( 1 );
        const config = JSON.parse( config_text.replaceAll( '\n', '' ) );

        getComponent( config.format );

        const componentConfig = {
            props: {
                data: main_text
            },
            target: placeholderDiv( node )
        };

        setTimeout( () => {
            const component = new ( eval( `${ config.format }` ) )( componentConfig );
        }, 100 );

        return main_text;
    };
}