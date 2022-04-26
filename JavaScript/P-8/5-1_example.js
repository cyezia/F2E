;(function(){
  var Test = function(opt){
    this.num1 = opt.num1;
    this.num = opt.num2;
    this.btnGroup = opt.btnGroup;
  }

  Test.prototype = {
    init: function(){
      // bindEvent();
    },

    // 所有的事件处理函数都写在这里面
    bindEvent: function(){
      var btns = this.btnGroup;
      addEvent(btns, 'click',this.compute);
    },
    compute: function(){
      var val1 = this.num1.value,
          val2 = this.num2.value,
          btns = this.btnGroup;
    }
  }

  window.Test = Test;
})();