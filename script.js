document.getElementById('contracheque-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtendo valores dos campos
    const salarioBruto = parseFloat(document.getElementById('salario-bruto').value);
    const beneficios = parseFloat(document.getElementById('beneficios').value);

    // Função para calcular o INSS
    function calcularINSS(salario) {
        let inss = 0;
        let percentual = 0;
        if (salario <= 1320) {
            inss = salario * 0.075;
            percentual = 7.5;
        } else if (salario <= 2640) {
            inss = (1320 * 0.075) + ((salario - 1320) * 0.09);
            percentual = 9;
        } else if (salario <= 3960) {
            inss = (1320 * 0.075) + ((2640 - 1320) * 0.09) + ((salario - 2640) * 0.12);
            percentual = 12;
        } else {
            inss = (1320 * 0.075) + ((2640 - 1320) * 0.09) + ((3960 - 2640) * 0.12) + ((salario - 3960) * 0.14);
            percentual = 14;
        }
        return { valor: inss, percentual };
    }

    // Função para calcular o Imposto de Renda
    function calcularIR(salario) {
        let ir = 0;
        let percentual = 0;
        const salarioAnual = salario * 12; // Calcula o salário anual
        if (salarioAnual <= 22847.76) {
            ir = 0;
            percentual = 0;
        } else if (salarioAnual <= 33929.64) {
            ir = (salarioAnual - 22847.76) * 0.075 / 12;
            percentual = 7.5;
        } else if (salarioAnual <= 40729.40) {
            ir = (11081.88 * 0.075 + (salarioAnual - 33929.64) * 0.15) / 12;
            percentual = 15;
        } else if (salarioAnual <= 48856.68) {
            ir = (11081.88 * 0.075 + 6782.76 * 0.15 + (salarioAnual - 40729.40) * 0.225) / 12;
            percentual = 22.5;
        } else {
            ir = (11081.88 * 0.075 + 6782.76 * 0.15 + 8148.28 * 0.225 + (salarioAnual - 48856.68) * 0.275) / 12;
            percentual = 27.5;
        }
        return { valor: ir, percentual };
    }

    // Calculando INSS e IR
    const { valor: inss, percentual: percentualINSS } = calcularINSS(salarioBruto);
    const { valor: ir, percentual: percentualIR } = calcularIR(salarioBruto);

    // Calculando o salário líquido
    const descontos = inss + ir;
    const salarioLiquido = salarioBruto - descontos + beneficios;

    // Atualizando os resultados na página
    document.getElementById('salario-bruto-resultado').textContent = `Salário Bruto: R$${salarioBruto.toFixed(2)}`;
    document.getElementById('inss-valor').textContent = `INSS: R$${inss.toFixed(2)} (${percentualINSS}%)`;
    document.getElementById('ir-valor').textContent = `Imposto de Renda: R$${ir.toFixed(2)} (${percentualIR}%)`;
    document.getElementById('beneficios-resultado').textContent = `Benefícios: R$${beneficios.toFixed(2)}`;
    document.getElementById('salario-liquido-resultado').textContent = `Salário Líquido: R$${salarioLiquido.toFixed(2)}`;
});
