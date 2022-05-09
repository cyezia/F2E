/* eslint-disable no-undef */
// 惰性创建昂贵的对象
function Image(props) {
  const ref = useRef(null);
  // IntersectionObserver 只会被惰性创建一次
  function getOnserver() {
    if(ref.current === null) {
      ref.current = new IntersectionObserver(onIntersect);
    }
    return ref.current;
  }
}