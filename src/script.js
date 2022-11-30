const image = document.querySelector('.image');
const cap_title = document.querySelector('#caption-title');
const cap_desc = document.querySelector('#caption-desc');
var slideIndex = 0;

function run()
{

    readJSON();
    changeImageAndTitle(data[slideIndex].image, data[slideIndex].title, data[slideIndex].desc);

    slideIndex++;
    if (slideIndex >= data.length)
    {
        slideIndex = 0;
    }
    setTimeout(run, 5000);
}

function readJSON()
{
    data = JSON.parse(`[
    {
        "image": "image1.png",
        "title": "Nyebe, ipinroklamang Pangulo",
        "desc": "Itinalagang pangulo ng Republika ng 'Sang Kapusaan si Nyebe."
    }
,
    {
        "image": "image2.png",
        "title": "Cardelle, mukhang tanga",
        "desc": "Tingnan n'yo si Cardelle mukhang tanga."
    }
,
    {
        "image": "image3.png",
        "title": "Tofu, grumaduate nang Magna",
        "desc": "nakaw"
    }
    ]
`);
}

function changeImageAndTitle(img, title, desc)
{
    image.classList.remove("fade");
    
    image.src = `./res/carousel/${img}`;
    cap_title.innerText = title;
    cap_desc.innerText = desc;
    image.offsetWidth;
    image.classList.add("fade");
}

document.onready = run();




