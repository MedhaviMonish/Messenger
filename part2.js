function messages(evt,id)
{
    if(id =='kunalraj@gmail.com'){
	 	msg = "<br><center><div class='date'>1-12-2019 </div></center><br><div class='sender seq 10'>Hello bro! i am buying this car.<img src='message/car.jpg'><div class='time'><br><br>12:20:45</div></div>";
	 	msg += "<br><center></center><br><div class='reciever seq 11'>Nice car bro! I'll buy the same but matte black.<div class='time'><br><br>12:25:55</div></div>";
    }
    else if(id=='monu@gmail.com'){
	 	msg = "<br><center><div class='date'>30-11-2019 </div></center><br><div class='sender seq 5'>Hey! monu i want to buy a car.<div class='time'><br><br>1:00:21</div></div>";
	 	msg += "<br><center></center><br><div class='sender seq 7'>What should i buy idk anything about cars.<div class='time'><br><br>1:00:56</div></div>";
	 	msg += "<br><center></center><br><div class='reciever seq 8'>how come u know nothing man, at least know the design.<div class='time'><br><br>1:02:26</div></div>";
	 	msg += "<br><center></center><br><div class='reciever seq 9'>Well fine by me, here how does i look.<img src='message/car.jpg'><div class='time'><br><br>1:02:56</div></div>";
	 	msg += "<br><center></center><br><div class='sender seq 10'>looks good but how much price.<div class='time'><br><br>1:05:06</div></div>";
	 	msg += "<br><center></center><br><div class='reciever seq 11'>just look at the design forget the price, Ok?.<div class='time'><br><br>1:05:56</div></div>";
	 	msg += "<br><center></center><br><div class='reciever seq 12'>if u say so i wil buy.<div class='time'><br><br>1:02:56</div></div>";
    }
    else{
        	msg = "";
    }
 	child=msg.trim();
	if(child != "")
		{ 		
	    document.getElementById("conversation").innerHTML=msg;
		var seq=document.getElementsByClassName("seq");
		var seqdate=document.getElementsByClassName("date");
		if(seq.length>0)
		{
				var ind=seq[seq.length-1].className.lastIndexOf(" ");
			localStorage.setItem("recent",seq[seq.length-1].className.substring(ind));
			localStorage.setItem("date",seqdate[seqdate.length-1].innerHTML);
			setTimeout(function(){seq[seq.length-1].scrollIntoView(false);},1000);
		}
	}
	else
	{
	    document.getElementById("conversation").innerHTML=msg;
	}

	btns = document.getElementsByClassName("contact-list");
    for (var i = 0; i < btns.length; i++) {
        btns[i].className=btns[i].className.replace(" active", "");
    }
    evt.currentTarget.className += " active";

}

function gmessages(evt,id)
{
	if(id =='grp1'){
	 	msg = "<br><center><div class='date'>1-1-2020 </div></center><br><div class='sender seq 1'><div class='gother'>kunalraj@gmail.com</div>Hello every1. i created this for dbs discord.<div class='time'><br><br>10:01:45</div></div>";
	 	msg += "<br><center></center><br><div class='reciever seq 2'><div class='gother'>vision@gmail.com</div>cool have u watched new movie DBS.<div class='time'><br><br>10:05:55</div></div>";
	 	msg += "<br><center></center><br><div class='reciever seq 4'><div class='gother'>monu@gmail.com</div>goku died again tch.<div class='time'><br><br>10:10:26</div></div>";
	 	msg += "<br><center></center><br><div class='reciever seq 7'><div class='gother'>kunalraj@gmail.com</div>DBS gotenks was funny.<div class='time'><br><br>10:12:56</div></div>";
	 	msg += "<br><center></center><br><div class='reciever seq 10'><div class='gother'>jarvis@gmail.com</div>hope next part comes soon<div class='time'><br><br>10:25:04</div></div>";
	 	msg += "<br><center></center><br><div class='sender seq 11'>yaa , new movie was good.<div class='time'><br><br>10:25:06</div></div>";
    }
    else if(id =='grp2'){
	 	msg = "<br><center><div class='date'>1-1-2020 </div></center><br><div class='sender seq 1'>guys have u heard her new song serial killer?<div class='time'><br><br>10:01:45</div></div>";
	 	msg += "<br><center></center><br><div class='reciever seq 2'><div class='gother'>vision@gmail.com</div>yes 10 times a day <div class='time'><br><br>10:05:55</div></div>";
	 	msg += "<br><center></center><br><div class='sender seq 4'>lol, well its worth it.<div class='time'><br><br>10:10:26</div></div>";
	 	msg += "<br><center></center><br><div class='reciever seq 7'><div class='gother'>kunalraj@gmail.com</div>she is going live in mesra<div class='time'><br><br>10:12:56</div></div>";
	 	msg += "<br><center></center><br><div class='reciever seq 10'><div class='gother'>jarvis@gmail.com</div>i will go to her next live show<div class='time'><br><br>10:25:04</div></div>";
	 	msg += "<br><center></center><br><div class='sender seq 11'>add me too<div class='time'><br><br>10:25:06</div></div>";
    }
    else{
        	msg = "";
    }
 	child=msg.trim();
	if(child != "")
		{ 		
	    document.getElementById("conversation").innerHTML=msg;
		var seq=document.getElementsByClassName("seq");
		var seqdate=document.getElementsByClassName("date");
		if(seq.length>0)
		{
				var ind=seq[seq.length-1].className.lastIndexOf(" ");
			localStorage.setItem("recent",seq[seq.length-1].className.substring(ind));
			localStorage.setItem("date",seqdate[seqdate.length-1].innerHTML);
			setTimeout(function(){seq[seq.length-1].scrollIntoView(false);},1000);
		}
	}
	else
	{
	    document.getElementById("conversation").innerHTML=msg;
	}
	btns = document.getElementsByClassName("contact-list");
    for (var i = 0; i < btns.length; i++) {
        btns[i].className=btns[i].className.replace(" active", "");
    }
    evt.currentTarget.className += " active";
}
