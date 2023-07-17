$(document).ready(onReady);

let counter = 0;
function onReady(){

    console.log('yeahhh  its working');
    $('#generateButton').on('click', addDiv);
    $('body').on('click','.yellowButton', changeYellow);
    $('body').on('click','.deleteButton', deleteIt);


}

function addDiv(event){
    event.preventDefault();
    console.log('Keep up the great work!!!');
    counter++;
    $('body').append(`<div> <p> ${counter} </p>
    <button class ="yellowButton"> Yellow </button> 
    <button class="deleteButton"> Delete </button> </div>`)


}

// if($('.yellowButton')){
//     $('div').addClass('changeYellow');
// }

function changeYellow(){
    $(this).addClass('changeYellow');
    // this.color = 'yellow';
}

function deleteIt(){
    $(this).closest('div').remove();
}