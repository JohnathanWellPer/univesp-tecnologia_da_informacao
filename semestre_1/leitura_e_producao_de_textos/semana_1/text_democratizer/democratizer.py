import os
import re

# ==============================================================================
# TEXT DEMOCRATIZER (Leitura e Produção de Textos)
# Objetivo: Analisar a legibilidade de textos usando Processamento de Linguagem 
# Natural (NLP) básico para garantir a clareza e a função social da escrita.
# ==============================================================================

def count_syllables(word):
    """
    Heurística simples para contar sílabas em português sem bibliotecas externas.
    Baseia-se na contagem de grupos vocálicos contínuos.
    """
    word = word.lower()
    # Encontra todas as sequências de vogais (incluindo acentuadas)
    vowel_groups = re.findall(r'[aeiouáéíóúâêôãõ]+', word)
    return max(1, len(vowel_groups))

def calculate_flesch_index(text):
    """
    Calcula o Índice de Facilidade de Leitura de Flesch adaptado para o Português.
    Fórmula: 248.835 - (1.015 x (Palavras/Frases)) - (84.6 x (Sílabas/Palavras))
    """
    # 1. Contagem de Frases (separadas por ., !, ?)
    sentences = re.split(r'[.!?]+', text)
    sentences = [s.strip() for s in sentences if s.strip()]
    total_sentences = max(1, len(sentences))

    # 2. Contagem de Palavras
    words = re.findall(r'\b\w+\b', text)
    total_words = max(1, len(words))

    # 3. Contagem de Sílabas
    total_syllables = sum(count_syllables(word) for word in words)

    # 4. Cálculo das Médias
    words_per_sentence = total_words / total_sentences
    syllables_per_word = total_syllables / total_words

    # 5. Aplicação da Fórmula (Índice Flesch adaptado para PT-BR)
    flesch_score = 248.835 - (1.015 * words_per_sentence) - (84.6 * syllables_per_word)
    
    return round(flesch_score, 2), total_sentences, total_words, total_syllables

def interpret_score(score):
    """
    Traduz o índice matemático para um diagnóstico social de leitura.
    """
    if score >= 75:
        return "MUITO FÁCIL: Acessível para estudantes do ensino fundamental. Excelente função social."
    elif 50 <= score < 75:
        return "MÉDIO: Acessível para estudantes do ensino médio. Clareza adequada."
    elif 25 <= score < 50:
        return "DIFÍCIL: Exige nível superior. Linguagem acadêmica ou técnica."
    else:
        return "MUITO DIFÍCIL: Nevoeiro impenetrável. Exige jargão profissional. Risco de exclusão social."

def analyze_document(filepath):
    """
    Lê o arquivo de texto e gera o relatório completo de acessibilidade textual.
    """
    print("=" * 60)
    print(" AUDITOR DE LEGIBILIDADE E CLAREZA TEXTUAL ".center(60, "="))
    print("=" * 60)

    if not os.path.exists(filepath):
        print(f"[ERRO] O arquivo '{filepath}' não foi encontrado.")
        return

    with open(filepath, 'r', encoding='utf-8') as file:
        text = file.read()

    # Processamento dos dados
    score, sentences, words, syllables = calculate_flesch_index(text)
    diagnostico = interpret_score(score)

    # Saída do Relatório
    print(f"\nDocumento analisado: {filepath}")
    print("-" * 60)
    print(f"Total de Frases:  {sentences}")
    print(f"Total de Palavras:{words}")
    print(f"Total de Sílabas: {syllables}")
    print("-" * 60)
    print(f"Índice Flesch:    {score} / 100")
    print(f"Diagnóstico:      {diagnostico}\n")
    print("=" * 60)

# ==============================================================================
# EXECUÇÃO DO SCRIPT
# ==============================================================================
if __name__ == "__main__":
    arquivo_alvo = "amostra_academica.txt"
    analyze_document(arquivo_alvo)