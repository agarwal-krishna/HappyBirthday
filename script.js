const right=document.getElementById("right");
const right2=document.getElementById("right2");
let score=0;
const ss=document.getElementById("ss")
function next(){
    right.style.backgroundColor='green'
    score+=1;
    if(score>=2)
    {
        ss.innerText="P.S. Keep a screenshot of the correct answers!"
        const b=document.createElement("button")
        b.setAttribute("type", "button");
        b.textContent = "Poem";
        document.body.appendChild(b);
        const el=document.getElementById("butt")
        el.appendChild(b);
        b.onclick=function(){
            window.open('poem.html')
        }
        score=0;
    }
}
function next2(){
    right2.style.backgroundColor='green'
    score+=1;
    if(score>=2)
    {
    ss.innerText="P.S. Keep a screenshot of the correct answers!"
    const b=document.createElement("button")
    b.setAttribute("type", "button");
    b.textContent = "Poem";
    const el=document.getElementById("butt")
    el.appendChild(b);
    b.onclick=function(){
        window.open('poem.html')
    }
    score=0
    }
}
