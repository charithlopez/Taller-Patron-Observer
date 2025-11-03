// Se crea la clase sujeto
class subject{
    constructor(){
        this.observers=[];
    }

//Metodo suscribir 
suscribir(observador){
    this.observers.push(observador);
    console.log(`Observador agregado ${observador.name}`)
}

//Metodo desuscribir
desuscribir(observador){
    this.observers=this.observers.filter(obs=>obs!==observador);
    console.log(`Observador eliminado ${observador.name}`)      
}


//Metodo notificar
notificar(notificacion){
    this.observers.forEach(observador=>observador.actualizar(notificacion));
    console.log('Observadores notificados');
}

//Metodo actualizar 
actualizar(notificacion){
    console.log(`Notificacion para ${this.name}: ${notificacion}`);     

}}


//clase observador 
class observador{
    constructor(name){
        this.name=name;
    }   
}