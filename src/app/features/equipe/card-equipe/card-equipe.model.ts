import { BaseModel } from "../../../shared/base/models/baseModel"


export class CardEquipe extends BaseModel {

    nome: string = ""
    cargo: string = ""
    departamento: string = ""
    foto: string = "https://confirpdigital.com.br/imagens/icon_funcionario_angular_vazio4.png"
    emptyPhoto: string = 'https://confirpdigital.com.br/imagens/icon_funcionario_angular_vazio4.png'

    constructor(obj: CardEquipeParam = null) {
        super()
        this.setProperties(this, obj)
    }
}

export class CardEquipeParam {

    nome?: string
    cargo: string
    departamento: string
    foto?: string
    emptyPhoto?: string
}