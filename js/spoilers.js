//*****************Spoilers*****************
/*html
<button class="acc" onclick="acc(this)">Кнопка</button>
<div class="accD dn">
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi architecto autem deserunt, eos explicabo labore, laborum molestiae natus nemo nesciunt nostrum quasi, ratione reiciendis reprehenderit saepe sequi sit voluptatem.
</div>
*/
/*css
.dn{display: none}
*/
window.acc=(e)=>{
    let q=document.querySelectorAll(".acc"),
        w=document.querySelectorAll(".accD");
    q.forEach((e2,l)=>{
        if(e==e2){
            if(!e.classList.contains("accCl")){
                e.classList.add("accCl");
                w[l].classList.remove("dn")
            }else{
                e.classList.remove("accCl");
                w[l].classList.add("dn")
            }
        }
    })
};
