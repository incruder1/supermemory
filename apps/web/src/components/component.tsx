/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/pva6O4OIeZq
 */
import { Input } from "@/components/ui/input"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CardContent, CardFooter, Card } from "@/components/ui/card"

export function Component() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <header className="flex justify-between items-center py-6">
        <div className="flex items-center space-x-4">
          <FlagIcon className="h-8 w-8 text-blue-500" />
          <h1 className="text-3xl font-bold text-gray-900">zenfetch</h1>
        </div>
        <div className="flex items-center space-x-4">
          <Input className="w-72" placeholder="Search..." />
          <Avatar>
            <AvatarImage alt="User avatar" src="/placeholder.svg?height=32&width=32" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <Button className="whitespace-nowrap" variant="outline">
            Chat with AI
          </Button>
        </div>
      </header>
      <nav className="flex space-x-2 my-4">
        <Badge variant="secondary">Technology (2)</Badge>
        <Badge variant="secondary">Business & Finance (1)</Badge>
        <Badge variant="secondary">Education & Career (1)</Badge>
      </nav>
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="w-full">
          <img
            alt="Hard drive"
            className="w-full h-48 object-cover"
            height="200"
            src="/placeholder.svg"
            style={{
              aspectRatio: "300/200",
              objectFit: "cover",
            }}
            width="300"
          />
          <CardContent>
            <h3 className="text-lg font-semibold">I'd like to sell you a hard drive.</h3>
            <p className="text-sm text-gray-600">SUBSTACK.COM</p>
            <p className="text-sm">
              Zenfetch is a proposed tool aimed to help knowledge workers retain and leverage the knowledge.
            </p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="ghost">Read More</Button>
          </CardFooter>
        </Card>
        <Card className="w-full">
          <img
            alt="AI Prompting"
            className="w-full h-48 object-cover"
            height="200"
            src="/placeholder.svg"
            style={{
              aspectRatio: "300/200",
              objectFit: "cover",
            }}
            width="300"
          />
          <CardContent>
            <h3 className="text-lg font-semibold">A guide to prompting AI (for what it is worth)</h3>
            <p className="text-sm text-gray-600">ONEUSEFULTHING.ORG</p>
            <p className="text-sm">Summary is still generating. Try refreshing the page in a few seconds.</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="ghost">Read More</Button>
          </CardFooter>
        </Card>
        <Card className="w-full">
          <img
            alt="Unlocking Creativity"
            className="w-full h-48 object-cover"
            height="200"
            src="/placeholder.svg"
            style={{
              aspectRatio: "300/200",
              objectFit: "cover",
            }}
            width="300"
          />
          <CardContent>
            <h3 className="text-lg font-semibold">Pixel Perfect: How AI Unlocks Creativity</h3>
            <p className="text-sm text-gray-600">DIGITALNATIVE.TECH</p>
            <p className="text-sm">Summary is still generating. Try refreshing the page in a few seconds.</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="ghost">Read More</Button>
          </CardFooter>
        </Card>
        <Card className="w-full">
          <img
            alt="Tolerance for Fiction"
            className="w-full h-48 object-cover"
            height="200"
            src="/placeholder.svg"
            style={{
              aspectRatio: "300/200",
              objectFit: "cover",
            }}
            width="300"
          />
          <CardContent>
            <h3 className="text-lg font-semibold">
              Our Declining Tolerance for Fiction & Wild Concepts Likely To Become
            </h3>
            <p className="text-sm text-gray-600">ARXIV.ORG</p>
            <p className="text-sm">Summary is still generating. Try refreshing the page in a few seconds.</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="ghost">Read More</Button>
          </CardFooter>
        </Card>
        <Card className="w-full">
          <img
            alt="Graph of Thoughts"
            className="w-full h-48 object-cover"
            height="200"
            src="/placeholder.svg"
            style={{
              aspectRatio: "300/200",
              objectFit: "cover",
            }}
            width="300"
          />
          <CardContent>
            <h3 className="text-lg font-semibold">
              Graph of Thoughts: Solving Elaborate Problems with Large Language Models
            </h3>
            <p className="text-sm text-gray-600">ARXIV.ORG</p>
            <p className="text-sm">Summary is still generating. Try refreshing the page in a few seconds.</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="ghost">Read More</Button>
          </CardFooter>
        </Card>
        <Card className="w-full">
          <img
            alt="Lacking creativity"
            className="w-full h-48 object-cover"
            height="200"
            src="/placeholder.svg"
            style={{
              aspectRatio: "300/200",
              objectFit: "cover",
            }}
            width="300"
          />
          <CardContent>
            <h3 className="text-lg font-semibold">You're not lacking creativity, you're overwhelmed</h3>
            <p className="text-sm text-gray-600">ARXIV.ORG</p>
            <p className="text-sm">Summary is still generating. Try refreshing the page in a few seconds.</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="ghost">Read More</Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}


function FlagIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  )
}
