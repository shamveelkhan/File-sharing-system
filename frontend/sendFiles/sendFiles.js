const BASE_URL='https://httpbin.org/post';
const FORM = document.querySelector('form');
let fileCount =0;

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
})

FORM.addEventListener('submit',async(e)=> {
    e.preventDefault();
    const fileInput = document.getElementById('file-input');
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