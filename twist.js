// twist.js
var fs = require('fs');

module.exports = {

  replace: function (template, name, data) {
    return template.replace(new RegExp('{\\s*' + name + '\\s*}', 'g'), data);
  },

  render: function (template, data) {
    
    for(var name in data) {
      if (data[name] instanceof Array) {

        var partial = fs.readFileSync('./partials/' + name + '/' + name + '.html', 'utf8').trim();
        var collection = '';

        data[name].forEach(function (item) {
          collection += this.render(partial, item);
        }, this);

        template = this.replace(template, name, collection);

      } else {
        template = this.replace(template, name, data[name]);
      }
    }
    return template;
  }
};
