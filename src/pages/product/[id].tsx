import Image from "next/image";
import { useRouter } from "next/router";

import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "@/styles/pages/product";

export default function Product() {
  const { query } = useRouter();

  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>
      <ProductDetails>
        <h1>Camiseta X</h1>
        <span> R$ 79,99</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
          consectetur fuga accusamus alias esse delectus nam corrupti at nulla
          dicta ad magni voluptatum qui amet, obcaecati rerum quisquam maxime
          porro.
        </p>
        <button>Comprar Agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}
