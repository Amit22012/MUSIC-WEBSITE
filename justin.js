const music = new Audio('songs/s1.mp3');
const arrlength=Array.from(document.getElementsByClassName('SongItem')).length;
// music.play();
const songs = [
    {
        id:'1',
        songname:`Let Me Love You
        
         <br>
        <div class="subtitle">DJ Snake - Encore</div>`,
        poster:"poster/playlistposter/justinposter/img1.webp"
    },
    {
        id:'2',
        songname:`
        Stay
         <br>
        <div class="subtitle">Justin Bieber</div>`,
        poster:"poster/playlistposter/justinposter/img2.webp"
    },
    {
        id:'3',
        songname:`Love Yourself
         <br>
        <div class="subtitle">Justin Bieber
        </div>`,
        poster:"poster/playlistposter/justinposter/img3.webp"
    },
    {
        id:'4',
        songname:`Sorry
        <br>
        <div class="subtitle">Justin Bieber
        </div>`,
        poster:"poster/playlistposter/justinposter/img4.webp"
    },
    {
        id:'5',
        songname:`
        Peaches
        <br>
        <div class="subtitle">Justin Bieber
        </div>`,
        poster:"poster/playlistposter/justinposter/img5.webp"
    },
    {
        id:'6',
        songname:`Intentions
        <br>
        <div class="subtitle"> Justin Bieber
        </div>`,
        poster:"poster/playlistposter/justinposter/img6.webp"
    },
    {
        id:'7',
        songname:`Ghost
       
        <br>
        <div class="subtitle"> Justin Bieber
        </div>`,
        poster:"poster/playlistposter/justinposter/img7.webp"
    },
    {
        id:'8',
        songname:`Yummy
        
        <br>
        <div class="subtitle">Justin Bieber
        </div>`,
        poster:"poster/playlistposter/justinposter/img8.webp"
    },
    {
        id:'9',
        songname:`
        Stuck With You

        <br>
        <div class="subtitle">Justin Bieber
        </div>`,
        poster:"poster/playlistposter/justinposter/img9.webp"
    },
    {
        id:'10',
        songname:`
        I Dont't Care 
        <br>
        <div class="subtitle">Justin Bieber
        </div>`,
        poster:"poster/playlistposter/justinposter/img10.webp"
    },
    {
        id:'11',
        songname:`Baby
        <br>
        <div class="subtitle">Justin Bieber
        </div>`,
        poster:"poster/playlistposter/justinposter/img11.webp"
    },
    {
        id:'12',
        songname:`Love Me
        
        <br>
        <div class="subtitle">Justin Bieber
        </div>`,
        poster:"poster/playlistposter/justinposter/img12.webp"
    },
    {
        id:'13',
        songname:`Company
        <br>
        <div class="subtitle">
        Justin Bieber
</div>`,
        poster:"poster/playlistposter/justinposter/img13.webp"
    },
    {
        id:'14',
        songname:`Never Say Never
        <br>
        <div class="subtitle">
        Justin Bieber
        </div>`,
        poster:"poster/playlistposter/justinposter/img14.webp"
    },
    {
        id:'15',
        songname:`Hold On
       
        <br>
        <div class="subtitle">Justin Bieber
        </div>`,
        poster:"poster/playlistposter/justinposter/img15.webp"
    }
    
]

Array.from(document.getElementsByClassName('SongItem')).forEach((e,i)=>{
    e.getElementsByTagName('img')[0].src=songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML=songs[i].songname;
});

let playerbtn=document.getElementById('playerbtn');
playerbtn.addEventListener('click',()=>{
    if(music.paused||music.currentTime<=0)
    {
        music.play();
        playerbtn.classList.add('fa-pause');
        playerbtn.classList.remove('fa-play');
    }
    else{
        music.pause();
        playerbtn.classList.remove('fa-pause');
        playerbtn.classList.add('fa-play');
    }
})


const makeallplays = () =>{
    Array.from(document.getElementsByClassName('playlistplay')).forEach((elx)=>{
        elx.classList.add('fa-play');
        elx.classList.remove('fa-pause'); 
    })
}




// scrolling javascript code

