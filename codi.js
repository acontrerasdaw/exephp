//test
var salutacio= "Hola Mon! Que facil es incloure 'cometes simples' i \"cometes dobles\"";//crea un popup amb el texte Hola Mon
var salutacio2 = "Soc el primer script";//crea un popup amb el texte Soc el primer script
alert(salutacio);
alert(salutacio2);
//exercici 5
var valors = [true, 5, false, "hola", "adéus", 2] ;
//5.a
if(valors[3].length == valors[4].length)
	document.write("Els dos strings son identics<br>");
else
{
	if(valors[3].length > valors[4].length)
		document.write(valors[3]+" es mes gran que "+valors[4]);
	else
		document.write(valors[4]+" es mes gran que "+valors[3]);
}
//5.b
document.write((valors[0] && valors[2]) =="hola");
document.write("<br>");
document.write(valors[0] != valors[2]);
document.write("<br>");
//5.c
document.write("Suma: "+(valors[1]+valors[5])+"<br>");
document.write("Resta: "+(valors[1]-valors[5])+"<br>");
document.write("Multiplicacio: "+(valors[1]*valors[5])+"<br>");
document.write("Divisio: "+(valors[1]/valors[5])+"<br>");
document.write("Resto: "+(valors[1]%valors[5])+"<br>");
