
var pares = []

var impares = []

var mayor600 = []

var menor600 = []

var todas = []

var valor = []



class pizza 
{


    constructor(nombre,precio,ingredientes = []) {
    
        this.nombre = nombre;
        
        this.precio = precio;
        
        this.ingredientes = ingredientes;

        todas.push(nombre)

        valor.push(precio)
        
       
        if ((ingredientes.length+2) %2 == 0) {
            
            
            pares.push(nombre)
            

        }
        
        else{

            impares.push(nombre)
        }

        if (precio < 600) {
            
            
            menor600.push(nombre)
            

        }
        
        else{

            mayor600.push(nombre)
        }



        
       
    }

    Details = (nombre,ingredientes,precio) => { 
        console.log(`Los detalles de la pizza ${nombre} son:`)
        console.log(`El precio es: ${precio}`);
        console.log(`Los ingredientes son: ${ingredientes}`);
        
    }

    
    
}


   
    


const Peperoni = new pizza("Peperoni","600",['peperoni','mozzarella','tomate','cebolla']);

const Muzzarella = new pizza("Muzarella","800",['mozzarella','tomate','cebolla']);

const  Jamon = new pizza("Jamon","700",['Jamon','mozzarella','tomate','Morrones']);

const Napolitana = new pizza("Napolitana","500",['Oregano','mozzarella','tomate','cebolla']);

const Calabresa = new pizza("Calabreza","300",['Calabreza','mozzarella','tomate','ajo']);

const Roquefort = new pizza("Roquefort","1000",['Roquefort','mozzarella','ajo']);





// Ejercicio A


console.log("impares",impares);

// Ejercicio B

console.log("¿Hay alguna pizza que valga menos de $600?");



if (menor600.length > 0) 
{
    console.log("si, son la:", menor600);
}

//ejercicio C

console.log(todas);


//ejercicio D

console.log(valor);


//ejercicio E

Peperoni.Details(Peperoni.nombre,Peperoni.ingredientes,Peperoni.precio)
Muzzarella.Details(Muzzarella.nombre,Muzzarella.ingredientes,Muzzarella.precio)
Jamon.Details(Jamon.nombre,Jamon.ingredientes,Jamon.precio)
Napolitana.Details(Napolitana.nombre,Napolitana.ingredientes,Napolitana.precio)
Calabresa.Details(Calabresa.nombre,Calabresa.ingredientes,Calabresa.precio)
Roquefort.Details(Roquefort.nombre,Roquefort.ingredientes,Roquefort.precio)



    















