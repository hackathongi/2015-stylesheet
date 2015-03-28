module.exports = function(grunt) {

    grunt.registerMultiTask('buildStyles', 'Description', function() {

        // Tell grunt this task is asynchronous.
        var done = this.async();

        // Define the tasks list
        var taskList = [];
        // ------------------------
        // Start Cleaning
        var clean = {
            demo: [
                'demo/css/*'
            ]
        };
        grunt.config.set('clean', clean);
        taskList.push('clean');
        // ------------------------
        // Copy tasks
        var copy = {
            lessFiles: {
                files: [
                    {   // Hackajobs LESS Files
                        expand: true,
                        flatten: true,
                        src: 'less/*',
                        dest: 'demo/less/hackajobs-stylesheet/'
                    }
                ]
            }
        };
        grunt.config.set('copy', copy);
        taskList.push('copy');
        // ------------------------
        // Less Tasks
        var less = {
            dev: {
                options: {
                    compress: false
                },
                files: [
                    {"demo/css/hackajobs-stylesheet.css":"demo/less/hackajobs-stylesheet/hackajobs-stylesheet.less"}
                ]
            },
            dist: {
                options: {
                    compress: true
                },
                files: [
                    {"demo/css/hackajobs-stylesheet.min.css":"demo/less/hackajobs-stylesheet/hackajobs-stylesheet.less"}
                ]
            }
        };
        grunt.config.set('less', less);
        taskList.push('less');
        // ------------------------
        // ------------------------
        // RUN ALL TASKS
        grunt.task.run(taskList);

        done();

    });

};
