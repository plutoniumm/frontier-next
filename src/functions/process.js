export const url = list => list.map( e => e.url ).map( e => {
    return {
        url: e,
        key: e.split( '/' ).pop()
    }
} )

export const image = ( count ) => {
    const folder = Math.ceil( count / 100 ) * 100;

    return `https://nukescdn.sirv.com/frontier/${ folder }/geovec/${ count }.svg`;
}