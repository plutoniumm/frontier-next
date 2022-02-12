const ssfetch = async ( endpoint ) => {
    const response = await fetch( `https://api.nukes.in/${ endpoint }` );
    const json = await response.text();
    return json;
}

// MAIN
export const cf_kv = {
    type: async ( db, type ) => {
        const res = await ssfetch( `amos/type?db=${ db }&q=${ type }` );
        return objectify( res );
    },
    list: async ( db ) => {
        const res = await ssfetch( `amos/all?db=${ db }` );
        return objectify( res );
    },
    get: async ( db, id ) => {
        const res = await ssfetch( `amos/get?db=${ db }&id=${ id }` );
        return res;
    },
    delete: async ( db, id ) => {
        const res = await ssfetch( `amos/delete?db=${ db }&id=${ id }` );
        return res;
    },
    put: async ( db, id, data ) => {
        const res = await ssfetch( `amos/put?db=${ db }&id=${ id }&value=${ froTransformer( data ) }` );
        return res;
    },
}