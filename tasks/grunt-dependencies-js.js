module.exports = function(grunt) {

    grunt.registerMultiTask('dependenciesJs', 'Description', function() {

        // Tell grunt this task is asynchronous.
        var done = this.async();

        // Define the tasks list
        var taskList = [];
        // ------------------------
        // Start Cleaning
        var clean = {
            demo: [
                'demo/js/**/*'
            ]
        };
        grunt.config.set('clean', clean);
        taskList.push('clean');
        // ------------------------
        // Concat-Tasks
        var concat = {
            options: {
                separator: ';'
            },
            demo: {
                files: {
                    // Concat all JS third party dependencies into single file
                    'demo/js/hackajobs-stylesheet-dependencies.js' : [
                        '<%= grunt.params.dependencies.folder %>jquery/dist/jquery.js',
                        '<%= grunt.params.dependencies.folder %>bootstrap/dist/js/bootstrap.js',
                        '<%= grunt.params.dependencies.folder %>bootstrap-datepicker/dist/js/bootstrap-datepicker.js',
                        '<%= grunt.params.dependencies.folder %>bootstrap-datepicker/js/locales/bootstrap-datepicker.ca.js',
                        '<%= grunt.params.dependencies.folder %>bootstrap-datepicker/js/locales/bootstrap-datepicker.es.js'
                    ]
                }
            }
        };
        grunt.config.set('concat', concat);
        taskList.push('concat');
        // ------------------------
        // Uglify-Tasks
        var uglify = {
            options: {
                mangle: false  // Use if you want the names of your functions and variables unchanged
            },
            dist: {
                files: {
                    'demo/js/hackajobs-stylesheet-dependencies.min.js'
                        : 'demo/js/hackajobs-stylesheet-dependencies.js'
                }
            }
        };
        grunt.config.set('uglify', uglify);
        taskList.push('uglify');
        // ------------------------
        // ------------------------
        // RUN ALL TASKS
        grunt.task.run(taskList);

        done();

    });

};
