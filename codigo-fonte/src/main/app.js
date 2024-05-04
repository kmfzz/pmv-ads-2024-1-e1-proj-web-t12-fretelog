document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('home').addEventListener('click', carregaHome);
    document.getElementById('editar-perfil').addEventListener('click', carregaEditarPerfil);
    carregaHome();
});

function carregaHome() {
    const conteudoPagina = document.getElementById('conteudo-pagina');
    conteudoPagina.innerHTML = `
        <div class="home">
            <h1>Bem-vindo ao Painel de Controle</h1>
            <p>Esta é a página inicial. Mais conteúdo pode ser carregado aqui.</p>
        </div>
    `;
}
function carregaEditarPerfil() {
    const conteudoPagina = document.getElementById('conteudo-pagina');
    conteudoPagina.innerHTML = `
        <div class="profile">
            <h1>Perfil do Usuário</h1>
            <p>Detalhes do perfil do usuário podem ser carregados aqui.</p>
        </div>
    `;
}