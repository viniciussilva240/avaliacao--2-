import express from "express";
import {
    buscarLivroPorAutor,
    buscarLivroPorId,
    buscarlivroPorano,
    buscarTodosOsLivros1,
} from "./servico/servico.js";
import livros from "./dados/dados.js";

const app = express();

app.get("/livros", (req, res) => {
    const {autor} = req.query;

    let resultado = buscarTodosOsLivros1();

    if (autor) {
    resultado = buscarLivroPorAutor(autor);
    }


    if (resultado.length > 0) {
    res.json(resultado);
    } else {
    res.status(404).send({ erro: "Nenhum livro encontrado com os critérios fornecidos." });
    }
});



app.get("/livros/:id", (req, res) => {
    const id = req.params.id;
    const idNumerico = parseInt(id);

    if (isNaN(idNumerico)) {
    return res.status(400).json({ erro: "Requisição inválida. O ID deve ser um número." });
    }

    const livros =  buscarLivroPorId(idNumerico);

    if (livros) {
        res.json(livros);
    } else {
        res.status(404).json({ erro: "Nenhum livro encontrado com esse id." });
    }
});

app.get("/livro/ano/:ano", (req, res) => {
    const ano = req.params.ano;
    const numero = parseInt(ano);

    if (isNaN(numero)) {
        return res.status(400).json({ erro: "Requisição inválida. O ano do livro deve ser um valor numérico.",});
    }

    const resultado = buscarLivroPorAutor(numero);

    if (resultado.length > 0) {
        res.json(resultado);
    } else {
        res.status(404).json({ erro: "Nenhum livro encontrado para este ano." });
    }
});


app.listen(8080, () => {
    const data = new Date();
    console.log(`Servidor da API de Tênis iniciado na porta 8080 em: ${data}`);
});
