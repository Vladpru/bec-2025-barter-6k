import Image from "next/image"

const logos = [
  {src: "/images/sponsors/hamily.png", alt: "hamily", link: "https://www.hamily.group/"},
  {src: "/images/sponsors/openlab.png", alt: "openlab", link: "https://www.instagram.com/lviv.openlab/"},
  {src: "/images/sponsors/gorich.png", alt: "gorich", link: "https://www.instagram.com/lvivfilmcenter/"},
  
  {src: "/images/sponsors/delicia.png", alt: "delicia", link: "https://www.delicia.com.ua/"},
  {src: "/images/sponsors/kebab.png", alt: "kebab", link: "https://www.ilovekebab.com.ua/"},
  {src: "/images/sponsors/hator.png", alt: "hator", link: "https://hator.gg/ua/"},

  {src: "/images/sponsors/bestshot.png", alt: "best", link: "https://www.instagram.com/bestshot.energy/"},
  {src: "/images/sponsors/meleto.png", alt: "meleto", link: "https://www.instagram.com/meleto.juice/"},
]

const Sponsors = () => {
  return (
    <section className="container">
      <h2 className="text-center text-bec text-2xl 580px:text-3xl 700px:text-4xl font-extrabold mb-10 3xl:text-[42px] 4xl:text-5xl 4xl:mb-15 uppercase">
        Нас підтримали
      </h2>
      <div className="flex flex-col gap-8 justify-center items-center px-1">
        <div className="grid grid-cols-3 gap-5 600px:gap-30 max-w-[600px] justify-items-center w-full">
          {logos.slice(0, 3).map((logo, idx) => (
            <div key={idx} className="w-[140px] h-[50px] 600px:w-[180px] 970px:w-[220px] 600px:h-[70px] 970px:h-[100px] relative transition hover:scale-110 ease-in-out duration-200">
              <a href={logo.link} target="_blank">
                <Image src={logo.src} alt={logo.alt} fill className="object-contain" />
              </a>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-5 600px:gap-60 max-w-[600px] justify-items-center w-full">
          {logos.slice(3, 6).map((logo, idx) => (
            <div key={idx + 3} className="w-[140px] h-[50px] 600px:w-[180px] 970px:w-[220px] 600px:h-[70px] 970px:h-[100px] relative transition hover:scale-110 ease-in-out duration-200">
              <a href={logo.link} target="_blank">
                <Image src={logo.src} alt={logo.alt} fill className="object-contain" />
              </a>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-5 600px:gap-30 max-w-[400px] justify-items-center w-full">
          {logos.slice(6, 8).map((logo, idx) => (
            <div key={idx + 6} className="w-[140px] h-[50px] 600px:w-[180px] 970px:w-[220px] 600px:h-[70px] 970px:h-[100px] relative transition hover:scale-110 ease-in-out duration-200">
              <a href={logo.link} target="_blank">
                <Image src={logo.src} alt={logo.alt} fill className="object-contain" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Sponsors