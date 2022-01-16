var matrix =[[1, 2, 3, 4],
              [14, 15, 16, 5],
              [13, 20, 17, 6],
              [12, 19, 18, 7], 
              [11, 10, 9, 8]
            ];

var r = cr = matrix.length, c = cc = matrix[0].length;

while(cr > r/2 )
{
  for(var i = (c - cc); i < cc ; i++) 
  {
       document.write(matrix[r - cr][i]+" "); 
  }
  for(var i = (r - cr + 1); i < cr ; i++) 
  { 
      document.write(matrix[i][cc - 1]+" ") 
  }
  for(var i = cc - 1; i > (c - cc) ; i--) 
  { 
      document.write(matrix[cr - 1][i - 1]+" "); 
  }
  for(var i = cr - 1; i > (r - cr + 1) ; i--) 
  { 
      document.write(matrix[i - 1][c - cc]+" "); 
  }
  cr--;
  cc--;
}