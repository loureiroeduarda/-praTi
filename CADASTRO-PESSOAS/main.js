class Cliente{
	nome;
	email;
	endereco;


	constructor(nome, email, endereco){
		this.nome = nome;
		this.email = email;
		this.endereco = endereco;
	}
}

function adicionarNovoCliente(event){
	event.preventDefault();

	let nome = document.getElementById("nome").value;
	let email = document.getElementById("email").value;
	let endereco = document.getElementById("endereco").value;


	if(nome == ""){
		input = document.getElementById("nome");
		input.classList.add("input-erro");
		//setTimeout(removeErro, 5500);
		
		return
	}


	if(email == ""){
		input = document.getElementById("email");
		input.classList.add("input-erro");
		//setTimeout(removeErro, 5500);
		
		return
	}


	if(endereco == ""){
		input = document.getElementById("endereco");
		input.classList.add("input-erro");
		//setTimeout(removeErro, 3000);
		
		return
	}


	let cliente = new Cliente(nome, email, endereco);

	inserirLinha(cliente);
	limpaInput();

	document.getElementById("nome").focus();
}

function inserirLinha(cliente){
	tbody = document.getElementById("tbody");

	let linha = `<tr> <td> ${cliente.nome} </td> <td> ${cliente.email} </td> <td> ${cliente.endereco} </td> </tr>`;

	tbody.innerHTML += linha;
	
}

function limpaInput(){
	document.getElementById("nome").value = "";
	document.getElementById("email").value = "";
	document.getElementById("endereco").value = "";
}

function removeErro(){
	let input3 = document.getElementById("nome");
	let input = document.getElementById("endereco");
	let input2 = document.getElementById("email");

	let inputs = [input, input2, input3];

	inputs.forEach(input => {
		if(input.classList.contains("input-erro")){
			input.classList.contains("input-erro");
		}
	})
}
