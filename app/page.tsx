import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import ProjectCards from "@/components/ProjectCards"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Owen McComas <br className="hidden sm:inline" />
          full stack web developer
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
        transforming ideas into captivating digital experiences through innovative full-stack web development
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          target="_blank"
          rel="noreferrer"
          href={'https://www.github.com/owenmccomas'}
          className={buttonVariants({ variant: "outline" })}
        >
          GitHub
        </Link>
      </div>
      <ProjectCards />
    </section>
  )
}
