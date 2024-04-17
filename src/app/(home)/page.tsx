import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Pizza } from "lucide-react";
import Image from "next/image";
import ProductCard, { Product } from "./components/ProductCard";

const products: Product[] = [
  {
    id: "1",
    name: "Margarita Pizza",
    description: "Classic tomato, fresh mozzarella, basil, olive oil",
    image: "/pizza-main.png",
    price: 500,
  },
  {
    id: "2",
    name: "Pepperoni Pizza",
    description: "Classic pepperoni, mozzarella, tomato sauce",
    image: "/pizza-main.png",
    price: 550,
  },
  {
    id: "3",
    name: "Hawaiian Pizza",
    description: "Ham, pineapple, mozzarella, tomato sauce",
    image: "/pizza-main.png",
    price: 600,
  },
  {
    id: "4",
    name: "BBQ Chicken Pizza",
    description: "Grilled chicken, BBQ sauce, red onions, mozzarella, cilantro",
    image: "/pizza-main.png",
    price: 650,
  },
  {
    id: "5",
    name: "Vegetarian Pizza",
    description: "Assorted veggies, tomato sauce, mozzarella",
    image: "/pizza-main.png",
    price: 550,
  },
  {
    id: "6",
    name: "Meat Lover's Pizza",
    description: "Pepperoni, sausage, bacon, ham, mozzarella, tomato sauce",
    image: "/pizza-main.png",
    price: 700,
  },
  {
    id: "7",
    name: "Four Cheese Pizza",
    description: "Mozzarella, parmesan, asiago, gorgonzola, tomato sauce",
    image: "/pizza-main.png",
    price: 600,
  },
  {
    id: "8",
    name: "Supreme Pizza",
    description: "Pepperoni, sausage, bell peppers, onions, olives",
    image: "/pizza-main.png",
    price: 650,
  },
];

export default function Home() {
  return (
    <>
      <section className="bg-white">
        <div className="container flex items-center justify-between py-24">
          <div className="">
            <h1 className="text-7xl font-black font-sans leading-2">
              Super Delicious Pizza in <br />
              <span className="text-primary font-bold font-sans">
                {" "}
                Only 45 Minutes!
              </span>
            </h1>
            <p className="text-2xl mt-8 max-w-lg leading-snug">
              Enjoy a Free Meal if Your Order Takes More Than 45 Minutes
            </p>
            <Button className="hover:bg-white hover:border-rose-600 hover:border-2 border-2 transition-all duration-100 ease-in-out border-transparent hover:text-rose-600 text-lg rounded-full mt-8 py-7 px-6">
              Get your pizza now <Pizza className="ml-4" />
            </Button>
          </div>
          <div>
            <Image
              alt="pizza-main"
              src={"/pizza-main.png"}
              width={400}
              height={400}
            ></Image>
          </div>
        </div>
      </section>

      <section>
        <div className="container py-12">
          <Tabs defaultValue="account">
            <TabsList>
              <TabsTrigger value="pizza" className="text-md">
                Pizza
              </TabsTrigger>
              <TabsTrigger value="beverages" className="text-md">
                Beverages
              </TabsTrigger>
            </TabsList>
            <TabsContent value="pizza">
              <div className="grid grid-cols-4 gap-8 mt-6">
                {products.map((product) => (
                  <ProductCard product={product} key={product.id} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="beverages">
              <div className="grid grid-cols-4 gap-8 mt-6">
                {products.map((product) => (
                  <ProductCard product={product} key={product.id} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
}
