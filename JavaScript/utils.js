// 绑定事件处理函数 fn函数的简写
function addEvent(el, type, fn){
  if(el.addEventListener){
    el.addEventListener(type, fn, false);
  }else if(el.attachEvent){
    el.attachEvent('on' + type, function(){
      // 改变this指向到el
      fn.call(el);
    });
  }else{
    // obj.name = obj['name']
    // el.onclick = el['onclick']
    el['on' + type] = fn;
  }
}


// 解除事件处理程序
function removeEvent(elem, type, fn){
  if(elem.addEventListener){
    elem.removeEventListener(type, fn, false);
  }else if(elem.attachEvent){
    elem.detachEvent('on' + type, fn);
  }else{
    elem['on' + 'type'] = null;
  }
}


// 取消冒泡封装
function cancelBubble(e){
  var e = e || window.event;

  if(e.stopPropagetion){
    e.stopPropagetion();
  }else{
    e.cancelBubble = true;
  }
}


// 取消默认事件
function preventDefaultEvent(e){
  var e = e || window.event;
  if(e.preventDefault){
    event.preventDefault();
  }else{
    event.returnValue = false;
  }
}


// pageX/Y封装
function pagePos(e){
  var sLeft = getScrollOffset().left,
      sTop = getScrollOffset().top,
      // 获取文档偏移 IE8以上有可能是undefined 如果是undefined直接取0，就是没有偏移
      cLeft = document.documentElement.clientLeft || 0,
      cTop = document.documentElement.clientTop || 0;
  return{
    X: e.clientX + sLeft - cLeft,
    Y: e.clientY + sTop - cTop
  }
}


// 获取滚动条距离
function getScrollOffset(){
  if(window.pageXOffset){
    return{
      left: window.pageXOffset,
      top: window.pageYOffset
    }
  }else{
    return{
      left: document.body.scrollLeft + document.documentElement.scrollLeft,
      top: document.body.scrollTop + document.documentElement.scrollTop
    }
  }
}


// getComputedStyle封装
function getStyles(elem, prop){
  if(window.getComputedStyle){
    if(prop){
      return parseInt(window.getComputedStyle(elem, null)[prop]);
    }else{
      return window.getComputedStyle(elem, null);
    }
  }else{
    if(prop){
      return parseInt(elem.currentStyle[prop]);
    }else{
      return elem.currentStyle;
    }
  }
}


// 封装拖拽函数
function elemDrag(elem){
  var x,
      y;

  addEvent(elem, 'mousedown', function(e){
    var e = e || window.event;
    x = pagePos(e).X - getStyles(elem, 'left');
    y = pagePos(e).Y - getStyles(elem, 'top');
    
    addEvent(document, 'mousemove', mouseMove);
    addEvent(document, 'mouseup', mouseUp);
    cancelBubble(e);
    preventDefaultEvent(e);
  });

  function mouseMove(e){
    var e = e || window.event;
    elem.style.top = pagePos(e).Y - y + 'px';
    elem.style.left = pagePos(e).X - x + 'px';
  }

  function mouseUp(e){
    var e = e || window.event;
    removeEvent(document, 'mousemove', mouseMove);
    removeEvent(document, 'mouseup', mouseUp);
  }
}


// 写一个函数，接收任意一个字符串，算出这个字符串的总字节数
function getBytes(str){
  // 少了中文字符的数量，判断哪些是中文字符，每个中文字符的字节加一
  var bytes = str.length;

  for(var i =0; i < str.length; i++){
    var pos = str.charCodeAt(i);
    if(pos > 255){
      bytes++;
    }
  }
  return bytes;
}

// JS插件的写法
// (function(){})() 用立即执行函数防止变量污染
;(function(){
  var Test = function(){

  }
  Test.prototype = {

  }
  window.Test = Test;
})();
var test =new Test();


// 继承方法
function inherit(Target, Origin){
  function Buffer(){}
  Buffer.prototype = Origin.prototype;
  Target.prototype = new Buffer();
  Target.prototype.constructor = Target; // constructor等于它本身 （还原构造器，让student构造器重新指向student）
  Target.prototype.super_class = Origin; // super_class 超类 继承源 (设置继承源)
}


// 递归
var sum = (function(n){
  if(n <= 1){
    return 1;
  }
  // arguments.callee 找到正在执行的函数
  return n + arguments.callee(n - 1);
})(10);


// 浅拷贝
function clone(origin, target){
  var tar = target || {};
  for(var key in origin){
    // hasOwnProperty剔除原型上的num，返回自身的属性
    if(origin.hasOwnProperty(key)){
      tar[key] = origin[key];
    }
  }
  return tar;
}


// 深拷贝
function deepClone(origin, target){
  var target = target || {},
      toStr = Object.prototype.toString,
      arrType = '[object Array]';
      for(var key in origin){
        if(origin.hasOwnProperty(key)){
          // 因为null打印出来的也是object，所以要判断
          if(typeof(origin[key]) === 'object' && origin[key] !== null){
            if(toStr.call(origin[key]) === arrType){
              target[key] = [];
            }else{
              target[key] = {};
            }
            deepClone(origin[key], target[key]);
          }else{
            target[key] = origin[key];
          }
        }
      }
      return target;
}


// childNodes封装
function elemChildren(node){
  var arr = [],
      children = node.childNodes;
  for(var i = 0; i < children.length; i++){
    var childItem = children[i];
    // nodeType节点类型
    // 判断每个节点的类型如果是1（元素节点）就放到childItem里面去
    if(childItem.nodeType === 1){
      arr.push(childItem);
    }
  }
  return arr;
}


// 类数组封装childNodes
function elemChildren(node){
  var temp = {
    'length': 0,
    'push': Array.prototype.push,
    'splice': Array.prototype.splice
  },
      len = node.childNodes.length;
  for(var i = 0; i < len; i++){
    var childItem = node.childNodes[i];

    // nodeType节点类型
    // 判断每个节点的类型如果是1（元素节点）
    if(childItem.nodeType === 1){

      // 初始的length是0，即temp[0]
      temp[temp['length']] = childItem;
      temp['length']++;
    }
  }
  return temp;
}


// 浏览器可视区域的尺寸兼容性问题
function getViewportSize(){
  if(window.innerWidth){
    return{
      width: window.innerWidth,
      height: window.innerHeight
    }
  }else{
    if(document.compatMode === 'BackCompat'){
      return{
        width: document.body.clientWidth,
        height: document.body.clientHeight
      }
    }else{
      return{
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      }
    }
  }
}


// 页面高度兼容性问题
function getScrollSize(){
  if(document.body.scrollWidth){
    return{
      width: document.body.scrollWidth,
      height: document.body.scrollHeight
    }
  }else{
    return{
      width: document.documentElement.scrollWidth,
      height: document.documentElement.scrollHeight
    }
  }
}


// 封装一个方法 让son的距离是针对于文档的，无论是否有定位元素
function getELemDocPosition(el){
  var parent = el.offsetParent,
      offsetLeft = el.offsetLeft,
      offsetTop = el.offsetTop;

  while(parent){
    offsetLeft += parent.offsetLeft;
    offsetTop += parent.offsetTop;
    parent = parent.offsetParent;
  }
  
  return{
    left: offsetLeft,
    top: offsetTop
  }
}


