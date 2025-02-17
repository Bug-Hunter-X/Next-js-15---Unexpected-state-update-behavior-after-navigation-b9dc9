```javascript
//pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
//pages/about.js
import {useEffect, useState} from 'react';

export default function About() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log('Component mounted!');
    // Simulate a data fetch after a delay
    const timer = setTimeout(() => {
      setCounter(10);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      <h1>About Page</h1>
      <p>Counter: {counter}</p>
    </div>
  );
}
```