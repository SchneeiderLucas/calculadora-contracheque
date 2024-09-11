def calcular_contracheque(salario_bruto, descontos, beneficios):
    """
    Calcula o contracheque com base no salário bruto, descontos e benefícios.

    :param salario_bruto: Salário bruto do empregado
    :param descontos: Deduções (impostos, contribuições etc.)
    :param beneficios: Benefícios (vale-transporte, vale-refeição, etc.)
    :return: Dicionário com os detalhes do contracheque
    """
    
    # Calcula o salário líquido
    salario_liquido = salario_bruto - descontos + beneficios
    
    # Cria o contracheque como um dicionário
    contracheque = {
        'Salário Bruto': salario_bruto,
        'Descontos': descontos,
        'Benefícios': beneficios,
        'Salário Líquido': salario_liquido
    }
    
    return contracheque

# Exemplo de uso
salario_bruto = 5000.00  # Exemplo de salário bruto
descontos = 800.00       # Exemplo de descontos (impostos, INSS, etc.)
beneficios = 200.00     # Exemplo de benefícios (vale-refeição, etc.)

contracheque = calcular_contracheque(salario_bruto, descontos, beneficios)

# Exibindo o contracheque
for chave, valor in contracheque.items():
    print(f"{chave}: R${valor:.2f}")
