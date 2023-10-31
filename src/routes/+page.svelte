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
            class="text-white hover:pb-4 hover:border-b-4 hover:border-rose-600"
            href="#"
          >
            Discord
          </a>
        </li>
        <li class="py-2 lg:py-0">
          <a
            class="text-white hover:pb-4 hover:border-b-4 hover:border-rose-600"
            href="#"
          >
            Mastodon
          </a>
        </li>
        <li class="py-2 lg:py-0">
          <a
            class="text-white hover:pb-4 hover:border-b-4 hover:border-rose-600"
            href="#"
          >
            Lemmy
          </a>
        </li>
        <li class="py-2 lg:py-0">
          <a
            class="text-white hover:pb-4 hover:border-b-4 hover:border-rose-600"
            href="#"
          >
            Matrix
          </a>
        </li>
        <li class="py-2 lg:py-0">
          <a
            class="text-white hover:pb-4 hover:border-b-4 hover:border-rose-600"
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
    Our next meetup is on Nov 16. We meet at 17:30 at the entrance of the
    Dantebad sauna.
  </div>
  <div class="text-black border-2 border-rose-600">
    <img class="width-full" src="./techsauna.png" />
  </div>
</div>

<div
  class="bg-gradient-to-r to-blue-500 from-cyan-500 lg:px-16 px-6 shadow-md grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3 py-4 py-2"
>
  <div class="text-white border-2 border-rose-600 p-2">
    The Munich Tech Sauna community is a unique gathering of tech enthusiasts in the beautiful city of Munich, Germany. We come together to unwind and connect, sharing the joy of saunas and great conversations. Our community values a tech-free environment, leaving gadgets and devices at the door, allowing us to focus on what truly matters: human connections.
  </div>

  <div class="text-white border-2 border-rose-600 p-2">
    With a warm and inviting atmosphere, we welcome great people from all corners of the tech world who share our passion for relaxation and camaraderie. Our gatherings are characterized by an uplifting mood, where you can leave the stresses of the workday behind and immerse yourself in the soothing ambiance of the sauna.
  </div>

  <div class="text-white border-2 border-rose-600 p-2">
    After a rejuvenating sauna session, we often come together for a well-deserved afterwork beer and chill. It's the perfect time to continue those meaningful discussions or simply relax in good company. We also explore various sauna infusions, enhancing the health benefits of the experience and deepening our appreciation for holistic wellness.
  </div>

  <div class="text-white border-2 border-rose-600 p-2">
    Join the "Munich Tech Sauna" community to escape the digital hustle, meet like-minded individuals, and nurture your well-being in a friendly and communal setting. It's a place where tech and relaxation come together in harmony.

  </div>
  
</div>

<style>
  #menu-toggle:checked + #menu {
    display: block;
  }
</style>
