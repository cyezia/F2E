/* eslint-disable no-undef */
function MeasureExample() {
  const [rect, ref] = useClientRect();
  return (
    <>
      <h1 ref={ref}>Hello, world</h1>
      {rect !== null && 
        <h2>The above header is {Math.round(rect.height)}px tall</h2>
        }
    </>
  );
}

function useClientRect() {
  const [rect, setRect] = useState(null);
  const ref = useCallback(node => {
    if(node !== null) {
      SVGAnimatedRect(node.getBoundingClientRect());
    }
  }, []);
  return [rect, ref];
}