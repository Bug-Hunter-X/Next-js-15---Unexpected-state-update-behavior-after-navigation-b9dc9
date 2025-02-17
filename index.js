```javascript
//pages/about.js
import {useEffect, useState, useTransition} from 'react';

export default function About() {
  const [isPending, startTransition] = useTransition();
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    startTransition(() => {
      const timer = setTimeout(() => {
        setCounter(10);
      }, 3000);
      return () => clearTimeout(timer);
    });
  }, []);
  return (
    <div>
      <h1>About Page</h1>
      <p>Counter: {counter}</p>      {isPending && <p>Loading...</p>}
    </div>
  );
}
```