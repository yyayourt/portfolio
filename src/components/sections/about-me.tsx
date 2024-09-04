import Image from 'next/image';

import YaniFullPose from '/public/images/yanisBanner.png';
import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';
//import Link from '@/components/navigation/link';
//import { EXTERNAL_LINKS } from '@/lib/data';

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="À propos de moi" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            <Image
              src={YaniFullPose}
              alt="Fullpose of Sagar"
              className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
              style={{ objectFit: 'cover' }}
            ></Image>
            <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-xl flex-col gap-6">
          <Typography variant="h3">
          Curieux à mon sujet ? Voici ce que vous devez savoir :
          </Typography>
          <Typography>
            {/* <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.FIGMA}
            >
              self-proclaimed designer
            </Link>{' '}*/}
            Je suis un développeur passionné, spécialisé dans le développement front-end,
            en particulier avec React.js. J&apos;aime donner vie aux aspects techniques et 
            visuels des produits numériques. L&apos;expérience utilisateur, le design au pixel 
            près et l&apos;écriture de code clair, lisible et performant sont essentiels pour moi.
          </Typography>
          <Typography>
          J&apos;ai commencé ma formation de développeur web en septembre 2023 sur OpenClassrooms. 
          Depuis, je m&apos;efforce d&apos;acquérir de nouvelles compétences et de me perfectionner 
          dans le domaine du développement web, avec un focus particulier sur les technologies front-end.
          </Typography>
          {/*<Typography>
          Je suis un penseur progressiste et j&apos;aime travailler sur les produits de 
          bout en bout, de l&apos;idéation au développement.
          </Typography>
          <Typography>
            When I&apos;m not in full-on developer mode, you can find me
            hovering around on twitter or on indie hacker, witnessing the
            journey of early startups or enjoying some free time. You can follow
            me on{' '}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.TWITTER}
            >
              Twitter
            </Link>{' '}
            where I share tech-related bites and build in public, or you can
            follow me on{' '}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.GITHUB}
            >
              GitHub
            </Link>
            .
          </Typography>*/}
          <Typography>Enfin, quelques infos rapides sur moi :</Typography>
          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">
                Formation en développement web sur OpenClassrooms
              </Typography>
              <Typography component="li">Axé principalement sur le front-end avec React.js</Typography>
            </ul>
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">Apprenant avide, toujours à la recherche de nouvelles connaissances</Typography>
            </ul>
          </div>
          <Typography>
            Bien que je ne sois pas encore en freelance, je suis ouvert à toute 
            opportunité de collaboration. N&apos;hésitez pas à me contacter, 
            je serais ravi d&apos;échanger avec vous !
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
