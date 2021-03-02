import request from 'superagent'
const url = 'https://mighty-crag-92685.herokuapp.com'

export async function signUpUser(user) {
    let userResponse = await request.post(`${url}/auth/signup`)
        .send(user)
    let token = userResponse.body.token
    return token
}