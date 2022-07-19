const category= document.getElementById('category');
const subCategory= document.getElementsByClassName('subCategory')[0]
const add= ()=> subCategory.classList.add('show');
const remove= ()=> subCategory.classList.remove('show');

category.addEventListener('click',()=>subCategory.classList.contains('show')?remove():add())
category.addEventListener('mouseover',()=>add())
category.addEventListener('mouseout',()=>remove())
subCategory.addEventListener('mouseover',()=>add())
subCategory.addEventListener('mouseout',()=>remove())