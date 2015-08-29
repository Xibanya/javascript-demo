function Character(id, fullName, shortName, stats, bio, voice, link) {

    this.id = id;
    this.fullName = fullName;
    this.shortName = shortName; /*not currently used but is defined in the game's code as well, so might as well create a parameter for it now */
    this.stats = stats;
    this.bio = bio;
    this.voice = voice;
    this.link = link;
}

current = new Character();

function debug() {
    bio(6);
}

var characters = [];

characters[0] = new Character(
    'fumi',
    'Tatsufumi Kajikawa',
    'Tatsufumi',
    
    '<strong>Age:</strong> 16<br>' + 
    '<strong>Blood Type:</strong> B<br>' + 
    '<strong>Likes:</strong> Smoking in school uniform<br>' + 
    '<strong>Dislikes:</strong> Actually going to school',
    
    'Six months after putting a permanent end to The Prince of Dissness&apos;s Dozens of Evil, ' + 
    'Tatsufumi learned of an even greater threat: The Philosopher&apos;s Burn. Its power too great ' + 
    'for any mere mortal, Tatsufumi seeks to destroy it so that mankind will no longer live in ' + 
    'the shadow of its shade.',
    
    'Christopher Lane Davis',
    'http://slamfighter.com/team-dogpit/cldavis/'
    );

characters[1] = new Character(
    'bunny',
    'Bunny Williams',
    'Bunny',
    
    '<strong>Age:</strong> 15<br>' + 
    '<strong>Likes:</strong> Bunnies<br>' + 
    '<strong>Dislikes:</strong> S-stupid Fumi-kun, it&apos;s not like I like you or anything...',
    
    'Bunny&apos;s older brother Wally was renowned as a master trashtalker whose intense and complex ' +
    'flows were universally recognized as dope. Bunny&apos;s life changed forever when B. Stag ' + 
    'attacked their village. Wally took on B. Stag alone but was rendered catatonic by a single ' + 
    'brutal read. Bunny plans to use the Philosopher&apos;s Burn on B. Stag to avenge her brother&apos;s ' + 
    'street cred.',
    
    'Melanie Ehrlich',
    'http://slamfighter.com/team-dogpit/mehrlich/'
    );

characters[2] = new Character(
    'dietrich',
    'D-Trick Love',
    'D-Trick',
    
    '<strong>Age:</strong> 19 (32 in anime years)<br>' + 
    '<strong>Marital Status:</strong> Eligible Bachelor, Million dollar boat<br>' + 
    '<strong>Eyebrows:</strong> On Fleek',
    
    'When Tatsufumi declined to take D-Trick&apos;s life after besting him in a no-holds-barred slam ' + 
    'fight to the death, B. Stag threw his right-hand man off a cliff; his body was never recovered. ' + 
    'Six months after his apparent demise, D-Trick contacted Tatsufumi to warn him of B. Stag&apos;s ' + 
    'plan to obtain the Philosopher&apos;s Burn. He is aiding Tatsufumi in his quest to destroy it to ' + 
    'atone for the countless innocents who got told as a result of his actions.',
    
    'Michael A. Zekas',
    'http://slamfighter.com/team-dogpit/mzekas/'
    );

characters[3] = new Character(
    'serghei',
    'Serghei Ionescu',
    'Serghei',
    
    '<strong>Height:</strong> 218cm<br>' + 
    '<strong>Favorite Color:</strong> Red<br>' + 
    '<strong>Likes:</strong> Working together<br>' + 
    '<strong>Dislikes:</strong> Denatured alcohol',
    
    'A five-time winner of The People&apos;s Choice Awards (of Bucharest) and strongest man east of the Caucasus, ' + 
    'Serghei is currently on retainer as B. Stag&apos;s hired muscle.  He aspires the one day bring the Philosopher&apos;s ' + 
    'Burn to the common man, although he admits that due to Politburo rationing policy there may be some queuing involved.',
    
    'Michael A. Zekas',
    'http://slamfighter.com/team-dogpit/mzekas/'
    );

characters[4] = new Character(
    'fulana',
    'Do&ntilde;a Fulana L&oacute;pez Orozco Fern&aacute;ndez de Arroyo y Arranz',
    'Do&ntilde;a Fulana',
    
    '<strong>Blood Type:</strong> &Ntilde;<br>' +
    '<strong>Likes:</strong> Having a relaxing cup of caf&eacute; con leche in Plaza Mayor<br>' + 
    '<strong>Dislikes:</strong> Cost of billete sencillo',
    
    'B. Stag&apos;s favorite Pro-Domme, Do&ntilde;a Fulana is widely considered the shadiest bitch in The ' +
    'Autonomous Community of Madrid. Lately, however, she has had to deal sicker and sicker burns to have ' +
    'any kind of sensation at all.  She desires the Philosopher&apos;s Burn so that she can plunge the entire ' +
    'world into a hellscape of eternal smacktalk.',
    
    'Melanie Ehrlich',
    'http://slamfighter.com/team-dogpit/mehrlich/'
    );

