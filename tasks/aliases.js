module.exports = function(grunt) {
  grunt.registerTask('sniff', ['jscs:main']);
  grunt.registerTask('lint', ['jshint', 'jscs:main']);
  grunt.registerTask('test', ['lint', 'karma:single']);
  grunt.registerTask('build', ['clean:build', 'unswap', 'requirejs:build', 'swap']);

  grunt.registerTask('js', ['test']);
  grunt.registerTask('css', ['scsslint']);
  grunt.registerTask('php', ['phpunit:unit']);
};
