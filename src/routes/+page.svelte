<script>
 export let data;
 let showCode = false;

 const log = console.log;

 function toggleCode() {
  showCode = !showCode;
  log(`Showing code of conduct? ${showCode}`)

 }
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
            href="https://discord.gg/MMMsdpJCGK"
          >
            Discord 
          </a>
        </li>
        <li class="py-2 lg:py-0">
          <a rel="me" class="text-white hover:pb-4 hover:border-b-4 hover:border-white" href="https://discuss.systems/@techsauna">
            Mastodon
          </a>

        </li>
        <li class="py-2 lg:py-0">
          <a
            class="text-white hover:pb-4 hover:border-b-4 hover:border-white"
            href="https://lemmy.world/c/munichtechsauna"
          >
            Lemmy
          </a>
        </li>
        <li class="py-2 lg:py-0">
          <a
            class="text-white hover:pb-4 hover:border-b-4 hover:border-white"
            href="https://matrix.to/#/#techsauna:pramari.de"
          >
            Matrix
          </a>
        </li>
        <li class="py-2 lg:py-0">
          <a
            class="text-white hover:pb-4 hover:border-b-4 hover:border-white"
            href="https://www.reddit.com/r/munichtechsauna/"
          >
            Reddit
          </a>
        </li>
        <li class="py-2 lg:py-0">
          <a
            class="text-white hover:pb-4 hover:border-b-4 hover:border-white"
            href="https://buttondown.email/techsauna"
          >
            Newsletter
          </a>
        </li>
        <li class="py-2 lg:py-0">
          <a
            class="text-white hover:pb-4 hover:border-b-4 hover:border-white"
            on:click="{toggleCode}"
            href="#"
          >
            Code of Conduct
          </a>
        </li>
      </ul>
    </nav>
  </div>
</nav>

<div
  class="{(showCode)? '' : 'hidden'} bg-gradient-to-r from-slate-200 to-slate-400 lg:px-16 px-6 shadow-md grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3 py-4 py-2"
