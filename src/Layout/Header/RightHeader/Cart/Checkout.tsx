import { CheckOut, Total } from "@/Constant";
import { useRouter } from "next/navigation";
import { Button } from "reactstrap";

export const Checkout = () => {
  const router = useRouter();
  return (
    <li className="order-total">
      <h4 className="mb-0 f-w-700">
        {Total} : <span>$1720.00</span>
      </h4>
      <Button onClick={() => router.push("/ecommerce/checkout")} color="primary" tag="a" className="view-checkout">
        {CheckOut}
      </Button>
    </li>
  );
};
