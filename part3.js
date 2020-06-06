function editor(evt,n)
{
   if(n==1)
    {
        grpp1 = "<table><tr><td>Group icon </td><td><input type='file' id='gicon'></td></tr><tr><td>Group name </td><td><input type='textbox' name='name'></td></tr></table>";
        ls = " <div class='gusers'><input type='checkbox' name='gcusers' value='kunalraj@gmail.com'><img class='gprofile_pic' src='profile/k.jpg'>Kunal</div>";
        ls += " <div class='gusers'><input type='checkbox' name='gcusers' value='jarvis@gmail.com'><img class='gprofile_pic' src='profile/j.jpg'>Jarvis</div>";
        ls += " <div class='gusers'><input type='checkbox' name='gcusers' value='monu@gmail.com'><img class='gprofile_pic' src='profile/m.jpg'>Monu</div>";
        ls += " <div class='gusers'><input type='checkbox' name='gcusers' value='vision@gmail.com'><img class='gprofile_pic' src='profile/v.jpg'>Vision</div>";
        grpp2 = "<button onclick='create()'>Create Group</button>";
        document.getElementById("edit").innerHTML=grpp1 + ls + grpp2;
    }
    else if(n==2)
    {
        p = '<input type = "file"  id="profile_icon" ><br><input type = "button" id="prfolie_pic_upload" onclick="profilepic_update()" value = "Upload File" /><br><img src="profile/mm.jpg" width="300px">    <table  cellpadding="20"><tr><td>Name</td><td><input type="text" id="regname" value="Medhavi Monish"></td></tr><tr><td>Email</td><td><input type="text"  id="regemail" value="monishmedhavi@gmail.com" disabled></td></tr><tr><td>Password</td><td><input type="password"  id="regpassword" value="9534715692>"></td></tr><tr><td>Confirm Password</td><td><input type="password"  id="regcpassword" value="9534715692"></td></tr><tr><td>Mobile No.</td><td><input type="number"  id="regmobile" value="9534715692"></td></tr><tr><th colspan=2><input type="button" value="Update" onclick="profile_update()"></th></tr></table>';
        document.getElementById("edit").innerHTML=p;
    }
    else if(n==3)
    {
        c = '<p><canvas id="myCanvas" width="300" height="200" style="border:5px solid #d3d3d3"  onmousemove="draw(event)" onmousedown="pressed()" onmouseup="notpressed()" onmouseout="clearCoor()"></p>Share this with <select id="sharecanvas" name="with"><option value="kunalraj@gmail.com" >Kunal(kunalraj@gmail.com)</option><option value="kunalraj@gmail.com" >Jarvis(jarvis@gmail.com)</option><option value="kunalraj@gmail.com" >Monu(monu@gmail.com)</option><option value="kunalraj@gmail.com" >Vision(vision@gmail.com)</option></select><button onclick="sharecanvas()" id="sharebutton">Share</button><button onclick="stopsharecanvas()" id="stopsharebutton" disabled="true">Stop Sharing</button><p id="demo">hi</p><button onclick="senddraw()" id="senddraw">Send Drawing</button><br>Red    <input type="range" min="1" max="100" value="50" id ="redc"  onchange="colorchange()"><br>Green <input type="range" id="greenc" min="1" max="100" value="50"  onchange="colorchange()"><br>Blue <input type="range" id="bluec" min="1" max="100" value="50"  onchange="colorchange()"><br>Transparency <input type="range" id="trans" min="0" max="1" value="1" step="0.1" onchange="colorchange()">';
        document.getElementById("edit").innerHTML=c;
        c = document.getElementById("myCanvas");
        ctx = c.getContext("2d");
        ctx.strokeStyle = "rgba(50,50,50,1)";
    }
    else if(n==4)
    {
        v = '<p><video height="200" width="300" id="myvideo" autoplay muted></video></p>Share this with <select id="sharevideo" name="with"><option value="kunalraj@gmail.com" >Kunal(kunalraj@gmail.com)</option><option value="kunalraj@gmail.com" >Jarvis(jarvis@gmail.com)</option><option value="kunalraj@gmail.com" >Monu(monu@gmail.com)</option><option value="kunalraj@gmail.com" >Vision(vision@gmail.com)</option></select><button onclick="sharevideo()" id="videobutton">Call/Receive</button><button onclick="stopsharevideo()" id="stopvideobutton" disabled="true">Stop</button><video height="200" width="300" id="othervideo" controls autoplay></video>';
        document.getElementById("edit").innerHTML= v;
    }
    btns = document.getElementsByClassName("btn-part2");
    for (var i = 0; i < btns.length; i++) {
        btns[i].className=btns[i].className.replace(" active", "");
    }
    evt.currentTarget.className += " active";
}

function create(){
    users = document.getElementsByName("gcusers");
    emails="";
    for(i=0;i<users.length;i++){
        if(users[i].checked){
            emails+= users[i].value +",";
        }
    }
    gname=document.getElementsByName("name");
    
    fileSelect=document.getElementById("gicon");
}

function draw(evet) {
  if(press)
  {
    c = document.getElementById("myCanvas");
    ctx = c.getContext("2d");
    var x = evet.clientX- c.offsetLeft;
    var y = evet.clientY- c.offsetTop;
    if(begin)
    {
        ctx.beginPath();
        ctx.moveTo(x, y);
        begin=false;
    }
    ctx.lineTo(x,y);
    ctx.stroke();
    var coor = "X coords: " + x + ", Y coords: " + y;
    document.getElementById("demo").innerHTML = coor;
  }
}
function pressed()
{
    press=true;
    begin=true;
    clearInterval(sharing);
}
function notpressed()
{
    press=false;
    begin=false;
    sharing=setInterval(sharingcanvas,2000);
}
function clearCoor() {
    document.getElementById("demo").innerHTML = "";
}
function colorchange(evt) {
    r = document.getElementById("redc").value ;
    g = document.getElementById("greenc").value ;
    b = document.getElementById("bluec").value ;
    t = document.getElementById("trans").value ;
    c = document.getElementById("myCanvas");
    ctx = c.getContext("2d");
    ctx.strokeStyle = "rgba("+r+","+g+","+b+","+t+")"; 
}

