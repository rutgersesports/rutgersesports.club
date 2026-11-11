import { StaticImageData } from 'next/image'
import overwatch2 from '../images/overwatch2-club-bg.jpg'
import valorant from '../images/valorant-club-bg.png'
import lol from '../images/lol-club-bg.jpg'
import wgl from '../images/wgl-club-bg.png'
import rgc from '../images/rgc-club-bg.jpg'
import rocketLeague from '../images/rocket-league-club-bg.jpg'
import scarletSmash from '../images/scarlet-smash-ultimate-club-bg.jpg'
import scarletSmashMelee from '../images/scarlet-smash-melee-club-bg.jpg'
import counterStrike from '../images/cs-club-bg.jpg'
import pokemon from '../images/pokemon-club-bg.png'
import hearthstone from '../images/hearthstone-club-bg.jpg'
import genshin from '../images/genshin-impact-club-bg.jpg'
import mtg from '../images/mtg-club-bg.jpg'
import rainbowsix from '../images/r6-club-bg.jpg'
import minecraft from '../images/minecraft-club-bg.png'

export type ClubSocialMedia = {
  discord?: string
  instagram?: string
  twitter?: string
}

export type Club = {
  name: string
  image?: StaticImageData
  socialMedia: ClubSocialMedia
}

/** Clubs with a banner image come first; relative order within each group is preserved. */
export function orderClubsByBanner<T extends { image?: StaticImageData }>(clubList: T[]): T[] {
  const withBanner: T[] = []
  const withoutBanner: T[] = []
  for (const club of clubList) {
    if (club.image) {
      withBanner.push(club)
    } else {
      withoutBanner.push(club)
    }
  }
  return [...withBanner, ...withoutBanner]
}

export const clubs: Club[] = [
  {
    name: 'Overwatch 2',
    image: overwatch2,
    socialMedia: {
      discord: 'https://discord.gg/U6P3Dtp',
    },
  },
  {
    name: 'Valorant',
    image: valorant,
    socialMedia: {
      discord: 'https://discord.gg/4ANw8bye',
    },
  },
  {
    name: 'League of Legends',
    image: lol,
    socialMedia: {
      discord: 'https://discord.gg/FmtaJc9tuf',
    },
  },
  {
    name: "Women's Gaming League",
    image: wgl,
    socialMedia: {
      discord: 'https://discord.gg/RvBjAfWf7g',
      instagram: 'https://www.instagram.com/rutgerswgl/',
    },
  },
  {
    name: 'Rhythm Game Club',
    image: rgc,
    socialMedia: {
      discord: 'https://discord.gg/azP28Hd',
      instagram: 'https://www.instagram.com/rutgersrgc/',
    },
  },
  {
    name: 'Rocket League',
    image: rocketLeague,
    socialMedia: {
      discord: 'https://discord.gg/fVg6EDmBNb',
    },
  },
  {
    name: 'Scarlet Smash',
    image: scarletSmash,
    socialMedia: {
      discord: 'https://discord.gg/NTfeCsnpQK',
      instagram: 'https://www.instagram.com/scarletsmash/',
    },
  },
  {
    name: 'Scarlet Smash Melee',
    image: scarletSmashMelee,
    socialMedia: {
      discord: 'https://discord.gg/SEDm5MM',
      instagram: 'https://www.instagram.com/rutgersmelee/',
      twitter: 'https://x.com/RutgersMelee',
    },
  },
  {
    name: 'Counter-Strike',
    image: counterStrike,
    socialMedia: {
      discord: 'https://discord.gg/w8xWN6a7jP',
      instagram: 'https://www.instagram.com/rutgerscs2/',
    },
  },
  {
    name: 'Pokemon',
    image: pokemon,
    socialMedia: {
      discord: 'https://discord.gg/D2VemsvdQY',
      instagram: 'https://www.instagram.com/rutgerspokemon/',
    },
  },
  {
    name: 'Hearthstone',
    image: hearthstone,
    socialMedia: {
      discord: 'https://discord.com/invite/b7aeQhu',
    },
  },
  {
    name: 'Genshin Impact',
    image: genshin,
    socialMedia: {
      discord: 'https://discord.gg/5EbrVsBw9z',
    },
  },
  {
    name: 'Magic the Gathering',
    image: mtg,
    socialMedia: {
      discord: 'https://discord.gg/uhJfjjqTGv',
    },
  },
  {
    name: 'Rainbow Six Siege',
    image: rainbowsix,
    socialMedia: {
      discord: 'https://discord.com/invite/wPgemuugUN',
    },
  },
  {
    name: 'Marvel Rivals',
    socialMedia: {
      discord: 'https://discord.gg/rdTNPCyDEt',
      instagram: 'https://www.instagram.com/rutgersmarvelrivals/',
    },
  },
  {
    name: 'Minecraft',
    image: minecraft,
    socialMedia: {
      discord: 'https://rumc.club/discord',
      instagram: 'https://www.instagram.com/rutgersmc/',
    },
  },
  {
    name: 'RFGC',
    socialMedia: {
      discord: 'https://discord.gg/d45UQxN7cj',
      instagram: 'https://www.instagram.com/rutgersfightinggames/',
      twitter: 'https://x.com/RUFightingGames',
    },
  },
  {
    name: 'COGS',
    socialMedia: {
      discord: 'https://discord.com/invite/erTWnAhdwj',
      instagram: 'https://www.instagram.com/rutgerscogs/',
    },
  },
  {
    name: 'Deadlock',
    socialMedia: {
      discord: 'https://discord.gg/gZetry5A3P',
    },
  },
]
