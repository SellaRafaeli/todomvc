(function( window ) {
	
    app = {
        
        addTodo: function(val) { 
            app.todos.push({name: val, 
                completed: false,

                update: function() {
                    app.calc(); //just counters; model is synced with view. 
                },

                destroy: function() { 
                    var name = this.name;
                    app.todos = app.todos.filter(function(todo) { 
                        return !(todo.name == name)} 
                        );
                },

                ondblclick: function(elem) {
                    elem.parentElement.classList.add('editing');
                },                                

                onblur: function(elem) { 
                    elem.parentElement.classList.remove('editing');  
                }
            }); 

            app.calc();
        },

        removeCompleted: function() {
            app.todos = app.todos.filter(function(todo) { return !todo.completed} );
            app.calc();
        },

        markAll: function(val) {
        app.lastMarked = !app.lastMarked; //flip each time.
        app.todos.forEach(function(todo) { todo.completed = app.lastMarked });
        app.calc();
    },

        calc: function() {
            app.numActive                    = app.todos.filter(function(todo) { return !todo.completed }).length;
            app.numCompleted             = app.todos.filter(function(todo) { return todo.completed }).length;
            
            app.shouldShowClearButton = (app.numCompleted > 0);      
            app.shouldShowFooter             = ((app.numActive > 0) || (app.numCompleted > 0));
        },

        todos: []        
    };

    app.calc(); 

    jab.bind(app, 'addTodo', "#new-todo", 'enter');                        
    jab.bind(app, 'markAll', "#toggle-all", 'check');                        
    jab.bind(app, 'shouldShowClearButton', "#clear-completed", 'show');
    jab.bind(app, 'shouldShowFooter', "footer", 'show');
    jab.bind(app, 'removeCompleted', "#clear-completed", 'click');

    jab.bind(app, 'numActive', "#num-active");
    jab.bind(app, 'numCompleted', "#num-completed");
    jab.bind(app, 'todos', '.todo');

})( window );