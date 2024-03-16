import Image from 'next/image'
import foto from '../../public/man-ped.jpeg'

export default function manped() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <Image
          className="rounded-lg"
          src={foto}
          alt="Manicure/Pedicure"
          width={400}
          height={400}
          priority
        />
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        Embark on a comprehensive journey of self-care and elegance with our luxurious Manicure & Pedicure Packages services. We've curated these packages to offer you the ultimate pampering experience, seamlessly combining the benefits of both services into one delightful session. Our skilled professionals will meticulously tend to every detail, from shaping and buffing your nails to rejuvenating your hands and feet with nourishing treatments. Experience the best of both worlds as you unwind with a soothing foot soak and a revitalizing hand massage. But that's just the beginning – our packages are thoughtfully designed to provide a holistic approach to relaxation. Enjoy the harmonious blend of beauty and wellness, where nail perfection meets rejuvenation for your skin and muscles. We take pride in using only top-tier products that ensure a lasting and radiant finish. Whether you're preparing for a special occasion or simply indulging in a well-deserved treat, our Manicure & Pedicure Packages offer a diverse range of options to suit your preferences. Step into our haven of serenity and emerge with hands and feet that radiate beauty and vitality. Elevate your self-care routine with our packages – because you deserve the epitome of pampering and rejuvenation.
      </div>
    </main>
  )
}
