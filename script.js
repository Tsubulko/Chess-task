function draw()
{
    let a = " ";
    let counter = 0;
    for(let i = 1; i <= 8; i++)
    {
        for(let j = 1; j <= 8; j++)
        {
            counter % 2 == 0
            ?a += `<div class="spot" data-x=${i} data-y=${j}></div>`
            :a += `<div class="spot white-spot" data-x=${i} data-y=${j}></div>`;
            counter++;
        }
        counter++;
    }
    document.querySelector('.chess-desk').innerHTML = a;
    document.querySelectorAll('.spot').forEach(a => a.onclick = getXY)
}
draw()
function getXY() 
{
    document.querySelectorAll('.active').forEach(a => a.classList.remove('active'))
    document.querySelectorAll('.step').forEach(a => a.classList.remove('step'))
    let x = this.dataset.x;
    let y = this.dataset.y;
    this.classList.add('active');
    if(+x - 2 > 0 && +y + 1 <= 8)
    {
        document.querySelector(`.spot[data-x="${+x - 2}"][data-y="${+y + 1}"]`).classList.add('step');
    }
    if(+x - 2 > 0 && +y - 1 > 0)
    {
        document.querySelector(`.spot[data-x="${+x - 2}"][data-y="${+y - 1}"]`).classList.add('step');
    }
    if(+x + 2 <= 8 && +y + 1 <= 8)
    {
        document.querySelector(`.spot[data-x="${+x + 2}"][data-y="${+y + 1}"]`).classList.add('step');
    }
    if(+x + 2 <= 8 && +y - 1 > 0)
    {
        document.querySelector(`.spot[data-x="${+x + 2}"][data-y="${+y - 1}"]`).classList.add('step');
    }
    if(+x - 1 > 0 && +y + 2 <= 8)
    {
        document.querySelector(`.spot[data-x="${+x - 1}"][data-y="${+y + 2}"]`).classList.add('step');
    }
    if(+x + 1 <= 8 && +y + 2 <= 8)
    {
        document.querySelector(`.spot[data-x="${+x + 1}"][data-y="${+y + 2}"]`).classList.add('step');
    }
    if(+x - 1 > 0 && +y - 2 > 0)
    {
        document.querySelector(`.spot[data-x="${+x - 1}"][data-y="${+y - 2}"]`).classList.add('step');
    }
    if(+x + 1 <= 8 && +y - 2 > 0)
    {
        document.querySelector(`.spot[data-x="${+x + 1}"][data-y="${+y - 2}"]`).classList.add('step');
    }
}
