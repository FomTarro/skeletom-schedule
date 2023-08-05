
const week = document.getElementById('week').innerHTML = SCHEDULE.week;
const container = document.getElementById('parent');
container.innerHTML ='';
var offset = 0;
for(var item of SCHEDULE.events){
    const outer = document.createElement('div');
    outer.classList.add('item', 'schedule', 'dark');
    const date = document.createElement('div');
    date.classList.add("item", 
        "sub-item", 
        "font-small", 
        "darker");
        outer.appendChild(date);
        date.innerHTML = item.date;
    const titleContainer = document.createElement('div');
    titleContainer.classList.add('event', 'column');
    const title = document.createElement('div');
    title.classList.add('font-medium');
    title.innerHTML = item.title;
    const subtitle = document.createElement('div');
    subtitle.classList.add('subtitle', 'font-small');
    subtitle.innerHTML = item.subtitle;
    titleContainer.appendChild(title);
    titleContainer.appendChild(subtitle);
    outer.appendChild(titleContainer);

    const image = document.createElement('img');
    image.classList.add('event-image');
    image.src = item.img;
    outer.appendChild(image);
    outer.style.marginLeft = `${7*offset}vmax`
    offset++;
    container.appendChild(outer);
}

container.style.fontSize = `${2.5/offset}em`;