import Image from "next/image";

export default function About() {
  return (
    <section className="grid grid-cols-2 justify-items-center px-10 mt-32">
      <div>
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={200} />
      </div>
      <div>
        <div className="text-3xl font-medium">About</div>
        <div className="p-2">
        <p className="leading-relaxed text-base text-light mb-2 text-gray-400">
          Yahaya Adoza Bello is a Nigerian politician and businessman, The
          fourth democratically elected Governor of Kogi State in 2016 and
          re-elected in Nov 2019.
        </p>
        <p className="leading-relaxed text-base text-light mb-2 text-gray-400">
          Yahaya Adoza Bello was born on June 18, 1975 in Okene LGA, Kogi State
          as the youngest of six children. He was born to Late Alhaji Bello
          Ipemida Ochi and Hajiya Hawawu Oziohu.
        </p>

        <p className="leading-relaxed text-base text-light mb-2 text-gray-400">
          In 1984, he attended the LGEA primary school, Agasa and in 1989 he
          proceeded to Agassa Community Secondary School, Anyava, Agassa-Okene
          and obtained his Junior Secondary School Certificate Examination
          (JSSCE) and Senior Secondary Certificate Examination (SSCE)
          certificates from Government Secondary School, Suleja-Niger State in
          1994.
        </p>
        </div>

       
        <div className="flex justify-center m-4">
        <button className="bg-sky-500 text-white p-2 rounded-md shadow-md  cursor-pointer">
          Read more
        </button>
        </div>
       
      </div>
    </section>
  );
}
