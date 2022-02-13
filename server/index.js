const fs = require( 'fs' );
const yaml = require( 'js-yaml' );
const { db } = require( './db' );
const { log } = console;

const sub_folder = './_posts/Books/Eco_Engg/';

const meta = ( raw ) => {
    const json = yaml.load( raw );
    delete json.layout;
    delete json.cdn;

    const yamled = yaml.dump( json );
    return { yamled, json };
};

const parter = part => {
    if ( !part ) return '00';
    return +part < 10 ? '0' + part : part;
};

const directory = fs
    .readdirSync( sub_folder )
    .filter( e => e.includes( '.md' ) )
    .map( e => {
        const date = e
            .split( '-' ) // Get Date From Title
            .map( e => +e )
            .slice( 0, 3 )
            .reverse();

        const d2 = +new Date( `${ +date[ 1 ] } ${ +date[ 0 ] } ${ +date[ 2 ] }` );

        const file = fs.readFileSync( `${ sub_folder }${ e }`, 'utf-8' );
        const raw = file.split( '---' ).slice( 2 ).join( '---' );

        const { yamled, json } = meta( file.split( '---' )[ 1 ].split( '---' )[ 0 ] );

        return {
            name: e,
            id: `${ d2.toString( 36 ) }-${ json.count }${ parter( json.part ) }`,
            file: json,
            raw,
            yaml: yamled
        };
    } );

directory.forEach( ( e, i ) => {
    log( e.file );
    if ( !e.file.title || !e.file.cover ) process.exit( 1 );
    fs.writeFileSync(
        `${ sub_folder }${ e.name }`,
        `---\nlayout: 'layout:post'\n---${ e.raw }`
    );
    fs.renameSync( `${ sub_folder }${ e.name }`, `${ sub_folder }${ e.id }.md` );

    db.put( e.id, e.file ).then( r => console.log( i, r ) );
} );
