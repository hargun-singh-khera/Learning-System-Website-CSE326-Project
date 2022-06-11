function result()
{
	var score=0;
	if(document.getElementById('correct1').checked)
		{	score++;
		}
	if(document.getElementById('correct2').checked)
		{	score++;
		}
        if(document.getElementById('correct3').checked)
		{	score++;
		}
        if(document.getElementById('correct4').checked)
		{	score++;
		}
        if(document.getElementById('correct5').checked)
		{	score++;
		}

	
 alert("Your score is:"  +score);
 // to print on browser
 // document.write("Your score is:"+score);
}
/*
var c=0;
    var q1=document.quiz.question1.value;
    var q2=document.quiz.question2.value;
   
    if(q1=="5")
    {
        c++;
    }
    if(q2=="3.33")
    {
        c++;
    }
    */