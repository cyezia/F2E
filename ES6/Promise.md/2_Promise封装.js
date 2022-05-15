function Promise(executor) {
  // 添加属性
  this.PromiseState = 'pending';
  this.PromiseResult = null;
  // 保存实例对象的this的值
  const self = this;

  // resolve 函数
  function resolve(data) {
    // 判断 保证promise状态只能修改一次
    if(selt.PromiseState !== 'pending') return;
    // 修改对象的状态 promiseState
    self.PromiseState = 'fulfilled'; //resolved
    // 设置对象结果值 promiseResult
    self.PromiseResult = data;
  }

  // reject函数
  function reject(data) {
    // 判断 保证promise状态只能修改一次
    if(self.PromiseState !== 'pending') return;
    // 修改对象的状态 promiseState
    self.PromiseState = 'rejected'; //resolved
    // 设置对象结果值 promiseResult
    self.PromiseResult = data;
  }
  try{
    // 同步调用 执行器函数
    executor(resolve, reject);
  }catch(e) {
    // 修改promise对象状态为失败
    reject(e);
  }
}

// 添加then方法
Promise.prototype.then = function(onResolved, onRejected) {
  // 调用回调函数
  if(this.PromiseState === 'fulfilled') {
    onResolved(this.PromiseResult);
  }
  if(this.PromiseState === 'rejected') {
    onRejected(this.PromiseResult);
  }
}