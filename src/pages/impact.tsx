import Image from '../components/image';
import Link from '../components/link';
import Section from '../components/section';

export default function () {
  return (
    <Section heading="Impact">
      <span>
        Impact is a virtual tabletop that can be used to play a TTRPG (Dungeons
        and Dragons). It is built with Vue + ThreeJs while using rapier.js as a
        physics engine.
      </span>
      <span>
        You can visit{' '}
        <Link href="https://dev.impactrpg.app">dev.impactrpg.app</Link> and
        create a room to start playing today
      </span>
      <Image src="/images/impact.png" alt="impact" />
    </Section>
  );
}
