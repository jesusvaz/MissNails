import Image from 'next/image'
import foto from '../../public/nail-treatments.jpeg'

export default function treatments() {
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
        Experience pure bliss and rejuvenation with our exquisite Hand and Foot Treatments service. We believe that your hands and feet deserve the utmost care and attention, as they tirelessly carry you through each day. Our specialized treatments go beyond the surface, offering a holistic approach to pampering. Our skilled therapists start with a gentle exfoliation, removing dull skin and revealing a renewed radiance. This is followed by a relaxing massage that relieves tension and invigorates tired muscles, leaving your hands and feet feeling light and refreshed. We use only premium, nourishing products that deeply hydrate and revitalize your skin, promoting a youthful glow. Our Hand and Foot Treatments are designed to enhance both your physical and mental well-being, providing a serene escape from the demands of daily life. From aromatherapy to paraffin dips, our wide array of options caters to your specific desires. Step into our haven of relaxation, where stress melts away and your hands and feet are treated to the luxury they truly deserve. Discover the epitome of self-care and emerge with hands and feet that not only look revitalized but feel genuinely rejuvenated. Because you deserve to indulge in moments of pure indulgence and renewal.
      </div>
    </main>

  )
}
