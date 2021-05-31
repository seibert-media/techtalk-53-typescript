function parseCsv(input: string): { [columnName: string]: string }[] {
    const lines = input.split('\n');
    const [header, ...rows] = lines;
    return rows.map(rowStr => {
        const row: { [columnName: string]: string } = {};
        rowStr.split(';').forEach((cell, i) => {
            row[header.split(';')[i]] = cell;
        });
        return row;
    });
}

const csv = 'name;lastName;age\nYoilorina;Swaggins;69\nFufu;Dafuq;420';

console.log(parseCsv(csv));

  //index signatures