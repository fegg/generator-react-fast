var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  // 构造函数
  constructor: function () {

    // 调用父类构造函数
    generators.Base.apply(this, arguments);

    // 执行的时候接收 `--coffee` 参数
    this.option('coffee');
  }
});
