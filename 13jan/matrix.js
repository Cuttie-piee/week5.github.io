const matrix = [
    [7,3,0,1,5],
    [2,6,9,4,3],
    [8,4,3,8,2],
    [3,1,2,9,4],
    [5,8,1,3,8]
];
function add(arr){
    var n=0;
    for(var i=0; i<5; i++){
        for(var j=0; j<5; j++){
            if(i==j){
                n = n + matrix[i][j];
            }
        }
    }
    return n; 
}
var n = add(matrix);
document.write(n + " is the sum of diagonal elements");