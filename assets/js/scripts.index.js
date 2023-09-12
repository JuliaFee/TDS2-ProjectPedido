class Pedido{
    constructor(client, table, desc){
        this.client = client;
        this.table = table;
        this.desc = desc;
        this.id = this.getPedidoID();
    }

    getPedidoID(){
        const id = Math.floor(Math.random() * 9999);
        return id;
    }
}
class PedidoList{
    constructor(){
        this.pedidos = [];
    }
    addPedido(pedido){
            if (isAnyInputEmpty()) {
              console.log("Deu erro");
              sendErrorMsg("Preencha todos os campos");
            } else {
              console.log("Deu certo");
              sendSuccessMsg("Pedido Adicionado");
              this.pedidos.push(pedido);
            }
          }
          getPedidoById(id) {
            return this.pedidos.find((pedido) => pedido.id == id);
          }
          listarPedidos(){
            return this.pedidos;
        }
        updatePedido(id, client, table, desc){
            const pedido = this.getPedidoById(id);
            pedido.client = client;
            pedido.table = table;
            pedido.desc = desc;

            return pedido
        }
        deletePedido(parametro){
            return (this.pedidos = this.pedidos.filter((pedido) => pedido.id != parametro));
        }
        }
const pedidoList = new PedidoList();
function createPedido(){
    const client = document.getElementById("client-input").value;
    const table = document.getElementById("table-input").value;
    const desc = document.getElementById("desc-input").value;

    const newPedido = new Pedido(client, table, desc);

    pedidoList.addPedido(newPedido);
    console.log(newPedido);
    clearInputs();
    renderPedido();
}
function clearInputs(){
    document.getElementById("client-input").value = "";
   document.getElementById("table-input").value = "";
    document.getElementById("desc-input").value = "";
}
function isAnyInputEmpty(){
    const client = document.getElementById("client-input").value;
    const table = document.getElementById("table-input").value;
    const desc = document.getElementById("desc-input").value;
    if (client === "" || table === "" || desc === ""){
        return true
    }
}

function sendSuccessMsg(msg) {
    console.log("ENTROU sendSucessMsg()");
  
    document.getElementById("success-msg").innerHTML = msg;
    document.getElementById("success-msg").classList.remove("hidden");
    setTimeout(function () {
      document.getElementById("success-msg").classList.add("hidden");
    }, 4000);
  }

  function sendErrorMsg(msg) {
    console.log("ENTROU sendErrorMsg()");
  
    document.getElementById("error-msg").innerHTML = msg;
    document.getElementById("error-msg").classList.remove("hidden");
    setTimeout(function () {
      document.getElementById("error-msg").classList.add("hidden");
    }, 4000);
  }
  function renderPedido(){
    const pedidos = pedidoList.listarPedidos();
    const elementoPedido = document.getElementById("card-div"); 
    let content = '';
    elementoPedido.innerHTML = "";
    pedidos.forEach((pedido) => {
        content +=   `

        <p>ID: ${pedido.id}</p>
        <p>Cliente: ${pedido.client}</p>
        <p>Mesa: ${pedido.table}</p>
        <p>Descrição: ${pedido.desc}</p>
        </div>
        <button id="edit-btn" onclick="updatePedido(${pedido.id})">Editar</button>
        <button id="delete-btn" onclick="deletePedido(${pedido.id})">Excluir</button>
               `
      
    });
    elementoPedido.innerHTML = content;
  }
  let aux = null;

function updatePedido(id){
    const order = pedidoList.getPedidoById(id);

     document.getElementById("client-input").value = order.client;
     document.getElementById("table-input").value = order.table;
     document.getElementById("desc-input").value = order.desc;

     aux = id;

     document.getElementById("edit-btn").classList.remove("hidden");
     document.getElementById("edit-btn").classList.add("hidden");

}
function editPedido(){

    const client = document.getElementById("client-input").value;
    const table = document.getElementById("table-input").value;
    const desc = document.getElementById("desc-input").value;


    pedidoList.updatePedido(aux, client, table, desc);

    listarPedidos();

    document.getElementById("deploy-btn").classList.remove("hidden");
     document.getElementById("edit-btn").classList.add("hidden");

     clearInputs();
}

function deletePedido(id){
    pedidoList.deletePedido(id);

    listarPedidos();

    document.getElementById("card-div").classList.add("hidden");
}
