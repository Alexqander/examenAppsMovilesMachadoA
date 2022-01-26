const cargar = async()=>{

    let palabraClave = 'lavadora';
    const apiKey = 'QItTTWwtAy1wVTru0DtEAgEAQVd17fY7';
    const url1 = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${palabraClave}&limit=1`;

try{
    const gifConsultado = await fetch(url1);
    const gif = await gifConsultado.json();

    
    console.log('este es el gif:');
    console.log(gif);

    const{data:{0:{images:{original:{url}}}}} = gif;

    console.log('este es el gif desarmado')
    console.log(url)

    let contenido =""
    contenido = `<img src="${url}">`
    document.getElementById('gifis').innerHTML = contenido


}catch(err){
    console.log('este es el error');
    console.log(err);
}
}

cargar()