const menuBtn=document.getElementById('menuBtn');
const navbar=document.getElementById('navbar');
menuBtn.addEventListener('click',()=>navbar.classList.toggle('active'));

let cartCount=0;
function addToCart(item){
  cartCount++;
  document.getElementById('cartCount').innerText=cartCount;
  alert(item+" added to cart! 🛒 Total: "+cartCount);
}

function filterMenu(type,btn){
  document.querySelectorAll('.filter button').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.card').forEach(card=>{
    card.style.display=(type==='all'||card.dataset.type===type)?'block':'none';
  });
}

function sendMessage(e){
  e.preventDefault();
  let name=document.getElementById('name').value;
  document.getElementById('formMsg').innerText="Thank you "+name+"! Message sent successfully.";
  e.target.reset();
}
console.log("Bean & Bloom Loaded - Kaviya");