const contactButton=document.getElementById('contactButton');
const contactDiv=document.getElementById('contact');

contactButton.addEventListener('click',()=> {
    if(contactDiv.style.display==='none') {
        contactDiv.style.display='block';
    }
    else {
        contactDiv.style.display='none';
    }
})

document.querySelectorAll('.icons')[0].addEventListener('click',() => {
    window.open('https://github.com/shamveelkhan?tab=overview&from=2025-01-01&to=2025-01-07','_blank')
})

document.querySelectorAll('.icons')[1].addEventListener('click',() => {
    window.open('https://www.linkedin.com/in/shamveel-khilji-78a74a345?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app','_blank');
})

document.querySelectorAll('.icons')[2].addEventListener('click',() => {
    window.open('https://x.com/KhiljiSham34999','_blank');
})

document.getElementById('menu-toggle').addEventListener('click', () => {
    const sidenav = document.getElementById('sidenav');
    sidenav.style.width = '250px';
    sidenav.classList.add('open');
});

document.getElementById('close-nav').addEventListener('click', () => {
    const sidenav = document.getElementById('sidenav');
    sidenav.style.width = '0';
    sidenav.classList.remove('open');
});

document.getElementById('sendFiles').addEventListener('click',()=>{
    window.location.href="sendFiles/sendFiles.html"
})

document.getElementById('receiveFiles').addEventListener('click',()=>{
    window.location.href='receiveFiles/receiveFiles.html'
})
