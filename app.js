/* local storage 
var todo = todo || {},
    data = JSON.parse(localStorage.getItem("todoData"));

data = data || {};

// Updating Local Storage
data[id] = object;
localStorage.setItem("todoData", JSON.stringify(data));

// Updating local storage
delete data[id];
localStorage.setItem("todoData", JSON.stringify(data));
*/




$(document).ready(function(){
	
	 //add todo list
	     console.log('ready now!');
	 $('.add-todo').keyup(function(e){
       if(e.which == 13 && $(this).val().length !== 0) {
       	$('#sortable').append('<li class="ui-state-default" ><div class="checkbox"><label><input type="checkbox"/><span>' + $(this).val() + '</span></lable></div></li>');
          $('.add-todo').val(" ");

          countTodo();   // trigger list count
       }
	 })
          
	// count todos function. 
        
      function countTodo (){
            var countTodo = $("#sortable").children().length;
            	console.log(countTodo);
            $('.count-todos').html('<span>'+countTodo+'</span>');
      }
      countTodo();
          
  // mark todo as done
    $('#sortable').on('click', 'input', function(){
            console.log('it runs there');

            $('span').css('text-decoration','line-through');
            console.log($(this));
    });
         // trigger list count
    countTodo();
    
       
   
// delete todos from the left and move to the right done items. 
	$('#sortable').delegate('input', 'click', function() {
		  var value = $('input').val($('span').text()).val();
       console.log(value);
	    $list = $("#done-items");
	    $('input:checked').parent().parent().parent().remove();
	    //$list.append("<li data-value='" + value + "'>" + value + "</li>");
      $list.append('<li>' + value + '<button class="remove-item btn btn-default btn-xs pull-right"><span class="glyphicon glyphicon-remove"></span></button>' + '</li>');
        countTodo();
	});
  

// delete done task from "done item" on the right. 
    $('#done-items').on('click', 'li', function(){
           $(this).remove();
    });
    countTodo();

//mark as done. 

    $('#checkAll').on('click', function() {
      if($(('$input')[type='checkbox']).checked = true){
          $('ul#sortable li').css('text-decoration','line-through').appendTo($('#done-items'));
          
        countTodo();
      }
    })
    




































































});








