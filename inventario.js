let stock = 10;

let venta = prompt('Ingrese una venta: ')

if( stock > venta ){
    let resta = stock - venta;
    console.log(resta)

}else{
    console.log('No se realizo venta')
}