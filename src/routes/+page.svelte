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
    <p class="mt-2">Munich Tech Sauna meetups are not co-organized with the public saunas that we go to.  For enforcement of this Code of Conduct, we only have official authority of the online spaces we are using for communication and the activities we organise. With everything else, we will try to work on enforcement with the sauna staff and local authorities. The saunas we go to are spaces used by non-participants as well, please don’t assume that everyone has read or will follow this Code of Conduct.</p>

    <h1 class="font-black text-xl my-2">Attribution</h1>
    <p>This Code of Conduct is adapted from <a href="https://dev.to/code-of-conduct">dev.to</a>. We also got inspired and adapted a lot from <a href="https://codefreeze.fi/">codefreeze.fi</a> and <a href="https://www.socrates-conference.de">SoCraTes</a>. Thx all!</p>
    <h1 class="font-black text-xl my-2">Why we have a Code of Conduct</h1>
    <p>Our goal is to organize casual gatherings where everyone can engage in learning, teaching, sharing, networking, and enjoying themselves. Achieving this requires inclusivity for all participants and the establishment of a welcoming and secure environment. We appreciate open discussions and even disagreements, acknowledging that they may become intense. To maintain a positive atmosphere, we have established rules and set clear boundaries, outlined in this Code of Conduct.</p>
  
  </div>

  <div class="text-black p-2">
    
    <h1 class="font-black text-xl my-2">General (German) Sauna Rules</h1>
    <ul class="list-disc">
      <li><span class="font-bold">No sweat on  wood</span> Bring a large towel and if you like to cover your body bring a second towel so your feet do not touch the bench.</li>
      <li><span class="font-bold">Respect quiet infusions</span> During the infusions, it's advised to stay calm and refrain from conversations. You can talk again once we exit the sauna and hang out in the community areas. </li>
      <li><span class="font-bold">No gadgets</span>  The sauna rules in many places prohibit the use of electronic devices with cameras - let's respect this for the privacy of all of us.</li>
    </ul>
    <h1 class="font-black text-xl my-2">The pledge</h1>
    <p>In the interest of fostering an open and welcoming environment, we pledge to make participation in our meetups, activities and our community a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.</p>
    <h1 class="font-black text-xl my-2">A Safe Environment</h1>
    <p >We aim to create a safe environment by:</p>
    <ul class="list-disc">
      <li>Using welcoming and <span class="font-bold">inclusive language</span></li>
      <li>Being <span class="font-bold">respectful</span> of differing viewpoints and experiences</li>
      <li>Gracefully accepting <span class="font-bold">constructive criticism</span></li>
      <li>Referring to people by their <span class="font-bold">preferred pronouns</span> and using gender-neutral pronouns when uncertain</li>
      <li><span class="font-bold">Admit when you do not know something.</span>  Encourage others to admit when they do not know something—and never joke about it. We are all here to learn.</li>
      <li><span class="font-bold">Be careful with jokes.</span> We do not tolerate any CoC violations, even if “it was just a joke”.</li>
    </ul>
  </div>

  <div class="text-black p-2">
      <p>Examples of <strong>unacceptable</strong> behaviour include:</p>
    <ul class="list-disc"> 
      <li>Trolling, insulting/derogatory comments, public or private harassment</li>
      <li>Publishing others' private information, such as a physical or electronic address, without explicit permission</li>
      <li>Not being respectful to reasonable communication boundaries, such as 'please leave me alone,' 'please go away,' or 'I'm sorry, I’m not discussing this with you.'</li>
      <li>The usage of sexualised language or imagery and unwelcome sexual attention or advances</li>
      <li>Swearing, usage of strong or disturbing language</li>
      <li>Demonstrating the graphics or any other content you know may be considered disturbing</li>
      <li> Initiating or endorsing political conversations that deviate from our inclusive or democratic principles.</li>
      <li>Assuming or promoting any kind of inequality including but not limited to: age, body size, disability, ethnicity, gender identity and expression, nationality and race, personal appearance, religion, or sexual identity and orientation</li>
      <li>Attacking personal tastes</li>
      <li>Other conduct which you know could reasonably be considered inappropriate in a professional setting.</li>
    </ul>
    
  </div>

  <div class="text-black p-2">
    <h1 class="font-black text-xl my-2">Enforcement & Violations</h1>
    <p>If you think someone has violated our code of conduct—even if you were not directly involved, like you just overheard a conversation—please:</p>
    <ul class="list-disc my-2">
    <li>Let the person know that what they did is not appropriate and ask them to stop.</li>
    <li>Contact the organiser of Munich Tech Sauna (see contact details below).</li>
    </ul>
    <p class="my-2">But please give people the benefit of doubt. If there is even a slight chance that this was a misunderstanding (e.g. the person did not speak in their native language, and did not find the right words), try to sort it out in a friendly, constructive way.</p>
    
    <p class="my-2">Violations of the Code of Conduct may be reported by sending an email to  the organiser <a class="text-blue-800 hover:bg-blue-200" href="mailto:5ozek04u@duck.com">Sven Haiges (he/him)</a> or our member <a class="text-blue-800 hover:bg-blue-200" href="mailto:lbauer@magenta.de">Lena Bauer (she/her)</a>. All reports will be reviewed and investigated. We will hear both sides and then take action we deem appropriate such as:</p>
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


