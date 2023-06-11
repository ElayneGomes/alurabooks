function aplicarDesconto(listaDelivros) {
    
    const desconto = 0.3;
    livrosComDesconto = listaDelivros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto)}
    })
    return livrosComDesconto;
}