let releasemusic=document.getElementsByClassName('releasemusic')[0];
let all_artist=document.getElementsByClassName('all_artist')[0];
let tophitsmusic=document.getElementsByClassName('tophitsmusic')[0];
let arrowL=document.getElementById('arrowL');
let arrowR=document.getElementById('arrowR');
let art_arrowL=document.getElementById("art_arrowL");
let art_arrowR=document.getElementById("art_arrowR");
let tophits_arrowL=document.getElementById("tophits_arrowL");
let tophits_arrowR=document.getElementById("tophits_arrowR");


arrowR.addEventListener('click',()=>{
    releasemusic.style.scrollBehavior="smooth";
    releasemusic.scrollLeft +=500;
});
arrowL.addEventListener('click',()=>{
    releasemusic.style.scrollBehavior="smooth";

    releasemusic.scrollLeft -=500;
});
art_arrowR.addEventListener('click',()=>{
    all_artist.style.scrollBehavior="smooth";
    all_artist.scrollLeft +=300;
});
art_arrowL.addEventListener('click',()=>{
    all_artist.style.scrollBehavior="smooth";

    all_artist.scrollLeft -=300;
});
tophits_arrowR.addEventListener('click',()=>{
    tophitsmusic.style.scrollBehavior="smooth";
    tophitsmusic.scrollLeft +=500;
});
tophits_arrowL.addEventListener('click',()=>{
    tophitsmusic.style.scrollBehavior="smooth";

    tophitsmusic.scrollLeft -=500;
});




let index=0;
let playerposter=document.getElementById('playerposter');
let footname=document.getElementById('footname');
Array.from(document.getElementsByClassName('playlistplay')).forEach((e)=>{
    e.addEventListener('click',(el)=>{
        index=el.target.id;
        
        music.src=`songs/playlistsongs/justinsongs/s${index}.mp3`;
        music.play();
        playerbtn.classList.add('fa-pause');
        playerbtn.classList.remove('fa-play');

        let songlist=songs.filter((els)=>{
            return els.id==index;
        });
        songlist.forEach((elss)=>{
            let {songname,poster}=elss;
            footname.innerHTML=songname;
            playerposter.src=poster; 
        });

        makeallplays();
        el.target.classList.remove('fa-play');
        el.target.classList.add('fa-pause');

    })
});



let currentT=document.getElementById('start_time');
let endT=document.getElementById('end_time');
let seekbar=document.getElementById('seek');
let barX=document.getElementById('bar21');
let dotX=document.getElementById('dot22');

music.addEventListener('timeupdate',()=>{
    let music_curr=music.currentTime;
    let music_duration=music.duration;

    let min1=Math.floor(music_duration/60);
    let sec1=Math.floor(music_duration % 60);
    if(sec1<10)
    {
       sec1=`0${sec1}`; 
    }
    endT.innerText=`${min1}:${sec1}`;

    let min2=Math.floor(music_curr/60);
    let sec2=Math.floor(music_curr % 60);
    if(sec2<10)
    {
       sec2=`0${sec2}`; 
    }
    currentT.innerText=`${min2}:${sec2}`;

    let progressbar=parseInt((music_curr/music_duration)*100);
    seekbar.value=progressbar;
    
    let barwidth=seekbar.value;
    barX.style.width=`${barwidth}%`;
    dotX.style.left=`${barwidth-0.8}%`;
});

seekbar.addEventListener('change',()=>{
    music.currentTime=seekbar.value*music.duration/100;
})

let volicon=document.getElementById('volicon');
let vol=document.getElementById('volume_bar');
let bar=document.getElementById('bar2');
let dot=document.getElementById('dot');

vol.addEventListener('change',()=>{
    if(vol.value==0)
    {
        volicon.classList.remove('fa-volume-up')
        volicon.classList.remove('fa-volume-down')
        volicon.classList.add('fa-volume-mute')
    }
    if(vol.value>0)
    {
        volicon.classList.remove('fa-volume-up')
        volicon.classList.add('fa-volume-down')
        volicon.classList.remove('fa-volume-mute')
    }
    if(vol.value>50)
    {
        volicon.classList.add('fa-volume-up')
        volicon.classList.remove('fa-volume-down')
        volicon.classList.remove('fa-volume-mute')
    }

    let volx=vol.value;
    bar.style.width=`${volx}%`;
    dot.style.left=`${volx}%`;
    music.volume=volx/100;
});

