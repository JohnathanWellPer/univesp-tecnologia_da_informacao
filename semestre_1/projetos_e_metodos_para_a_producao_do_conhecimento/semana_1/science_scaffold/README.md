<div align="center">
  <h2>Science Scaffold CLI</h2>
  <p>
    <em>Automated ABNT Research Project Generator | UNIVESP - INT100 - Week 1</em><br>
    <em>Gerador Automatizado de Projeto de Pesquisa ABNT | UNIVESP - INT100 - Semana 1</em>
  </p>

  <p>
    <b>Choose your language:</b><br>
    <b>Escolha seu idioma:</b><br>
    <a href="#study-context">English</a> | <a href="#contexto-do-estudo">Português</a>
  </p>

  <p>
    <b>Tech Stack & Tools</b><br>
    <b>Tecnologias & Ferramentas</b>
  </p>

  <img src="https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows" />
  <img src="https://img.shields.io/badge/Google%20Chrome-4285F4?style=for-the-badge&logo=GoogleChrome&logoColor=white" alt="Google Chrome" />
  <img src="https://img.shields.io/badge/Google%20Gemini-8E75B2?style=for-the-badge&logo=googlegemini&logoColor=white" alt="Google Gemini" />
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  <img src="https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white" alt="Markdown" />
  <img src="https://img.shields.io/badge/Notepad++-90E59A?style=for-the-badge&logo=notepadplusplus&logoColor=black" alt="Notepad++" />
  <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python" />
  <img src="https://img.shields.io/badge/Terminal-4D4D4D?style=for-the-badge&logo=windows-terminal&logoColor=white" alt="Terminal" />
</div>

<br/>

---

### 🇺🇸 Study Context

Project developed as the practical basis for Week 1 of the "Projects and Methods for Knowledge Production" course (INT100) at UNIVESP. The academic objective was to understand the transition from common sense to scientific knowledge and to grasp the rigorous structure required for academic research (ABNT NBR 15287). To bring this epistemology into the software engineering realm, these methodological rules were translated into a Backend Command-Line Interface (CLI) assistant capable of guiding and validating a researcher's thought process.

### The Application

A Python CLI application that acts as an interactive academic wizard. The script conducts a step-by-step interview with the user to extract the core components of a research proposal (Theme, Problem, Objectives, Methodology). It evaluates the input in real-time and dynamically generates a fully structured, Markdown-formatted research scaffold ready for expansion.

### Business Rules (Applied Logic)

1. **Epistemological Validation:** The system utilizes a predefined array of scientifically accepted infinitive verbs. It intercepts the user's input during the "Specific Objectives" phase, splitting strings to validate the leading action verb. It actively blocks inappropriate phrasing and provides educational feedback.
​2. **Automated Documentation (I/O):** Bypasses the "blank page syndrome" by utilizing Python's native `os` and file handling capabilities to autonomously construct and save a `.md` file containing correct semantic headings and a Gantt Chart for the project timeline.
3. **Continuous Terminal Loops:** Implements robust `while` loops for data collection, ensuring that users can input an arbitrary number of specific objectives and safely exit the flow via controlled conditional breaks.

### How to Run (Local Deploy)

1. Clone this repository or download the files.
​2. Open your terminal or command prompt.
3. Navigate to the folder containing the script.
4. Execute the command: `python scaffold.py`
5. Answer the prompts and check the newly generated `projeto_esboco.md` file in the same directory.

<br/>

---

### 🇧🇷 Contexto do Estudo

Projeto desenvolvido como base prática da Semana 1 da disciplina de Projetos e Métodos para a Produção do Conhecimento (INT100) da UNIVESP. O objetivo acadêmico foi compreender a transição do senso comum para o conhecimento científico e dominar a estrutura rigorosa exigida para a pesquisa acadêmica (ABNT NBR 15287). Para trazer essa epistemologia para o reino da engenharia de software, essas regras metodológicas foram traduzidas em um assistente de Linha de Comando (CLI) capaz de guiar e validar o raciocínio de um pesquisador.

### A Aplicação

Um aplicativo CLI em Python que atua como um assistente acadêmico interativo. O script conduz uma entrevista passo a passo com o usuário para extrair os componentes centrais de uma proposta de pesquisa (Tema, Problema, Objetivos, Metodologia). Ele avalia a entrada de dados em tempo real e gera dinamicamente um esqueleto de pesquisa (scaffold) em Markdown, totalmente estruturado e pronto para expansão.

### Regras de Negócio (Lógica Aplicada)

1. **Validação Epistemológica:** O sistema utiliza um array predefinido de verbos no infinitivo cientificamente aceitos. Ele intercepta a entrada do usuário durante a fase de "Objetivos Específicos", dividindo as strings para validar o verbo de ação inicial. A aplicação bloqueia ativamente frases inadequadas e fornece feedback educacional em tempo real.
​2. **Documentação Automatizada (I/O):** Evita a "síndrome da página em branco" utilizando as capacidades nativas de manipulação de arquivos e do módulo `os` do Python para construir e salvar autonomamente um arquivo `.md` contendo os cabeçalhos semânticos corretos e um Gráfico de Gantt para o cronograma do projeto.
3. **Loops Contínuos de Terminal:** Implementa loops `while` robustos para a coleta de dados, garantindo que os usuários possam inserir um número arbitrário de objetivos específicos e sair com segurança do fluxo através de interrupções condicionais controladas.

<br/>

<div align="center">
  <a href="https://github.com/JohnathanWellPer/univesp-tecnologia_da_informacao">
    <img src="https://img.shields.io/badge/Return_to_UNIVESP_Root-D13239?style=for-the-badge&logo=github&logoColor=white" alt="Return to Root" />
  </a>
</div>
