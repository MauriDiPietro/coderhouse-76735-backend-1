class TicketManager {
  #precioBaseDeGanancia = 0.15;
  constructor() {
    this.eventos = [];
  }

  #generarId() {
    return Math.floor(Math.random() * 1000);
  }

  agregarEvento(nombre, lugar, precio, capacidad = 50, fecha = new Date().toLocaleDateString()) {
    const evento = {
      id: this.#generarId(),
      nombre,
      lugar,
      precio: precio + this.#precioBaseDeGanancia,
      capacidad,
      fecha,
      participantes: [],
    };
    this.eventos.push(evento);
    return evento;
  }

  obtenerEventos(){
    return this.eventos;
  }

  obtenerEventoPorId(id){
    return this.eventos.find((e) => e.id === id);
  }

  agregarUsuario(idEvento, idUsuario){
    const evento = this.obtenerEventoPorId(idEvento);
    if(!evento) throw new Error('El evento no existe')
    if(evento.participantes.includes(idUsuario)) throw new Error('El usuario ya está registrado');
    evento.capacidad--;
    return evento.participantes.push(idUsuario);    
  }

  ponerEventoEnGira(idEvento, nuevaLocalidad, nuevaFecha){
    const evento = this.obtenerEventoPorId(idEvento);
    if(!evento) throw new Error('El evento no existe');
    const nuevoEvento = {
        id: this.#generarId(),
        ...evento,
        lugar: nuevaLocalidad,
        fecha: nuevaFecha,
        participantes: []
    }
    this.eventos.push(nuevoEvento);
    return nuevoEvento;
  }
}


const ticketManager = new TicketManager();

const evento1 = ticketManager.agregarEvento('Recital Soda Stereo', 'Córdoba', 150000);
const evento2 = ticketManager.agregarEvento('Recital Las Pastillas del Abuelo', 'Tucumán', 100000);
ticketManager.agregarUsuario(evento1.id, 1)
ticketManager.agregarUsuario(evento2.id, 130)
ticketManager.ponerEventoEnGira(evento1.id, 'Santa Fé', '20/02/2026')
console.log(ticketManager.obtenerEventos());