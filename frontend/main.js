
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