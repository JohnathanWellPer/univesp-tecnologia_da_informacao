/*
 * EXTRAÇÃO E TRATAMENTO DE DADOS
 * Captura o texto das textareas, separa por linha, limpa os espaços 
 * e remove linhas vazias. Retorna os objetos matemáticos Set() nativos do JS.
 */
function getSets() {
    // Pegando valor bruto, quebrando em array por linha (\n), removendo espaços e filtrando vazios
    const arrayA = document.getElementById('listA').value.split('\n').map(item => item.trim()).filter(item => item !== '');
    const arrayB = document.getElementById('listB').value.split('\n').map(item => item.trim()).filter(item => item !== '');
    
    // Convertendo Arrays em Sets (Conjuntos matemáticos que não aceitam duplicidade)
    return {
        setA: new Set(arrayA),
        setB: new Set(arrayB)
    };
}

/*
 * INTERSEÇÃO (A ∩ B)
 * Elementos que pertencem simultaneamente ao Conjunto A e ao Conjunto B.
 */
function calculateIntersection() {
    const { setA, setB } = getSets();
    // Filtra o conjunto A mantendo apenas o que o conjunto B também "has" (tem)
    const result = [...setA].filter(item => setB.has(item));
    renderResult(result, "Interseção (A ∩ B)");
}

/*
 * DIFERENÇA (A - B)
 * Elementos que pertencem EXCLUSIVAMENTE ao Conjunto A (não estão em B).
 */
function calculateDifferenceA() {
    const { setA, setB } = getSets();
    // Filtra o conjunto A mantendo apenas o que o conjunto B NÃO tem
    const result = [...setA].filter(item => !setB.has(item));
    renderResult(result, "Diferença Exclusiva (A - B)");
}

/*
 * DIFERENÇA (B - A)
 * Elementos que pertencem EXCLUSIVAMENTE ao Conjunto B (não estão em A).
 */
function calculateDifferenceB() {
    const { setA, setB } = getSets();
    // Filtra o conjunto B mantendo apenas o que o conjunto A NÃO tem
    const result = [...setB].filter(item => !setA.has(item));
    renderResult(result, "Diferença Exclusiva (B - A)");
}

/*
 * UNIÃO (A ∪ B)
 * Junta todos os elementos de A e B, eliminando as duplicidades.
 * Na matemática: A ∪ B = {x | x ∈ A ou x ∈ B}
 */
function calculateUnion() {
    const { setA, setB } = getSets();
    // O operador spread (...) desestrutura os sets. O novo Set já elimina repetições automaticamente.
    const result = [...new Set([...setA, ...setB])];
    renderResult(result, "União Total (A ∪ B)");
}

/*
 * RENDERIZAÇÃO NO DOM (Atualiza a interface)
 */
function renderResult(resultArray, operationName) {
    const outputField = document.getElementById('outputResult');
    const titleField = document.getElementById('resultTitle');
    const countBadge = document.getElementById('resultCount');
    const copyBtn = document.getElementById('btnCopy');

    if (resultArray.length === 0) {
        outputField.value = "Nenhum resultado encontrado (Conjunto Vazio / Ø).";
        countBadge.innerText = "0 itens";
        copyBtn.disabled = true;
    } else {
        // Junta o array final em texto separado por quebra de linha
        outputField.value = resultArray.join('\n');
        countBadge.innerText = `${resultArray.length} itens`;
        copyBtn.disabled = false;
    }

    titleField.innerText = operationName;
}

/*
 * FUNÇÕES UTILITÁRIAS (Limpar e Copiar)
 */
function clearData() {
    document.getElementById('listA').value = "";
    document.getElementById('listB').value = "";
    document.getElementById('outputResult').value = "";
    document.getElementById('resultTitle').innerText = "Resultado da Operação";
    document.getElementById('resultCount').innerText = "0 itens";
    document.getElementById('btnCopy').disabled = true;
}

function copyResult() {
    const outputField = document.getElementById('outputResult');
    outputField.select();
    outputField.setSelectionRange(0, 99999); // Suporte Mobile

    navigator.clipboard.writeText(outputField.value).then(() => {
        const copyBtn = document.getElementById('btnCopy');
        const originalText = copyBtn.innerText;
        copyBtn.innerText = "✅ Copiado!";
        setTimeout(() => { copyBtn.innerText = originalText; }, 2000);
    }).catch(err => {
        alert("Erro ao copiar. Tente selecionar manualmente.");
    });
}