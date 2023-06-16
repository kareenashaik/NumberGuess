var m=Math.ceil((Math.random()*100));
var c=0;
const emoji = '\uD83D\uDE0D';

func=()=>
{
    var k=parseInt(document.getElementById("num").value);
    if(k>m)
    {
    document.getElementById("kar").textContent=("try with smaller number");
    c++;
     }
    else if(k<m)
    {
   document.getElementById("kar").textContent=("try with greater number");
  c++;
    }
    else
    {
   
   document.getElementById("kar").textContent=("Congratualations"+" "+emoji+ "You Have Completed the Task in"+" "+c+"tries");
    }
}
