import React from "react";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Link } from "react-router-dom";
import { MdAdsClick } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";

const Collage = ({ title, img, accounts = [{ name: "", account: "" }] }) => {
  return (
    <div className="w-[350px] mx-auto h-32 shadow-lg rounded-xl shadow-[#f2cc3f]/60 border-[0.5px] border-[#f2cc3f]">
      <div className="relative w-full h-full">
        <img
          src={img}
          alt="image"
          className="w-full h-full rounded-lg bg-black opacity-40"
          loading="lazy"
        />

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
          <p className="text-[#2c628b] mt-2  w-fit mx-auto h-4 md:text-1xl font-vexa text-[20px] bg-[#f2cc3f]  md:text-right text-center leading-relaxed mb-6 ">
            <span className="relative -top-4">{title}</span>
            {/* <span className="w-full flex justify-center relative -top-2">
                <RiNumber4
                  size={40}
                  className="border-4 border-dashed border-[#f2cc3f]/70 rounded-full p-1 "
                />
              </span> */}
          </p>
        </div>
        <span className="absolute bottom-2 left-1/2 -translate-x-1/2 cursor-pointer text-[#266493] hover:text-gray-400">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="round-full p-2 bg-[#266493]">
                <MdAdsClick />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md max-h-[80%] overflow-scroll">
              <DialogHeader>
                <DialogTitle className="w-full text-right pr-8">
                  حسابات أعضاء هيئة التدريس
                </DialogTitle>
                <DialogDescription className="text-right flex flex-col items-end gap-2 pt-4">
                  {accounts.map((account, index) => (
                    <Link
                      key={index}
                      //   to={account.account}
                      className="flex gap-2"
                    >
                      <p>{account?.account}</p>
                      <p className="">{account.name}</p>{" "}
                    </Link>
                  ))}
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className="sm:justify-end">
                <DialogClose asChild className="">
                  <Button type="button" variant="secondary">
                    Close
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </span>
      </div>
    </div>
  );
};

export default Collage;
