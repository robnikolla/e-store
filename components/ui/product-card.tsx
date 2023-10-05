"use client";

import { Product } from "@/types";
import Image from "next/image";
import IconButton from "@/components/ui/icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "@/components/ui/currency";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };
  return (
    <div className="p-3 space-y-4 bg-white border cursor-pointer group rounded-xl">
      <div className="relative bg-gray-100 aspect-square rounded-xl">
        <Image
          src={data?.images?.[0]?.url}
          alt="Image"
          fill
          className="object-cover rounded-md aspect-square"
        />
        <div className="absolute w-full px-6 transition opacity-0 group-hover:opacity-100 bottom-5">
          <div className="flex justify-center gap-x-6">
            <IconButton
              onClick={() => handleClick()}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={() => {}}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      {/* Description */}
      <p className="text-lg font-semibold">{data.name}</p>
      <p className="text-sm text-gray-500">{data.category.name}</p>
      {/* Price */}
      <div className="flex items-center justify-between ">
        <Currency value={data?.price} />
      </div>
    </div>
  );
};

export default ProductCard;
