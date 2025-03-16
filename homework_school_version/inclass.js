function Teacher(fname, lname, age, field){
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.field =  field;

}

 Teacher.prototype.teach= function()
 {
    console.log(`${this.fname} teaches ${this.field}.`);
   
 }

 Teacher.prototype.getHomework = function(){
    console.log(`${this.fname} gives homework.`);
 }


 const teacher1 = new Teacher('Alexa', 'Jardan', 35, 'Science');
 const teacher2 = new Teacher('Josh', 'Kennedy', 56, 'Physics');
 const teacher3 = new Teacher('Victoria', 'Smith', 39, 'English');
 const teacher4 = new Teacher('Valery', 'Zambrano', 45, 'Data Science');
 const teachers = [teacher1, teacher2, teacher3, teacher4];
 teachers.forEach(x => console.log(x));
 
 
 
 let  oldest= teachers.reduce((acc, curr) =>{
   if(curr.age > acc.age ) acc = curr;
   return acc;
 }, teachers[0]);
 console.log('Oldest teacher is ', oldest.fname);

 let sumOfAges = teachers.reduce((acc, curr) => acc+=curr.age,0)
 console.log(sumOfAges);
 console.log(sumOfAges/teachers.length)
 
 let  yongest= teachers.reduce((acc, curr) =>{
    if(curr.age < acc.age ) acc = curr;
    return acc;
  }, teachers[0]);
  console.log('Yongest teacher is ', yongest.fname, yongest.lname);
  let names = teachers.map(x=> `${x.fname}  ${x.lname}`);
  console.log(names);
 