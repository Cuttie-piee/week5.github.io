var n=parseInt(prompt("Enter the number "));
var pattern=" ";
for(var i=1;i<=n;i++){
    for(var j=1;j<i+1;j++){
       pattern += " * ";
    }
    pattern += " <br> ";
}
document.write(pattern);