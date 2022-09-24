class Aluno {
	nome;
	telefone;
	dataNascimento;
	turma;
	professor;
	notaFinal

	constructor(nome, telefone, dataNascimento, turma, professor, notaFinal){
		this.nome = nome;
		this.telefone = telefone;
		this.dataNascimento = dataNascimento;
		this.turma = turma;
		this.professor = professor;
		this.notaFinal = notaFinal;
	}
}

function adicionarNovoAluno(event) {
	event.preventDefault();

	let nome = document.getElementById("nome").value;
	let telefone = document.getElementById("telefone").value;
	let dataNascimento = document.getElementById("dtnascimento").value;
	let turma = document.getElementById("turma").value;
	let professor = document.getElementById("professor").value;
	let notaFinal = document.getElementById("ntfinal").value;

	validarCampos();

	let aluno = new Aluno(nome, telefone, dataNascimento, turma, professor, notaFinal);

	inserirLinha(aluno);
	limpaInput();

	document.getElementById("nome").focus();
}

function inserirLinha(aluno) {
	tbody = document.getElementById("tbody");

	let linha = `<tr> <td> ${aluno.nome} </td> <td> ${aluno.telefone} </td> <td> ${aluno.dataNascimento} </td> <td> ${aluno.turma} </td> <td> ${aluno.professor} </td> <td> ${aluno.notaFinal} </td> </tr>`;
	
	tbody.innerHTML += linha;
}

function limpaInput() {
	document.getElementById("nome").value = "";
	document.getElementById("telefone").value = "";
	document.getElementById("dtnascimento").value = "";
	document.getElementById("turma").value = "";
	document.getElementById("professor").value = "";
	document.getElementById("ntfinal").value = "";
}

function validarCampos() {
	let input1 = document.getElementById("nome");
	let input2 = document.getElementById("telefone");
	let input3 = document.getElementById("dtnascimento");
	let input4 = document.getElementById("turma");
	let input5 = document.getElementById("professor");
	let input6 = document.getElementById("ntfinal");

	let inputs = [input1, input2, input3, input4, input5, input6];

	let camposNulos = [];

	for (let input of inputs) {
		if (input.value == "") {
			camposNulos.push(input.id);
			input.classList.add("input-erro");
		}
	}

	if (camposNulos != 0) {
		alert("Preencha os campos: " + camposNulos);
		removeErro(camposNulos);
	}	
}

function removeErro(camposNulos) {
	
	camposNulos.forEach(input => {
		if (input.classList.contains("input-erro"));
	})
}