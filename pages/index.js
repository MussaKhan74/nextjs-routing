import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    console.log('Place your order');
    router.push('/product');
  };

  return (
    <>
      <h1>Home Page</h1>
      <div>
        <Link href="/blog">Blog</Link>
      </div>
      <div>
        <Link href="/product">Product List</Link>
      </div>
      <button onClick={handleClick}>Place Order</button>
    </>
  );
}
