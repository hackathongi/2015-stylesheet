module.exports = function(grunt) {

    grunt.registerMultiTask('dependenciesStyles', 'Description', function() {

        // Tell grunt this task is asynchronous.
        var done = this.async();

        // Define the tasks list
        var taskList = [];
        // ------------------------
        // Start Cleaning
        var clean = {
            demo: [
                'demo/less/**/*'
            ]
        };
        grunt.config.set('clean', clean);
        taskList.push('clean');
        // ------------------------
        // Copy tasks
        var copy = {
            lessFiles: {
                files: [
                    {   // Bootstrap LESS Files
                        expand: true,
                        cwd: '<%= grunt.params.dependencies.folder %>bootstrap/less/',
                        src: '**/*',
                        dest: 'demo/less/bootstrap/'
                    },
                    {   // Bootstrap DatePicker LESS Files
                        expand: true,
                        cwd: '<%= grunt.params.dependencies.folder %>bootstrap-datepicker/less/',
                        src: '**/*',
                        dest: 'demo/less/bootstrap-datepicker/'
                    }
                ]
            },
            fontFiles: {
                files: [
                    {   // Bootstrap FONT Files
                        expand: true,
                        cwd: '<%= grunt.params.dependencies.folder %>bootstrap/dist/fonts/',
                        src: '**/*',
                        dest: 'demo/fonts/'
                    }
                ]
            }
        };

        grunt.config.set('copy', copy);
        taskList.push('copy');
        // ------------------------
        // ------------------------
        // RUN ALL TASKS
        grunt.task.run(taskList);

        done();

    });

};
