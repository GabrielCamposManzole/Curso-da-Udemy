/*  Tipos de dados primitivos que sao imutaveis - string, number, boolean, undefined, null (bigint, symbol) - os valores sao copiados*/

    /*Tipos de dados referencia (multável) - array, object, function - os valores sao passados por referencia e eles apontao para o mesmo valor na memoria */

    let a = [1, 2, 3];
    let b = a;// atribuiçao por referencia, b aponta para o mesmo valor na memoria que a
    //let b = [...a];// spread operator cria uma copia rasa do array
    console.log(a, b);

    a.push(4);
    console.log(a, b);

    b.pop();
    console.log(a, b);

