module.exports=function(grunt){
grunt.initConfig({ 
clean:{
  	 build:{
	 src:["routes\*.js"]
 		}
},

uglify:
{
my_target:{
files:{
  'dest/output.min.js': ['routes/*.js']
}
}
},

jshint:
{

all:
  ['Gruntfile.js','routes/*.js']

},
  
  
  concat: {
    options: {
      separator: ';',
    },
    dist: {
      src: ['routes/employees.js', 'app.js'],
      dest: 'dist/built.js',
    },
  },
  
  minified : {
  files: {
    src: [
      'routes/*.js'
    ],
    dest: 'dest/min.js'
  }
},

sonarRunner: {
        analysis: {
            options: {
                debug: true,
                separator: '\n',
                sonar: {
                    host: {
                        url: 'http://localhost:9080'
                    },
                    jdbc: {
                        url: 'jdbc:mysql://localhost:3306/sonar',
                        username: 'root',
                        password: ''
                    },
 
                    projectKey: 'sonar:grunt-sonar-runner:0.1.0',
                    projectName: 'POC',
                    projectVersion: '0.0.0',
                    sources: ['routes'].join(','),
                    language: 'js',
                    sourceEncoding: 'UTF-8'
                }
            }
        }
    }
 /* mocha: {
    all: {
      src: 'test/*.js',
      options: {
        globals: ['assert'],
        timeout: 3000,
        ignoreLeaks: false,
        grep: '*-test',
        ui: 'bdd',
  1
      }
    }
  } */
});


grunt.loadNpmTasks('grunt-contrib-clean');

grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-minified');
//grunt.loadNpmTasks('grunt-mocha');
grunt.loadNpmTasks('grunt-sonar-runner');
grunt.registerTask('default',['clean','uglify','jshint','concat','minified','sonarRunner']);
};



