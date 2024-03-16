import Image from "next/image"
import foto from "../../public/naill-repair.jpeg"

export default function page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
         <Image
          className="rounded-lg"
          src={foto}
          alt="QPI Logo"
          width={400}
          height={400}
          priority
        />
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        Rediscover flawless and resilient nails with our transformative Nail Repair service. We understand that nails can sometimes be fragile, prone to chips, cracks, and breaks. That's where our expert technicians come to the rescue. Our Nail Repair service isn't just a quick fix – it's a meticulous process that restores your nails to their former glory. Our skilled professionals carefully assess the damage and employ precision techniques to mend and strengthen your nails. We utilize top-quality products that not only repair but also nourish your nails, promoting their overall health. Whether you're dealing with a minor chip or a more significant break, we have the expertise to craft a customized solution that suits your needs. Your comfort and safety are our priorities, and we maintain strict hygiene standards throughout the process. Say goodbye to uneven or damaged nails and embrace a renewed sense of confidence. Our Nail Repair service doesn't just mend nails; it restores your sense of self-assurance. Step into our haven of restoration and leave with nails that not only look impeccable but are fortified for whatever life brings your way. Because your nails deserve nothing short of expert care and attention.
      </div>
    </main>
  )
}
