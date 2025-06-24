import { Menu, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Nav() {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center absolute  top-4 border-y border-dashed border-stone-400 ">
    <div className="h-20 w-full max-w-[70vw] bg-stone-100 hidden lg:flex  items-center justify-between px-4 font-medium rounded ">
      <div className="w-full  h-20 flex gap-6 items-center justify-start px-4 ">
        <div className="">About us</div>
   

        <div className="">Services</div>
        <div className="">Careers</div>
  
      </div>
     <div className="w-full  h-20 clip-both-v bg-white flex justify-center items-center">
       <div className="text-center"> MURON LABS</div>
     </div>

      <div className="w-full  h-20 flex gap-6 items-center justify-end px-4 ">
       
        <Button className="rounded-full px-6 py-4">
            Get in Touch
          
        </Button>
       
      </div>
    </div>
    <div className="w-full flex lg:hidden h-20  w-full flex relative items-center justify-center  ">
<div className="text-center font-semibold text-2xl"> MURON LABS</div>
<div className="absolute right-8">
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost"><Menu/></Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>MURON LABS</SheetTitle>
          <SheetDescription className="mt-4">
            <div className="flex flex-col gap-4">
              <div className="">About us</div>
              <div className="">Services</div>
              <div className="">Careers</div>
            </div>
          </SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          
        </div>
        
      </SheetContent>
    </Sheet>

</div>
    </div>
    </div>
  );
}
