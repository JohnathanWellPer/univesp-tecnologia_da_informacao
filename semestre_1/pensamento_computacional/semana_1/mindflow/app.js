/* 
 * ESTADO GLOBAL DA APLICAÇÃO
 * Aqui guardamos os dados em memória enquanto o usuário navega pelas etapas.
 */
let macroProblem = "";
let tasks = []; // Array que guardará objetos do tipo { id, description, category, isEssential }

/* ==========================================
 * CONTROLE DE FLUXO (WIZARD DE TELAS)
 * ========================================== */
function showStep(stepNumber) {
    // Esconde todas as seções
    document.querySelectorAll('.step-section').forEach(section => {
        section.classList.remove('active');
    });
    // Mostra apenas a seção do passo atual
    document.getElementById(`step-${stepNumber}`).classList.add('active');
}

/* ==========================================
 * PASSO 1: DEFINIÇÃO DO PROBLEMA (Entrada)
 * ========================================== */
function startDecomposition() {
    const input = document.getElementById("macroProblem").value.trim();
    if (!input) {
        alert("Por favor, defina um problema antes de continuar.");
        return;
    }
    macroProblem = input;
    document.getElementById("displayProblem").innerText = macroProblem;
    showStep(2);
}

/* ==========================================
 * PASSO 2: DECOMPOSIÇÃO
 * Quebrar um grande problema em partes menores.
 * ========================================== */
function addTask() {
    const taskInput = document.getElementById("newTaskInput");
    const taskDesc = taskInput.value.trim();

    if (taskDesc) {
        // Cria um objeto para a tarefa
        const newTask = {
            id: Date.now(), // Gera um ID único baseado no timestamp
            description: taskDesc,
            category: "Geral", // Padrão inicial
            isEssential: true  // Padrão inicial
        };
        tasks.push(newTask);
        taskInput.value = ""; // Limpa o input
        renderTasks();
    }
}

function renderTasks() {
    const list = document.getElementById("taskList");
    list.innerHTML = ""; // Limpa a lista visual antes de recriar

    tasks.forEach(task => {
        list.innerHTML += `<li class="task-item">${task.description}</li>`;
    });

    // Libera o botão de avançar apenas se houver pelo menos 2 tarefas (para justificar a decomposição)
    document.getElementById("btnPatterns").disabled = tasks.length < 2;
}

function goToPatterns() {
    renderPatternInputs();
    showStep(3);
}

/* ==========================================
 * PASSO 3: RECONHECIMENTO DE PADRÕES
 * Agrupar tarefas por semelhança/contexto.
 * ========================================== */
function renderPatternInputs() {
    const container = document.getElementById("patternsContainer");
    container.innerHTML = "";

    tasks.forEach((task, index) => {
        container.innerHTML += `
            <div class="pattern-row">
                <strong>${task.description}</strong>
                <input type="text" placeholder="Categoria (ex: Compras, Lógica, RH...)" 
                       onchange="updateCategory(${index}, this.value)" value="${task.category}">
            </div>
        `;
    });
}

function updateCategory(index, value) {
    if(value.trim() !== "") {
        tasks[index].category = value.trim();
    }
}

function goToAbstraction() {
    renderAbstractionInputs();
    showStep(4);
}

/* ==========================================
 * PASSO 4: ABSTRAÇÃO
 * Ocultar detalhes desnecessários, focar no essencial.
 * ========================================== */
function renderAbstractionInputs() {
    const container = document.getElementById("abstractionContainer");
    container.innerHTML = "";

    tasks.forEach((task, index) => {
        container.innerHTML += `
            <div class="abstract-row">
                <label>
                    <input type="checkbox" checked onchange="updateEssential(${index}, this.checked)">
                    ${task.description} 
                    <span style="color:#666; font-size:0.85rem;">(Padrão: ${task.category})</span>
                </label>
            </div>
        `;
    });
}

function updateEssential(index, isChecked) {
    tasks[index].isEssential = isChecked;
}

/* ==========================================
 * PASSO 5: ALGORITMO
 * Criar as regras sequenciais de execução.
 * ========================================== */
function generateAlgorithm() {
    const output = document.getElementById("algorithmOutput");
    output.innerHTML = `<h3>Objetivo: ${macroProblem}</h3><br>`;

    // 1. Filtra as tarefas ignorando as não essenciais (ABSTRAÇÃO)
    const essentialTasks = tasks.filter(task => task.isEssential);

    // 2. Ordena por categoria para criar um fluxo lógico (PADRÕES)
    essentialTasks.sort((a, b) => a.category.localeCompare(b.category));

    // 3. Monta o Algoritmo Visual
    if (essentialTasks.length === 0) {
        output.innerHTML += `<p>Nenhuma tarefa essencial definida. O problema foi abstraído por completo!</p>`;
    } else {
        essentialTasks.forEach((task, index) => {
            output.innerHTML += `
                <div class="algorithm-step">
                    Passo ${index + 1}: ${task.description} 
                    <span class="algo-category">${task.category}</span>
                </div>
            `;
        });
    }

    showStep(5);
}

// Reinicia a ferramenta para um novo ciclo
function resetFlow() {
    macroProblem = "";
    tasks = [];
    document.getElementById("macroProblem").value = "";
    document.getElementById("newTaskInput").value = "";
    document.getElementById("taskList").innerHTML = "";
    document.getElementById("btnPatterns").disabled = true;
    showStep(1);
}