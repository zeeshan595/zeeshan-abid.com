import Image from '../components/image';
import Link from '../components/link';
import Section from '../components/section';

export default function () {
  return (
    <>
      <div className="text-6xl text-neutral-800">Zeeshan Abid</div>

      <div className="flex-row gap-4">
        <div className="min-h-20 min-w-20 w-20 h-20 rounded-full bg-center bg-cover profile-pic"></div>
        <div className="flex-wrap">
          I'm a full stack developer with more than eight years of experience. I
          mostly work in the TypeScript and Node ecosystem, building clean and
          scalable apps that people actually use.
        </div>
      </div>

      <div className="flex-col">
        <span>
          Right now I'm working on Control for{' '}
          <Link href="#coincover">Coincover</Link>. In my free time I like to
          experiment with side projects such as{' '}
          <Link href="#impact">Impact</Link> and Shadow and Flame.
        </span>
      </div>

      <Section id="coincover" heading="Coincover" link="https://coincover.com">
        <span>
          At Coincover I built the Coincover SDK, which allows our clients such
          as Fireblocks and BitGo to integrate with our platform easily and
          securely.
        </span>
        <span>
          I also worked on our customer facing app called Control. It helps
          organizations safely recover their digital assets while keeping
          everything compliant and secure.
        </span>
        <Image src="/images/control.png" alt="control" />
      </Section>

      <Section id="impact" heading="Impact">
        <span>
          Impact is a virtual tabletop that can be used to play a TTRPG
          (Dungeons and Dragons). It is built with Vue + ThreeJs while using
          rapier.js as a physics engine.
        </span>
        <span>
          You can visit{' '}
          <Link href="https://dev.impactrpg.app">dev.impactrpg.app</Link> and
          create a room to start playing today
        </span>
        <Image src="/images/impact.png" />
      </Section>

      <Section heading="Holo" link="https://holo.host">
        <span>
          I joined Holo early on and helped build out their core infrastructure.
          I created{' '}
          <Link href="https://hbs.holo.host/swagger">
            Holo Business Services
          </Link>{' '}
          in Nest.js.
          <Image src="/images/hbs.png" alt="hbs" />
          And worked on several Vue-based apps including{' '}
          <Link href="https://springboard.holo.host">Springboard</Link>,{' '}
          <Link href="https://register.holo.host">Registration</Link> and{' '}
          <Link href="https://cloud-console.dev.holo.host/login">
            Cloud Console.
          </Link>
          <Image src="/images/springboard.png" alt="hbs" />
          Before I left I also built an API in Rust using Actix for{' '}
          <Link href="https://api.dev.holo.host">api.holo.host</Link>.
          <Image src="/images/hpapi.png" alt="hbs" />
        </span>
      </Section>

      <Section heading="Cox Automotive" link="https://www.coxautoinc.com/">
        <span>
          At Cox Automotive I worked on a real time online car auction platform
          for <Link href="https://www.manheim.co.uk/">Manheim UK</Link>. It
          included live video with an auctioneer, a chat for bidders, and a fast
          WebSocket based bidding system.
        </span>
      </Section>

      <Section heading="Waracle (Roche)" link="https://waracle.com">
        <span>
          With <Link href="https://www.roche.com/">Roche</Link> I helped build
          and maintain{' '}
          <Link href="https://www.gene.com/stories/floodlight-open">
            floodlight open
          </Link>{' '}
          that allowed scientists to run multiple studies and gather patient
          data to support real research progress.
        </span>
      </Section>

      <Section heading="Waracle (Scottish Power)" link="https://waracle.com">
        <span>
          For Scottish Power I worked on their main website{' '}
          <Link href="https://www.scottishpower.co.uk/">
            scottishpower.co.uk
          </Link>{' '}
          and collaborated with the marketing team to build apps and support
          campaigns.
        </span>
      </Section>

      <Section heading="AI">
        <span>
          I have been interested in artificial intelligence for a long time. My
          university research paper explored{' '}
          <Link href="https://drive.google.com/file/d/1kN2cBLBRGk3XzyTopm5WpAp3ewqvRRo-/view?usp=drive_link">
            training neural networks using different techniques
          </Link>
          , and later I built a{' '}
          <Link href="https://github.com/zeeshan595/Neural-Network-Reinforcement-Learning/releases">
            self driving car simulation in Unity3D using reinforcement learning
          </Link>
          . More recently I have set up in house large language models for
          clients using Ollama and Comfy so they can have private chatbots with
          proprietary knowledge and no data sent to third parties.
        </span>
      </Section>

      <Section
        heading="Hyper Luminal Games"
        link="https://www.hyperluminalgames.com/"
      >
        <span>
          I built an educational app for kids and a React portal for teachers. I
          also developed a 3D training simulation that helped train police
          officers on best practices.
        </span>
      </Section>

      <Section heading="Shadow Dark">
        <span>
          In my spare time I have created tools for the Shadowdark RPG that
          integrate with Owlbear Rodeo such as{' '}
          <Link href="https://extensions.owlbear.rodeo/shadow-sheet">
            Shadow Sheet
          </Link>
          . The creator of Shadowdark, Kelsey Dionne, also thanked me for{' '}
          <Link href="https://www.reddit.com/r/shadowdark/comments/1demlsi/shadowdark_compendium_for_owlbear/">
            Shadow Box
          </Link>
          .
        </span>
        <Image src="/images/owlbear.png" alt="owlbear" />
      </Section>

      <Section heading="Unity3D Youtube Tutorials">
        <span>
          Over 10-14 years ago I used to make unity 3d tutorials on youtube. It
          is a bit embarassing seeing them now but I enjoyed making them at the
          time.{' '}
          <Link href="https://www.youtube.com/@ZeeshanAbid595/videos">
            https://youtube.com/zeeshan595
          </Link>
        </span>
      </Section>

      <Section
        heading="Glasgow Caledonian University"
        link="https://www.gcu.ac.uk/"
      >
        <span>
          I graduated from Glasgow Caledonian University with a degree in
          Computer Games (Software Development).
        </span>
      </Section>
    </>
  );
}
