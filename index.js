let removeBtn=document.querySelector('.dyntag--btn');
let inputTxt=document.querySelector('.items--input');
let addBtn=document.querySelector('.items--btn1');
let dyntag=document.querySelector('.dyntag');

const tagSet=new Set();

// fn to create a tag chip element

function createTagChip(tag){
    const tagChip=document.createElement('div');
    tagChip.className='tag-chip';
    tagChip.textContent=tag;

    const removeBtn=document.createElement('button');
    removeBtn.className='remove-btn';
    removeBtn.innerHTML='&times;';
    removeBtn.addEventListener('click',()=>{
        tagSet.delete(tag);
        tagChip.remove();
    });

    tagChip.appendChild(removeBtn);
    return tagChip;
}

//fn to add a tag
function addTag(){
    const tag=inputTxt.value.trim();
    if(!tag){
        alert('Tag cannt be empty!');
        return;
    }
    if(tagSet.has(tag)){
        alert('Tag already exists!');
        return;
    }
    tagSet.add(tag);
    
    const tagChip=createTagChip(tag);
    dyntag.appendChild(tagChip);
    console.log();
    tagscount.textContent=12312;
    inputTxt.value='';
}



addBtn.addEventListener('click',addTag);


