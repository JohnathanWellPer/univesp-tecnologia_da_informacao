<div align="center">
  <h2>Text Democratizer (NLP Readability Analyzer)</h2>
  <p>
    <em>Natural Language Processing for Text Clarity | UNIVESP - LET110 - Week 1</em><br>
    <em>Processamento de Linguagem Natural para Clareza Textual | UNIVESP - LET110 - Semana 1</em>
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

Project developed as the practical basis for Week 1 of the "Reading and Text Production" course (LET110) at UNIVESP. The academic objective was to analyze the social function of writing, drawing inspiration from Paulo Freire's philosophy that reading the world precedes reading the word, and critically addressing the "impenetrable fog" of overly academic, exclusionary language. To materialize these linguistic concepts, a Natural Language Processing (NLP) tool was built in Python to mathematically measure text clarity.

### The Application

A Python CLI application designed as a Readability Auditor. The script reads raw unstructured `.txt` files and calculates their accessibility index using an adapted Portuguese Flesch Reading Ease Formula. It performs programmatic syntactic decoding by counting sentences, words, and syllables using Regular Expressions (Regex).

### Business Rules (Applied Logic)

1. **Zero-Dependency NLP:** The script eschews heavy libraries like NLTK or SpaCy in favor of Python's native `re` (Regex) module. It implements a custom mathematical heuristic to accurately identify and count continuous vowel groups to estimate syllable density.
2. **Readability Mathematics:** Implements the algorithm: `248.835 - (1.015 x ASL) - (84.6 x ASW)`, directly correlating Average Sentence Length (ASL) and Average Syllables per Word (ASW) to calculate cognitive load.
3. **Social Diagnosis:** Translates raw numerical data into actionable social diagnoses, immediately identifying whether a text democratizes knowledge or enforces exclusionary linguistic barriers.

### How to Run (Local Deploy)

1. Clone this repository.
2. Open the terminal and navigate to the project directory.
3. Execute the command: `python democratizer.py`
4. The terminal will output the structural statistics (sentences, words, syllables) alongside the final readability score of the target document.

<br/>

---

### 🇧🇷 Contexto do Estudo

Projeto desenvolvido como base prática da Semana 1 da disciplina de Leitura e Produção de Textos (LET110) da UNIVESP. O objetivo acadêmico foi analisar a função social da escrita, inspirando-se na filosofia de Paulo Freire (onde a leitura do mundo precede a leitura da palavra) e abordando criticamente o "nevoeiro impenetrável" da linguagem acadêmica excludente. Para materializar esses conceitos linguísticos, foi construída uma ferramenta de Processamento de Linguagem Natural (NLP) em Python para medir matematicamente a clareza textual.

### A Aplicação

Um aplicativo CLI em Python projetado como um Auditor de Legibilidade. O script lê arquivos `.txt` não estruturados e calcula seu índice de acessibilidade usando uma adaptação da Fórmula de Facilidade de Leitura de Flesch para o português. Ele executa a decodificação sintática programática contando frases, palavras e sílabas usando Expressões Regulares (Regex).

### Regras de Negócio (Lógica Aplicada)

1. **NLP sem Dependências:** O script evita bibliotecas pesadas como NLTK ou SpaCy em favor do módulo nativo `re` (Regex) do Python. Ele implementa uma heurística matemática customizada para identificar e contar grupos vocálicos contínuos, estimando a densidade silábica.
2. **Matemática da Legibilidade:** Implementa o algoritmo `248.835 - (1.015 x ASL) - (84.6 x ASW)`, correlacionando diretamente o Comprimento Médio da Frase (ASL) e a Média de Sílabas por Palavra (ASW) para calcular a carga cognitiva.
3. **Diagnóstico Social:** Traduz dados numéricos brutos em diagnósticos sociais, identificando imediatamente se um texto democratiza o conhecimento ou impõe barreiras linguísticas excludentes.

<br/>

<div align="center">
  <a href="https://github.com/JohnathanWellPer/univesp-tecnologia_da_informacao">
    <img src="https://img.shields.io/badge/Return_to_UNIVESP_Root-C8102E?style=for-the-badge&logo=github&logoColor=white" alt="Return to Root" />
  </a>
</div>
