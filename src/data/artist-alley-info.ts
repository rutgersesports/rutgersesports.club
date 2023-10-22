import { StaticImageData } from 'next/image'
import { SocialMediaData } from './members-info'

import cogsAvatar from '../images/artist-alley/2023/COGS.png'
import choombieAvatar from '../images/artist-alley/2023/Choombie.png'
import disequilAvatar from '../images/artist-alley/2023/DISEQUIL.png'
import doodleCatAvatar from '../images/artist-alley/2023/DoodleCat Creations.png'
import envirhoeAvatar from '../images/artist-alley/2023/envirhoe.jpg'
import hannahAvatar from '../images/artist-alley/2023/Hannah.jpeg'
import isekaiAvatar from '../images/artist-alley/2023/Isekai Crew.png'
import juliaAvatar from '../images/artist-alley/2023/Julia_Catbat.png'
import lunic77Avatar from '../images/artist-alley/2023/Lunic77.jpg'
import pinkFlourAvatar from '../images/artist-alley/2023/PinkFlour.png'
import puddingNailsAvatar from '../images/artist-alley/2023/Pudding Nails.png'
import ruAnimationAvatar from '../images/artist-alley/2023/RU Animation.png'
import s0IRAvatar from '../images/artist-alley/2023/S0IR Art.jpg'
import vanvnvAvatar from '../images/artist-alley/2023/Vanvnv.jpeg'
import absoluteLimeAvatar from '../images/artist-alley/2023/absolutelime_.png'
import bileAvatar from '../images/artist-alley/2023/bile.gif.png'
import izzyykAvatar from '../images/artist-alley/2023/i.zzyyk.jpeg'
import kittenAvatar from '../images/artist-alley/2023/kittenmobile.png'
import maxsmarvelousmakesAvatar from '../images/artist-alley/2023/maxsmarvelousmakes.jpg'
import moralitycallsAvatar from '../images/artist-alley/2023/moralitycalls.png'
import parisAvatar from '../images/artist-alley/2023/paris.png'
import pupchansAvatar from '../images/artist-alley/2023/pupchans.jpeg'
import reorannAvatar from '../images/artist-alley/2023/reorann.png'
import sunseamsAvatar from '../images/artist-alley/2023/sunseams.jpeg'
import tokenplzAvatar from '../images/artist-alley/2023/tokenplz.png'

export type Artist = {
  username: string
  socialMedia: SocialMediaData
  avatar?: StaticImageData
}

export const artists2023: Array<Artist> = [
  {
    username: 'Paris Arts',
    socialMedia: {
      instagram: 'paris.arts',
      twitter: 'paris_comics',
    },
    avatar: parisAvatar,
  },
  {
    username: 'sunseams',
    socialMedia: {
      instagram: 'sunseams.shop',
    },
    avatar: sunseamsAvatar,
  },
  {
    username: 'DoodleCat Creations',
    socialMedia: {
      instagram: 'doodlecatcreations',
    },
    avatar: doodleCatAvatar,
  },
  {
    username: 'Vanvnv',
    socialMedia: {
      instagram: 'vanvnv',
    },
    avatar: vanvnvAvatar,
  },
  {
    username: 'PinkFlour',
    socialMedia: {
      instagram: 'I.shoulddraw',
    },
    avatar: pinkFlourAvatar,
  },
  {
    username: 'Julia_Catbat',
    socialMedia: {
      instagram: 'julia_catbat',
    },
    avatar: juliaAvatar,
  },
  {
    username: 'moralitycalls',
    socialMedia: {
      instagram: 'moralitycalls',
    },
    avatar: moralitycallsAvatar,
  },
  {
    username: 'Creation of Games Society',
    socialMedia: {
      instagram: 'rutgerscogs',
    },
    avatar: cogsAvatar,
  },
  {
    username: 'Lunic77',
    socialMedia: {
      instagram: 'lunic77',
    },
    avatar: lunic77Avatar,
  },
  {
    username: 'kittenmobile',
    socialMedia: {
      instagram: 'kittenmobile',
      twitter: 'kittenmobile',
    },
    avatar: kittenAvatar,
  },
  {
    username: 'tokenplz',
    socialMedia: {
      instagram: 'tokenplz',
    },
    avatar: tokenplzAvatar,
  },
  {
    username: 'Choombie',
    socialMedia: {
      instagram: 'choombie',
    },
    avatar: choombieAvatar,
  },
  {
    username: 'Pudding Nails',
    socialMedia: {
      instagram: 'pudding.nails',
    },
    avatar: puddingNailsAvatar,
  },
  {
    username: 'S0IR Art',
    socialMedia: {
      instagram: 's0ir',
    },
    avatar: s0IRAvatar,
  },
  {
    username: 'pupchans',
    socialMedia: {
      instagram: 'pupchans_',
      twitter: 'pupchans',
    },
    avatar: pupchansAvatar,
  },
  {
    username: 'DISEQUIL',
    socialMedia: {
      instagram: 'dissumerch',
      twitter: 'disequil',
    },
    avatar: disequilAvatar,
  },
  {
    username: 'Isekai Crew',
    socialMedia: {
      instagram: 'isekai.crew',
    },
    avatar: isekaiAvatar,
  },
  {
    username: 'RU Animation',
    socialMedia: {
      instagram: 'ruanimation',
    },
    avatar: ruAnimationAvatar,
  },
  {
    username: 'i.zzyyk',
    socialMedia: {
      instagram: 'i.zzyyk',
    },
    avatar: izzyykAvatar,
  },
  {
    username: 'reorann',
    socialMedia: {
      instagram: 'reorann',
    },
    avatar: reorannAvatar,
  },
  {
    username: 'absolutelime_',
    socialMedia: {
      instagram: 'absolutelime',
      twitter: 'absolutelime_',
    },
    avatar: absoluteLimeAvatar,
  },
  {
    username: 'Hannah',
    socialMedia: {
      instagram: 'hannubananu110',
    },
    avatar: hannahAvatar,
  },
  {
    username: 'maxsmarvelousmakes',
    socialMedia: {
      instagram: 'maxsmarvelousmakes',
    },
    avatar: maxsmarvelousmakesAvatar,
  },
  {
    username: 'bile.gif',
    socialMedia: {
      instagram: 'bile.gif',
      twitter: 'bile.gif',
    },
    avatar: bileAvatar,
  },
  {
    username: 'envirhoe',
    socialMedia: {
      instagram: 'envirhoe',
    },
    avatar: envirhoeAvatar,
  },
]
