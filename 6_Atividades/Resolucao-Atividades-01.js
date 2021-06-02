/* RESOLUÇÃO DAS ATIVIDADES-01 */

/* OBS: PODEM EXISTIR OUTRAS FORMAS DE RESOLUÇÃO */

//01
function cumprimentar(nome) {
    return `Olá, ${nome}!`;
}

//02
function converterIdadeParaDias(idade) {
    const diasdoAno = 365;
    return diasdoAno * idade;
}

//03
function calcularSalarioLiquido(horasTrabalhadas, ganhoPorHora) {
    const salarioBruto = horasTrabalhadas * ganhoPorHora;
    const salarioLiquido = salarioBruto - salarioBruto * 30 / 100;

    return `Salário igual a R$ ${salarioLiquido}`;
}


//04
function receberNomeDoMes(numeroDoMes) {
    const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    return meses[--numeroDoMes];
}

//05
function maiorOuIgual(primeiro, segundo) {
    if (typeof primeiro != typeof segundo) {
        return false
    }

    return primeiro >= segundo;
}

//06
function inverso(valor) {
    const tipo = typeof valor;

    if (tipo === "boolean") {
        return !valor;
    } else if (tipo === "number") {
        return -valor;
    } else {
        return `Booleano ou Número esperados, mas o parâmetro é do tipo ${tipo}`;
    }
}

//07
function estaEntre(min, max, numero, inclusivo = false) {
    if (inclusivo) {
        return numero >= min && numero <= max;
    } else {
        return numero > min && numero < max;
    }

    //RESOLUÇÃO COM OPERADORES TERNÁRIOS
    //return inclusivo ? numero >= min && numero <= max : numero > min && numero < max;
}

//08
function multiplicar(numeroA, numeroB) {
    let resultado = 0

    for (let i = 0; i < numeroB; i++) {
        resultado += numeroA
    }

    return resultado
}

//09 
function repetir(item, qtd) {
    return Array(qtd).fill(item);
}

//10
function simboloMais(qtd) {
    return "+".repeat(qtd);
}