characters[5] = new Character(
    'bstag',
    'Buck Stag',
    'B. Stag',
    
    '<strong>Height:</strong> 183cm<br>' + 
    '<strong>Weight:</strong> A lot<br>' + 
    '<strong>Likes:</strong> Rasslin&apos;<br>' + 
    '<strong>Dislikes:</strong> Tofurkey',
    
    'B. Stag is a wealthy Dallas oilman who lives by the words of Milton Friedman and the letters FYGM.  ' + 
    'He plans to use the Philosopher&apos;s Burn to take over the world.  Stretch goals include sticking it ' + 
    'to the Mexicans and anyone with a net worth of less than $10 million.',
    
    'Johnny Garza',
    'http://slamfighter.com/team-dogpit/jgarza/'
    );
    
characters[6] = new Character(
  'debug',
  'Ioana Ionescu',
  'Ioana',
  '<strong>Age:</strong> almost 26<br><strong>Favorite Color:</strong> red<br><strong>Likes:</strong> terrible puns<br><strong>Dislikes:</strong> taking things seriously',
  'I like cats. I like every kind of cat. I just want to hug them all but I can&apos;t, can&apos;t hug every cat.',
  'Manuela Malasa&ntilde;a',
  'http://manuelamalasanya.wordpress.com'
  );
  
  characters[7] = new Character(
    'mihai',
    'Serghei Ionescu',
    'Serghei',
    
    '<strong>Height:</strong> 218cm<br>' + 
    '<strong>Favorite Color:</strong> Red<br>' + 
    '<strong>Likes:</strong> Working together<br>' + 
    '<strong>Dislikes:</strong> Denatured alcohol',
    
    'Following the 1959 mission that made him the first human to ever journey into outer space, Serghei Ionescu, ' + 
    'strongest man east of the Caucasus, was selected from an elite pool of candidates to become the Soviet Union&apos;s ' + 
    'first chrononaut. On the time machine&apos;s maiden voyage, Serghei successfully travelled over fifty years ' + 
    'into the future! Unfortunately due to a bureaucratic oversight, the time machine was never outfitted for ' + 
    'travel back in time. Trapped in a confusing new world with no way home, nihilism set in and the former ' + 
    'five-time winner of the People&apos;s Choice Awards (of Bucharest) now earns a living as the hired muscle ' + 
    'of noted capitalist B. Stag.',
    
    'Michael A. Zekas',
    'http://slamfighter.com/team-dogpit/mzekas/'
    )

function bio(n) {
            current.id = characters[n].id;
            current.shortName = characters[n].shortName;
            current.fullName = characters[n].fullName;
            current.stats = characters[n].stats;
            current.bio = characters[n].bio;
            current.voice = characters[n].voice;
            current.link = characters[n].link;
    setBio();
}


function setBio() {
    document.querySelector('#bioDiv').innerHTML = 
    '<h3>' + current.fullName + 
    '</h3><p>' + current.stats + 
    '</p><p>' + current.bio + 
    '</p><p>Voice of <a href="' + current.link + 
    '" target="new">' + current.voice + '</a></p>';
}

function change(x) {
    x.className = "border";
}

function back(x) {
    x.className = "hiddenborder";
}

var sergheiAlt = false;
var bioSwap = new Character();

document.addEventListener("keyup", function(e){
  if (e.keyCode == 88)
  {
    if (current.id == characters[3].id && sergheiAlt === false)
    {
      document.querySelector('#serghei').style.backgroundImage = "url(http://i.imgur.com/CVJaZWw.png)";
      bioSwap = characters[3];
      characters[3] = characters[7];
      characters[7] = bioSwap;
      sergheiAlt = true;
      bio(3);
    }
    else if (current.id == characters[3].id && sergheiAlt === true)
    {
      document.querySelector('#serghei').style.backgroundImage = "url(http://i.imgur.com/tMFceli.gif)";
      bioSwap = characters[3];
      characters[3] = characters[7];
      characters[7] = bioSwap;
      sergheiAlt = false;
      bio(3);
    }
  }
});