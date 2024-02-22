import React from "react";
import { FaRegFilePdf } from "react-icons/fa";
import { Link } from "react-router-dom";
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

const File = ({ links, title = "unknown" }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Link className="cursor-pointer   flex flex-col items-center justify-center">
          <div className="w-32 h-32 hover:bg-[#3384c3] hover:text-white  text-[#3384c3] flex justify-center items-center border-2 border-dashed rounded-lg border-[#3384c3]">
            <FaRegFilePdf size={50} className="" />
          </div>
          <p className="text-center text-[#3384c3]">{title}</p>
        </Link>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md max-h-[80%] overflow-scroll">
        <DialogHeader>
          <DialogTitle className="w-full text-right pr-8">نوتات</DialogTitle>
          <DialogDescription className="text-right flex flex-col items-end gap-2 pt-4">
            {links.map((link, index) => (
              <Link to={link.link} className="flex gap-2">
                <p className="underline">{link.text}</p> <p>.{index}</p>
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
  );
};

export default File;
