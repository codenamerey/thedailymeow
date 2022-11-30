const image = document.querySelector('.image');
const cap_title = document.querySelector('#caption-title');
const cap_desc = document.querySelector('#caption-desc');
const buttons = document.querySelectorAll('.button');
var slideIndex = 0;
let changeImage;

buttons.forEach((button) => {
    button.addEventListener('click', nextSlideOnClick)
});

function run()
{

    readJSON();
    changeImageAndTitle(data[slideIndex].image, data[slideIndex].title, data[slideIndex].desc);

    slideIndex++;
    if (slideIndex >= data.length)
    {
        slideIndex = 0;
    }
    console.log(slideIndex);
    changeImage = setTimeout(run, 5000);
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

function nextSlideOnClick(e) 
{
    if(e.target.id == 'left-arrow') 
    {
        if(slideIndex <= 0) 
        {
            slideIndex = 2;
            clearTimeout(changeImage);
        }

        else
        {
            slideIndex -= 1;
            clearTimeout(changeImage);
        }
        changeImageAndTitle(data[slideIndex].image, data[slideIndex].title, data[slideIndex].desc);
    }

    else
    {
        if(slideIndex >= 2) 
        {
            slideIndex = 0;
            clearTimeout(changeImage);
        }
        else {
            slideIndex += 1;
            clearTimeout(changeImage);
        }
        console.log(slideIndex);
        changeImageAndTitle(data[slideIndex].image, data[slideIndex].title, data[slideIndex].desc);
    }

}

document.onready = run();




