function verificarcnpj(){
    let cnpj = '11.222.333/0001-81'
    let cnpjsodigitos = cnpj.replaceAll('.','').replaceAll('/','').replaceAll('-','').split('')
    if(cnpjsodigitos.length != 14){
        return 'CNPJ INVÁLIDO!'
    }
    let soma = 0
    let mult = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]

    for(i = 0; i < 12; i++){
        soma = cnpjsodigitos[i] * mult[i]

    }
    for(i = 0; i < 13; i++){
        soma = cnpjsodigitos[i] * mult[i]
    }
    console.log(soma)
}
verificarcnpj()