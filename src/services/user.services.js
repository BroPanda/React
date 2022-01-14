const getAllUsers = (url) => {
    return fetch(url)
        .then(data => data.json())
}

const getUserPostsById = (url, id) => {
    return fetch(`${url}/${id}/posts`)
        .then(data => data.json())
}

export const userService = {
    getAllUsers,
    getUserPostsById
}