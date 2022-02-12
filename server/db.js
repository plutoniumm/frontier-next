const fetch = ( ...args ) => import( 'node-fetch' ).then( ( { default: fetch } ) => fetch( ...args ) );

const ssfetch = async ( endpoint, data ) => {
    const payload = data ? {
        method: 'POST',
        body: JSON.stringify( data )
    } : {};

    const promise = fetch( `https://api.nukes.in/frontier/${ endpoint }`, payload ).then( res => res.text() );

    return promise;
};

// MAIN
const db = {
    get: async ( id ) => {
        const res = await ssfetch( `/get?id=${ id }` );
        return res;
    },
    delete: async ( id ) => {
        const res = await ssfetch( `/delete?id=${ id }` );
        return res;
    },
    put: async ( id, data ) => {
        const res = await ssfetch( `/put?id=${ id }`, data );
        return res;
    },
}

module.exports = {
    db
}