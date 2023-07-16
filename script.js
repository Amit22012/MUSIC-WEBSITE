const music = new Audio('songs/s1.mp3');
const arrlength=Array.from(document.getElementsByClassName('SongItem')).length;
// music.play();
const songs = [
    {
        id:'1',
        songname:`Mera Yaar <br>
        <div class="subtitle">Gurnaam Bhullar</div>`,
        poster:"poster/img1.jpeg"
    },
    {
        id:'2',
        songname:`Yaar Bathere <br>
        <div class="subtitle">Alfaaz Boy Next Door</div>`,
        poster:"poster/img2.jpeg"
    },
    {
        id:'3',
        songname:`Mehrma <br>
        <div class="subtitle">Sam Sandhu, Yo Yo Honey Singh</div>`,
        poster:"poster/img3.jpeg"
    },
    {
        id:'4',
        songname:`Wakh Ho Jana <br>
        <div class="subtitle">Gurnaam Bhullar-Main Viyah Nahi Karona Tere Naal</div>`,
        poster:"poster/img4.webp"
    },
    {
        id:'5',
        songname:`Kya Loge Tum<br>
        <div class="subtitle"> B Praak, Jaani - Kya Loge Tum</div>`,
        poster:"poster/img5.webp"
    },
    {
        id:'6',
        songname:`Dusk Till Dawn<br>
        <div class="subtitle"> ZAYN, Sia - Icarus Falls</div>`,
        poster:"poster/img6.webp"
    },
    {
        id:'7',
        songname:`Mann Bharryaa 2.0 (From "Shershaah")
        <br>
        <div class="subtitle">B Praak - Mann Bharryaa 2.0 From "Shershaah"</div>`,
        poster:"poster/img7.webp"
    },
    {
        id:'8',
        songname:`Filhall
        <br>
        <div class="subtitle">Bpraak-Filhall</div>`,
        poster:"poster/img8.webp"
    },
    {
        id:'9',
        songname:`
        Calm Down
        <br>
        <div class="subtitle">Rema, Selena Gomez - Calm Down</div>`,
        poster:"poster/newreleasesposter/img1.webp"
    },
    {
        id:'10',
        songname:`Bones<br>
        <div class="subtitle">Imagine Dragons - Bones</div>`,
        poster:"poster/newreleasesposter/img2.webp"
    },
    {
        id:'11',
        songname:`People <br>
        <div class="subtitle">Libianca - People</div>`,
        poster:"poster/newreleasesposter/img3.webp"
    },
    {
        id:'12',
        songname:`Unholy
        <br>
        <div class="subtitle">Sam Smith, Kim Petras - Unholy</div>`,
        poster:"poster/newreleasesposter/img4.webp"
    },
    {
        id:'13',
        songname:`
        Maan Meri Jaan (Afterlife)
        <br>
        <div class="subtitle">King, Nick Jonas - Maan Meri Jaan (Afterlife)</div>`,
        poster:"poster/newreleasesposter/img5.webp"
    },
    {
        id:'14',
        songname:`
        SNAP
        <br>
        <div class="subtitle">Rosa Linn - SNAP PACK</div>`,
        poster:"poster/newreleasesposter/img6.webp"
    },
    {
        id:'15',
        songname:`Perfect
        <br>
        <div class="subtitle">Ed Sheeran - ÷ Deluxe</div>`,
        poster:"poster/newreleasesposter/img7.webp"
    },
    {
        id:'16',
        songname:`Mohabbat
        <br>
        <div class="subtitle">
        Amaal Mallik - Mohabbat</div>`,
        poster:"poster/newreleasesposter/img8.webp"
    },
    {
        id:'17',
        songname:`Starboy
      
        <br>
        <div class="subtitle">
        The Weeknd - Starboy</div>`,
        poster:"poster/trendposter/img1.webp"
    },
    {
        id:'18',
        songname:`Let Me Love You
        
        <br>
        <div class="subtitle">
        DJ Snake - Encore</div>`,
        poster:"poster/trendposter/img2.webp"
    },
    {
        id:'19',
        songname:`STAY<br> 
        <div class="subtitle">
        The Kid LAROI, Justin Bieber - STAY</div>`,
        poster:"poster/trendposter/img3.webp"
    },
    {
        id:'20',
        songname:`Wolves
        <br>
        <div class="subtitle">
        Selena Gomez, Marshmello - Wolves</div>`,
        poster:"poster/trendposter/img4.webp"
    },
    {
        id:'21',
        songname:`Something Just Like This
        <br>
        <div class="subtitle">
        The Chainsmokers, Coldplay - Something Just Like This</div>`,
        poster:"poster/trendposter/img5.webp"
    },
    {
        id:'22',
        songname:`Love Yourself
        
        <br>
        <div class="subtitle">
        Justin Bieber - Purpose</div>`,
        poster:"poster/trendposter/img6.webp"
    },
    {
        id:'23',
        songname:`Sorry
        
        <br>
        <div class="subtitle">
        Justin Bieber - Purpose</div>`,
        poster:"poster/trendposter/img7.webp"
    },
    {
        id:'24',
        songname:`Not Afraid 
        <br>
        <div class="subtitle">
        Eminem - Recovery</div>`,
        poster:"poster/trendposter/img8.webp"
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
let trendmusic=document.getElementsByClassName('trendmusic')[0];
let arrowL=document.getElementById('arrowL');
let arrowR=document.getElementById('arrowR');
let art_arrowL=document.getElementById("art_arrowL");
let art_arrowR=document.getElementById("art_arrowR");
let trend_arrowL=document.getElementById("trend_arrowL");
let trend_arrowR=document.getElementById("trend_arrowR");


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
trend_arrowR.addEventListener('click',()=>{
    trendmusic.style.scrollBehavior="smooth";
    trendmusic.scrollLeft +=500;
});
trend_arrowL.addEventListener('click',()=>{
    trendmusic.style.scrollBehavior="smooth";

    trendmusic.scrollLeft -=500;
});




let index=0;
let playerposter=document.getElementById('playerposter');
let footname=document.getElementById('footname');
Array.from(document.getElementsByClassName('playlistplay')).forEach((e)=>{
    e.addEventListener('click',(el)=>{
        index=el.target.id;
        
        if(index<=3)
        {
            // playerposter.src=`poster/img${index}.jpeg`;
            music.src=`songs/s${index}.mp3`;
        }
        else if(index>3&&index<=8)
        {
            // playerposter.src=`poster/img${index}.webp`;
            music.src=`songs/s${index}.mp3`;
        }
        else if(index<=16)
        {
            // playerposter.src=`poster/newreleasesposter/img${index-8}.webp`;
            music.src=`songs/newrelease/s${index}.mp3`;
        }
        else{
            // playerposter.src=`poster/trendposter/img${index-16}.webp`;
            music.src=`songs/trend/s${index}.mp3`;
        }
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
        if(index<=3)
        {
            music.src=`songs/s${index}.mp3`;
        }
        else if(index>3&&index<=8)
        {
            music.src=`songs/s${index}.mp3`;
        }
        else if(index<=16)
        {
            music.src=`songs/newrelease/s${index}.mp3`;
        }
        else{
            music.src=`songs/trend/s${index}.mp3`;
        }
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
    if(index>Array.from(document.getElementsByClassName('SongItem')).length)
        {
            index=1;
        }

    if(index<=3)
    {
        music.src=`songs/s${index}.mp3`;
    }
    else if(index>3&&index<=8)
    {
        music.src=`songs/s${index}.mp3`;
    }
    else if(index<=16)
    {
        music.src=`songs/newrelease/s${index}.mp3`;
    }
    else{
        music.src=`songs/trend/s${index}.mp3`;
    }
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

    if(index<=3)
    {
        music.src=`songs/s${index}.mp3`;
    }
    else if(index>3&&index<=8)
    {
        music.src=`songs/s${index}.mp3`;
    }
    else if(index<=16)
    {
        music.src=`songs/newrelease/s${index}.mp3`;
    }
    else{
        music.src=`songs/trend/s${index}.mp3`;
    }
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

    if(index<=3)
    {
        music.src=`songs/s${index}.mp3`;
    }
    else if(index>3&&index<=8)
    {
        music.src=`songs/s${index}.mp3`;
    }
    else if(index<=16)
    {
        music.src=`songs/newrelease/s${index}.mp3`;
    }
    else{
        music.src=`songs/trend/s${index}.mp3`;
    }
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



// volume hide show function 
const volbtn=document.querySelector(".volbar");

function showhide(){
    volbtn.classList.toggle("hide");
}

