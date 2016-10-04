var name = prompt("Enter Your Name");
var fname= prompt("Enter Your Fahter Name");
var sno  = prompt("Enter Your Seat Number");
var git  = parseInt(prompt("Enter Your GIT Test Marks"));
var html = parseInt(prompt("Enter Your HTML Marks"));
var css1 = parseInt(prompt("Enter Your CSS Test 1 Marks"));
var css2 = parseInt(prompt("Enter Your CSS Test 2 Marks"));

var total = html + css1 + css2 + git ;
var percentage = total * 100 / 400 ;

document.getElementById("first-name").innerHTML = name ;

document.getElementById("father-name").innerHTML = fname;

document.getElementById("seat-NO").innerHTML = sno;

// gnerating grades of git marks

if ( git <= 100 && git >= 90 ){
    document.getElementById("git-marks").innerHTML = git + " A+";
}
else if (git < 90 && git >= 80 ) {
    document.getElementById("git-marks").innerHTML = git + " A";
}

else if (git < 80 && git >= 70) {
    document.getElementById("git-marks").innerHTML = git + " B";
}

else if (git < 70 && git >= 60) {
    document.getElementById("git-marks").innerHTML = git + " C";
}

else if (git < 60 && git >= 50) {
    document.getElementById("git-marks").innerHTML = git + " B";
}

else { document.getElementById("git-marks").innerHTML = "Sorry you are FAIL";}

//generating grades of html marks

if ( html <= 100 && html >= 90 ){
     document.getElementById("html-marks").innerHTML = html + " A+";
}
else if (html < 90 && html >= 80 ) {
     document.getElementById("html-marks").innerHTML = html + " A";
}

else if (html < 80 && html >= 70) {
     document.getElementById("html-marks").innerHTML = html + " B";
}

else if (html < 70 && html >= 60) {
     document.getElementById("html-marks").innerHTML = html + " C";
}

else if (html < 60 && html >= 50) {
     document.getElementById("html-marks").innerHTML = html + " B";
}

else { document.getElementById("html-marks").innerHTML = html + "Sorry you are FAIL";}

// document.getElementById("html-marks").innerHTML = html;

//generating grades of css marks

if ( css1 <= 100 && css1 >= 90 ){
     document.getElementById("css-1").innerHTML = css1 + " A+";
}

else if (css1 < 90 && css1 >= 80 ) {
     document.getElementById("css-1").innerHTML = css1 + " A";
}

else if (css1 < 80 && css1 >= 70) {
     document.getElementById("css-1").innerHTML = css1 + " B";
}

else if (css1 < 70 && css1 >= 60) {
     document.getElementById("css-1").innerHTML = css1 + " C";
}

else if (css1 < 60 && css1 >= 50) {
     document.getElementById("css-1").innerHTML = css1 + " B";
}

else { document.getElementById("css-1").innerHTML = css1 + "Sorry you are FAIL";}

// document.getElementById("css-1").innerHTML = css1;

//Generating grade of css 2 marks

if ( css2 <= 100 && css2 >= 90 ){
         document.getElementById("css-2").innerHTML = css2 + " A+";
}

else if (css2 < 90 && css2 >= 80 ) {
     document.getElementById("css-2").innerHTML = css2 + " A";
}

else if (css2 < 80 && css2 >= 70) {
     document.getElementById("css-2").innerHTML = css2 + " B";
}

else if (css2 < 70 && css2 >= 60) {
     document.getElementById("css-2").innerHTML = css2 + " C";
}

else if (css2 < 60 && css2 >= 50) {
     document.getElementById("css-2").innerHTML = css2 + " B";
}

else { document.getElementById("css-2").innerHTML = css1 + "Sorry you are FAIL";}

// document.getElementById("css-2").innerHTML = css2;

if ( percentage <= 100 && percentage >=90) {
      document.getElementById("percent").innerHTML = percentage + " % " + " You Are Pro ";
}

else if ( percentage < 90 && percentage >= 80) {
      document.getElementById("percent").innerHTML = percentage + " % " + " Mama Will Be Proud Of You ";
}

else if (percentage < 80 && percentage >= 70) {
      document.getElementById("percent").innerHTML = percentage + " % " + " Not Bad You Can Do It Batter";
}

else if (percentage < 60 && percentage >= 50) {
      document.getElementById("percent").innerHTML = percentage + " % " + " I Know You Can Do Batter ";
}

else if (percentage < 50) {
    document.getElementById("percent").innerHTML = percentage + "%" + "You Need To Work Hard"
}