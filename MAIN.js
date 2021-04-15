student_Array=[];
function submit(){
    for(var i=1;i<=4;i++){
    name1=document.getElementById("name"+i).value;
    student_Array.push(name1);
    }
    console.log(student_Array);
    display_array=[];
    for(var j=0;j<student_Array.length;j++){
        display_array.push("<h4> name-"+student_Array[j]+"</h4>")
    }
    document.getElementById("result").innerHTML=display_array;
    document.getElementById("name-comma").innerHTML=display_array.join(""),
    document.getElementById("btm1").style.display="none"
    document.getElementById("btm2").style.display="inline-block"
}
function sorting(){
    student_Array.sort();
    document.getElementById("result").innerHTML=student_Array;
}