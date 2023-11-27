let M = Number(prompt('Write M'));
let N = Number(prompt('Write N'));
let arr = [];
for (let i = 0; i < M; i++){
    let row = [];
    for (let j = 0; j < N; j++){
        row.push(i*(-2)+j);
    }
    arr.push(row);
}

let matr = "";
for (let i = 0; i < M; i++){
    matr = matr + arr[i].join("  ");
    matr = matr+"\n";
}
alert(matr);

let mx = 0;
let indMx = 0;
let NumbRowmx = 0;
for (let k = 0; k < M; k++){
    if (Math.max.apply(null,arr[k]) > mx){
        mx = Math.max.apply(null,arr[k]);
        indMx = k;
        NumbRowmx = arr[k];
    }
}

let mn = 1000;
let indMn = 0;
let NumbRowmn = 0;
for (let g = 0; g < M; g++){
    if (Math.min.apply(null,arr[g]) < mn){
        mn = Math.min.apply(null,arr[g]);
        indMn = g;
        NumbRowmn = arr[g];
    }
}

arr[indMx]=NumbRowmn;
arr[indMn]=NumbRowmx;
let matr2 = "";
for (let i = 0; i < M; i++){
    matr2 = matr2 + arr[i].join("  ");
    matr2 = matr2+"\n";
}
alert(matr2);
