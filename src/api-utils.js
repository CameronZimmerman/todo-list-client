import request from 'superagent'
const url = 'https://mighty-crag-92685.herokuapp.com'

export async function signUpUser(user) {
    let userResponse = await request.post(`${url}/auth/signup`)
        .send(user)
    let token = userResponse.body.token
    return token
}

export async function loginUser(user) {
    let userResponse = await request.post(`${url}/auth/signin`)
        .send(user)
    let token = userResponse.body.token
    return token
}

export async function getTodos(token) {
    let todoData = await request.get(`${url}/api/todos`)
        .set('Authorization', token)
    return todoData.body;
}

export async function addTodo(todo, token) {
    await request.post(`${url}/api/todos`)
        .set('Authorization', token)
}

export async function updateTodos(token, id) {
    await request.put(`${url}/api/todos/${id}`)
        .set('Authorization', token)
        .send({id})
}