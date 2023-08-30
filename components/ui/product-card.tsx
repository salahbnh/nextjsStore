'use client'
import React, { useState, useEffect } from "react"; // Import useState and useEffect
import Image from "next/image";
import { MouseEventHandler } from "react";
import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation"; // Correct import for useRouter
import Currency from "@/components/ui/currency";
import IconButton from "@/components/ui/icon-button";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";

interface ProductCard {
  data: Product;
}

const ProductCard: React.FC<ProductCard> = ({ data }) => {
  const previewModal = usePreviewModal();
  const cart = useCart();
  const router = useRouter();

  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Track current image index

  const images = data.images || []; // Array of product images

  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    previewModal.onOpen(data);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    cart.addItem(data);
  };

  // Automatically change the image index every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [images]);
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
  return (
    <div
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4 relative"
    >
      {/* Image & actions */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={images[currentImageIndex]?.url} // Display the current image based on the index
          alt=""
          fill
          className={`aspect-square object-cover rounded-md ${
            isHovered ? "scale-110" : ""
          }`}
        />
        <div
          className={`${
            isHovered ? "opacity-100" : "opacity-0"
          } group-hover:opacity-100 transition absolute w-full px-6 bottom-5`}
        >
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={onAddToCart}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      {/* Description */}
      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-sm text-black">{data.category?.name}</p>
        <p className="text-sm text-gray-500">{data.description}</p>
        <p className="text-sm text-yellow-500">{renderStars(data.rating)}</p>

      </div>
      <div className="flex justify-between items-center mt-3">
        
        <div>
          {/* Price */}
          <Currency value={data?.price} />
        </div>
        <div>
          {/* Shopping Cart Icon */}
          <IconButton
            onClick={onAddToCart}
            icon={<ShoppingCart size={20} className="text-gray-600" />}
          />
        </div>
        </div>
    </div>
  );
};

export default ProductCard;
