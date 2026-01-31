const gallery = document.getElementById("gallery");
const opening = document.getElementById("opening");
const preview = document.getElementById("preview");
const previewImg = document.getElementById("previewImg");
const caption = document.getElementById("caption");
const flowers = document.querySelector(".flowers");

const captions = [
    "🌸 Imut banget",
    "✨ Soft moment",
    "📷 Foto favorit",
    "🎀 Manis",
    "☁️ Calm vibes",
    "🌷 Natural look",
    "💫 Aesthetic"
];

/* OPENING */
setTimeout(()=>{
    opening.style.display="none";
},2200);

/* FLOWERS */
setInterval(()=>{
    const f=document.createElement("span");
    f.innerText=["🌸","🌷","✨","💮"][Math.floor(Math.random()*4)];
    f.style.left=Math.random()*100+"vw";
    f.style.animationDuration=5+Math.random()*5+"s";
    flowers.appendChild(f);
    setTimeout(()=>f.remove(),10000);
},500);

/* LOAD 97 FOTO */
for(let i=1;i<=97;i++){
    const card=document.createElement("div");
    card.className="card";
    card.innerHTML=`<img src="foto/${i}.jpg" loading="lazy">`;
    card.onclick=()=>openPreview(`foto/${i}.jpg`);
    gallery.appendChild(card);
}

/* PREVIEW */
function openPreview(src){
    preview.style.display="flex";
    previewImg.src=src;
    caption.innerText=captions[Math.floor(Math.random()*captions.length)];
}

/* CLOSE */
function closePreview(){
    preview.style.display="none";
}

/* DARK */
function toggleDark(){
    document.body.classList.toggle("dark");
}

/* SPARKLE */
document.addEventListener("click",e=>{
    const s=document.createElement("div");
    s.className="sparkle";
    s.innerText="✨";
    s.style.left=e.pageX+"px";
    s.style.top=e.pageY+"px";
    document.body.appendChild(s);
    setTimeout(()=>s.remove(),600);
});