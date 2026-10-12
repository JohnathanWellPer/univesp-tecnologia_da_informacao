/* VARIÁVEL GLOBAL PARA O ÁUDIO */
let currentAudioUrl = "";

/* PERMITIR BUSCA COM A TECLA ENTER */
function handleEnter(event) {
    if (event.key === "Enter") {
        searchWord();
    }
}

/* FUNÇÃO PRINCIPAL ASSÍNCRONA */
async function searchWord() {
    const word = document.getElementById("searchInput").value.trim();
    if (!word) return;

    // Pegando os elementos da interface
    const loading = document.getElementById("loading");
    const errorMsg = document.getElementById("errorMsg");
    const resultPanel = document.getElementById("resultPanel");

    // Limpa a tela para a nova busca
    loading.classList.remove("hidden");
    errorMsg.classList.add("hidden");
    resultPanel.classList.add("hidden");

    try {
        // A API prefere palavras únicas. Pegamos só a primeira palavra caso digite com espaços.
        const cleanWord = word.split(" ")[0];

        // 1. FAZ A REQUISIÇÃO
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${cleanWord}`);

        // 2. VERIFICA O STATUS DA RESPOSTA
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error(`Palavra "${cleanWord}" não encontrada. Lembre-se: o dicionário é apenas em inglês.`);
            } else {
                throw new Error(`Erro na API: Servidor retornou status ${response.status}.`);
            }
        }

        // 3. CONVERTE OS DADOS
        const data = await response.json();
        console.log("Dados recebidos da API:", data); // Isso aparecerá no F12 do Chrome

        // 4. RENDERIZA OS DADOS
        renderData(data[0]);

    } catch (error) {
        // 5. CAPTURA DE ERRO PRECISA
        console.error("Erro no sistema:", error);
        
        // Injeta a mensagem real do erro na tela vermelha para sabermos o que houve
        errorMsg.innerHTML = `<p>${error.message}</p>`;
        errorMsg.classList.remove("hidden");
        
    } finally {
        // Remove a tela de carregamento independentemente do resultado
        loading.classList.add("hidden");
    }
}

/* FUNÇÃO DE RENDERIZAÇÃO BLINDADA */
function renderData(data) {
    // Validação de segurança primária
    if (!data) throw new Error("A API não retornou dados estruturados.");

    // Injeta a Palavra
    document.getElementById("wordTitle").innerText = data.word || "Unknown Word";

    // Busca fonética com segurança
    let phoneticText = data.phonetic || "";
    if (!phoneticText && Array.isArray(data.phonetics)) {
        const ph = data.phonetics.find(p => p && p.text);
        if (ph) phoneticText = ph.text;
    }
    document.getElementById("wordPhonetic").innerText = phoneticText;

    // Busca o áudio com segurança
    const btnAudio = document.getElementById("btnAudio");
    let phoneticObj = null;
    
    if (Array.isArray(data.phonetics)) {
        phoneticObj = data.phonetics.find(p => p && p.audio && p.audio !== "");
    }

    if (phoneticObj && phoneticObj.audio) {
        currentAudioUrl = phoneticObj.audio;
        btnAudio.classList.remove("hidden");
    } else {
        currentAudioUrl = "";
        btnAudio.classList.add("hidden");
    }

    // Injeta as Classes Gramaticais (Parts of Speech)
    const meaningsContainer = document.getElementById("meaningsContainer");
    meaningsContainer.innerHTML = ""; 

    if (Array.isArray(data.meanings)) {
        data.meanings.forEach(meaning => {
            if (!meaning) return; // Pula se o nó for nulo

            let htmlBlock = `<div class="meaning-block">`;
            htmlBlock += `<span class="part-of-speech">${meaning.partOfSpeech || "Unknown"}</span>`;

            if (Array.isArray(meaning.definitions)) {
                // Pega até 2 definições
                const topDefinitions = meaning.definitions.slice(0, 2);
                
                topDefinitions.forEach(def => {
                    if (!def) return;
                    htmlBlock += `<div class="definition-item">• ${def.definition || "No definition available."}`;
                    if (def.example) {
                        htmlBlock += `<br><span class="example-text">" ${def.example} "</span>`;
                    }
                    htmlBlock += `</div>`;
                });
            }

            htmlBlock += `</div>`;
            meaningsContainer.innerHTML += htmlBlock;
        });
    }

    // Exibe o painel
    document.getElementById("resultPanel").classList.remove("hidden");
}

/* FUNÇÃO DE ÁUDIO */
function playAudio() {
    if (currentAudioUrl) {
        let audio = new Audio(currentAudioUrl);
        audio.play().catch(e => console.error("Erro ao reproduzir áudio:", e));
    }
}