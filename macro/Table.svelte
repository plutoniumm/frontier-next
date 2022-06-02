<script>
    import { onMount } from "svelte";
    import { CSV2JSON } from "./lib/prep";

    export let data;

    const head = (d) => `<th>${d}</th>`;
    const row = (d) => `<tr>${d}</tr>`;
    const cell = (d) => `<td>${d}</td>`;

    function createTable(htmlelement, ArrayObject) {
        const TableHeader = Object.keys(ArrayObject[0]).map(head).join("");

        const TableBody = ArrayObject.map((x) =>
            row(Object.values(x).map(cell).join(""))
        ).join("");

        htmlelement.innerHTML = `<thead>${TableHeader}</thead><tbody>${TableBody}</tbody>`;
        return 0;
    }

    let table;
    onMount(() => {
        createTable(table, CSV2JSON(data));
    });
</script>

<table class="frnt-table" bind:this={table}>
    <thead>
        <tr>
            <th>Name</th>
            <th>Age</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>John</td>
            <td>25</td>
        </tr>
        <tr>
            <td>Jane</td>
            <td>24</td>
        </tr>
    </tbody>
</table>
