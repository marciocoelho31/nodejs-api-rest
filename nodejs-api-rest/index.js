const customExpress = require('./config/customExpress')
const conexao = require('./infrastructure/conexao')
const tabelas = require('./infrastructure/tabelas')

conexao.connect(erro => {
    if (erro) {
        console.log(erro)
    } else {
        console.log('Conectado com sucesso')

        tabelas.init(conexao)
        
        const app = customExpress()
        app.listen(3000, () => console.log('servidor rodando na porta 3000'))
    }
})