let prevsong=document.getElementById('back');
let nextsong=document.getElementById('next');
prevsong.addEventListener('click',()=>{

        index-=1;
        if(index<1)
        {
            index=Array.from(document.getElementsByClassName('SongItem')).length;
        }
        console.log(index);
        music.src=`songs/playlistsongs/justinsongs/s${index}.mp3`;
        music.play();
        playerbtn.classList.add('fa-pause');
        playerbtn.classList.remove('fa-play');

        let songlist=songs.filter((els)=>{
            return els.id==index;
        });
        songlist.forEach((elss)=>{
            let {songname,poster}=elss;
            footname.innerHTML=songname;
            playerposter.src=poster; 
        });

        makeallplays();
        el.target.classList.remove('fa-play');
        el.target.classList.add('fa-pause');

});

nextsong.addEventListener('click',()=>{

    index++;
    music.src=`songs/playlistsongs/justinsongs/s${index}.mp3`;
    music.play();
    playerbtn.classList.add('fa-pause');
    playerbtn.classList.remove('fa-play');

    let songlist=songs.filter((els)=>{
        return els.id==index;
    });
    songlist.forEach((elss)=>{
        let {songname,poster}=elss;
        footname.innerHTML=songname;
        playerposter.src=poster; 
    });

    makeallplays();
    el.target.classList.remove('fa-play');
    el.target.classList.add('fa-pause');

});







let shuffle=document.getElementById('shuffle');
let ind=0;
// console.log(ind);

shuffle.addEventListener('click',()=>{
    // shuffle.style.background='red';
    console.log(ind);
    if(ind==0)
    {
        ind++;
        shuffle.style.background='rgb(105,105,105,0.7)';
        // console.log(ind);
    }
    else{
        ind--;
        shuffle.style.background='rgb(105,105,105,0)';
    }
    console.log(ind);
})

music.addEventListener('ended',()=>{

    if(ind==0)
    {
        next_musix();
    }
    else{
        random_musix();
    }
    
})

const next_musix=()=>{
    index++;
    if(index>Array.from(document.getElementsByClassName('SongItem')).length)
        {
            index=1;
        }

        music.src=`songs/playlistsongs/justinsongs/s${index}.mp3`;
    music.play();
    playerbtn.classList.add('fa-pause');
    playerbtn.classList.remove('fa-play');

    let songlist=songs.filter((els)=>{
        return els.id==index;
    });
    songlist.forEach((elss)=>{
        let {songname,poster}=elss;
        footname.innerHTML=songname;
        playerposter.src=poster; 
    });

    makeallplays();
    el.target.classList.remove('fa-play');
    el.target.classList.add('fa-pause');
}

const random_musix=()=>{
    index=Math.floor((Math.random()*arrlength)+1);
    if(index>Array.from(document.getElementsByClassName('SongItem')).length)
        {
            index=1;
        }

        music.src=`songs/playlistsongs/justinsongs/s${index}.mp3`;
    music.play();
    playerbtn.classList.add('fa-pause');
    playerbtn.classList.remove('fa-play');

    let songlist=songs.filter((els)=>{
        return els.id==index;
    });
    songlist.forEach((elss)=>{
        let {songname,poster}=elss;
        footname.innerHTML=songname;
        playerposter.src=poster; 
    });

    makeallplays();
    el.target.classList.remove('fa-play');
    el.target.classList.add('fa-pause');
}


// playnow button js

const playnowbtn=document.getElementById('playnowbtn');
playnowbtn.addEventListener('click',()=>{

    index=1;
    music.src=`songs/playlistsongs/justinsongs/s${index}.mp3`;
    music.play();
    playerbtn.classList.add('fa-pause');
    playerbtn.classList.remove('fa-play');

    let songlist=songs.filter((els)=>{
        return els.id==index;
    });
    songlist.forEach((elss)=>{
        let {songname,poster}=elss;
        footname.innerHTML=songname;
        playerposter.src=poster; 
    });

    makeallplays();
    el.target.classList.remove('fa-play');
    el.target.classList.add('fa-pause');

});



let flwbtn=document.getElementById('flwbtn');
var indx=0;
flwbtn.addEventListener('click',()=>{
    if(indx==0)
    {
        flwbtn.innerText='Following'
        indx++;
    }
    else{
        flwbtn.innerText='Follow';
        indx--;
    }
})

// volume hide show function 
const volbtn=document.querySelector(".volbar");

function showhide(){
    volbtn.classList.toggle("hide");
}
function showhide1(){
    volbtn.style.display="flex";
}
function showhide2(){
    volbtn.style.display="none";
}
