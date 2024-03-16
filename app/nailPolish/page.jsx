import Image from "next/image"
import foto from "../../public/polish.jpeg"

export default function polish() {
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
        Elevate your nail game with our exceptional Nail Polish Application service. Beyond just adding color, we transform your nails into stunning canvases of self-expression. Our skilled nail technicians are masters of precision, ensuring that every stroke of color is flawlessly applied, resulting in a professional finish that captivates. But our service isn't just about aesthetics – it's a dedication to quality. We exclusively feature a wide spectrum of premium nail polish brands, known for their vibrant pigments and long-lasting wear. Whether you're in the mood for a timeless classic, a bold statement shade, or the latest trendy hues, our extensive collection has something to suit every mood and occasion. Your comfort is paramount to us, and we take meticulous care to provide a clean and relaxing environment. So, whether you're preparing for a special event or simply treating yourself to a touch of luxury, our Nail Polish Application service promises not only impeccable nails but also an experience that redefines self-care. Step into our world of colors and creativity, and let your nails tell your unique story – because you deserve nothing less than the best for your fingertips.
      </div>
    </main>
  )
}
