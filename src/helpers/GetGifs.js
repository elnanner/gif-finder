
export const getGifs = async (category) => {
    
    const apiKey = 'Zv7Hcjmk7QPrOKr0SNcdJwn8qII59OsE'
    const limit = 10
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURI(category)}&limit=${limit}`;
    const resp = await fetch(url);

    const { data } = await resp.json(resp);

    return data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.original.url
        }
    })

    
}
