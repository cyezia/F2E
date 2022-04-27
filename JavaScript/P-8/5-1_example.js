;(function(){
  // var _self;
  var Test = function(opt){
    this.num1 = opt.num1;
    this.num = opt.num2;
    this.btnGroup = opt.btnGroup;

  }

  Test.prototype = {
    init: function(){
      this.bindEvent();
    },

    // 所有的事件处理函数都写在这里面
    bindEvent: function(){
      var btns = this.btnGroup,
          _self = this;
      addEvent(btns, 'click', function(e){
        _self.compute.call(_self, e);
      });
    },
    compute: function(e){
      // console.log(e);
      var e = e || window.event,
          tar = e.target || e.srcElement, 
          val1 = number(this.num1.value),
          val2 = number(this.num2.value),
          btns = this.btnGroup,
          sign;
      
      // console.log(val1);
      sign = tar.getAttribute('data-sign');

      switch(sign){
        case 'plus':
          console.log(val1 + val2);
          break;
        case 'minus':
          console.log(val1 - val2);
          break;
        case 'mul':
          console.log(val1 * val2);
          break;
        case 'div':
          console.log(val1 / val2);
          break;
        default:
          console.log('出错了');
      }
    }
  }
})();