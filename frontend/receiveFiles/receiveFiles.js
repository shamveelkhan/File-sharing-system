const BASE_URL='https://httpbin.org/post';
const form = document.querySelector('form');
const contactButton=document.getElementById('contactButton');
const contactDiv=document.getElementById('contact');
const fileInput=document.getElementById('file-input');

function downloadFile(base64String, fileName, fileType) {

    const base64WithoutPrefix = base64String.replace(/^data:.*,/, '');

    const binaryData = atob(base64WithoutPrefix);
 
    const bytes = new Uint8Array(binaryData.length);
    for (let i = 0; i < binaryData.length; i++) {
        bytes[i] = binaryData.charCodeAt(i);
    }

    const blob = new Blob([bytes], { type: fileType });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName;

    link.click();
    URL.revokeObjectURL(link.href);
}

contactButton.addEventListener('click',()=> {
    if(contactDiv.style.display==='none') {
        contactDiv.style.display='block';
    }
    else {
        contactDiv.style.display='none';
    }
})

document.getElementById('menu-toggle').addEventListener('click', () => {
    document.getElementById('sidenav').style.width = '250px';
});

document.getElementById('close-nav').addEventListener('click', () => {
    document.getElementById('sidenav').style.width = '0';
});

document.getElementById('homeButton').addEventListener('click',() => {
    window.location.href='../index.html';
})

form.addEventListener('submit',async(e) => {
    e.preventDefault();
    const file=fileInput.files[0];
    let DATA = new FormData(form);
    DATA.append('filename',file.name);
    DATA.append('filetype',file.type);
    let response = await fetch(BASE_URL, {
        method: 'POST',
        body: DATA
    })
    let result=await response.json();
    console.log(await result);
})
