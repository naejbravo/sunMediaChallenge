# Ejercicio 1

El fragmento de código de nuestro fichero `test.js` nos devuelve un output no
deseado. Queremos imprimir un valor incremental a cada segundo pero lo que
nos devuelve el código es el mismo valor en cada iteración.

1. Sin necesidad de ejecutar el código, ¿sabrías decirnos qué valor imprimiría
   por consola el script? ¿Cuál es el motivo?
   por consola imprimiria el valor 5, 5 veces y todos pasado un segundo. hay dos cosas la primera es definir el incremental como var, en este caso se deberia usar let para que no sobreescriba el valor y la segunda cuestion es que solo se le pasa al setinterval 1s por lo tanto para que haya un segundo de diferencia entre cada ejecucion se tiene que usar el incremental multiplicado por 1
2. Sabiendo que el output que buscamos es el que encuentras bajo estas líneas…
   ¿Cómo solucionarías el fragmento de código para que el output sea el deseado?
   crearia o usaria let en vez de var y agregaria al tiempo del setTimeout el valor del incrmental multiplicado por 1000

```
    > 0
    > 1
    > 2
    > 3
    > 4
```
