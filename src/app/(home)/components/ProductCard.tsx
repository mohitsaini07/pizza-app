import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { BaggageClaim, IndianRupee } from "lucide-react";
import Image from "next/image";
import ToppingList from "./topping-list";

type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
};

type PropTypes = { product: Product };

const ProductCard = ({ product }: PropTypes) => {
  return (
    <div>
      <Card className="border-none rounded-xl gap-4">
        <CardHeader className="flex items-center justify-center">
          <Image
            alt="pizza-img"
            src={product.image}
            width={150}
            height={150}
          ></Image>
        </CardHeader>
        <CardContent>
          <span className="text-xl font-bold"> {product.name}</span> <br />
          <span className="">{product.description}</span>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <div className="flex items-center gap-x-1">
            From
            <span className="flex items-center font-bold ">
              <IndianRupee size={14} /> {product.price}
            </span>
          </div>
          <Dialog>
            <DialogTrigger className="bg-primary text-white font-medium py-2 px-4 rounded-3xl text-sm">
              Choose
            </DialogTrigger>

            <DialogContent className="max-w-3xl p-0">
              <div className="flex items-center gap-x-6">
                <div className="p-8 w-1/3">
                  <Image
                    alt={product.name}
                    src={"/pizza-main.png"}
                    width={200}
                    height={200}
                  ></Image>
                </div>
                <div className="bg-rose-50 w-2/3 rounded p-8">
                  <h1 className="text-xl font-semibold">{product.name}</h1>
                  <p className="text-sm text-gray-500 mt-2">
                    {product.description}
                  </p>

                  <div className="mt-4 mb-2 text-sm font-semibold">
                    Choose the size
                  </div>
                  <RadioGroup
                    defaultValue="small"
                    className="grid grid-cols-3 gap-4 mt-2"
                  >
                    <div>
                      <RadioGroupItem
                        value="small"
                        id="small"
                        className="peer sr-only"
                        aria-label="Small"
                      />
                      <Label
                        htmlFor="small"
                        className="flex flex-col items-center justify-between rounded-md border-2 bg-white p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        Small
                      </Label>
                    </div>

                    <div>
                      <RadioGroupItem
                        value="medium"
                        id="medium"
                        className="peer sr-only"
                        aria-label="Medium"
                      />
                      <Label
                        htmlFor="medium"
                        className="flex flex-col items-center justify-between rounded-md border-2 bg-white p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        Medium
                      </Label>
                    </div>

                    <div>
                      <RadioGroupItem
                        value="large"
                        id="large"
                        className="peer sr-only"
                        aria-label="Large"
                      />
                      <Label
                        htmlFor="large"
                        className="flex flex-col items-center justify-between rounded-md border-2 bg-white p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        Large
                      </Label>
                    </div>
                  </RadioGroup>

                  <div className="mt-4 mb-2 text-sm font-semibold">
                    Choose the crust
                  </div>
                  <RadioGroup
                    defaultValue="small"
                    className="grid grid-cols-3 gap-4 mt-2"
                  >
                    <div>
                      <RadioGroupItem
                        value="thick"
                        id="thick"
                        className="peer sr-only"
                        aria-label="Thick"
                      />
                      <Label
                        htmlFor="thick"
                        className="flex flex-col items-center justify-between rounded-md border-2 bg-white p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        Thick
                      </Label>
                    </div>

                    <div>
                      <RadioGroupItem
                        value="thin"
                        id="thin"
                        className="peer sr-only"
                        aria-label="Thin"
                      />
                      <Label
                        htmlFor="thin"
                        className="flex flex-col items-center justify-between rounded-md border-2 bg-white p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        Thin
                      </Label>
                    </div>
                  </RadioGroup>

                  <div className="mt-4 mb-2 text-sm font-semibold">
                    <ToppingList />
                  </div>

                  <div className="flex justify-between items-center mt-8">
                    <span className="flex items-center">
                      <IndianRupee size={14} />
                      <p className="font-bold">{product.price}</p>
                    </span>
                    <Button size={"sm"}>
                      <BaggageClaim size={18} />
                      <p className="ml-2">Add to cart</p>
                    </Button>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductCard;
