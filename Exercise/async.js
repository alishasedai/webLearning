
    

   const addItem = async(item) =>{
                await randomDelay();
               let div =  document.createElement("div");
               div.innerHTML = item;
               document.body.append(div);
            }


const randomDelay = ()=>{
    return new Promise((resolve,reject)=>{
       let timeout = 1+ 6* Math.random()
        setTimeout(() =>{
            resolve()
        },timeout *1000)
    })
}

async function main(){
     let t = setInterval(() =>{
       let last =  document.body.getElementsByTagName("div");
       last = last[last.length-1]
        if(last.innerHTML.endsWith("...")){
            last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length-3)
        }
        else{
            last.innerHTML = last.innerHTML + ".";
            
        }
    },100)
 
let text = ["Initializing hacking now reading your data",
            "Reading your files",
            "Password files Detected",
            "Sending all passwords and personal files to server",
            "Cleaning Up"]

            for(const item of text){
             await  addItem(item);
            }

            await randomDelay()
            
            }
         main()
        