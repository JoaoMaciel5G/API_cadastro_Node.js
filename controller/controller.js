const model = require("../model/model")

const getAllUsers = async (request, response)=>{
    try{
        const users = await model.find()
        response.status(200).json(users)
    }catch(error){
        response.status(400).json({erro: "Erro ao buscar os usuários"})
    }
}

const getUser = async (request, response)=>{
    const id = request.params.id
    try{
        const user = await model.findOne({_id: id})
        const {_id, name, age} = user
        response.status(200).json({_id, name, age})
    }catch(error){
        response.status(404).json({erro: "Usuário não encontrado"})
    }
}

const createUser = async (request, response)=>{
    const {name, age, email, senha, approved} = request.body

    try{
        if(!name){
            response.status(400).json({erro: "name obrigatório"})
            return
        }else if(!age){
            response.status(400).json({erro: "age obrigatório"})
            return
        }else if(!email){
            response.status(400).json({erro: "email obrigatório"})
            return
        }else if(!senha){
            response.status(400).json({erro: "senha obrigatório"})
            return
        }

        const people = {
            name, 
            age, 
            email, 
            senha,
            approved
        }

        const create = await model.create(people)
        response.status(201).json({message: "Usuário criado com sucesso"})
    }catch(error){
        response.status(400).json({erro: "Não foi possivel criar usuário"})
    }
}

const updateUser = async (request, response)=>{
    const id = request.params.id
    const {name, age, email, senha, approved} = request.body
    
    const people = {
        name, 
        age, 
        email, 
        senha,
        approved
    }

    try{
        const update = await model.updateOne({_id: id}, people)
        response.status(200).json({message: "Usuário atualizado com sucesso"})
    }catch(error){
        response.status(400).json({erro: "Não foi possivel atualizar o seu usuário"})
    }
}

const deleteUser = async (request, response)=>{
    const id = request.params.id

    try{
        const del = await model.deleteOne({_id: id})
        response.status(201).json({message: "Usuário deletado com sucesso"})
    }catch(error){
        response.status(400).json({message: "Não foi possivel excluir o usuário"})
    }
}

module.exports = {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}