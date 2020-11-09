// Numero Par o Impar
function parImpar( numero ) {

    var calculo = 0 ;

    numero = parseInt(numero);
    calculo = numero % 2 ;
    alert(calculo);
    mensaje = 'Numero es ImPar....';

    if( calculo === 0 ) {
        mensaje = 'Numero es Par....';
    }

    return mensaje;

}

// Busca Posicion de un Caracter en el string
function buscaCaracter( letra ) {

    palabra = 'abcdefghijklmnñopqrstuvwxyz';

    posicion = palabra.indexOf(letra);

    mensaje = 'La Letra ' + letra + ', se encuentra en la posicion: ' +  posicion  ;
    return mensaje;
}

// Ar se le agrega 19% de IVA y lo exponne
function valorConIva( monto ) {
    var iva = 1.19 ;
    return ( parseInt(monto) * iva) ;
}

// Tira dado y muestra numero den cara del 1 al 6
function nuevoDado(){
  var nombre = 'Carlos ';
  var min   = 1;
  var max   = 6;
  

   function mostrarDado(){

      var dado  = Math.round(Math.random() * (max - min) + min);
      var mensaje = 'NOTA: ' + nombre + ', tiro un dado y salio ' + dado;

      alert(mensaje)  ;
  }

  mostrarDado();

}