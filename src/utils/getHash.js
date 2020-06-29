const getHash = () => 
    location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/' //#/about/ -> /about/ -> /about/ -> ["", "about", ""] -> "about"

export default getHash;