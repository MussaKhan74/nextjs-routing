import { useRouter } from 'next/router';

export default function ProductDetails() {
  const router = useRouter();
  const productid = router.query.productid;

  return (
    <>
      <h1>Product Details Page</h1>
      <h2>Product ID: {productid}</h2>
    </>
  );
}
