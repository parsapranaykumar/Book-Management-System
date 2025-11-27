let BooksArray=[

  {BookName:"Atomic Habits",Author:"James Clear",Year:"2018",Price:"450",},
  {BookName:"Rich Dad Poor Dad",Author:"Robert Kiyosaki",Year:"1997",Price:"399"},
  {BookName:"Think and Grow Rich",Author:"Napoleon Hill",Year:"1937",Price:"350"},
  {BookName:"The Power of Your Subconscious Mind",Author:"Joseph Murphy",Year:"1963",Price:"280"},
]



function display(){
   let trs = "";
   for(let ind in BooksArray){
      trs+=`
      <tr> 
          <td>${BooksArray[ind].BookName} </td>
          <td>${BooksArray[ind].Author} </td>
          <td>${BooksArray[ind].Year} </td>
          <td>${BooksArray[ind].Price} </td>
          <td> 
          <button onclick=deleteTask(${ind}) class="btn btn-danger">Delete</button>
          </td>
          <td> 
          <button onclick=editTask(${ind}) class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
          </td>
      
      </tr>
       `
   }
   let table=`
      <table  class="maintable">
        <tr> 
          <th class="abc">BOOK NAME </th>
           <th class="abc">AUTHOR </th>
            <th class="abc">YEAR </th>
             <th class="abc">PRICE </th>

        </tr>
      ${trs}
      </table>
   
   `
    let refElem=document.getElementById("ref");
   refElem.innerHTML= table;

   
}

display();


function deleteTask(i){
   let res = confirm("Are You Want To Delete??");
   if(res==true){
   BooksArray.splice(i,1);
   display();
   }
}

function addTask(e){
   e.preventDefault();
   let allForms=document.forms; 
   let myform=allForms.addForm;
   let BookNameTextBoxElem = myform.BookNameTextBox;

   let AuthorTextBoxElem = myform.AuthorTextBox;

   let YearTextBoxElem = myform.YearTextBox;

   let PriceTextBoxElem = myform.PriceTextBox;



   
   

   // form validations
   // form validations
let isValid = true;

// reset previous errors
BookNameTextBoxElem.classList.remove("error");
AuthorTextBoxElem.classList.remove("error");
YearTextBoxElem.classList.remove("error");
PriceTextBoxElem.classList.remove("error");

// check each field
if (BookNameTextBoxElem.value.trim() === "") {
    BookNameTextBoxElem.classList.add("error");
    isValid = false;
}

if (AuthorTextBoxElem.value.trim() === "") {
    AuthorTextBoxElem.classList.add("error");
    isValid = false;
}

if (YearTextBoxElem.value.trim() === "") {
    YearTextBoxElem.classList.add("error");
    isValid = false;
}

if (PriceTextBoxElem.value.trim() === "") {
    PriceTextBoxElem.classList.add("error");
    isValid = false;
}

// stop form submit if invalid
if (!isValid) return;

    




   let obj={
     BookName: BookNameTextBoxElem.value,
     Author: AuthorTextBoxElem.value,
     Year: YearTextBoxElem.value,
     Price: PriceTextBoxElem.value
   }
   
   BooksArray.push(obj);
   display();

}



 let editBookNameTextBoxElem=  document.getElementById("editBookNameTextBox");
 let editAuthorTextBoxElem=  document.getElementById("editAuthorTextBox");
 let editYearTextBoxElem=  document.getElementById("editYearTextBox");
 let editPriceTextBoxElem=  document.getElementById("editPriceTextBox");
 let index = 0; 
 function editTask(i){
 index=i;
 editBookNameTextBoxElem.value = BooksArray[i].BookName;
 editAuthorTextBoxElem.value = BooksArray[i].Author;
 editYearTextBoxElem.value = BooksArray[i].Year;
 editPriceTextBoxElem.value = BooksArray[i].Price;
}

function saveTask(){
   
   // reset previous errors
   editBookNameTextBoxElem.classList.remove("error");
   editAuthorTextBoxElem.classList.remove("error");
   editYearTextBoxElem.classList.remove("error");
   editPriceTextBoxElem.classList.remove("error");

   let isValid = true;

   // validation
   if (editBookNameTextBoxElem.value.trim() === "") {
      editBookNameTextBoxElem.classList.add("error");
      isValid = false;
   }
   if (editAuthorTextBoxElem.value.trim() === "") {
      editAuthorTextBoxElem.classList.add("error");
      isValid = false;
   }
   if (editYearTextBoxElem.value.trim() === "") {
      editYearTextBoxElem.classList.add("error");
      isValid = false;
   }
   if (editPriceTextBoxElem.value.trim() === "") {
      editPriceTextBoxElem.classList.add("error");
      isValid = false;
   }

   // stop editing if invalid
   if (!isValid) return;

   //after validation
   let obj={
      BookName : editBookNameTextBoxElem.value,
      Author : editAuthorTextBoxElem.value,
      Year : editYearTextBoxElem.value,
      Price : editPriceTextBoxElem.value,
   }
   BooksArray[index]=obj;
   display();
}

function removeError(event){
   event.target.classList.remove('error');
  
  
}