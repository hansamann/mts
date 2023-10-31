<script>
 export let data;
</script>

<nav
  class="lg:px-16 px-6 bg-black shadow-md flex flex-wrap items-center lg:py-0 py-2"
>
  <div class="flex-1 flex justify-between items-center">
    <a href="/" class="flex text-lg font-semibold">
      <img
        src="./bucket.svg"
        width="50"
        height="50"
        class="p-2"
        alt="Munich Tech Sauna Bucket"
      />
      <div class="mt-3 text-white">Munich Tech Sauna</div>
    </a>
  </div>
  <label for="menu-toggle" class="cursor-pointer lg:hidden block">
    <svg
      class="fill-current text-white"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
    >
      <title>menu</title>
      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    </svg>
  </label>
  <input class="hidden" type="checkbox" id="menu-toggle" />
  <div class="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
    <nav>
      <ul
        class="text-xl text-right items-center gap-x-5 pt-4 md:gap-x-4 lg:text-lg lg:flex lg:pt-0"
      >
        <li class="py-2 lg:py-0">
          <a
            class="text-white hover:pb-4 hover:border-b-4 hover:border-white"
            href="#"
          >
            Discord 
          </a>
        </li>
        <li class="py-2 lg:py-0">
          <a
            class="text-white hover:pb-4 hover:border-b-4 hover:border-white"
            href="#"
          >
            Mastodon
          </a>
        </li>
        <li class="py-2 lg:py-0">
          <a
            class="text-white hover:pb-4 hover:border-b-4 hover:border-white"
            href="#"
          >
            Lemmy
          </a>
        </li>
        <li class="py-2 lg:py-0">
          <a
            class="text-white hover:pb-4 hover:border-b-4 hover:border-white"
            href="#"
          >
            Matrix
          </a>
        </li>
        <li class="py-2 lg:py-0">
          <a
            class="text-white hover:pb-4 hover:border-b-4 hover:border-white"
            href="#"
          >
            Reddit
          </a>
        </li>
      </ul>
    </nav>
  </div>
</nav>

<div
  class="bg-gradient-to-r from-orange-500 to-pink-500 lg:px-16 px-6 shadow-md grid lg:grid-cols-2 grid-cols-1 py-4 py-2"
>
  <div class="text-black border-2 border-rose-600">
    <p>Our next meetup is on {data.events[0].date} | {data.events[0].time} at {data.events[0].location}.
  </p>
  
  </div>
  <div class="text-black border-2 border-rose-600">
    <img class="width-full" src="./techsauna.png" />
  </div>
</div>

<div class="bg-gradient-to-r to-blue-500 from-cyan-500 lg:px-16 px-6 shadow-md py-4 py-2">
  <h4 class="text-3xl font-semibold text-blueGray-700">Next up for Munich Tech Sauna</h4>



