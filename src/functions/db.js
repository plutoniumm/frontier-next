const ssfetch = async ( endpoint ) => {
    const response = await fetch( `https://api.nukes.in/frontier/${ endpoint }` );
    const json = await response.json();
    return json;
};

// MAIN
export const cf_kv = {
    type: async ( type ) => {
        const res = await ssfetch( `/type?q=${ type }` );
        return objectify( res );
    },
    list: async () => {
        const res = await ssfetch( `/all` );
        return objectify( res );
    },
    get: async ( id ) => {
        const res = await ssfetch( `/get?id=${ id }` );
        return res;
    }
};