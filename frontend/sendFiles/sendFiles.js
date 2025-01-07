const BASE_URL='https://httpbin.org/post';
const FORM = document.querySelector('form');
const dropZone = document.getElementById("dropbox");
const fileInput=document.getElementById('file-input');
const dropText =document.getElementById('dropText');
const contactButton=document.getElementById('contactButton');
const contactDiv=document.getElementById('contact');
let selectedFile = null;
let fileCount =0;

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
    document.getElementById('menu-toggle').style.display = 'none'; 
});

document.getElementById('close-nav').addEventListener('click', () => {
    document.getElementById('sidenav').style.width = '0';
    document.getElementById('menu-toggle').style.display = 'block';
});

document.getElementById('homeButton').addEventListener('click',() => {
    window.location.href='../index.html'
});

document.querySelectorAll('.icons')[0].addEventListener('click',() => {
    window.open('https://github.com/shamveelkhan?tab=overview&from=2025-01-01&to=2025-01-07','_blank')
})

document.querySelectorAll('.icons')[1].addEventListener('click',() => {
    window.open('https://www.linkedin.com/in/shamveel-khilji-78a74a345?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app','_blank');
})

document.querySelectorAll('.icons')[2].addEventListener('click',() => {
    window.open('https://x.com/KhiljiSham34999','_blank');
})

document.querySelectorAll('.icons')[3].addEventListener('click',() => {
    window.open('https://github.com/shamveelkhan?tab=overview&from=2025-01-01&to=2025-01-07','_blank')
})

document.querySelectorAll('.icons')[4].addEventListener('click',() => {
    window.open('https://www.linkedin.com/in/shamveel-khilji-78a74a345?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app','_blank');
})

document.querySelectorAll('.icons')[5].addEventListener('click',() => {
    window.open('https://x.com/KhiljiSham34999','_blank');
})

fileInput.addEventListener('change',() => {
    const file = fileInput.files[0];
    dropText.innerHTML=file.name;
})

dropZone.addEventListener("dragover", (e) => {
    e.preventDefault();
});

dropZone.addEventListener("drop", (e) => {
    e.preventDefault();

    const files = e.dataTransfer.files;
    const fileInput = document.getElementById('file-input');

    if (files.length === 0) return;

    selectedFile = files[0];
    const dataTransfer = new DataTransfer();
    dataTransfer.items.add(selectedFile);
    fileInput.files = dataTransfer.files;
    const file = fileInput.files[0];
    dropText.innerHTML=file.name;
});

FORM.addEventListener('submit',async(e)=> {
    e.preventDefault();
    const file = fileInput.files[0];
    
    if(!file) {
        alert('please select a file!!');
        return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = async function(e) {
        const base64String = e.target.result.split(',')[1];
        fileCount++;
        let DATA = new FormData();
        DATA.append('filecount',fileCount);
        DATA.append('filename',file.name);
        DATA.append('filetype',file.type);
        DATA.append('base64',base64String);
        
        try {

            let response= await fetch(BASE_URL,{
                'method':'POST',
                'body':DATA,
            })
        
            if(!response.ok) {
                throw new Error('reponse not okay')
            }
        
            let result=await response.json();
            console.log(result);
        
            }
        
        catch(Err) {
            console.log('error was: ',Err)
        }
    }
})
