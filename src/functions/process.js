export const url = list => list.map( e => e.url ).map( e => {
    return {
        url: e,
        key: e.split( '/' ).pop()
    }
} );

export const image = ( count ) => {
    const folder = Math.ceil( count / 100 ) * 100;

    return `https://nukescdn.sirv.com/frontier/${ folder }/geovec/${ count }.svg`;
};

const options = { weekday: 'short', year: '2-digit', month: 'short', day: '2-digit' };
export const date = {
    format: ( key ) =>
        new Date( parseInt( key.split( '-' )[ 0 ], 36 ) ).toLocaleString( 'en-GB', options ),

    math: ( key ) =>
        +new Date( parseInt( key.split( '-' )[ 0 ], 36 ) )
};


export const related = ( list, path ) => {
    const getCount = name => +name.split( '-' )[ 1 ].slice( 3 );
    list = list.sort( ( a, b ) => getCount( a ) - getCount( b ) );

    const position = list.indexOf( path );

    return {
        prev: list[ position - 1 ] || null,
        next: list[ position + 1 ] || null
    }
}