let M = Number(prompt('Write M'));
let N = Number(prompt('Write N'));
let arr = [];
let matr = "";
for (let i = 0; i < M; i++){
    let row = [];
    for (let j = 0; j < N; j++){
        row.push((i+1)*10);
    }
    arr.push(row);
}

for (let i = 0; i < M; i++){
    matr = matr + arr[i].join("  ");
    matr = matr+"\n";
}
alert(matr);