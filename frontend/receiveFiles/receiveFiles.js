document.getElementById('menu-toggle').addEventListener('click', () => {
    document.getElementById('sidenav').style.width = '250px';
});

document.getElementById('close-nav').addEventListener('click', () => {
    document.getElementById('sidenav').style.width = '0';
});

document.getElementById('homeButton').addEventListener('click',() => {
    window.location.href='../index.html';
})