alert("Este programa no guarda datos, así que no se preocupe,Lorens");
let nombre= prompt("¿Cual es tu nombre?");
let edad= prompt("¿Cuantos años tienes?");
let lenguaje= prompt("¿Qué lenguaje de programación ( Ejemplo:JS;C#;Vue;Python) estás estudiando?");
alert(`Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}`);
let pregunta= prompt(`¿Te gusta estudiar ${lenguaje}. Responde con el número 1 para SÍ o 2 para NO`);
if (pregunta==1){ alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.")
}
else if(pregunta==2){
prompt("¡Oh!Qué pena. ¿Ya intentaste aprender otros lenguajes?");
alert("Ok, está bien!");}