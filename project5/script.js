var stories = document.querySelector('.stories');
var arr = [
    {pp: "https://i.pinimg.com/736x/66/09/ec/6609ecff6f6a3203352fbe0dd8b26630.jpg",story: "https://i.pinimg.com/736x/35/13/1a/35131a081a51993f737884b835ae5559.jpg"},
    {pp: "https://i.pinimg.com/736x/f0/69/94/f069948581aeb08e6e143b578bcc4d40.jpg",story: "https://i.pinimg.com/736x/12/e2/95/12e295edcf9bc67a12eeda5f41156cd1.jpg"},
    {pp: "https://i.pinimg.com/736x/7b/0c/0d/7b0c0d62c6602f676b6936a58d03ed4e.jpg",story: "https://i.pinimg.com/736x/3e/84/ca/3e84ca1cc1b8e44b3f4923d8f024e3e6.jpg"},
    {pp: "https://i.pinimg.com/736x/21/31/9b/21319ba92e9a4b4cc0ae753018dae3a8.jpg",story: "https://i.pinimg.com/736x/0a/fb/c1/0afbc11f1901980f978a53c97abb9f3c.jpg"},
    {pp: "https://i.pinimg.com/736x/5d/0e/fe/5d0efe704198ac8e6e34d80b02b5ca6e.jpg",story: "https://i.pinimg.com/736x/fa/52/83/fa5283c291ee11857c7ba970de3befd7.jpg"}
]

var clutter = '';

arr.forEach(function(val,index){
    clutter += `<div class="story">
                <img id="${index}" src="${val.pp}" alt="">
            </div>`
})

stories.innerHTML = clutter;

stories.addEventListener('click',function(dets){
    document.querySelector('#full-screen').style.display = 'block';
    document.querySelector('#full-screen').style.backgroundImage = `url(${arr[dets.target.id].story})`;

    setTimeout(function(){
        document.querySelector('#full-screen').style.display = 'none';
    },3000)
})




var img = document.querySelector('.postimg');
var love = document.querySelector('.ri-heart-fill');

img.addEventListener('dblclick', function () {
    love.style.transform = 'translate(-50%,-50%) scale(1.4)';
    love.style.opacity = 0.8;
    

    setTimeout(function () {
        love.style.transform = 'translate(-50%,-50%) scale(0)';
        love.style.opacity = 0;
    }, 1000)
})


