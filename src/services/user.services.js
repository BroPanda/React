const getAllUsers = (url) => {
    return fetch(url)
        .then(data => data.json())
}

const getUserById = (url, id) => {
    return fetch(`${url}${id}`)
        .then(data => data.json())
}

export const userService = {
    getAllUsers,
    getUserById
}