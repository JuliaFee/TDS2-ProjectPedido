class Pedido{
    constructor(client, table, desc){
        this.client = client;
        this.table = table;
        this.desc = desc;
        this.id = id;
    }

    getPedidoID(){
        const id = Math.floor(Math.random() * 9999);
        return id;
    }
}