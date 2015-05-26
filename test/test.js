var assert = require("assert"); // node.js core module
var twist  = require("../twist.js");

describe('Twist', function(){
  describe('replace()', function(){

    it('should replace template vars', function(){

      var template = "<p>{ name }</p><span>{ content }</span>";
      var data     = { name: 'michael', content: 'this is content' };

      assert.equal(twist.render(template, data), "<p>michael</p><span>this is content</span>"); 
    });

    it('should include partial templates', function(){

      var template = "<ul>{ tests }</ul>";
      var data     = { tests: [ { item: 'one' }, { item: 'two' }, { item: 'three' }]};

      assert.equal(twist.render(template, data), "<ul><li>one</li><li>two</li><li>three</li></ul>"); 
    });

  });
});
