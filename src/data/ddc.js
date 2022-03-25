const ddc = [
    {
        id: "0",
        name: "Compendiums & Personal Notes",
        children: [ {} ]
    },
    {
        id: "1",
        name: "Pure Mathematics",
        children: [ {} ]
    },
    {
        id: "2",
        name: "Applied Mathematics",
        children: [ {} ]
    },
    {
        id: "3",
        name: "MicroScale Physics",
        children: [ {} ]
    },
    {
        id: "4",
        name: "MacroScale Physics",
        children: [ {} ]
    },
    {
        id: "5",
        name: "Remaining Physics",
        children: [ {} ]
    },
    {
        id: "6",
        name: "Economics",
        children: [ {} ]
    },
    {
        id: "7",
        name: "Computer Science",
        children: [ {} ]
    },
    {
        id: "8",
        name: "Electronics & Electrical Engineering",
        children: [ {} ]
    },
    {
        id: "9",
        name: "Chemistry",
        children: [ {} ]
    }
];

const source = [
    {
        id: "A",
        name: "Academic",
        children: [ {} ]
    },
    {
        id: "R",
        name: "Reference",
        children: [ {} ]
    },
    {
        id: "S",
        name: "Self",
        children: [ {} ]
    },
    {
        id: "H",
        name: "Hybrid (0,2)",
        children: [ {} ]
    },
    {
        id: "C",
        name: "Compendium (1,3)",
        children: [ {} ]
    },
];

const dater = ( month, year ) => {
    const num_year = +year;
    const num_month = +month;

    const short_year = year > 100 ? year % 100 : year;
    const short_month = month.toString( 16 );

    return `${ short_year }${ short_month }`;
};

const system = ( set, learning, time ) => {
    // (2-digit-SET)A-223
}