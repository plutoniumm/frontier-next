export const time = ( val ) => {
    val = 0 | ( ( Date.now() - new Date( val ) ) / 1000 );

    let //
        unit,
        length = {
            second: 60,
            minute: 60,
            hour: 24,
            day: 7,
            week: 4.35,
            month: 12,
            year: 10000,
        },
        result;

    for ( unit in length ) {
        result = val % length[ unit ];
        if ( !( val = 0 | ( val / length[ unit ] ) ) )
            return result + " " + ( result - 1 ? unit + "s" : unit );
    }
};

export const tags = ( html ) => {
    let tmp = document.createElement( "DIV" );
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
};