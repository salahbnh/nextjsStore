"use client";

import { ShoppingCart } from "lucide-react";

import Currency  from "@/components/ui/currency";
import Button from "@/components/ui/button";
import { Product } from "@/types";
import useCart from "@/hooks/use-cart";

interface InfoProps {
  data: Product
};

const Info: React.FC<InfoProps> = ({ data }) => {
  const cart = useCart();

  const onAddToCart = () => {
    cart.addItem(data);
  }
  const renderStars = (rating: string) => {
    const starCount = parseFloat(rating);
    const fullStars = Math.floor(starCount);
    const hasHalfStar = starCount - fullStars >= 0.5;

    const stars = Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-yellow-500 ${index < fullStars ? 'fas' : 'far'} fa-star ${
          index === fullStars && hasHalfStar ? 'fas fa-star-half-alt' : ''
        }`}
      />
    ));

    return <span className="flex items-center">{stars}</span>;
  };
// the rating should be under the price
  return ( 
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data?.price} />
        </p>
        <p className="text-sm  text-yellow-500">{renderStars(data.rating)}</p>
      </div>
      <hr className="my-4" />
      <p className="text-sm text-black">{data.description}</p>
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Type:</h3>
          <div>
            {data?.size?.value}
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>
          <div className="h-6 w-6 rounded-full border border-gray-600" style={{ backgroundColor: data?.color?.value }} />
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button onClick={onAddToCart} className="flex items-center gap-x-2">
          Add To Cart
          <ShoppingCart size={20} />
        </Button>
      </div>
    </div>
  );
}
 
export default Info;
