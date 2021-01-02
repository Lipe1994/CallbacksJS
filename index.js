function ObterUsuario(callback){ 
    setTimeout( ()=> callback(null,{
            id: 1,
            nome:   "Filipe",
        }),
        1000
    )
}

function ObterTelefone(idUsuario, callback){
    setTimeout(()=> callback(null,{
        telefone: '38221725',
        ddd: '31'
    })),
    3000
}

function ObterEndereco(idUsuario, callback){
    setTimeout(()=> callback(null,{
        endereco: 'rua das flores',
        numero: 0
    }),
    6000
    )
}

ObterUsuario(function ResolverUsuario(erro, usuario){
        if(erro){
            console.error('Deu ruim em usuario.')
            return
        }

        ObterEndereco(usuario.id, function ResolverEndereco(erro, endereco){
            if(erro){
                console.error('Deu ruim em endereco.')
                return
            }

            ObterTelefone(usuario.id, function ResolverTelefone(erro, telefone){
                if(erro){
                    console.error('Deu ruim em telefone.')
                    return
                }

                console.log(`
                    Nome    ${usuario.nome}
                    Endereco    ${ endereco.endereco}
                    Telefone    (${telefone.ddd}) ${telefone.telefone}
                `)
            })
        })
    }
)



