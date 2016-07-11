var generators = require('yeoman-generator');

var variables = null;

module.exports = generators.Base.extend({
  prompting: function() {
    return this.prompt([{
      type: 'input',
      name: 'name',
      message: 'Project name',
      default: this.appname
    }]).then(function(answers) {
      variables = answers
    }.bind(this));
  },

  writing: function() {
    // Copy all non-dotfiles
    this.fs.copyTpl(
      this.templatePath('sources/**/*'),
      this.destinationRoot(),
      variables
    );

    // Copy all dotfiles
    this.fs.copyTpl(
      this.templatePath('sources/**/.*'),
      this.destinationRoot(),
      variables
    );

    // Copy all dotfiles
    this.fs.copy(
      this.templatePath('binaries/**/*'),
      this.destinationRoot(),
      variables
    );
  },

  install: function() {
//    this.installDependencies({ npm: true, bower: false });
  }
});
