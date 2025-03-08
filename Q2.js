let N = 3;

for (let i = 1; i <= N * N; i = i + N){
    let bag = "";
    for (let j = i; j < i + N; j++){
        bag += j + " ";
    }
    console.log(bag);
}