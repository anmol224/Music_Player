const musicContainer=document.querySelector('.music-container')
const playBtn=document.querySelector('#play')
const prevBtn=document.querySelector('#prev')
const nextBtn=document.querySelector('#next')
const title=document.querySelector('.title')
const audio=document.querySelector('#audio')
const cover =document.querySelector('#cover')
const progress=document.querySelector('.progress')
const progressContainer=document.querySelector('.progress-container')
const singer=document.querySelector('.singer')

const songs=['Blank Space','Despacito','Let me Love You','Sugarcrash','Hold My Hand','Love me Like You do'];
const singers=['Taylor Swift','Louis fonsi','Justin Bieber','ElyOtto','Michael Jackson Ft.Akon','Ellie Goulding']
let songIndex=0;
loadSong(songs[songIndex])
function loadSong(song) 
{
    title.innerText=song
    audio.src=`music/${song}.mp3`
   singer.innerText=singers[songIndex]
    cover.src=`images/${song}.jpg`
}

function pauseSong() 
{
    musicContainer.classList.remove('play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')
    playBtn.querySelector('i.fas').classList.add('fa-play')
    audio.pause()
}
function playSong() 
{
    musicContainer.classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')
    audio.play()
}
playBtn.addEventListener('click',() => 
{
    const isPlaying=musicContainer.classList.contains('play')
    if(isPlaying)
        pauseSong()
    else
        playSong()

})
prevBtn.addEventListener('click',() => 
{
    songIndex--;
    if(songIndex < 0)
    {
        songIndex=songs.length-1;
    }
    loadSong(songs[songIndex])
    playSong()
})
nextBtn.addEventListener('click', nextSong)
function nextSong()
{
    songIndex++;
    if(songIndex > songs.length-1)
    {
        songIndex=0;
    }
    loadSong(songs[songIndex])
    playSong()
}
audio.addEventListener('timeupdate',progressUpdate)
function progressUpdate()
{
    const duration=audio.duration
    const current=audio.currentTime;
 
    progress.style.width=`${(current/duration)*100}%`
}
progressContainer.addEventListener('click',setProgress)
function setProgress(e)
{
    const width=this.clientWidth
    const x=e.offsetX;
    audio.currentTime=(x/width)*audio.duration
}
audio.addEventListener('ended',nextSong)
const m1=document.querySelector('.m-1')
m1.querySelector('h3').addEventListener('click',() => 
{
    songIndex=0;
    loadSong(songs[songIndex])
    playSong()
})
const m2=document.querySelector('.m-2')
m2.querySelector('h3').addEventListener('click',() => 
{
    songIndex=1;
    loadSong(songs[songIndex])
    playSong()
})
const m3=document.querySelector('.m-3')
m3.querySelector('h3').addEventListener('click',() => 
{
    songIndex=2;
    loadSong(songs[songIndex])
    playSong()
})
const m4=document.querySelector('.m-4')
m4.querySelector('h3').addEventListener('click',() => 
{
    songIndex=3;
    loadSong(songs[songIndex])
    playSong()
})
const m5=document.querySelector('.m-5')
m5.querySelector('h3').addEventListener('click',() => 
{
    songIndex=4;
    loadSong(songs[songIndex])
    playSong()
})
const m6=document.querySelector('.m-6')
m6.addEventListener('click',() => 
{
    songIndex=5;
    loadSong(songs[songIndex])
    playSong()
})