<div class="bg-gradient-to-r from-pink-500 to-orange-500 lg:px-16 px-6 shadow-md py-4 py-2">
  <h4 class="text-3xl font-semibold text-blueGray-700">Our members</h4>
  <div class="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-3">
  <div class="mt-2 text-sm">
    Below you see some of our members that chose to be shown here on our website. We are a diverse group of people from all walks of life. 
    If you follow the social media links, you can get to know us even better and connect on other platforms. Keep in mind that only 
    a subset of our members chose to be listed below, so you will meet even more and often different people at our meetups.
    
  </div>
  <div class="mt-2 text-sm">
    If you want to add yourself, clone our <a href="https://github.com/hansamann/mts">github repo</a> and make changes to the `src/lib/members.ts` file - there are instructions in there 
    and it's pretty easy. Then create a pull request and we will merge it. If you have trouble with this, just send us the JSON for your 
    profile to 1a10pes6@duck.com and we will add it for you.
  </div>

</div>
  <div class="mt-4 grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-3 justify-items-center">
    {#each data.members as member}
    <div class="text-sm p-2">
      <a href="{member.linkedin}" target="_blank">
        <div class="flex justify-center"><img class="w-36 rounded-full shadow-md border-white" src="{member.img}" /></div>
        <div class="text-center mt-2 text-base">{member.name} ({member.pronouns})</div>
        <div class="text-center">
          {#if member.linkedin}
            <a href="{member.linkedin}" target="_blank"><svg class="inline h-6 hover:fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg></a>
          {/if}

          {#if member.github}
            <a href="{member.github}" target="_blank"><svg class="inline h-6 hover:fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg></a>
          {/if}

          {#if member.mastodon}
            <a href="{member.mastodon}" target="_blank"><svg class="inline h-6 hover:fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M433 179.1c0-97.2-63.7-125.7-63.7-125.7-62.5-28.7-228.6-28.4-290.5 0 0 0-63.7 28.5-63.7 125.7 0 115.7-6.6 259.4 105.6 289.1 40.5 10.7 75.3 13 103.3 11.4 50.8-2.8 79.3-18.1 79.3-18.1l-1.7-36.9s-36.3 11.4-77.1 10.1c-40.4-1.4-83-4.4-89.6-54a102.5 102.5 0 0 1 -.9-13.9c85.6 20.9 158.7 9.1 178.8 6.7 56.1-6.7 105-41.3 111.2-72.9 9.8-49.8 9-121.5 9-121.5zm-75.1 125.2h-46.6v-114.2c0-49.7-64-51.6-64 6.9v62.5h-46.3V197c0-58.5-64-56.6-64-6.9v114.2H90.2c0-122.1-5.2-147.9 18.4-175 25.9-28.9 79.8-30.8 103.8 6.1l11.6 19.5 11.6-19.5c24.1-37.1 78.1-34.8 103.8-6.1 23.7 27.3 18.4 53 18.4 175z"/></svg></a>
          {/if}


          {#if member.matrix}
            <a href="{member.matrix}" target="_blank"><span class="inline h-6 hover:text-white font-bold text-lg">[m]</span></a>
          {/if}

        </div>
      </a>
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


