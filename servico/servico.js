import livros from "../dados/dados.js";

export const buscarTodosOsLivros1 = () => {
    return livros;
};

export const buscarLivroPorId = (id) => {
    const idlivro = parseInt(id);
    return livros.find((item) => item.id === idlivro);
};
export const buscarlivroPorano = (ano) => {
    const num = parseInt(ano);
    return livros.filter((item) => item.ano === num);
};

export const buscarLivroPorAutor = (autor) => {
    const nomeLower = autor.toLowerCase();
    return livros.filter(
    (item) =>
        item.autor.toLowerCase().includes(nomeLower) || (item.autor.split(" ")[1] && item.autor.split(" ")[1].toLowerCase().includes(nomeLower)))
};

