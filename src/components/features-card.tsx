import Image from "next/image";

interface ProductFeatureCardProps {
  title: string;
  description: string;
  imageUrl: string;
  reverse?: boolean;
}

export function ProductFeatureCard({
  title,
  description,
  imageUrl,
  reverse = false,
}: ProductFeatureCardProps) {
  return (
    <div
      className={`flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8 p-6 ${
        reverse ? "md:ml-auto" : ""
      }`}
    >
      {!reverse && (
        <div className="w-full md:w-1/2">
          <Image
            src={imageUrl}
            alt={title}
            width={400}
            height={300}
            className="object-cover rounded-lg"
          />
        </div>
      )}
      <div className="w-full md:w-1/2">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-700 mt-4">{description}</p>
      </div>
      {reverse && (
        <div className="w-full md:w-1/2">
          <Image
            src={imageUrl}
            alt={title}
            width={400}
            height={300}
            className="object-cover rounded-lg"
          />
        </div>
      )}
    </div>
  );
}
