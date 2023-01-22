import { useRouter } from 'next/router';

export default function ProductDetails() {
  const router = useRouter();
  const { productid, reviewid } = router.query;

  return (
    <>
      <h1>Review Details Page</h1>
      <h2>Product ID: {productid}</h2>
      <h2>Review ID: {reviewid}</h2>
    </>
  );
}
