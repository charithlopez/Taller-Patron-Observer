// Clase Subject: representa al supermercado que envía las notificaciones
class Supermarket {
  constructor() {
    this.clients = []; // Lista de clientes suscritos
  }

  // Método para registrar un nuevo cliente
  registerClient(client) {
    this.clients.push(client);
    console.log(`${client.name} se ha suscrito a las ofertas del supermercado.`);
  }

  // Método para eliminar un cliente de la lista
  unsubscribeClient(client) {
    this.clients = this.clients.filter(c => c !== client);
    console.log(`${client.name} ha salido de las notificaciones.`);
  }

  // Método para notificar a todos los clientes suscritos
  notifyClients(offer) {
    console.log(` Nueva oferta disponible: ${offer}`);
    this.clients.forEach(client => client.update(offer));
  }
}

// Clase Observer: cliente que recibe las ofertas
class Client {
  constructor(name) {
    this.name = name;
  }

  // Método que se ejecuta cuando el supermercado envía una nueva oferta
  update(offer) {
    console.log(` ${this.name} ha recibido la notificación: "${offer}"`);
  }
}


// Crear instancia del supermercado (Subject)
const market = new Supermarket();

// Crear clientes (Observers)
const cliente1 = new Client("Ana");
const cliente2 = new Client("Carlos");
const cliente3 = new Client("Lucía");
const cliente4 = new Client("Ginna");

// Registrar clientes
market.registerClient(cliente1);
market.registerClient(cliente2);
market.registerClient(cliente3);
market.registerClient(cliente4);

// Enviar notificaciones
market.notifyClients("Descuento del 30% en frutas y verduras");
market.notifyClients("Oferta especial: 2x1 en productos de aseo");

// Desuscribir un cliente y enviar una nueva oferta
market.unsubscribeClient(cliente2);
market.notifyClients("Nueva promoción: 50% en productos lacteos");
