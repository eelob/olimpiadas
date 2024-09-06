function pesquisar() {
    let section = document.getElementById("resultados-pesquisa"); // Seleciona a seção onde os resultados serão exibidos

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // Se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nenhum resultado foi encontrado. Digite um nome válido.</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = ""; // String vazia para armazenar os resultados formatados em HTML
    let titulo = "";
    let descricao = "";
    let tags = "";
    
    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se titulo includes campoPesquisa
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Cria um novo elemento
            resultados += `
        <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Clique para mais informações</a>
            </div>
    `;
        }
    }

    if(!resultados){
        resultados = "<p>Nenhum resultado foi encontrado.</p>"
    }
    
    section.innerHTML = resultados; // Insere os resultados formatados na seção HTML
}