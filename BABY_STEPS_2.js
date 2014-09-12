var args_cmd = process.argv;

var sum = 0;
for(var i = 2; i < args_cmd.length; i++){
  sum += Number(args_cmd[i]);
}

console.log(sum);
