import os

# ==============================================================================
# SCIENCE SCAFFOLD CLI (Projetos e Métodos para a Produção do Conhecimento)
# Objetivo: Assistente de terminal que aplica regras metodológicas (ABNT) em 
# tempo real e gera a estrutura ('scaffold') de um projeto de pesquisa acadêmica.
# ==============================================================================

# Lista de verbos recomendados pelo manual para Objetivos Específicos
VERBOS_PERMITIDOS = [
    "acompanhar", "adquirir", "analisar", "aplicar", "apontar", "apresentar", 
    "avaliar", "caracterizar", "classificar", "comparar", "compreender", 
    "construir", "conhecer", "definir", "demonstrar", "descrever", "desenvolver", 
    "determinar", "elaborar", "especificar", "estabelecer", "examinar", 
    "explicar", "identificar", "indicar", "interpretar", "investigar", 
    "justificar", "listar", "mostrar", "organizar", "planejar", "propor", 
    "reconhecer", "relacionar", "selecionar", "sintetizar", "sistematizar"
]

def clear_screen():
    """Limpa o terminal para uma interface mais limpa."""
    os.system('cls' if os.name == 'nt' else 'clear')

def print_header():
    print("=" * 60)
    print(" SCIENCE SCAFFOLD: GERADOR DE PROJETO DE PESQUISA ".center(60, "="))
    print("=" * 60)
    print("Construa a base do seu projeto com validação metodológica.\n")

def validate_verb(objective):
    """
    Verifica se a primeira palavra do objetivo inserido é um verbo no 
    infinitivo aceito pelas normas metodológicas.
    """
    if not objective:
        return False, ""
    
    first_word = objective.split()[0].lower()
    if first_word in VERBOS_PERMITIDOS:
        return True, first_word
    return False, first_word

def run_interview():
    """Coleta os dados do usuário passo a passo."""
    print_header()
    
    tema = input("[1/5] Qual é o TEMA da sua pesquisa? (ex: Inteligência Artificial na Saúde)\n> ")
    problema = input("\n[2/5] Qual é o PROBLEMA de pesquisa? (Formule como uma pergunta)\n> ")
    objetivo_geral = input("\n[3/5] Qual é o OBJETIVO GERAL? (Onde você quer chegar?)\n> ")
    
    print("\n[4/5] Digite seus OBJETIVOS ESPECÍFICOS (Pressione Enter com o campo vazio para finalizar).")
    print("Aviso: Eles devem começar com verbos no infinitivo (ex: Analisar, Comparar, Identificar).")
    
    objetivos_especificos = []
    while True:
        obj = input(f" Objetivo {len(objetivos_especificos) + 1}: ")
        if not obj.strip():
            if len(objetivos_especificos) > 0:
                break
            else:
                print(" -> Insira pelo menos um objetivo específico.")
                continue
                
        is_valid, verb = validate_verb(obj)
        
        if is_valid:
            objetivos_especificos.append(obj)
        else:
            print(f" -> [ERRO METODOLÓGICO] '{verb}' não é um verbo recomendado no infinitivo.")
            print(f" -> Tente usar verbos como: Analisar, Compreender, Desenvolver, Avaliar...")

    metodologia = input("\n[5/5] Qual a TÉCNICA DE PESQUISA? (ex: Pesquisa de Campo, Estudo de Caso)\n> ")
    
    return {
        "tema": tema,
        "problema": problema,
        "objetivo_geral": objetivo_geral,
        "objetivos_especificos": objetivos_especificos,
        "metodologia": metodologia
    }

def generate_markdown(data, filename="projeto_esboco.md"):
    """Gera um arquivo Markdown com a estrutura oficial formatada."""
    
    md_content = f"""# PROJETO DE PESQUISA
*Documento gerado automaticamente pelo Science Scaffold CLI*

---

## 1. TEMA
{data['tema']}

## 2. PROBLEMA DE PESQUISA
{data['problema']}

## 3. OBJETIVOS

### 3.1 Objetivo Geral
{data['objetivo_geral']}

### 3.2 Objetivos Específicos
"""
    for obj in data['objetivos_especificos']:
        md_content += f"- {obj.capitalize()}\n"

    md_content += f"""
## 4. PROCEDIMENTOS METODOLÓGICOS
**Técnica selecionada:** {data['metodologia']}

*(Desenvolva aqui os passos que serão executados para a coleta e análise dos dados...)*

## 5. CRONOGRAMA
| Atividades | Mês 1 | Mês 2 | Mês 3 | Mês 4 |
| :--- | :---: | :---: | :---: | :---: |
| Revisão Bibliográfica | X | X | | |
| Coleta de Dados | | X | X | |
| Análise de Resultados | | | X | X |
| Redação Final | | | | X |

## 6. REFERÊNCIAS
*(Insira as referências no formato ABNT NBR 6023)*
"""
    # Cria e escreve no arquivo
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(md_content)
        
    print(f"\n[SUCESSO] Estrutura validada e gerada no arquivo: '{filename}'")

# ==============================================================================
# INICIALIZAÇÃO
# ==============================================================================
if __name__ == "__main__":
    clear_screen()
    dados_projeto = run_interview()
    generate_markdown(dados_projeto)