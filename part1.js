function load(evt,n)
{

    if(n==1)
    {
        contactlist = "<div class='contact-list online' onclick=messages(event,'kunalraj@gmail.com')><img class='profile_pic' src='profile/k.jpg'>Kunal</div>";
        contactlist += "<div class='contact-list online' onclick=messages(event,'jarvis@gmail.com')><img class='profile_pic' src='profile/j.jpg'>Jarvis</div>";
        contactlist += "<div class='contact-list ' onclick=messages(event,'monu@gmail.com')><img class='profile_pic' src='profile/m.jpg'>Monu</div>";
        contactlist += "<div class='contact-list online' onclick=messages(event,'vision@gmail.com')><img class='profile_pic' src='profile/v.jpg'>Vision</div>";
        document.getElementById("part1").innerHTML= contactlist;
	}
	else if(n==2)
    {
        contactlist = "<div class='contact-list online' onclick=messages(event,'kunalraj@gmail.com')><img class='profile_pic' src='profile/k.jpg'>Kunal</div>";
        contactlist += "<div class='contact-list ' onclick=messages(event,'monu@gmail.com')><img class='profile_pic' src='profile/m.jpg'>Monu</div>";

       document.getElementById("part1").innerHTML=contactlist;   
       var seq=document.getElementsByClassName("contact-list"); 
       if(seq.length>0)
        {
            var ind=seq[0];
            ind.click();
            
        }
        group=false;
    }
    else if(n==3)
    {
        contactlist = "<div class='contact-list' onclick=gmessages(event,'grp1')><img class='profile_pic' src='profile/grp1.jpg'>Dragon Ball Fanverse</div>";
        contactlist += "<div class='contact-list' onclick=gmessages(event,'grp2')><img class='profile_pic' src='profile/grp2.jpg'>Lana Del Rey Fans</div>";

       document.getElementById("part1").innerHTML=contactlist;   
       var seq=document.getElementsByClassName("contact-list"); 
       if(seq.length>0)
        {
            var ind=seq[0];
            ind.click();
            
        }
        group=true;
    }
	btns = document.getElementsByClassName("btn-part1");
    for (var i = 0; i < btns.length; i++) {
        btns[i].className=btns[i].className.replace(" active", "");
    }
    evt.currentTarget.className += " active";
}