console.log("International Villagers");
let songIndex=0;
let audioElement=new Audio('1.mp3');
let masterplay=document.getElementById('masterplay');    
let song=[
    {songName:"Goliyan",filePath:"D:\Project\Goliyan 2.mp3",coverpath:"p12325617_b_v8_aa.jpg"}
]
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play
    }
})