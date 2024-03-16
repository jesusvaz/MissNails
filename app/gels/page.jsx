import Image from "next/image"
import foto from "../../public/gels.jpeg"

export default function gels() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image
          className="rounded-lg"
          src={foto}
          alt="Gels"
          width={400}
          height={400}
          priority
        />
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        Immerse yourself in the world of sleek sophistication and lasting radiance with our remarkable Gels service. Gels have revolutionized the way we experience nail enhancements, offering a fusion of elegance and resilience. Our adept nail technicians are adept at applying gel overlays that result in a flawlessly smooth and glossy finish, perfectly complementing your natural nails. The gel formula not only provides remarkable shine but also boasts impressive longevity, ensuring your nails stay stunning for weeks on end. We prioritize the health of your natural nails, using high-quality gel products that are both gentle and durable. Our Gels service isn't just about aesthetics; it's about embracing a lifestyle of convenience and glamour. Choose from an array of shades, from timeless neutrals to vibrant hues, and experience nails that seamlessly align with your personal style. Whether you're preparing for a grand event or simply want everyday elegance, our Gels service offers a versatile range of options to cater to your preferences. Step into our realm of opulence and beauty, and emerge with nails that captivate with their brilliance and charm. Elevate your nail experience with our Gels service – because you deserve nothing but the epitome of lasting, breathtaking glamour.
    </div>
    </main>
  )
}