>
  <div class="text-black p-2">
    <h1 class="font-black text-xl my-2">Code of Conduct</h1>
    <p>All participants of Munich Tech Sauna are expected to abide by our Code of Conduct, both online and during in-person events that are hosted and/or associated with Munich Tech Sauna.</p>
    <p class="mt-2">Munich Tech Sauna meetups are not co-organized with the public saunas that we go to.  For enforcement of this Code of Conduct, we only have official authority of the online spaces (Discord, Reddit, Lemmy, etc.) we are using for communication and the activities we organise. With everything else, we will try to work on enforcement with the sauna staff and local authorities. The saunas we go to are spaces used by non-participants as well, please don’t assume that everyone has read or will follow this Code of Conduct. This Code of Conduct applies to our meetups, activities, and to all digital spaces that are related to Munich Tech Sauna, such as GitHub, Discord, Matrix, Reddit and Mastodon.</p>

    <h1 class="font-black text-xl my-2">Attribution</h1>
    <p>This Code of Conduct is adapted from <a href="https://dev.to/code-of-conduct">dev.to</a>. We also got inspired and adapted a lot from <a href="https://codefreeze.fi/">codefreeze.fi</a> and <a href="https://www.socrates-conference.de">SoCraTes</a>. Thx all!</p>
  </div>

  <div class="text-black p-2">
    <h1 class="font-black text-xl my-2">Why we have a Code of Conduct</h1>
    <p>Our goal is to organize casual gatherings where everyone can engage in learning, teaching, sharing, networking, and enjoying themselves. Achieving this requires inclusivity for all participants and the establishment of a welcoming and secure environment. We appreciate open discussions and even disagreements, acknowledging that they may become intense. To maintain a positive atmosphere, we have established rules and set clear boundaries, outlined in this Code of Conduct.</p>
    <h1 class="font-black text-xl my-2">General (German) Sauna Rules</h1>
    <ul class="list-disc">
      <li><span class="font-bold">No sweat on  wood</span> Bring a large towel and if you like to cover your body bring a second towel so your feet do not touch the bench.</li>
      <li><span class="font-bold">Respect quiet infusions</span> During the infusions, it's advised to stay calm and refrain from conversations. You can talk again once we exit the sauna and hang out in the community areas. </li>
      <li><span class="font-bold">No gadgets</span>  The sauna rules in many places prohibit the use of electronic devices with cameras - let's respect this for the privacy of all of us.</li>
    </ul>
  </div>

  <div class="text-black p-2">
    <h1 class="font-black text-xl my-2">The pledge</h1>
    <p>In the interest of fostering an open and welcoming environment, we pledge to make participation in our meetups, activities and our community a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.</p>
    <h1 class="font-black text-xl my-2">A Safe Environment</h1>
    <p class="font-bold">Examples of behaviour that contributes to creating a positive & safe environment include:</p>
    <ul class="list-disc">
      <li> Using welcoming and <span class="font-bold">inclusive language</span></li>
      <li> Being <span class="font-bold">respectful</span> of differing viewpoints and experiences</li>
      <li>Gracefully accepting <span class="font-bold">constructive criticism</span></li>
      <li>Referring to people by their <span class="font-bold">preferred pronouns</span> and using gender-neutral pronouns when uncertain</li>
      <li><span class="font-bold">Admit when you do not know something.</span>  Encourage others to admit when they do not know something—and never joke about it. We are all here to learn.</li>
      <li><span class="font-bold">Be careful with jokes.</span> We do not tolerate any CoC violations, even if “it was just a joke”.</li>
    </ul>
      <p class="my-2 font-bold">Examples of unacceptable behaviour by participants include:</p>
    <ul class="list-disc"> 
      <li>Trolling, insulting/derogatory comments, public or private harassment</li>
      <li>Publishing others' private information, such as a physical or electronic address, without explicit permission</li>
      <li>Not being respectful to reasonable communication boundaries, such as 'please leave me alone,' 'please go away,' or 'I'm sorry, I’m not discussing this with you.'</li>
      <li>The usage of sexualised language or imagery and unwelcome sexual attention or advances</li>
      <li>Swearing, usage of strong or disturbing language</li>
      <li>Demonstrating the graphics or any other content you know may be considered disturbing</li>
      <li>Starting and/or participating in arguments related to politics</li>
      <li>Assuming or promoting any kind of inequality including but not limited to: age, body size, disability, ethnicity, gender identity and expression, nationality and race, personal appearance, religion, or sexual identity and orientation</li>
      <li>Drug promotion of any kind</li>
      <li>Attacking personal tastes</li>
      <li>Other conduct which you know could reasonably be considered inappropriate in a professional setting.</li>
    </ul>
    
  </div>

  <div class="text-black p-2">
    <h1 class="font-black text-xl my-2">Enforcement & Violations</h1>
    <p>If you think someone has violated our code of conduct—even if you were not directly involved, like you just overheard a conversation—please:</p>
    <ul class="list-disc my-2">
    <li>Let the person know that what they did is not appropriate and ask them to stop.</li>
    <li>Contact the organisers of Munich Tech Sauna (See contact details below).</li>
    </ul>
    <p class="my-2">But please give people the benefit of doubt. If there is even a slight chance that this was a misunderstanding (e.g. the person did not speak in their native language, and did not find the right words), try to sort it out in a friendly, constructive way.</p>
    
    <p class="my-2">Violations of the Code of Conduct may be reported by sending an email to <a class="text-blue-800 hover:bg-blue-200" href="#">TBD (she/her)</a> and/or <a class="text-blue-800 hover:bg-blue-200" href="mailto:5ozek04u@duck.com">Sven Haiges (he/him)</a>. All reports will be reviewed and investigated. We will hear both sides and then take action we deem appropriate such as:</p>
    <ul class="list-disc">
    <li>Give a warning</li>
    <li>Have a longer talk about our values</li>
    <li>Exclude the perpetrator from the current and/or future meetups</li>
    <li>Remove / block the perpetrator from our online communities</li>
    <li>Call the authorities</li>
  </ul>
    
    <p>We hold the right and responsibility to remove comments or other contributions that are not aligned to this Code of Conduct, or to ban temporarily or permanently any members for other behaviours that they deem inappropriate, threatening, offensive, or harmful.</p>
    
  </div>
  
</div>

<div class="bg-gradient-to-r from-orange-500 to-pink-500 lg:px-16 px-6 shadow-md py-4 pb-6">
  <div class="lg:text-6xl md:text-5xl text-2xl text-white">
    <img class="lg:float-right md:float-right sm:float-right lg:h-56d md:h-48 sm:h-28" src="./techsauna.png" />
    <div class="">Our next meetup is on <span class="font-bold">{data.events[0].date}</span> at <span class="font-bold"> {data.events[0].time}</span>.
    We meet at {data.events[0].location}.</div>
  </div>
</div>

