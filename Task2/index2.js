const searchInp=document.querySelector('.searchinput');
let drop=document.querySelector('.dropdown');

const itemcountries = [
    'United States', 'Canada', 'Mexico', 'Brazil', 'Argentina',
    'United Kingdom', 'Germany', 'France', 'Italy', 'Spain','India','Russia'
];


searchInp.addEventListener('input',()=>{
    const q=searchInp.value.toLowerCase();
    if(q){
        const filterItem=itemcountries.filter(itemcountries=>itemcountries.toLowerCase().startsWith(q.toLowerCase()));
        showDrop(filterItem);
    }else{
        hideDrop();
    }
});

function showDrop(filterItem){
    drop.innerHTML='';//clr prev res
    if(filterItem.length>0){
        filterItem.forEach(item => {
            const div=document.createElement('div');
            div.textContent=item;
            div.classList.add('dropitem');
            div.addEventListener('click',()=>{
                searchInp.value=item;
                hideDrop();
            });
            
            drop.appendChild(div);
        });
        drop.style.display='block';
    }else{
        hideDrop();
    }

}


function hideDrop(){
    drop.innerHTML='';
    drop.style.display='none';
}

