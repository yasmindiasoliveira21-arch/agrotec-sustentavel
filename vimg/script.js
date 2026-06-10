// Função para o painel interativo de Pilares
function mostrarDetalhes(pilar) {
    const painel = document.getElementById('painel-detalhes');
    const texto = document.getElementById('texto-detalhe');
    
    painel.classList.remove('hidden');

    if (pilar === 'tecnologia') {
        texto.innerText = "A agricultura de precisão utiliza sensores que medem a umidade exata do solo, reduzindo o desperdício de água em até 40% e aplicando fertilizantes apenas onde é necessário.";
    } else if (pilar === 'preservacao') {
        texto.innerText = "O plantio direto na palha evita a erosão do solo, mantém os nutrientes da terra protegidos e reduz severamente a emissão de gases poluentes das máquinas agrícolas.";
    } else if (pilar === 'energia') {
        texto.innerText = "Aproveitar resíduos orgânicos para gerar biogás e cobrir galpões com painéis solares transforma as propriedades rurais em usinas autossustentáveis de energia limpa.";
    }
}

// Função para o Simulador de Impacto Verde
function atualizarSimulador() {
    const selecao = document.getElementById('tecnologia-seletor').value;
    const campoAgua = document.getElementById('agua');
    const campoCarbono = document.getElementById('carbono');

    if (selecao === 'tradicional') {
        campoAgua.innerText = "0%";
        campoCarbono.innerText = "Neutro";
        campoCarbono.style.color = "#333";
    } else if (selecao === 'precisao') {
        campoAgua.innerText = "35% de Economia";
        campoCarbono.innerText = "15% Retido";
        campoCarbono.style.color = "#2e7d32";
    } else if (selecao === 'regenerativa') {
        campoAgua.innerText = "60% de Economia";
        campoCarbono.innerText = "Altamente Positivo (+40%)";
        campoCarbono.style.color = "#1b5e20";
    }
}
