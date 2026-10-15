import Image from "next/image";

// Normal document flow only: nothing is ever positioned over the image.
export default function ProductImage({ image, priority = false }) {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-xl bg-white">
      <Image src={image.src} alt={image.alt} width={image.width} height={image.height} priority={priority} sizes="(min-width: 1024px) 480px, (min-width: 640px) 45vw, 90vw" className="h-full w-full object-contain" />
    </div>
  );
}
