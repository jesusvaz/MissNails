import Image from 'next/image'
import foto from '../../public/wraps.jpeg'

export default function wraps() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image
          className="rounded-lg"
          src={foto}
          alt="Polish"
          width={400}
          height={400}
          priority
        />
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        Indulge in the epitome of nail refinement and durability with our Wraps (Overlays) service. Wraps offer a fusion of style and strength, ensuring your nails are not only visually striking but also protected from daily wear and tear. Our skilled technicians are adept at applying wraps with precision, resulting in a seamlessly smooth surface that perfectly complements your natural nails. Wraps act as a shield, enhancing the resilience of your nails while maintaining a polished appearance. We prioritize the health and well-being of your natural nails, using high-quality wrap materials that offer both robustness and flexibility. Our Wraps service isn't solely about aesthetics; it's about embracing practicality without compromising on elegance. Select from an array of designs, from minimalist chic to intricate patterns, and experience nails that not only exude charm but also stand up to the demands of your lifestyle. Whether you're gearing up for a special occasion or simply seeking long-lasting refinement, our Wraps (Overlays) service offers a diverse spectrum of options to cater to your preferences. Step into our realm of nail protection and beauty, and leave with nails that effortlessly blend style with durability. Elevate your nail experience with our Wraps service – because you deserve nails that are as resilient as they are stunning.
      </div>
    </main>
  )
}
