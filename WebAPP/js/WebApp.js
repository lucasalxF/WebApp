document.addEventListener("DOMContentLoaded", function() {
    console.log("Script carregado com sucesso!");

    function adicionarProduto() {
        const produto = prompt("Digite o nome do produto:");
        if (produto) {
            const listaDiv = document.getElementById("lista");
            const novoProduto = document.createElement("div");
            novoProduto.className = "lista-item";
            novoProduto.innerHTML = `
                <span class="produto-nome">${produto}</span>
                <div>
                    <button class="edit-button">Editar</button>
                    <button class="delete-button">Excluir</button>
                </div>
            `;
            listaDiv.appendChild(novoProduto);

            novoProduto.querySelector(".edit-button").addEventListener("click", function() {
                const novoNome = prompt("Edite o nome do produto:", produto);
                if (novoNome) {
                    novoProduto.querySelector(".produto-nome").textContent = novoNome;
                }
            });

            novoProduto.querySelector(".delete-button").addEventListener("click", function() {
                listaDiv.removeChild(novoProduto);
            });
        }
    }

    document.getElementById("addButton").addEventListener("click", adicionarProduto);
});
