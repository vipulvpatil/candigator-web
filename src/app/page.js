import Image from "next/image"

export default function Home() {
  return (
    <main className="w-full h-full text-black bg-gradient-to-b from-subtle to-white">
      <div className="w-hero flex container mx-auto">
        <Image
          src="/hero.jpg"
          alt="https://www.pexels.com/photo/photo-of-man-using-laptop-4047812/"
          width={457} height={538}
          style={{
            objectFit: "cover",
            overflow: "clip",
            height: "538px",
          }}
          className="max-w-none"
        ></Image>
        <div className="font-oswald text-right text-primary w-[583px] h-[538px]">
          <div>{"Convert any PDF resume into searchable candidate information"}</div>
          <div>{"Easily search through all your candidate data"}</div>
          <div>{"Manage upto 100 candidates using our basic plan"}</div>
          <div>{"Try it for free"}</div>
        </div>
      </div>
      <div className="w-hero flex container mx-auto">
        <div className="font-oswald text-right text-[56px] w-[457px] mt-relax text-white pr-2">
          {"Relax"}
        </div>
        <div className="font-oswald text-right text-[32px] w-[583px] mt-relaxSmall">
          {"as we help you find the right candidate in seconds"}
        </div>
      </div>
    </main>
  )
}
