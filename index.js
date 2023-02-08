let doc = document.getElementById("img01")
let url = prompt ('Ingrse id Url gdrive');
//doc.src=`https://drive.google.com/uc?export=view&id=${url}`;
let pos=0
let pos2=0

for(i=0;i<url.length;i++){
    if(url.substring(i,i+2)==="d/"){
      pos=i
    }


}
for(i=0;i<url.length;i++){
    if(url.substring(i,i+2)==="/v"){
      pos2=i
    }


}

doc.src=`https://drive.google.com/uc?export=view&id=${url.substring(pos+2,pos2)}`;




