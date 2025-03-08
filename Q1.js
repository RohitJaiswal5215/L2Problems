let arr = 
[
[ 1, 2, 3],
[ 4, 5, 6],
[ 7, 8, 9]
]

let result = ""
let n=3

for(let i= n-1; i>=0;i--){
  result += arr[i][0]+ " "
}

for(let i = 1; i<arr[0].length; i++){
  result += arr[0][i] + " "
  }

for(let i =1 ; i<n; i++){
  result += arr[i][n-1] + " "
} 

for(let i = n-2; i>0; i--){
  result += arr[n-1][i]
}     
  console.log(result)     