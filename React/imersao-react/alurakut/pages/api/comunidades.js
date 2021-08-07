import { SiteClient } from 'datocms-client'

export default async function recebedorDeRequest(request, response) {
    if ( request.method === 'POST' ) {
        const TOKEN = 'c9993e088ae70a85bef5b9c99935ef'
        const client = new SiteClient(TOKEN)

        // Validar os dados antes de sair cadastrando
        const registroCriado = await client.items.create({
            itemType: '971927',     // ID do Model (Editar modelo no site)
            ...request.body,
            // title: "Comunidade de Teste",
            // imageUrl: "http://github.com/Mathvivas.png",
            // creatorSlug: "Mathvivas"
        })

        consolee.log(registroCriado)

        response.json({
            dados: "Reggistro Criado",
            resgistroCriado: registroCriado,
        })
        return
    }

    response.status(404).json({
        message: "Ainda não temos nada no GET, mas tem no POST!"
    })
}