<div class="bg-gradient-to-r to-blue-500 from-cyan-500 lg:px-16 px-6 shadow-md py-2">
  <h4 class="text-3xl font-semibold text-blueGray-700">Next up for Munich Tech Sauna</h4>
  <div class="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-3">
    <div class="mt-2 text-sm">
      All upcoming meetups for the next year can be seen below, it's based on a <a class="text-white" href="https://calendar.google.com/calendar/embed?src=2274266366b1c3f4a2baf9b3a3fc4ca3f2224909ca49e61456a18a4043cafd76%40group.calendar.google.com&ctz=Europe%2FBerlin">public calendar</a> and you can also 
      get it in <a class="text-white" href="https://calendar.google.com/calendar/ical/2274266366b1c3f4a2baf9b3a3fc4ca3f2224909ca49e61456a18a4043cafd76%40group.calendar.google.com/public/basic.ics">ical format</a>.
      If you are new to our meetup, be sure to arrive on time to meet up in the entrance area where the tickets are bought.
    </div>
    <div class="mt-2 text-sm">
      We typically meet monthly and around Munich, but sometimes we go to special saunas that are a bit further
      out. If you join us, you will get to know the top sauna places in and around Munich!
    </div>
  
  </div>
  <div class="mt-2 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3">
    {#each data.events as event}
    <div class="text-sm p-2 border-2 border-blue-300 rounded-md hover:bg-white">
      <span class="font-bold">{event.date} at {event.time}</span> at 
      {event.location}
    </div>
    {/each}
  </div>
</div>

<div class="bg-gradient-to-r to-cyan-500 from-blue-500 lg:px-16 px-6 shadow-md py-4 py-2">
  <h4 class="text-3xl font-semibold text-blueGray-700">Collect POAPs at each of our meetups!</h4>
  <div class="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-3">
  <div class="mt-2 text-sm">
    If you want, you can 
    preserve our amazing experiences with the help of the blockchain. 
    At each meetup, you will 
    receive a claim link which allows you to mint a special digital collectible for free.
    To start collecting, we recommend to install 
    <a class="text-white" href="https://www.coinbase.com/wallet">Coinbase Wallet</a>, but any Ethereum-based account 
    will of course work.
    
  </div>
  <div class="mt-2 text-sm">
    
    Next, simply come to the next event to start collecting. 

    You will receive a claim link which enables 
    you to collect the <a class="text-white" href="https://poap.xyz/">POAP</a> after our sauna session.
    Click on one of the <a class="text-white" href="https://poap.xyz/">POAPs</a> below to see the past meetup collectibles and 
    all collectors as recorded on the blockchain. 
  </div>

</div>
  <div class="mt-4 grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-3 justify-items-center">
    {#each data.poaps as poap}
    <div class="text-sm p-2">
      <a href="https://poap.gallery/event/{poap.event.id}" target="_blank">
        <img class="w-36 rounded-md shadow-md hover:border-2 border-white" src="{poap.event.image_url}?size=small" />
      </a>
    </div>
    {/each}
  </div>
</div>

<div
  class="bg-gradient-to-r from-orange-500 to-pink-500 lg:px-16 px-6 shadow-md grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3 py-4 py-2"
>
  <div class="text-white p-2">
    <img class="rounded-md" src="./community.jpeg"/>
    <p class="text-xs text-center pb-4">Image by <a href="https://pixabay.com/users/henning_w-327613/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=386673">Henning Westerkamp</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=386673">Pixabay</a></p>
    The Munich Tech Sauna community is a unique gathering of tech enthusiasts in the beautiful city of Munich, Germany. We come together to unwind and connect, sharing the joy of saunas and great conversations. Our community values a tech-free environment, leaving gadgets and devices at the door, allowing us to focus on what truly matters: human connections.
  </div>

  <div class="text-white p-2">
    <img class="rounded-md" src="./diverse.jpeg"/>
    <p class="text-xs text-center pb-4">Image by Sven Haiges</p>
    With a warm and inviting atmosphere, we welcome great people from all corners of the tech world who share our passion for relaxation and camaraderie. Our gatherings are characterized by an uplifting mood, where you can leave the stresses of the workday behind and immerse yourself in the soothing ambiance of the sauna.
  </div>

  <div class="text-white p-2">
    <img class="rounded-md" src="./beer.jpeg"/>
    <p class="text-xs text-center  pb-4">Image by Sven Haiges</p>
    After a rejuvenating sauna session, we often come together for a well-deserved afterwork beer and chill. It's the perfect time to continue those meaningful discussions or simply relax in good company. We also explore various sauna infusions, enhancing the health benefits of the experience and deepening our appreciation for holistic wellness.
  </div>

  <div class="text-white p-2">
    <img class="rounded-md" src="./sauna.jpeg"/>
    <p class="text-xs text-center pb-4">Image by <a href="https://pixabay.com/users/estoniansaunas-8802688/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3350235">EstonianSaunas</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3350235">Pixabay</a></p>
    Join the "Munich Tech Sauna" community to escape the digital hustle, meet like-minded individuals, and nurture your well-being in a friendly and communal setting. It's a place where tech and relaxation come together in harmony.

  </div>
  
</div>

<footer class="bg-blueGray-200 pt-8 pb-6 lg:px-16 px-6">
 
        <div class="text-xs text-center text-blueGray-500 py-1"> 
          <b>Data according to § 5 TMG / Angaben gemäß § 5 TMG</b>: Sven Haiges, Buchenstr. 24, 82178 Puchheim, Germany  
          <b>Contact/Kontakt</b>: Phone/Telefon: +49 (0) 176-55786080, E-Mail: 1a10pes6@duck.com
          <b>Responsible for the content/Redaktionell verantwortlich</b>: Sven Haiges | Source/Quelle: e-recht24.de
        </div>
</footer>

<style>
  #menu-toggle:checked + #menu {
    display: block;
  }
</style>


