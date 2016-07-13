var generator = require('yeoman-generator');
var _ = require('lodash');

var variables = { }

module.exports = generator.Base.extend({
  constructor: function () {
    generator.Base.apply(this, arguments);
    this.argument('appname', { type: String, required: true, desc: 'Project name' });
  },

  configuring: {
    gatherVariables: function() {
      variables.appname = this.appname;
      variables.pkgname = _.kebabCase(this.appname);
    }
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

    // Copy all binary files (those that arent templates)
    this.fs.copy(
      this.templatePath('binaries/**/*'),
      this.destinationRoot(),
      variables
    );
  },

  install: function() {
    this.npmInstall();
  }
});
