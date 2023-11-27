let M = Number(prompt('Write M'));
let N = Number(prompt('Write N'));
function Proccesing(M,N){
    let arr = [];
    for (let i = 0; i < M; i++){
        let row = [];
        for (let j = 0; j < N; j++){
            row.push((i+1)*10);
        }
        arr.push(row);
    }
    return arr;
}
function Vivod(arr){
    let matr="";
    for (let i = 0; i < M; i++){
        matr = matr + arr[i].join("  ");
        matr = matr+"\n";
    }
    alert(matr);
}
Vivod(Proccesing(M,N));