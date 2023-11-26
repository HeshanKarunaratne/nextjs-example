export const postList: Posts[] = [
    {
        "id": 1,
        "title": "Post1",
        "show": true
    },
    {
        "id": 2,
        "title": "Post2",
        "show": false
    },
    {
        "id": 3,
        "title": "Post3",
        "show": true
    }
]

export type Posts = {
    id: number,
    title: String,
    show: boolean
}