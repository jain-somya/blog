export default function Index() {
  return (
    <div className="bg-repeat-y bg-[url('/images/radiant-gradient.svg')] hover:bg-[url('/images/radiant-gradient1.svg')] bg-cover h-screen">
      <section className=" text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="h-44 w-44 rounded-full"
            alt="hero"
            src="/images/tree.jpg"
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-6xl text-3xl  m-4 font-medium text-white drop-shadow">
              Somya Jain
            </h1>
            <p className="mb-8 leading-relaxed">
              Meggings Microdosing synth tattooed vexillologistkinfolk echo park stumptown DIY, kale chips beard
              jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice
              godard disrupt ramps hexagon mustache umami snackwave tilde
              chillwave ugh. Pour-over meditation PBR&amp;B pickled ennui celiac
              mlkshk freegan photo booth af fingerstache pitchfork.
            </p>
           
          </div>
        </div>
      </section>
    </div>
  );
}
