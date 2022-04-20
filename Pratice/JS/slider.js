// 先获取每个图片的thumbItem,再循环绑定点击事件给每一个图片
// var thumbItem = document.getElementsByClassName('thumb-item'),
//     sliderItem = document.getElementsByClassName('slider-item');
// // console.log(thumbItem);

// // 点击取消每个图片上的cur类，就能还原到0.5的透明度，寻找点击的图片加上cur类
// // 先循环一遍把带有cur类的li去掉，再通过点击给li加cur
// for(var i = 0; i < thumbItem.length; i++){
//   // 会产生闭包的问题，故用一个立即执行函数保存每次循环的值
//   (function(j){
//     thumbItem[j].onclick = function(){
//       for(var k = 0; k < thumbItem.length; k++){
//         thumbItem[k].className = 'thumb-item';
//         sliderItem[k].className = 'slider-item';
//       }
//       this.className += ' cur';
//       sliderItem[j].className += ' active';
//     }
//   })(i);
// }


// 把以上功能做成插件
// 要在html的文件中声明一下
;(function(){
  var Slider = function(opt){
    this.sliderItem = document.getElementsByClassName(opt.sliderItem);
    this.thumbItem = document.getElementsByClassName(opt.thumbItem);

    this.bindClick();
  }

  Slider.prototype = { 
    bindClick: function(){
      var slider = this.sliderItem,
          thumbs = this.thumbItem;

      for(var i = 0; i < thumbs.length; i++){
        (function(j){
          thumbs[j].onclick = function(){
            for(var k = 0; k < thumbs.length; k++){
              thumbs[k].className = 'thumb-item';
              slider[k].className = 'slider-item';
            }
            this.className += ' cur';
            slider[j].className += ' active';
          }
        })(i);
      }
    }
  }

  window.Slider = Slider;
})();