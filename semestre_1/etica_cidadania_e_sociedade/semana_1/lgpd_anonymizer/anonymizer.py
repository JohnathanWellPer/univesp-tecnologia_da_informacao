import csv
import os

# ==============================================================================
# LGPD DATA ANONYMIZER (Ética, Cidadania e Sociedade)
# Objetivo: Aplicar o dever ético e legal (LGPD) de proteger os dados sensíveis 
#           (Altruísmo/Respeito ao Outro) antes de compartilhar a base de dados.
# ==============================================================================

def mask_cpf(cpf):
    """
    Oculta os 3 primeiros e os 2 últimos dígitos do CPF.
    Exemplo: 123.456.789-00 -> ***.456.789-**
    """
    if not cpf or len(cpf) < 14:
        return cpf
    
    # Mantém os pontos e o traço, mas troca os números das pontas por '*'
    return f"***.{cpf[4:11]}-**"

def mask_email(email):
    """
    Oculta o corpo do e-mail, mantendo apenas a primeira letra e o provedor.
    Exemplo: johnathan.pereira@email.com -> j***@email.com
    """
    if "@" not in email:
        return email
    
    nome, provedor = email.split("@")
    # Mantém a 1ª letra, coloca 3 asteriscos e junta com o provedor
    nome_mascarado = nome[0] + "***" 
    
    return f"{nome_mascarado}@{provedor}"

def mask_salary(salary):
    """
    Substitui o valor numérico do salário por uma tag de confidencialidade,
    evitando exposição financeira do colaborador.
    """
    return "[CONFIDENCIAL]"

def process_database(input_file, output_file):
    """
    Lê o arquivo CSV original, aplica as máscaras de privacidade coluna a coluna
    e salva o resultado em um novo arquivo seguro.
    """
    # Verifica se o arquivo base existe antes de tentar abrir
    if not os.path.exists(input_file):
        print(f"[ERRO] O arquivo '{input_file}' não foi encontrado.")
        return

    print("Iniciando a auditoria e anonimização dos dados...")

    # Abre o arquivo de entrada para leitura e o de saída para escrita
    with open(input_file, mode='r', encoding='utf-8') as file_in:
        with open(output_file, mode='w', encoding='utf-8', newline='') as file_out:
            
            # Cria os leitores e escritores de CSV
            reader = csv.DictReader(file_in)
            
            # Pega o nome das colunas do arquivo original
            fieldnames = reader.fieldnames
            writer = csv.DictWriter(file_out, fieldnames=fieldnames)
            
            # Escreve o cabeçalho no novo arquivo
            writer.writeheader()
            
            linhas_processadas = 0

            # Passa linha por linha aplicando a ética/anonimização
            for row in reader:
                # Aplica as regras de negócio nas colunas sensíveis
                row['CPF'] = mask_cpf(row['CPF'])
                row['EMAIL'] = mask_email(row['EMAIL'])
                row['SALARIO'] = mask_salary(row['SALARIO'])
                
                # Grava a linha segura no novo arquivo
                writer.writerow(row)
                linhas_processadas += 1

    print(f"[SUCESSO] {linhas_processadas} registros foram anonimizados com sucesso!")
    print(f"[ARQUIVO GERADO] '{output_file}' está pronto e seguro para compartilhamento.")

# ==============================================================================
# EXECUÇÃO DO SCRIPT
# ==============================================================================
if __name__ == "__main__":
    # Nomes dos arquivos de entrada e saída
    arquivo_bruto = "clientes_base.csv"
    arquivo_seguro = "clientes_anonimizados.csv"
    
    # Roda a função principal
    process_database(arquivo_bruto, arquivo_seguro)