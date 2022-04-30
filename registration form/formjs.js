var list1 = [];
var list2 = [];
var list3 = [];
var list4 = [];

var n=1;
var x=0;

function AddRow(){
    var AddRow = document.getElementById("show");
    var NewRow = AddRow.insertRow(n);

    list1[x]= document.getElementById("fName").value;
    list2[x]= document.getElementById("email").value;
    list3[x]= document.getElementById("college").value;
    list4[x]= document.getElementById("PRN").value;


    var cel1 = NewRow.insertCell(0);
    var cel2 = NewRow.insertCell(1);
    var cel3 = NewRow.insertCell(2);
    var cel4 = NewRow.insertCell(3);


    cel1.innerHTML = list1[x];
    cel2.innerHTML = list2[x];
    cel3.innerHTML = list3[x];
    cel4.innerHTML = list4[x];


    n++;
    x++;
}