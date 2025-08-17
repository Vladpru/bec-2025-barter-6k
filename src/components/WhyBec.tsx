import Image from "next/image"

const WhyBec = () => {

  const majors = [
    'Обчислювальна техніка',
    'Електроніка',
    'Інженерія програмного забезпечення',
    'Кібербезпека',
    'Системна інженерія',
    'Архітектура і містобудування',
    'Телекомунікації та радіотехніка',
    'Промислове та цивільне будівництво',
    'Інші'
  ]

  return (
    <section className="mt-5 540px:mt-30">
      <div className="container">
        <h1 className="font-black text-center text-2xl mb-10 700px:mb-15 700px:text-5xl uppercase text-bec">ЧОМУ ВАМ ВАРТО ПІДТРИМАТИ BEC</h1>
        <div className="flex justify-center items-center 1070px:gap-40 gap-6 relative 1070px:flex-row flex-col">
          <Image
            src="/images/whybec/divider-vertical.svg"
            width={100}
            height={50}
            className="4xl:w-[120px] hidden 1070px:block"
            alt="divider"
          />
          <div className="flex flex-col gap-6 relative">
            <div className="bg-[#645E58] p-3 4xl:p-5 max-w-[270px] 540px:max-w-[300px] 700px:max-w-[500px] 1070px:max-w-[350px] 1160px:max-w-[450px] h-[180px] flex flex-col justify-center 4xl:max-w-[530px] 4xl:h-[260px]">
              <h2 className="font-bold text-lg 700px:text-xl leading-snug 1160px:text-xl 4xl:text-3xl uppercase">Підвищіть впізнаваність Вашої компанії</h2>
              <hr className="border-t-2 border-becwhite my-3 4xl:border-t-3"/>
              <p className="text-[12px] 700px:text-[14px] 1340px:text-base leading-relaxed 4xl:text-xl">Таким чином про Вашу продукцію дізнається більша кількість потенційних клієнтів.</p>
            </div>
            <div className="bg-[#645E58] p-3 4xl:p-5 max-w-[270px] 540px:max-w-[300px] 700px:max-w-[500px] 1070px:max-w-[350px] 1160px:max-w-[450px] h-[180px] flex flex-col justify-center 4xl:max-w-[530px] 4xl:h-[260px]">
              <h2 className="font-bold text-lg 700px:text-xl leading-snug 1160px:text-xl 4xl:text-3xl">ОТРИМАЙТЕ ЕФЕКТИВНИЙ ПІАР</h2>
              <hr className="border-t-2 border-becwhite my-3 4xl:border-t-3"/>
              <p className="text-[12px] 700px:text-[14px] 1340px:text-base leading-relaxed 4xl:text-xl">Просування через наші соцмережі – це спосіб заявити про свій бренд й виділитися серед інших.</p>
            </div>
            <div className="bg-[#645E58] p-3 4xl:p-5 max-w-[270px] 540px:max-w-[300px] 700px:max-w-[500px] 1070px:max-w-[350px] 1160px:max-w-[450px] h-[200px] flex flex-col justify-center 4xl:max-w-[530px] 4xl:h-[260px]">
              <h2 className="font-bold text-lg 700px:text-xl leading-snug 1160px:text-xl 4xl:text-3xl uppercase">Підтвердіть свою соціальну відповідальність</h2>
              <hr className="border-t-2 border-becwhite my-3 4xl:border-t-3"/>
              <p className="text-[12px] 700px:text-[14px] 1340px:text-base leading-relaxed 4xl:text-xl">Підтримка технічної освіти й молоді – це потужний сигнал про активну позицію бізнесу.</p>
            </div>
          </div>
          <Image
            src="/images/whybec/divider-vertical.svg"
            width={100}
            height={50}
            alt="divider"
            className="none lg:block 4xl:w-[120px] hidden 1070px:block"
          />
          <Image
            src="/images/elipses/why_left.png"
            width={450}
            height={50}
            alt="divider"
            className="none lg:block absolute top-0 -left-25 1440px:-left-20 -z-1"
          />
          <Image
            src="/images/elipses/why_right.png"
            width={500}
            height={50}
            alt="divider"
            className="none lg:block absolute -bottom-22 -right-26 1440px:-right-20 -z-1"
          />
        </div>
      </div>
      <div className="container pt-13 700px:pt-30">
        <div className="relative">
          <Image
            src="/images/whybec/right-el.svg" 
            alt="Decorative line 1"
            width={160}
            height={70}
            className="opacity-0 lg:opacity-100 absolute top-40 -right-22 1340px:-right-25 1440px:-right-15 -z-1"
          />
        </div>
        <div className="relative">
          <Image
            src="/images/whybec/left.svg" 
            alt="Decorative line 1"
            width={210}
            height={70}
            className="opacity-0 lg:opacity-100 absolute top-22 w-[190px] 660px:w-[210px] 660px:top-24 -left-21 1340px:-left-25 1440px:-left-15 -z-1"
          />
        </div>

        <h1 className="font-black text-center text-2xl 700px:text-5xl uppercase text-bec">Портрет учасника</h1>

        <div className="flex flex-col-reverse 490px:flex-col 940px:flex-row justify-center items-center gap-5 490px:gap-15 1070px:gap-30 1340px:gap-40 mx-auto 4xl:bg-[length:85%] 1140px:bg-[lenght:80%] 1440px:bg-[length:100%] py-18 700px:py-30 px-25 940px:py-42 940px:px-35 max-h-[1000px]
          bg-[url('/images/whybec/bg-portrait-vert.png')]
          940px:bg-[url('/images/whybec/bg-portrait.png')]
          bg-no-repeat
          bg-center
          bg-[length:115%]
          390px:bg-[length:110%]
          410px:bg-[length:115%]
          490px:bg-[length:105%]
          540px:bg-[length:95%]
          620px:bg-[length:83%]
          780px:bg-[length:70%]
          940px:bg-[length:100%]">
          <div className="flex flex-col-reverse 490px:flex-col items-start gap-3 490px:gap-7 1340px:gap-10">
            <h1 className="uppercase font-black text-lg 490px:text-xl 1340px:text-2xl 4xl:text-3xl 940px:hidden text-center">Студенти Віком 17-21 рік</h1>
            <Image 
              src="/images/whybec/portrait.png"
              alt="participant"
              width={400}
              height={70}
              className="4xl:w-[440px] 1440px:w-[400px] w-[300px]"
            />
            <h1 className="uppercase font-black text-xl 1340px:text-2xl 4xl:text-3xl hidden 940px:block">Студенти Віком 17-21 рік</h1>
          </div>
          <div className="flex flex-col">
            <h1 className="uppercase font-black text-base 490px:text-lg 1160px:text-xl 1340px:text-2xl 4xl:text-3xl 4xl:mb-4 ">Спеціальності учасників:</h1>
            <ul className="space-y-1 1160px:space-y-2 md:text-base">
            {majors.map((item, i) => (
              <li key={i} className="flex items-start gap-1 1160px:gap-2 text-[12px] 490px:text-sm 1340px:text-base 4xl:text-xl">
                <span>→</span> <span>{item}</span>
              </li>
            ))}
          </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyBec