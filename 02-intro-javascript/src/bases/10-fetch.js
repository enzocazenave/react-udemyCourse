const api_key = "YtMTiQyQUaIwBp6YctpuZsw0TRM6ximj";

const httpCall = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`);

httpCall
    .then(resp => resp.json())
    .then(({data}) => {
        const {url} = data.images.original;
        
        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    })
    .catch(console.warn)