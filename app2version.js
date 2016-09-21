
var userinputcode =require ("./utils/userinputcode")
userinputcode.bienvenido()



process.stdin.on("data",  userinputcode.mostrarcositas)
