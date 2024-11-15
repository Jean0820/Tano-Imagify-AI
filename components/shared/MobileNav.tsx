import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

const MobileNav = () => {
  return (
    <>
      <header className="header">
        <Link href="/" className="flex items-center gap-2 md:py-2">
          {" "}
          <Image
            src="/assets/images/logo-text.svg"
            width={180}
            height={28}
            alt="logo"
          />
        </Link>

        <nav className="flex gap-2">
          <SignedIn>
            <UserButton afterSwitchSessionUrl="/" />
            <Sheet>
              <SheetTrigger>
                <Image
                  src="/assets/icons/menu.svg"
                  alt="menu-icon"
                  width={32}
                  height={32}
                  className="cursor-pointer"
                />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Are you absolutely sure?</SheetTitle>
                  <SheetDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </SignedIn>
        </nav>
      </header>
    </>
  );
};

export default MobileNav;
