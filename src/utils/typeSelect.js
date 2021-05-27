export function typeFunc(props){
    switch(props){
        case 'application/vnd.google-apps.png':
            props = 'https://img.icons8.com/offices/30/000000/live-folder.png'
        case 'application/vnd.google-apps.png' ||  'application/vnd.google-apps.jpeg' :
            props = 'https://img.icons8.com/color/48/000000/audio-file.png'
        case  ' application/vnd.google-apps.docx' :
            props = 'https://img.icons8.com/color/48/000000/google-docs--v1.png'
        break      
    }
}