$(document).ready(function(){

  $('#new-todo-btn').click(function(){
    var todo =  $('#todo-text').val();
    if (todo == '') {
      alert('待辦事項不得為空');
      return false;
    }

    if ($('#urgent').is(':checked')) {
      $('#todolist').append(
        '<div class="todo-item"><span class="todo urgent">' + todo + '</span><button class="edit-btn btn btn-outline-primary btn-sm">Edit</button><button class="check-btn btn btn-outline-success btn-sm">Check</button></div>'
      );
    } else {
      $('#todolist').append(
        '<div class="todo-item"><span class="todo not-urgent">' + todo + '</span><button class="edit-btn btn btn-outline-primary btn-sm">Edit</button><button class="check-btn btn btn-outline-success btn-sm">Check</button></div>'
      );
    }

    $('#todo-text').val('');
    return false;
  }); // end clicks

  $('#todolist').on('click', '.edit-btn', function() {
    var urgentType = $(this).prev().attr('class');
    
    $(this).parent().replaceWith(
      '<div class="todo-item"><input type="text" class="edit-text"><button class="update-btn btn btn-outline-primary btn-sm">Update</button></div>'
    )

    $('body button:not(.update-btn)').prop('disabled', true);

    $('.update-btn').click(function(){ 

      var updateTodo = $('.edit-text').val();
      if (updateTodo == '') {
        alert('待辦事項不得為空');
        return false;
      }

      $(this).parent().replaceWith(
        '<div class="todo-item"><span class="' + urgentType + '">' + updateTodo + '</span><button class="edit-btn btn btn-outline-primary btn-sm">Edit</button><button class="check-btn btn btn-outline-success btn-sm">Check</button></div>'
      );

      $('body button').prop('disabled', false);
    }); //  end click
  }); // end click

  $('#todolist').on('click', '.check-btn', function(){
    if (confirm("確認刪除代辦事項嗎？")) {
      $(this).prevAll().eq(1).css({
        'color': '#D4D2D2',
        'text-decoration': 'line-through'
        });
      $(this).parent().find('button').remove();
    } else {
      return;
    }
  }); // end click
}); 