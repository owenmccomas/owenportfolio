import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Button } from "./ui/button"

export default function ProjectCards() {
  return (
    <div className="flex flex-wrap">
      <div className="w-full sm:w-1/2 md:w-1/5 p-2 flex">
        <Card className="h-full">
          <CardHeader>
            <CardTitle>YDAAG</CardTitle>
            <CardDescription>
              (your day at a glance)
              <br />
              utilizes the t3 stack
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              a simple, minimal, productivity site to see what your day is going
              to look like
            </p>
          </CardContent>
          <CardFooter>
            <div className="">
              <Button variant={"outline"}>
                <a
                  href="https://ydaag.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  take me there
                </a>
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/5 p-2 flex">
        <Card className="h-full">
          <CardHeader>
            <CardTitle>Twitter Clone</CardTitle>
            <CardDescription>also utilizes the t3 stack</CardDescription>
          </CardHeader>
          <CardContent>
            <p>demonstrates ability to implement CRUD principles</p>
          </CardContent>
          <CardFooter>
            <div className="mt-11">
              <Button variant={"outline"}>
                <a
                  href="https://social-media-t3.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  take me there
                </a>
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/5 p-2 flex">
        <Card className="h-full">
          <CardHeader>
            <CardTitle>Authentication Demo</CardTitle>
            <CardDescription>full authentication from scratch</CardDescription>
          </CardHeader>
          <CardContent>
            <p>this is a project towards my education</p>
          </CardContent>
          <CardFooter>
            <div className="mt-6">
              <Button variant={"outline"}>
                <a
                  href="https://github.com/owenmccomas/web-sprint-challenge-authentication-and-testing"
                  target="_blank"
                  rel="noreferrer"
                >
                  github
                </a>
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
      {/* <div className="w-full sm:w-1/2 md:w-1/5 p-2 flex">
        </div> */}
    </div>
  )
}