<div class="mt-4 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3">
  {#each data.events as event}
  <div class="text-sm p-2 border-2 border-blue-300 rounded-md hover:bg-white">
    <span class="font-bold">{event.date} at {event.time}</span> at 
    {event.location}
  </div>

  {/each}

</div>
</div>

<div
  class="bg-gradient-to-r from-orange-500 to-pink-500 lg:px-16 px-6 shadow-md grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3 py-4 py-2"
>
  <div class="text-white border-2 border-rose-600 p-2">
    <img class="rounded-md" src="./community.jpeg"/>
    <p class="text-xs text-center pb-4">Image by <a href="https://pixabay.com/users/henning_w-327613/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=386673">Henning Westerkamp</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=386673">Pixabay</a></p>
    The Munich Tech Sauna community is a unique gathering of tech enthusiasts in the beautiful city of Munich, Germany. We come together to unwind and connect, sharing the joy of saunas and great conversations. Our community values a tech-free environment, leaving gadgets and devices at the door, allowing us to focus on what truly matters: human connections.
  </div>

  <div class="text-white border-2 border-rose-600 p-2">
    <img class="rounded-md" src="./diverse.jpeg"/>
    <p class="text-xs text-center pb-4">Image by <a href="https://pixabay.com/users/sergiovisor_ph-21747664/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=6297317">Sergio Carabajal</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=6297317">Pixabay</a></p>
    With a warm and inviting atmosphere, we welcome great people from all corners of the tech world who share our passion for relaxation and camaraderie. Our gatherings are characterized by an uplifting mood, where you can leave the stresses of the workday behind and immerse yourself in the soothing ambiance of the sauna.
  </div>

  <div class="text-white border-2 border-rose-600 p-2">
    <img class="rounded-md" src="./beer.jpeg"/>
    <p class="text-xs text-center  pb-4">Image by <a href="https://pixabay.com/users/schilderschool-3992139/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1903068">Sasja Bork</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1903068">Pixabay</a></p>
    After a rejuvenating sauna session, we often come together for a well-deserved afterwork beer and chill. It's the perfect time to continue those meaningful discussions or simply relax in good company. We also explore various sauna infusions, enhancing the health benefits of the experience and deepening our appreciation for holistic wellness.
  </div>

  <div class="text-white border-2 border-rose-600 p-2">
    <img class="rounded-md" src="./sauna.jpeg"/>
    <p class="text-xs text-center pb-4">Image by <a href="https://pixabay.com/users/estoniansaunas-8802688/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3350235">EstonianSaunas</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3350235">Pixabay</a></p>
    Join the "Munich Tech Sauna" community to escape the digital hustle, meet like-minded individuals, and nurture your well-being in a friendly and communal setting. It's a place where tech and relaxation come together in harmony.

  </div>
  
</div>

<footer class="relative bg-blueGray-200 pt-8 pb-6">
  <div class="container mx-auto px-4">
    <div class="flex flex-wrap text-left lg:text-left">
      <div class="w-full lg:w-6/12 px-4">
        <h4 class="text-3xl fonat-semibold text-blueGray-700">Join us today!</h4>
        <h5 class="text-lg mt-0 mb-2 text-blueGray-600">
          Use the community links below to check us out and say hi!
        </h5>
        <div class="mt-6 lg:mb-0 mb-6">
          <button class="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <i class="fab fa-twitter"></i></button><button class="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <i class="fab fa-facebook-square"></i></button><button class="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <i class="fab fa-dribbble"></i></button><button class="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <i class="fab fa-github"></i>
          </button>
        </div>
      </div>
      <div class="w-full lg:w-6/12 px-4">
        <div class="flex flex-wrap items-top mb-6">
          <div class="w-full lg:w-4/12 px-4 ml-auto">
            <span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
            <ul class="list-unstyled">
              <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com/presentation?ref=njs-profile">About Us</a>
              </li>
              <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://blog.creative-tim.com?ref=njs-profile">Blog</a>
              </li>
              <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.github.com/creativetimofficial?ref=njs-profile">Github</a>
              </li>
              <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile">Free Products</a>
              </li>
            </ul>
          </div>
          <div class="w-full lg:w-4/12 px-4">
            <span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Other Resources</span>
            <ul class="list-unstyled">
              <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile">MIT License</a>
              </li>
              <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/terms?ref=njs-profile">Terms &amp; Conditions</a>
              </li>
              <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/privacy?ref=njs-profile">Privacy Policy</a>
              </li>
              <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/contact-us?ref=njs-profile">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <hr class="my-6 border-blueGray-300">
    <div class="flex flex-wrap items-center md:justify-between justify-center">
      <div class="w-full px-4 mx-auto text-center">
        <div class="text-xs text-blueGray-500 py-1">
          Imprint/Impressum: 
          Data according to § 5 TMG / Angaben gemäß § 5 TMG: Sven Haiges, Buchenstr. 24, 82178 Puchheim, Germany  
          Contact/Kontakt: Phone/Telefon: +49 (0) 176-55786080, E-Mail: 1a10pes6@duck.com
          Responsible for the content/Redaktionell verantwortlich: Sven Haiges | Source/Quelle: e-recht24.de
        </div>
      </div>
    </div>
  </div>
</footer>

<style>
  #menu-toggle:checked + #menu {
    display: block;
  }
</style>
