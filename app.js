
/* local storage 
var todo = todo || {},
    data = JSON.parse(localStorage.getItem("todo"));

data = data || {};

// Updating Local Storage
data[id] = object;
localStorage.setItem("todo", JSON.stringify(data));

// Updating local storage
delete data[id];
localStorage.setItem("todo", JSON.stringify(data));
*/



$(document).ready(function(){

//add newly created todos into array, stucked now. 
      var todosList = [];
      function todosItm(text, done) {
         this.text = text;
         this.done = done;
      }

    $('#sortable li').each(function() {
        $(this).find('li').each(function(){
            todosList.push({
                text : '',
                done : '' ,   
            });
        });   
    });

    //count todos
    function countTodos(){
        console.log('ready!');
        var count = $("#sortable li").length;
        $('.count-todos').html(count);
    }

    //create todo list item
    $('.add-todo').on('keypress',function (e) {
          e.preventDefault
          if (e.which == 13) {
               if($(this).val() != ''){
               var todo = $(this).val();
                createTodo(todo); 
                countTodos();
               }
          }
    });

    //create todos list item
    function createTodo(text){
        var markup = '<li class="ui-state-default"><div class="checkbox"><label><input type="checkbox" value="" />'+ text +'</label></div></li>';
        $('#sortable').append(markup);
        $('.add-todo').val('');
    }

   //push todos to the todos array list
   

    //mark todos as done states!!!!!!!!!!
    // mark todos as done
    $('.todolist').on('change','#sortable li input[type="checkbox"]',function(){
        if($(this).prop('checked')){
            console.log($(this));
            var doneItem = $(this).parent().parent().find('label').text();
            $(this).parent().parent().parent().addClass('remove');
            done(doneItem);
            countTodos();
        }
    });


    // mark as all done button
    $("#checkAll").click(function(){
        allDone();
    });
    $('#undo').click(function(){
       console.log('run undo!');
    });
    //mark todos as done
    function done(doneItem){
        var done = doneItem;
        var markup = '<li>'+ done +' <a id="undo" href="#">Undo</a><button class="btn btn-default btn-xs pull-right remove-item"><span class="glyphicon glyphicon-remove"></span></button></li>';
        $('#done-items').append(markup);
        $('.remove').remove();
    }

    //mark all todos as done
    function allDone(){
        var doneArray = [];

        $('#sortable li').each( function() {
             doneArray.push($(this).text());   
        });
        
        // add to done
        for (var i = 0; i < doneArray.length; i++) {
            $('#done-items').append('<li>' + doneArray[i] + ' <a id="undo" href="#">Undo</a><button class="btn btn-default btn-xs pull-right  remove-item"><span class="glyphicon glyphicon-remove"></span></button></li>');
        }
        
        // remove from left
        $('#sortable li').remove();
          countTodos();
    }
    
    // undo and add back to left
    

    //removing stuff!!!!!!!!
    //delete done task from "done items"
    $('.todolist').on('click','.remove-item',function(){
        removeItem(this);
    });

    //remove done items from list
    function removeItem(element){
        $(element).parent().remove();
    }
    
     

})