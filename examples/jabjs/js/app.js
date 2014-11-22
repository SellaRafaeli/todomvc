(function( window ) {
	'use strict';

	// Your starting point. Enjoy the ride!

})( window );

//modifications to jab:
// 1. added enter (and might need to refactor the whole 'listener' approach)
// 2. I hould defend and notify against missing selectors
// 3. (obj.hasOwnProperty(key)) around objKeysMap
// 4. modified 'click'
x =0
app = {
    addTodo: function(val) { 
        app.todos.push({name: val, completed: false});
        app.calc();
    },

    markAll: function(val) {
        app.lastMarked = !app.lastMarked; //flip each time.
        app.todos.forEach(function(todo) { todo.completed = app.lastMarked });
        app.calc();
    },

    calc: function() {
        //app.active                           = app.todos.filter(function(todo) { return todo.completed });
        app.numActive                    = app.todos.filter(function(todo) { return !todo.completed }).length;
        app.numCompleted             = app.todos.filter(function(todo) { return todo.completed }).length;
        
        app.shouldShowClearButton = (app.numCompleted > 0);      
        app.shouldShowList             = ((app.numActive > 0) || (app.numCompleted > 0));
        console.log("calcing");
    },

    todos: [],
    active: [],
    completed: [],       
    numActive: 0,
    numCompleted: 0,
    showClearButton: false
};

app.calc();
// app.numActive = 0;
// app.numCompleted = 0;
//jab.bindObj(app, "#todoapp");

//jab.bind(app, 'addTodo', "#todoapp", 'enter');                        

jab.bind(app, 'addTodo', "#new-todo", 'enter');                        
jab.bind(app, 'markAll', "#toggle-all", 'check');                        
jab.bind(app, 'numActive', "#num-active");
jab.bind(app, 'numCompleted', "#num-completed");
jab.bind(app, 'shouldShowClearButton', "#clear-completed", 'show');
// jab.bind(app, 'shouldShowList', "#main", 'show');
//jab.bind(app, 'todos', '.todo');
jab.bindArr(app.todos, '.todo');

window.onclick = app.calc;
//jab.bind(app, 'addTodo', "#new-todo", 'enter');                        

// add
// mark-as-done
// delete
