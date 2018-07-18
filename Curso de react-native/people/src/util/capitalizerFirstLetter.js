/* 
    Deixa a primeira letra de uma palavra em maiúscula
    Ex: exemplo => Exemplo
*/

const capitalizerFirstLetter = string => {
    return string[0].toUpperCase() + string.slice(1);
}

export default capitalizerFirstLetter;