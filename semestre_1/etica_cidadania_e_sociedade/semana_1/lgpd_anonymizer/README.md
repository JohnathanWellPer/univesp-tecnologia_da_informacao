<div align="center">
  <h2>LGPD Data Anonymizer</h2>
  <p>
    <em>Corporate Ethics & Privacy Compliance Script | UNIVESP - SOC100 - Week 1</em><br>
    <em>Script de Conformidade Ética e Privacidade | UNIVESP - SOC100 - Semana 1</em>
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
  <img src="https://img.shields.io/badge/Terminal-4D4D4D?style=for-the-badge&logo=windows-terminal&logoColor=white" alt="Terminal" />
  <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python" />
</div>

<br/>

---

### 🇺🇸 Study Context

Project developed as the practical basis for Week 1 of the "Ethics, Citizenship, and Society" course (SOC100) at UNIVESP. The academic objective was to differentiate Internal Ethics (individual character) from Moral Duty (heteronomy and social rules imposed for collective well-being). To elevate this philosophical study to the IT market reality, the concepts of Kantian moral duty and altruism were translated into a backend Python script designed to enforce Data Privacy (LGPD / GDPR).

### The Application

A Command-Line Interface (CLI) Python tool designed for data engineering and HR/Compliance sectors. The script reads a raw, sensitive database (`clientes_base.csv`), applies non-reversible masking algorithms to Personally Identifiable Information (PII), and generates a secure file ready for corporate sharing (`clientes_anonimizados.csv`).

### Business Rules (Applied Logic)

1. **Heteronomy & Legal Compliance:** The script codifies social laws (LGPD) into automated actions, stripping sensitive identifiers (CPF, Email, Salary) to protect third-party dignity and avoid corporate liabilities.
​2. **Native Standard Libraries:** Built strictly with Python's native `csv` and `os` modules. No external dependencies (like Pandas) were used, ensuring extreme portability and immediate execution in any zero-setup environment.
3. **Data Immutability:** The algorithm relies on defensive data handling. It never overwrites the original file; instead, it parses memory nodes row by row and writes to a completely new output file, preserving the integrity of the raw data.
4. **Conditional Masking:** Applies specific string-slicing logic depending on the data type (e.g., preserving domain providers in emails while scrambling usernames, or slicing the first and last digits of a national ID).

### How to Run (Local Deploy)

1. Clone this repository or download the files.
​2. Open your terminal or command prompt.
3. Navigate to the folder containing the script.
4. Execute the command: `python anonymizer.py`
5. Check the newly generated `clientes_anonimizados.csv` file.

<br/>

---

### 🇧🇷 Contexto do Estudo

Projeto desenvolvido como base prática da Semana 1 da disciplina de Ética, Cidadania e Sociedade (SOC100) da UNIVESP. O objetivo acadêmico foi diferenciar a Ética Interna (caráter individual) do Dever Moral (heteronomia e regras sociais impostas para o bem-estar coletivo). Para elevar esse estudo filosófico à realidade do mercado de TI, os conceitos de dever moral kantiano e altruísmo foram traduzidos para um script back-end em Python projetado para impor a Privacidade de Dados (LGPD).

### A Aplicação

Uma ferramenta de Linha de Comando (CLI) em Python projetada para engenharia de dados e setores de Compliance/RH. O script lê um banco de dados bruto e sensível (`clientes_base.csv`), aplica algoritmos de mascaramento irreversíveis em Informações de Identificação Pessoal (PII) e gera um arquivo seguro, pronto para compartilhamento corporativo (`clientes_anonimizados.csv`).

### Regras de Negócio (Lógica Aplicada)

1. **Heteronomia e Conformidade Legal:** O script codifica leis sociais (LGPD) em ações automatizadas, removendo identificadores sensíveis (CPF, E-mail, Salário) para proteger a dignidade de terceiros e evitar passivos corporativos.
​2. **Bibliotecas Nativas:** Construído estritamente com os módulos nativos `csv` e `os` do Python. Nenhuma dependência externa (como Pandas) foi utilizada, garantindo extrema portabilidade e execução imediata em qualquer ambiente sem necessidade de instalação de pacotes.
3. **Imutabilidade de Dados:** O algoritmo baseia-se no manuseio defensivo de dados. Ele nunca sobrescreve o arquivo original; em vez disso, analisa os nós em memória linha por linha e escreve em um arquivo de saída completamente novo, preservando a integridade dos dados brutos.
4. **Mascaramento Condicional:** Aplica fatiamento de strings (slicing) específico dependendo do tipo de dado (ex: preserva provedores de domínio em e-mails enquanto oculta o nome do usuário, ou substitui os primeiros e últimos dígitos do CPF por asteriscos).

<br/>

<div align="center">
  <a href="https://github.com/JohnathanWellPer/univesp-tecnologia_da_informacao">
    <img src="https://img.shields.io/badge/Return_to_UNIVESP_Root-D13239?style=for-the-badge&logo=github&logoColor=white" alt="Return to Root" />
  </a>
</div>
