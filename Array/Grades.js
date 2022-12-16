// prining grades according to marks and total

function grades(marks) {


let A=[];
let B=[];
let C=[];
let D=[];
let E=[];

     for(let i=0; i<=marks.length; i++){
         if(marks[i] >=90){
             A.push(marks[i]);
         } if(marks[i] >=75 && marks[i]<90){
             B.push(marks[i]);
         } if (marks[i]>=60 && marks[i]<75){
             C.push(marks[i]);
         } if (marks[i]>=35 && marks[i]<60){
             D.push(marks[i]);
         } if (marks[i]>=0 && marks[i]<35){
             E.push(marks[i]);
         }
    
    }

console.log("Grades A = "+A+ " | Total A ===> "+A.length);
console.log("Grades B = "+B+ " | Total B ===> "+B.length);
console.log("Grades C = "+C+ " | Total C ===> "+C.length);
console.log("Grades D = "+D+ " | Total D ===> "+D.length);
console.log("Grades E = "+E+ " | Total E ===> "+E.length);
}

let marks = [50,25,36,78,96,85,77,46,66,92,5];
grades(marks)