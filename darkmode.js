const light=document.querySelector(".light");
const dark=document.querySelector(".dark");
const body=document.querySelector("body");
const main=document.querySelector("main");
console.log(light);
console.log(dark);
console.log(body);
dark.addEventListener("click",()=>
{
    body.style.backgroundColor="black";
    body.style.color="white";
    main.style.opacity="0.5";
})
light.addEventListener("click",()=>
{
    body.style.backgroundColor="white";
    body.style.color="black";
    main.style.opacity="1.0";
})