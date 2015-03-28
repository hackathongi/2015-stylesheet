/* global module, require */
module.exports = function(grunt){

    require('load-grunt-tasks')(grunt);

    // Init some params to run our tasks
    grunt.params = {
        dependencies: {
            // Define the Bower components directory (where bower stores the libraries)
            folder: 'bower_components/'
        }
    };

    grunt.initConfig({

        // Import package manifest
        pkg: grunt.file.readJSON("package.json"),

        dependenciesJs: {
            task: {}
        }

    });

    // Load in any and all tasks in the `tasks` folder
    grunt.loadTasks('tasks');

    // Demo task
    grunt.registerTask('dependencies-js', function() {
        grunt.task.run('dependenciesJs');
    });

    // Default task
    grunt.registerTask('default', function() {
        grunt.task.run('dependencies-js');
    });

};
