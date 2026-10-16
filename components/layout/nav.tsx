import { Button } from "@/components/ui/button";
import { mainMenu, menuLabel } from "@/menu.config";
import { siteConfig } from "@/site.config";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { MobileNav } from "@/components/nav/mobile-nav";

interface NavProps {
  className?: string;
  children?: React.ReactNode;
  id?: string;
}

export function Nav({ className, children, id }: NavProps) {
  return (
    <nav
      className={cn("z-50 bg-[#07111b] text-white md:sticky md:top-0", "border-b border-white/10", className)}
      id={id}
    >
      <div
        id="nav-container"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8 sm:py-4 lg:px-10"
      >
        <Link
          className="hover:opacity-75 transition-all flex gap-4 items-center"
          href="/"
        >
          <Image
            src={siteConfig.brand.logoPath}
            alt={`${siteConfig.site_name} Logo`}
            loading="eager"
            width={118}
            height={44}
            className="h-10 w-auto brightness-0 invert"
          />
          <span className="sr-only">{siteConfig.site_name}</span>
        </Link>
        {children}
        <div className="flex items-center gap-2">
          <div className="mx-2 hidden md:flex">
            {Object.entries(mainMenu).map(([key, href]) => (
              <Button key={href} asChild variant="ghost" size="sm">
                <Link href={href}>
                  {menuLabel(key)}
                </Link>
              </Button>
            ))}
          </div>
          <Button asChild size="lg" className="hidden bg-orange-500 text-slate-950 hover:bg-orange-400 sm:flex">
            <Link href="/#quote">Discuss your project</Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </nav>
  );
}
