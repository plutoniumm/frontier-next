export function CSV2JSON ( strData, strDelimiter = "," ) {
    let objPattern = new RegExp(
        (
            "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +
            "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +
            "([^\"\\" + strDelimiter + "\\r\\n]*))"
        ),
        "gi"
    );
    let arrData = [ [] ];
    let arrMatches = null;
    while ( arrMatches = objPattern.exec( strData ) ) {
        let strMatchedDelimiter = arrMatches[ 1 ];
        if (
            strMatchedDelimiter.length &&
            strMatchedDelimiter !== strDelimiter
        ) {
            arrData.push( [] );
        }
        let strMatchedValue;
        if ( arrMatches[ 2 ] ) {
            strMatchedValue = arrMatches[ 2 ].replace(
                new RegExp( "\"\"", "g" ),
                "\""
            );
        } else {
            strMatchedValue = arrMatches[ 3 ];
        }
        arrData[ arrData.length - 1 ].push( strMatchedValue );
    }

    const arrays = arrData.filter( e => e.length > 0 );

    const [ keys, ...values ] = arrays;
    const objects = values.map( array => array.reduce( ( a, v, i ) => ( { ...a, [ keys[ i ] ]: v } ), {} ) );

    return objects;
}