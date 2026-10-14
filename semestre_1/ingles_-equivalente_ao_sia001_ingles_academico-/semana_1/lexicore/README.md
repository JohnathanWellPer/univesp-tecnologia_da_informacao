<div align="center">
  <h2>LexiCore Dictionary</h2>
  <p>
    <em>Asynchronous API Vocabulary Fetcher | UNIVESP - LET100 - Week 1</em><br>
    <em>Buscador Assíncrono de Vocabulário via API | UNIVESP - LET100 - Semana 1</em>
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
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Notepad++-90E59A?style=for-the-badge&logo=notepadplusplus&logoColor=black" alt="Notepad++" />
</div>

<br/>

---

### 🇺🇸 Study Context

Project developed as the practical basis for Week 1 of the English course (LET100) at UNIVESP. The academic objective was the utilization of digital resources and online dictionaries to understand English structures. To elevate the study level, the theoretical concepts of pronunciation, sentence context, and Parts of Speech were translated into a real, functional Single Page Application integrating a third-party RESTful API.

### The Application

An autonomous client-side web tool designed to fetch vocabulary data in real-time. The system connects to an external dictionary server, parses the JSON response, and dynamically renders definitions, sentence examples, Parts of Speech tags, and native audio pronunciation.

### Business Rules (Applied Logic)

The system's intelligence was structured under four logical pillars of software engineering:

1. **Asynchronous API Consumption:** The JS engine utilizes `async/await` and the `fetch()` method to securely request data from the *Free Dictionary API* without blocking the UI rendering thread.
2. **JSON Parsing & Error Handling:** The system validates HTTP response statuses. If a word is not found (404), it throws an exception and dynamically renders a visual error alert. Otherwise, it parses the payload into a JavaScript Object.
3. **Dynamic DOM Manipulation:** The UI does not rely on static HTML. The JS engine iterates over the payload array (using `forEach`), injecting structural tags (Parts of Speech) and extracting only the top two definitions to prevent cognitive overload.
4. **Native Audio Integration:** The system searches the payload for valid `.mp3` phonetics URLs and instantiates the native JS `Audio` object to play the pronunciation via an event listener.

### How to Run (Local Deploy)

As a native web application, the system requires no installation of packages, dependencies, databases, or servers.

1. Clone this repository or download the files.
2. Navigate to the folder and double-click the `index.html` file.
3. The interface will automatically open in your default web browser, requiring only an active internet connection to fetch the API data.

<br/>

---

### 🇧🇷 Contexto do Estudo

Projeto desenvolvido como base prática da Semana 1 da disciplina de Inglês (LET100) da UNIVESP. O objetivo acadêmico foi a utilização de recursos digitais e dicionários online para a compreensão das estruturas da língua inglesa. Para elevar o nível do estudo, os conceitos teóricos de pronúncia, contexto de frases e Classes Gramaticais (Parts of Speech) foram materializados em uma Aplicação de Página Única (SPA) real e funcional, integrando uma API RESTful de terceiros.

### A Aplicação

Uma ferramenta web autônoma (Client-Side) projetada para buscar dados de vocabulário em tempo real. O sistema conecta-se a um servidor de dicionário externo, analisa a resposta JSON e renderiza dinamicamente definições, exemplos de frases, tags de Classes Gramaticais e áudio nativo com a pronúncia correta.

### Regras de Negócio (Lógica Aplicada)

A inteligência do sistema foi estruturada sob quatro pilares lógicos de engenharia de software:

1. **Consumo Assíncrono de API:** O motor JS utiliza `async/await` e o método `fetch()` para solicitar dados com segurança da *Free Dictionary API* sem travar a renderização da interface (UI).
2. **Tratamento de JSON e Erros:** O sistema valida os status da resposta HTTP. Se uma palavra não for encontrada (erro 404), ele dispara uma exceção e renderiza um alerta visual de erro dinamicamente. Caso contrário, converte o pacote de dados em um Objeto JavaScript.
3. **Manipulação Dinâmica do DOM:** A interface não depende de HTML estático. O motor JS itera sobre o array de dados (usando `forEach`), injetando tags estruturais (Classes Gramaticais) e extraindo apenas as duas principais definições para evitar sobrecarga cognitiva no usuário.
4. **Integração de Áudio Nativo:** O sistema busca no pacote de dados por URLs válidas de fonética `.mp3` e instancia o objeto nativo `Audio` do JS para reproduzir a pronúncia através de um evento de clique.

### Como Executar (Deploy Local)

Por ser uma aplicação web nativa, o sistema não exige instalação de pacotes, dependências, bancos de dados ou servidores.

1. Faça o clone deste repositório ou o download dos arquivos.
2. Navegue até a pasta e dê um duplo clique no arquivo `index.html`.
3. A interface abrirá automaticamente no seu navegador web padrão, exigindo apenas uma conexão ativa com a internet para buscar os dados da API.

<br/>

<div align="center">
  <a href="https://github.com/JohnathanWellPer/univesp-tecnologia_da_informacao">
    <img src="https://img.shields.io/badge/Return_to_UNIVESP_Root-C8102E?style=for-the-badge&logo=github&logoColor=white" alt="Return to Root" />
  </a>
</div>
