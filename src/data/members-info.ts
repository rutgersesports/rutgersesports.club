import { StaticImageData } from 'next/image'
import adamBaugh2017 from '../images/members/adam-baugh.png'
import aedanDispenza2016 from '../images/members/aedan-dispenza.jpg'
import alexHer2022 from '../images/members/alex-her.jpg'
import aliceBalashova2019 from '../images/members/alice-balashova.jpg'
import alisonLiu2024 from '../images/members/alison-liu.jpg'
import andrewHarUNKNOWNGRAD from '../images/members/andrew-har.png'
import andrewHarper2025 from '../images/members/andrew-harper.jpg'
import andrewPark2022 from '../images/members/andrew-park.jpg'
import arjunSrivastav2021 from '../images/members/arjun-srivastav.jpg'
import anthonyZhang2025 from '../images/members/anthony-zhang.jpeg'
import byanneTan2025 from '../images/members/byanne-tan.jpg'
import codyTomchak2023 from '../images/members/cody-tomchak.jpg'
import daleBabeyUNKNOWNGRAD from '../images/members/dale-babey.png'
import danielaBuhain2023 from '../images/members/daniela-buhain.jpeg'
import dannyOnuorah2023 from '../images/members/danny-onuorah.jpg'
import davidSotimehin2022 from '../images/members/david-sotimehin.jpg'
import diegoCorea2019 from '../images/members/diego-corea.jpg'
import eanneChang2023 from '../images/members/eanne-chiang.png'
import ericYao2023 from '../images/members/eric-yao.jpg'
import emmaLockburner2025 from '../images/members/emma-lockburner2025.png'
import finnKliewer2024 from '../images/members/finn-kliewer.jpeg'
import giaSimone from '../images/members/gianna-simone.png'
import handellQuiros2024 from '../images/members/handell-quiros.jpeg'
import ishaanKeswani2024 from '../images/members/ishaan-keswani.jpg'
import jackieChen2017 from '../images/members/jackie-chen.jpg'
import jacobKupferberg2017 from '../images/members/jacob-kupferberg.jpg'
import johnMacone2017 from '../images/members/john-macone.jpg'
import johnTran2026 from '../images/members/john-tran.png'
import jonathanJackson2022 from '../images/members/jonathan-jackson.jpg'
import jonahWang2021 from '../images/members/jonah-wang.jpg'
import julianLee2021 from '../images/members/julian-lee.jpg'
import julieNghiem2023 from '../images/members/julie-nghiem.jpg'
import katZhao2026 from '../images/members/katherine-zhao.png'
import kilalaYamamoto2027 from '../images/members/kilala-yamamoto.png'
import kyleElbaum2019 from '../images/members/kyle-elbaum.jpg'
import kylePerry2025 from '../images/members/kyle-perry.jpg'
import kamalPaspuleti from '../images/members/kamal-paspuleti.jpg'
import lunaLee2024 from '../images/members/luna-lee.jpeg'
import malavPatel2017 from '../images/members/malav-patel.jpg'
import malikLekmine2024 from '../images/members/malik-lekmine.png'
import patrickMasuda2026 from '../images/members/patrick-masuda.png'
import scottZackman2019 from '../images/members/scott-zackman.png'
import sethSantos2021 from '../images/members/seth-santos.jpg'
import sophiaYeh2026 from '../images/members/sophia-yeh.png'
import thomasPalka2020 from '../images/members/thomas-palka.png'
import tiffanyChen2021 from '../images/members/tiffany-chen.jpg'
import timothyWaldron2020 from '../images/members/timothy-waldron.jpg'
import rileyHerrera2025 from '../images/members/riley-herrera.png'
import victoriaChen2024 from '../images/members/victoria-chen.jpg'
import victorOkoye2023 from '../images/members/victor-okoye.jpg'
import vincenzoDiMatteo2022 from '../images/members/vincenzo-diMatteo.jpg'

export type ClubPosition = {
  titleName: ClubPositionTitle
  startYear: number
  endYear: number
}

export type SocialMediaData = {
  facebook?: string
  github?: string
  instagram?: string
  linkedin?: string
  reddit?: string
  tiktok?: string
  twitch?: string
  twitter?: string // "X" more like i never asked
  youtube?: string
}

export type Member = {
  firstName: string
  lastName: string
  majors: Array<AcademicStudy>
  minors: Array<AcademicStudy>
  graduationYear: number | null
  positions: Array<ClubPosition>

  socialMedia?: SocialMediaData
  image?: StaticImageData
  isFounder?: boolean
  isHidden?: boolean
}

enum AcademicStudy {
  Finance = 'Finance',
  QuanEconomics = 'Quantitative Economics',
  ComputerScience = 'Computer Science',
  ITI = 'Information Technology and Informatics',
  ComputerEngineering = 'Computer Engineering',
  Accounting = 'Accounting',
  Marketing = 'Marketing',
  Economics = 'Economics',
  BiomedicalEngineering = 'Biomedical Engineering',
  HumanResources = 'Human Resources',
  Psychology = 'Psychology',
  PoliticalScience = 'Political Science',
  CreativeWriting = 'Creative Writing',
  BusinessAnalytics = 'Business Analytics',
  ElectricalEngineering = 'Electrical Engineering',
  ArtHistory = 'ArtHistory',
  AerospaceEngineering = 'Aerospace Engineering',
  CommunicationsMediaStudies = 'Communication and Media Studies',
  History = 'History',
  PackagingEngineering = 'Packaging Engineering',
  EngineeringPhysics = 'Engineering Physics',
  AppliedPhysics = 'Applied Physics',
  SupplyChainManagement = 'Supply Chain Management',
  BusinessAdminManagement = 'Business Administration and Management',
  ExerciseScience = 'Exercise Science',
  SportStudies = 'Sport Studies',
}

/*
 * Hello, if you're reading this you're probably a stalker or the new Website Manager! Welcome!
 * There are a couple of notes from the creator of this website before you should get started
 * when adding/removing/editing people from this website.
 *
 * There are some requirements that need to be filled to prevent adding too many people who did
 * not do anything to support or help the club.
 *
 * 1. Associates are not meant to be in the timeline as their efforts were not recognized to
 *    become an officer or higher.
 * 2.
 *
 *
 * Some notable things to also be mentioned.
 *
 * 1. Director, Manager, Officer, & Associate positions were created during the 2018-2019 era.
 *    (source: Scott Zackman)
 * 2. If you look up someone's LinkedIn profile who had a Director or Manager title before
 *    2018, please do not edit their title in this datasheet as their title was not official
 *    and could conflict with another person.
 */
export enum ClubPositionTitle {
  President = 'President',
  VicePresident = 'Vice President',
  Treasurer = 'Treasurer',
  Secretary = 'Secretary',
  DirectorCompetitiveManagement = 'Director of Competitive Management',
  DirectorCommunityManagement = 'Director of Community Management',
  DirectorVideoProduction = 'Director of Video Production',
  DirectorMarketing = 'Director of Marketing',
  DirectorEvents = 'Director of Events',
  DirectorHumanResources = 'Director of Human Resources',
  DirectorTechnology = 'Director of Technology',
  DirectorPartnership = 'Director of Partnership',
  DirectorBroadcasting = 'Director of Broadcasting',
  DirectorGraphicDesign = 'Director of Graphic Design',
  DirectorSocialMedia = 'Director of Social Media',
  ManagerPartnership = 'Partnership Manager',
  ManagerRecruitment = 'Recruitment Manager',
  ManagerMediaProduction = 'Media Production Manager', // alias: 'Video Production Manager'
  ManagerGraphics = 'Graphics Manager',
  ManagerSocialMedia = 'Social Media Manager',
  ManagerWebsite = 'Website Manager',
  ManagerBroadcasting = 'Broadcasting Manager',
  NewsAnchorMediaProduction = 'The REN Guy',
  OfficerBroadcasting = 'Broadcasting Officer',
  OfficerHumanResources = 'Human Resources Officer',
  OfficerTechnology = 'Technology Officer',
  OfficerSocialMedia = 'Social Media Officer',
  OfficerGraphicDesign = 'Graphic Design Officer',

  /* Do not give this to people during and after 2018-2019 */
  EBoardMember = 'Executive Board Member',
}

export const clubPositionOrder = Object.values(ClubPositionTitle)

export const members: Array<Member> = [
  {
    firstName: 'Anthony',
    lastName: 'Zhang',
    majors: [AcademicStudy.Finance],
    minors: [AcademicStudy.QuanEconomics],
    graduationYear: 2025,
    positions: [
      {
        titleName: ClubPositionTitle.Treasurer,
        startYear: 2023,
        endYear: 2024,
      },
      {
        titleName: ClubPositionTitle.Treasurer,
        startYear: 2024,
        endYear: 2025,
      },
    ],
    image: anthonyZhang2025,
  },
  {
    firstName: 'Jonathan',
    lastName: 'Jackson',
    majors: [AcademicStudy.Finance],
    minors: [],
    graduationYear: 2022,
    positions: [
      {
        titleName: ClubPositionTitle.Treasurer,
        startYear: 2021,
        endYear: 2022,
      },
      {
        titleName: ClubPositionTitle.DirectorCompetitiveManagement,
        startYear: 2020,
        endYear: 2021,
      },
      {
        titleName: ClubPositionTitle.DirectorCompetitiveManagement,
        startYear: 2021,
        endYear: 2022,
      },
    ],
    image: jonathanJackson2022,
  },
  {
    isFounder: true,
    firstName: 'Aedan',
    lastName: 'Dispenza',
    majors: [AcademicStudy.ComputerScience],
    minors: [],
    graduationYear: 2016,
    positions: [
      {
        titleName: ClubPositionTitle.President,
        startYear: 2014,
        endYear: 2015,
      },
    ],
    image: aedanDispenza2016,
  },
  {
    firstName: 'Seth',
    lastName: 'Santos',
    majors: [AcademicStudy.ComputerScience, AcademicStudy.ITI],
    minors: [],
    graduationYear: 2021,
    positions: [
      {
        titleName: ClubPositionTitle.DirectorVideoProduction,
        startYear: 2018,
        endYear: 2019,
      },
      {
        titleName: ClubPositionTitle.President,
        startYear: 2020,
        endYear: 2021,
      },
    ],
    image: sethSantos2021,
  },
  {
    firstName: 'Vincenzo',
    lastName: 'DiMatteo',
    majors: [AcademicStudy.ComputerEngineering],
    minors: [],
    graduationYear: 2023,
    positions: [
      {
        titleName: ClubPositionTitle.President,
        startYear: 2022,
        endYear: 2023,
      },
      {
        titleName: ClubPositionTitle.DirectorPartnership,
        startYear: 2021,
        endYear: 2022,
      },
      {
        titleName: ClubPositionTitle.DirectorPartnership,
        startYear: 2020,
        endYear: 2021,
      },
    ],
    image: vincenzoDiMatteo2022,
  },
  {
    firstName: 'Eanne',
    lastName: 'Chiang',
    majors: [AcademicStudy.Accounting, AcademicStudy.Marketing],
    minors: [],
    graduationYear: 2023,
    positions: [
      {
        titleName: ClubPositionTitle.VicePresident,
        startYear: 2022,
        endYear: 2023,
      },
      {
        titleName: ClubPositionTitle.ManagerGraphics,
        startYear: 2021,
        endYear: 2022,
      },
    ],
    image: eanneChang2023,
    socialMedia: {
      instagram: 'lost_goldefish',
    },
  },
  {
    firstName: 'Julie',
    lastName: 'Nghiem',
    majors: [AcademicStudy.BiomedicalEngineering],
    minors: [],
    graduationYear: 2023,
    positions: [
      {
        titleName: ClubPositionTitle.DirectorMarketing,
        startYear: 2022,
        endYear: 2023,
      },
      {
        titleName: ClubPositionTitle.ManagerSocialMedia,
        startYear: 2021,
        endYear: 2022,
      },
    ],
    image: julieNghiem2023,
  },
  {
    firstName: 'Kamal',
    lastName: 'Paspuleti',
    majors: [AcademicStudy.ComputerEngineering],
    minors: [],
    graduationYear: 2023,
    positions: [
      {
        titleName: ClubPositionTitle.DirectorBroadcasting,
        startYear: 2022,
        endYear: 2023,
      },
      {
        titleName: ClubPositionTitle.DirectorEvents,
        startYear: 2021,
        endYear: 2022,
      },
      {
        titleName: ClubPositionTitle.Secretary,
        startYear: 2020,
        endYear: 2021,
      },
    ],
    image: kamalPaspuleti,
  },
  {
    firstName: 'Luna',
    lastName: 'Lee',
    majors: [AcademicStudy.HumanResources, AcademicStudy.Psychology],
    minors: [],
    graduationYear: 2024,
    positions: [
      {
        titleName: ClubPositionTitle.DirectorHumanResources,
        startYear: 2022,
        endYear: 2023,
      },
      {
        titleName: ClubPositionTitle.President,
        startYear: 2023,
        endYear: 2024,
      },
    ],
    image: lunaLee2024,
  },
  {
    firstName: 'Ishaan',
    lastName: 'Keswani',
    majors: [AcademicStudy.ComputerEngineering],
    minors: [],
    graduationYear: 2024,
    positions: [
      {
        titleName: ClubPositionTitle.DirectorTechnology,
        startYear: 2023,
        endYear: 2024,
      },
      {
        titleName: ClubPositionTitle.DirectorTechnology,
        startYear: 2022,
        endYear: 2023,
      },
      {
        titleName: ClubPositionTitle.DirectorTechnology,
        startYear: 2021,
        endYear: 2022,
      },
    ],
    image: ishaanKeswani2024,
  },
  {
    firstName: 'Andrew',
    lastName: 'Harper',
    majors: [AcademicStudy.Economics, AcademicStudy.ComputerScience],
    minors: [],
    graduationYear: 2025,
    positions: [
      {
        titleName: ClubPositionTitle.DirectorCompetitiveManagement,
        startYear: 2022,
        endYear: 2023,
      },
      {
        titleName: ClubPositionTitle.DirectorCompetitiveManagement,
        startYear: 2023,
        endYear: 2024,
      },
    ],
    image: andrewHarper2025,
  },
  {
    firstName: 'Aditya',
    lastName: 'Garg',
    majors: [AcademicStudy.Finance],
    minors: [],
    graduationYear: 2023,
    positions: [
      {
        titleName: ClubPositionTitle.ManagerPartnership,
        startYear: 2022,
        endYear: 2023,
      },
    ],
  },
  {
    firstName: 'Finn',
    lastName: 'Kliewer',
    majors: [AcademicStudy.ComputerScience],
    minors: [],
    graduationYear: 2024,
    positions: [
      {
        titleName: ClubPositionTitle.ManagerMediaProduction,
        startYear: 2022,
        endYear: 2023,
      },
      {
        titleName: ClubPositionTitle.ManagerMediaProduction,
        startYear: 2023,
        endYear: 2024,
      },
    ],
    image: finnKliewer2024,
  },
  {
    firstName: 'Alex',
    lastName: 'Her',
    majors: [AcademicStudy.ITI],
    minors: [],
    graduationYear: 2022,
    positions: [
      {
        titleName: ClubPositionTitle.President,
        startYear: 2021,
        endYear: 2022,
      },
      {
        titleName: ClubPositionTitle.VicePresident,
        startYear: 2020,
        endYear: 2021,
      },
      {
        titleName: ClubPositionTitle.DirectorCompetitiveManagement,
        startYear: 2019,
        endYear: 2020,
      },
      {
        titleName: ClubPositionTitle.DirectorEvents,
        startYear: 2021,
        endYear: 2022,
      },
    ],
    image: alexHer2022,
  },
  {
    firstName: 'David',
    lastName: 'Sotimehin',
    majors: [AcademicStudy.PoliticalScience],
    minors: [AcademicStudy.CreativeWriting],
    graduationYear: 2022,
    positions: [
      {
        titleName: ClubPositionTitle.VicePresident,
        startYear: 2021,
        endYear: 2022,
      },
    ],
    image: davidSotimehin2022,
  },
  {
    firstName: 'Ahmed',
    lastName: 'Saqer',
    majors: [AcademicStudy.ComputerScience, AcademicStudy.Economics],
    minors: [],
    graduationYear: 2024,
    positions: [
      {
        titleName: ClubPositionTitle.DirectorBroadcasting,
        startYear: 2021,
        endYear: 2022,
      },
      {
        titleName: ClubPositionTitle.DirectorBroadcasting,
        startYear: 2020,
        endYear: 2021,
      },
    ],
  },
  {
    firstName: 'Victor',
    lastName: 'Okoye',
    majors: [AcademicStudy.ComputerScience, AcademicStudy.BusinessAnalytics],
    minors: [],
    graduationYear: 2023,
    positions: [
      {
        titleName: ClubPositionTitle.DirectorHumanResources,
        startYear: 2021,
        endYear: 2022,
      },
      {
        titleName: ClubPositionTitle.DirectorHumanResources,
        startYear: 2020,
        endYear: 2021,
      },
    ],
    image: victorOkoye2023,
  },
  {
    firstName: 'Zain',
    lastName: 'Bhatti',
    majors: [AcademicStudy.Marketing],
    minors: [],
    graduationYear: 2024,
    positions: [
      {
        titleName: ClubPositionTitle.ManagerMediaProduction,
        startYear: 2021,
        endYear: 2022,
      },
    ],
  },
  {
    firstName: 'Tyler',
    lastName: 'Wang',
    majors: [AcademicStudy.Finance],
    minors: [],
    graduationYear: 2021,
    positions: [
      {
        titleName: ClubPositionTitle.Treasurer,
        startYear: 2020,
        endYear: 2021,
      },
    ],
  },
  {
    firstName: 'Tiffany',
    lastName: 'Chen',
    majors: [AcademicStudy.ComputerScience],
    minors: [],
    graduationYear: 2021,
    positions: [
      {
        titleName: ClubPositionTitle.DirectorGraphicDesign,
        startYear: 2020,
        endYear: 2021,
      },
    ],
    image: tiffanyChen2021,
  },
  {
    firstName: 'Andrew',
    lastName: 'Park',
    majors: [AcademicStudy.ComputerScience, AcademicStudy.ElectricalEngineering],
    minors: [],
    graduationYear: 2022,
    positions: [
      {
        titleName: ClubPositionTitle.DirectorTechnology,
        startYear: 2020,
        endYear: 2021,
      },
    ],
    image: andrewPark2022,
  },
  {
    firstName: 'Julian',
    lastName: 'Lee',
    majors: [AcademicStudy.ComputerScience],
    minors: [],
    graduationYear: 2021,
    positions: [
      {
        titleName: ClubPositionTitle.DirectorVideoProduction,
        startYear: 2020,
        endYear: 2021,
      },
      {
        titleName: ClubPositionTitle.DirectorVideoProduction,
        startYear: 2019,
        endYear: 2020,
      },
      {
        titleName: ClubPositionTitle.DirectorVideoProduction,
        startYear: 2018,
        endYear: 2019,
      },
      {
        titleName: ClubPositionTitle.EBoardMember,
        startYear: 2017,
        endYear: 2018,
      },
    ],
    image: julianLee2021,
    socialMedia: {
      instagram: 'julianhlee',
      twitter: 'jeseuto',
    },
  },
  {
    firstName: 'Andrew',
    lastName: 'Hong',
    majors: [AcademicStudy.ComputerScience],
    minors: [],
    graduationYear: 2026,
    positions: [
      {
        titleName: ClubPositionTitle.ManagerWebsite,
        startYear: 2023,
        endYear: 2024,
      },
      {
        titleName: ClubPositionTitle.ManagerWebsite,
        startYear: 2022,
        endYear: 2023,
      },
      {
        titleName: ClubPositionTitle.DirectorTechnology,
        startYear: 2024,
        endYear: 2025,
      },
    ],
    socialMedia: {
      github: 'novialriptide',
    },
  },
  {
    firstName: 'Kyle',
    lastName: 'Perry',
    majors: [AcademicStudy.ComputerScience],
    minors: [],
    graduationYear: 2025,
    positions: [
      {
        titleName: ClubPositionTitle.VicePresident,
        startYear: 2023,
        endYear: 2024,
      },
      {
        titleName: ClubPositionTitle.President,
        startYear: 2024,
        endYear: 2025,
      },
    ],
    image: kylePerry2025,
  },
  {
    firstName: 'Emma',
    lastName: 'Lockburner',
    majors: [AcademicStudy.ArtHistory],
    minors: [],
    graduationYear: 2025,
    positions: [
      {
        titleName: ClubPositionTitle.ManagerBroadcasting,
        startYear: 2023,
        endYear: 2024,
      },
      {
        titleName: ClubPositionTitle.ManagerBroadcasting,
        startYear: 2024,
        endYear: 2025,
      },
    ],
    image: emmaLockburner2025,
  },
  {
    firstName: 'Trigun',
    lastName: 'Tellakula',
    majors: [AcademicStudy.AerospaceEngineering],
    minors: [],
    graduationYear: 2024,
    positions: [
      {
        titleName: ClubPositionTitle.OfficerBroadcasting,
        startYear: 2023,
        endYear: 2024,
      },
      {
        titleName: ClubPositionTitle.OfficerBroadcasting,
        startYear: 2022,
        endYear: 2023,
      },
    ],
  },
  {
    firstName: 'Thomas',
    lastName: 'Palka',
    majors: [AcademicStudy.CommunicationsMediaStudies],
    minors: [],
    graduationYear: 2020,
    positions: [
      {
        titleName: ClubPositionTitle.EBoardMember,
        startYear: 2017,
        endYear: 2018,
      },
      {
        titleName: ClubPositionTitle.President,
        startYear: 2018,
        endYear: 2019,
      },
      {
        titleName: ClubPositionTitle.DirectorEvents,
        startYear: 2018,
        endYear: 2019,
      },
      {
        titleName: ClubPositionTitle.President,
        startYear: 2019,
        endYear: 2020,
      },
    ],
    image: thomasPalka2020,
  },
  {
    firstName: 'Kyle',
    lastName: 'Frick',
    majors: [AcademicStudy.ComputerScience],
    minors: [],
    graduationYear: 2019,
    positions: [
      {
        titleName: ClubPositionTitle.EBoardMember,
        startYear: 2017,
        endYear: 2018,
      },
      {
        titleName: ClubPositionTitle.VicePresident,
        startYear: 2018,
        endYear: 2019,
      },
      {
        titleName: ClubPositionTitle.DirectorTechnology,
        startYear: 2018,
        endYear: 2019,
      },
      {
        titleName: ClubPositionTitle.VicePresident,
        startYear: 2019,
        endYear: 2020,
      },
    ],
  },
  {
    firstName: 'Louie',
    lastName: 'Zhou',
    majors: [AcademicStudy.ComputerScience],
    minors: [],
    graduationYear: 2019,
    positions: [
      {
        titleName: ClubPositionTitle.Treasurer,
        startYear: 2018,
        endYear: 2019,
      },
      {
        titleName: ClubPositionTitle.Treasurer,
        startYear: 2019,
        endYear: 2020,
      },
    ],
  },
  {
    firstName: 'Timothy',
    lastName: 'Waldron',
    majors: [AcademicStudy.PackagingEngineering, AcademicStudy.Marketing],
    minors: [],
    graduationYear: 2020,
    positions: [
      {
        titleName: ClubPositionTitle.Treasurer,
        startYear: 2017,
        endYear: 2018,
      },
      {
        titleName: ClubPositionTitle.EBoardMember,
        startYear: 2018,
        endYear: 2019,
      },
    ],
    image: timothyWaldron2020,
  },
  {
    firstName: 'Diego',
    lastName: 'Corea',
    majors: [AcademicStudy.ITI],
    minors: [],
    graduationYear: 2019,
    positions: [
      {
        titleName: ClubPositionTitle.EBoardMember,
        startYear: 2016,
        endYear: 2017,
      },
      {
        titleName: ClubPositionTitle.EBoardMember,
        startYear: 2017,
        endYear: 2018,
      },
      {
        titleName: ClubPositionTitle.ManagerSocialMedia,
        startYear: 2018,
        endYear: 2019,
      },
      {
        titleName: ClubPositionTitle.DirectorCompetitiveManagement,
        startYear: 2018,
        endYear: 2019,
      },
    ],
    image: diegoCorea2019,
  },
  {
    firstName: 'Alice',
    lastName: 'Balashova',
    majors: [],
    minors: [],
    graduationYear: 2019,
    positions: [
      {
        titleName: ClubPositionTitle.EBoardMember,
        startYear: 2016,
        endYear: 2017,
      },
      {
        titleName: ClubPositionTitle.EBoardMember,
        startYear: 2017,
        endYear: 2018,
      },
      {
        titleName: ClubPositionTitle.DirectorVideoProduction,
        startYear: 2018,
        endYear: 2019,
      },
    ],
    image: aliceBalashova2019,
  },
  {
    firstName: 'Aaron',
    lastName: 'Landry',
    majors: [AcademicStudy.EngineeringPhysics, AcademicStudy.AppliedPhysics],
    minors: [],
    graduationYear: 2019,
    positions: [
      {
        titleName: ClubPositionTitle.EBoardMember,
        startYear: 2017,
        endYear: 2018,
      },
    ],
  },
  {
    firstName: 'David',
    lastName: 'Chao',
    majors: [AcademicStudy.SupplyChainManagement],
    minors: [],
    graduationYear: 2019,
    positions: [
      {
        titleName: ClubPositionTitle.EBoardMember,
        startYear: 2017,
        endYear: 2018,
      },
    ],
  },
  {
    firstName: 'Matthew',
    lastName: 'Koutsoutis',
    majors: [AcademicStudy.ElectricalEngineering, AcademicStudy.ComputerEngineering],
    minors: [],
    graduationYear: 2018,
    positions: [
      {
        titleName: ClubPositionTitle.EBoardMember,
        startYear: 2017,
        endYear: 2018,
      },
    ],
  },
  {
    firstName: 'Daniela',
    lastName: 'Buhain',
    majors: [AcademicStudy.Marketing],
    minors: [],
    graduationYear: 2023,
    positions: [
      {
        titleName: ClubPositionTitle.ManagerSocialMedia,
        startYear: 2021,
        endYear: 2022,
      },
      {
        titleName: ClubPositionTitle.ManagerSocialMedia,
        startYear: 2022,
        endYear: 2023,
      },
    ],
    image: danielaBuhain2023,
  },
  {
    firstName: 'Victoria',
    lastName: 'Chen',
    majors: [AcademicStudy.ComputerScience, AcademicStudy.ComputerEngineering],
    minors: [],
    graduationYear: 2024,
    positions: [
      {
        titleName: ClubPositionTitle.OfficerTechnology,
        startYear: 2022,
        endYear: 2023,
      },
    ],
    image: victoriaChen2024,
  },
  {
    firstName: 'Jonah',
    lastName: 'Wang',
    majors: [AcademicStudy.BusinessAdminManagement],
    minors: [],
    graduationYear: 2021,
    positions: [
      {
        titleName: ClubPositionTitle.President,
        startYear: 2018,
        endYear: 2019,
      },
    ],
    image: jonahWang2021,
  },
  {
    isFounder: true,
    firstName: 'Malav',
    lastName: 'Patel',
    majors: [AcademicStudy.ITI],
    minors: [],
    graduationYear: 2017,
    positions: [
      {
        titleName: ClubPositionTitle.President,
        startYear: 2015,
        endYear: 2016,
      },
    ],
    image: malavPatel2017,
  },
  {
    isFounder: true,
    firstName: 'Alex',
    lastName: 'Um',
    majors: [],
    minors: [],
    graduationYear: null,
    positions: [
      {
        titleName: ClubPositionTitle.EBoardMember,
        startYear: 2016,
        endYear: 2017,
      },
    ],
  },
  {
    isFounder: true,
    firstName: 'Zaid',
    lastName: 'Qmei',
    majors: [],
    minors: [],
    graduationYear: null,
    positions: [],
  },
  {
    isFounder: true,
    firstName: 'Sam',
    lastName: 'Gluzberg',
    majors: [],
    minors: [],
    graduationYear: null,
    positions: [],
  },
  {
    isFounder: true,
    firstName: 'Adam',
    lastName: 'Baugh',
    majors: [],
    minors: [],
    graduationYear: 2017,
    positions: [
      {
        titleName: ClubPositionTitle.President,
        startYear: 2016,
        endYear: 2017,
      },
    ],
    image: adamBaugh2017,
  },
  {
    firstName: 'Chloe',
    lastName: 'Wong',
    majors: [AcademicStudy.Marketing],
    minors: [],
    graduationYear: 2024,
    positions: [
      {
        titleName: ClubPositionTitle.ManagerSocialMedia,
        startYear: 2023,
        endYear: 2024,
      },
    ],
  },
  {
    firstName: 'Kassandra',
    lastName: 'Martinez',
    majors: [],
    minors: [],
    graduationYear: 2024,
    positions: [
      {
        titleName: ClubPositionTitle.OfficerBroadcasting,
        startYear: 2022,
        endYear: 2023,
      },
      {
        titleName: ClubPositionTitle.OfficerBroadcasting,
        startYear: 2023,
        endYear: 2024,
      },
    ],
  },
  {
    firstName: 'Riley',
    lastName: 'Herrera',
    majors: [],
    minors: [],
    graduationYear: 2025,
    positions: [
      {
        titleName: ClubPositionTitle.DirectorHumanResources,
        startYear: 2023,
        endYear: 2024,
      },
      {
        titleName: ClubPositionTitle.DirectorEvents,
        startYear: 2024,
        endYear: 2025,
      },
    ],
    image: rileyHerrera2025,
  },
  {
    firstName: 'Jay',
    lastName: 'Kim',
    majors: [],
    minors: [],
    graduationYear: 2022,
    positions: [
      {
        titleName: ClubPositionTitle.OfficerSocialMedia,
        startYear: 2022,
        endYear: 2023,
      },
    ],
  },
  {
    firstName: 'Byanne',
    lastName: 'Tan',
    majors: [],
    minors: [],
    graduationYear: 2025,
    positions: [
      {
        titleName: ClubPositionTitle.ManagerGraphics,
        startYear: 2023,
        endYear: 2024,
      },
      {
        titleName: ClubPositionTitle.VicePresident,
        startYear: 2024,
        endYear: 2025,
      },
    ],
    image: byanneTan2025,
  },
  {
    firstName: 'Tyler',
    lastName: 'Jackson',
    majors: [],
    minors: [],
    graduationYear: 2025,
    positions: [
      {
        titleName: ClubPositionTitle.ManagerPartnership,
        startYear: 2022,
        endYear: 2023,
      },
      {
        titleName: ClubPositionTitle.ManagerPartnership,
        startYear: 2023,
        endYear: 2024,
      },
    ],
  },
  {
    firstName: 'Jackie',
    lastName: 'Chen',
    majors: [],
    minors: [],
    graduationYear: 2017,
    positions: [
      {
        titleName: ClubPositionTitle.EBoardMember,
        startYear: 2016,
        endYear: 2017,
      },
    ],
    image: jackieChen2017,
  },
  {
    firstName: 'Eric',
    lastName: 'Yao',
    majors: [AcademicStudy.Economics, AcademicStudy.ComputerScience, AcademicStudy.Finance],
    minors: [],
    graduationYear: 2023,
    positions: [
      {
        titleName: ClubPositionTitle.Treasurer,
        startYear: 2022,
        endYear: 2023,
      },
    ],
    image: ericYao2023,
  },
  {
    firstName: 'Kier',
    lastName: 'Hunt',
    majors: [],
    minors: [],
    graduationYear: 2024,
    positions: [
      {
        titleName: ClubPositionTitle.OfficerHumanResources,
        startYear: 2022,
        endYear: 2023,
      },
    ],
  },
  {
    firstName: 'Alison',
    lastName: 'Liu',
    majors: [],
    minors: [],
    graduationYear: 2024,
    positions: [
      {
        titleName: ClubPositionTitle.OfficerGraphicDesign,
        startYear: 2022,
        endYear: 2023,
      },
      {
        titleName: ClubPositionTitle.OfficerGraphicDesign,
        startYear: 2023,
        endYear: 2024,
      },
    ],
    image: alisonLiu2024,
  },
  {
    firstName: 'Ansh',
    lastName: 'Gambhir',
    majors: [AcademicStudy.ComputerEngineering, AcademicStudy.ComputerScience],
    minors: [],
    graduationYear: 2021,
    positions: [
      {
        titleName: ClubPositionTitle.EBoardMember,
        startYear: 2018,
        endYear: 2019,
      },
      {
        titleName: ClubPositionTitle.DirectorCompetitiveManagement,
        startYear: 2019,
        endYear: 2020,
      },
      {
        titleName: ClubPositionTitle.DirectorTechnology,
        startYear: 2020,
        endYear: 2021,
      },
    ],
  },
  {
    firstName: 'Dale',
    lastName: 'Babey',
    majors: [],
    minors: [],
    graduationYear: null,
    positions: [
      {
        titleName: ClubPositionTitle.DirectorSocialMedia,
        startYear: 2018,
        endYear: 2019,
      },
    ],
    image: daleBabeyUNKNOWNGRAD,
  },
  {
    firstName: 'Andrew',
    lastName: 'Har',
    majors: [],
    minors: [],
    graduationYear: null,
    positions: [
      {
        titleName: ClubPositionTitle.DirectorPartnership,
        startYear: 2018,
        endYear: 2019,
      },
    ],
    image: andrewHarUNKNOWNGRAD,
  },
  {
    firstName: 'Scott',
    lastName: 'Zackman',
    majors: [],
    minors: [],
    graduationYear: 2019,
    positions: [
      {
        titleName: ClubPositionTitle.DirectorCompetitiveManagement,
        startYear: 2018,
        endYear: 2019,
      },
      {
        titleName: ClubPositionTitle.EBoardMember,
        startYear: 2016,
        endYear: 2017,
      },
      {
        titleName: ClubPositionTitle.EBoardMember,
        startYear: 2017,
        endYear: 2018,
      },
    ],
    image: scottZackman2019,
    socialMedia: {
      linkedin: 'scottzackman',
    },
  },
  {
    firstName: 'Alan',
    lastName: 'Yu',
    majors: [],
    minors: [],
    graduationYear: null,
    positions: [
      {
        titleName: ClubPositionTitle.EBoardMember,
        startYear: 2018,
        endYear: 2019,
      },
    ],
  },
  {
    firstName: 'Alex',
    lastName: 'Riveron',
    majors: [],
    minors: [],
    graduationYear: null,
    positions: [
      {
        titleName: ClubPositionTitle.EBoardMember,
        startYear: 2018,
        endYear: 2019,
      },
    ],
  },
  {
    firstName: 'AJ',
    lastName: 'Grosso',
    majors: [],
    minors: [],
    graduationYear: null,
    positions: [
      {
        titleName: ClubPositionTitle.EBoardMember,
        startYear: 2018,
        endYear: 2019,
      },
    ],
  },
  {
    firstName: 'Arjun',
    lastName: 'Srivastav',
    majors: [],
    minors: [],
    graduationYear: 2021,
    positions: [
      {
        titleName: ClubPositionTitle.EBoardMember,
        startYear: 2018,
        endYear: 2019,
      },
    ],
    image: arjunSrivastav2021,
  },
  {
    firstName: 'Connor',
    lastName: 'Callahan',
    majors: [],
    minors: [],
    graduationYear: null,
    positions: [
      {
        titleName: ClubPositionTitle.EBoardMember,
        startYear: 2018,
        endYear: 2019,
      },
    ],
  },
  {
    firstName: 'Elijah',
    lastName: 'Ongoco',
    majors: [],
    minors: [],
    graduationYear: null,
    positions: [
      {
        titleName: ClubPositionTitle.EBoardMember,
        startYear: 2018,
        endYear: 2019,
      },
    ],
  },
  {
    firstName: 'Henry',
    lastName: 'Fowler',
    majors: [],
    minors: [],
    graduationYear: null,
    positions: [
      {
        titleName: ClubPositionTitle.EBoardMember,
        startYear: 2018,
        endYear: 2019,
      },
    ],
  },
  {
    firstName: 'Jeffrey',
    lastName: 'Zhang',
    majors: [],
    minors: [],
    graduationYear: null,
    positions: [
      {
        titleName: ClubPositionTitle.EBoardMember,
        startYear: 2018,
        endYear: 2019,
      },
    ],
  },
  {
    firstName: 'Jeese',
    lastName: 'Lin',
    majors: [],
    minors: [],
    graduationYear: null,
    positions: [
      {
        titleName: ClubPositionTitle.EBoardMember,
        startYear: 2018,
        endYear: 2019,
      },
    ],
  },
  {
    firstName: 'Jia Hang',
    lastName: 'Zhang',
    majors: [],
    minors: [],
    graduationYear: null,
    positions: [
      {
        titleName: ClubPositionTitle.EBoardMember,
        startYear: 2018,
        endYear: 2019,
      },
    ],
  },
  {
    firstName: 'Justin',
    lastName: 'Winfrey',
    majors: [],
    minors: [],
    graduationYear: null,
    positions: [
      {
        titleName: ClubPositionTitle.EBoardMember,
        startYear: 2018,
        endYear: 2019,
      },
    ],
  },
  {
    firstName: 'Kaitlin',
    lastName: 'Fermalino',
    majors: [],
    minors: [],
    graduationYear: null,
    positions: [
      {
        titleName: ClubPositionTitle.EBoardMember,
        startYear: 2018,
        endYear: 2019,
      },
    ],
  },
  {
    firstName: 'Kyle',
    lastName: 'Elbaum',
    majors: [],
    minors: [],
    graduationYear: 2019,
    positions: [
      {
        titleName: ClubPositionTitle.EBoardMember,
        startYear: 2017,
        endYear: 2018,
      },
      {
        titleName: ClubPositionTitle.EBoardMember,
        startYear: 2018,
        endYear: 2019,
      },
    ],
    image: kyleElbaum2019,
  },
  {
    firstName: 'Kyle',
    lastName: 'Rabe',
    majors: [],
    minors: [],
    graduationYear: null,
    positions: [
      {
        titleName: ClubPositionTitle.EBoardMember,
        startYear: 2018,
        endYear: 2019,
      },
    ],
  },
  {
    firstName: 'Mathew',
    lastName: 'Calugay',
    majors: [],
    minors: [],
    graduationYear: null,
    positions: [
      {
        titleName: ClubPositionTitle.EBoardMember,
        startYear: 2018,
        endYear: 2019,
      },
    ],
  },
  {
    firstName: 'Max',
    lastName: 'Broggi-Sumner',
    majors: [],
    minors: [],
    graduationYear: null,
    positions: [
      {
        titleName: ClubPositionTitle.EBoardMember,
        startYear: 2018,
        endYear: 2019,
      },
    ],
  },
  {
    firstName: 'Michael',
    lastName: 'McGillicuddy',
    majors: [],
    minors: [],
    graduationYear: null,
    positions: [
      {
        titleName: ClubPositionTitle.EBoardMember,
        startYear: 2018,
        endYear: 2019,
      },
    ],
  },
  {
    firstName: 'Sage',
    lastName: 'Datuin',
    majors: [],
    minors: [],
    graduationYear: null,
    positions: [
      {
        titleName: ClubPositionTitle.EBoardMember,
        startYear: 2016,
        endYear: 2017,
      },
      {
        titleName: ClubPositionTitle.EBoardMember,
        startYear: 2018,
        endYear: 2019,
      },
    ],
  },
  {
    firstName: 'Vivian',
    lastName: 'Trieu',
    majors: [],
    minors: [],
    graduationYear: null,
    positions: [
      {
        titleName: ClubPositionTitle.EBoardMember,
        startYear: 2018,
        endYear: 2019,
      },
    ],
  },
  {
    firstName: 'Yeon Jin',
    lastName: 'Shin',
    majors: [],
    minors: [],
    graduationYear: null,
    positions: [
      {
        titleName: ClubPositionTitle.EBoardMember,
        startYear: 2018,
        endYear: 2019,
      },
    ],
  },
  {
    firstName: 'Faizan',
    lastName: 'Ilyas',
    majors: [],
    minors: [],
    graduationYear: null,
    positions: [
      {
        titleName: ClubPositionTitle.EBoardMember,
        startYear: 2016,
        endYear: 2017,
      },
    ],
  },
  {
    firstName: 'Zachary',
    lastName: 'Sinkiewicz',
    majors: [],
    minors: [],
    graduationYear: null,
    positions: [
      {
        titleName: ClubPositionTitle.EBoardMember,
        startYear: 2016,
        endYear: 2017,
      },
    ],
  },
  {
    firstName: 'Jacob',
    lastName: 'Kupferberg',
    majors: [],
    minors: [],
    graduationYear: null,
    positions: [
      {
        titleName: ClubPositionTitle.Treasurer,
        startYear: 2016,
        endYear: 2017,
      },
    ],
  },
  {
    firstName: 'John',
    lastName: 'Macone',
    majors: [],
    minors: [],
    graduationYear: null,
    positions: [
      {
        titleName: ClubPositionTitle.EBoardMember,
        startYear: 2016,
        endYear: 2017,
      },
    ],
  },
  {
    firstName: 'Albert',
    lastName: 'Stein',
    majors: [],
    minors: [],
    graduationYear: null,
    positions: [
      {
        titleName: ClubPositionTitle.EBoardMember,
        startYear: 2016,
        endYear: 2017,
      },
    ],
  },
  {
    firstName: 'Sofia',
    lastName: 'Parlej',
    majors: [],
    minors: [],
    graduationYear: 2022,
    positions: [
      {
        titleName: ClubPositionTitle.EBoardMember,
        startYear: 2017,
        endYear: 2018,
      },
      {
        titleName: ClubPositionTitle.DirectorCommunityManagement,
        startYear: 2018,
        endYear: 2019,
      },
    ],
  },
  {
    firstName: 'Handell',
    lastName: 'Quiros',
    majors: [AcademicStudy.AerospaceEngineering],
    minors: [],
    graduationYear: 2024,
    positions: [
      {
        titleName: ClubPositionTitle.OfficerBroadcasting,
        startYear: 2021,
        endYear: 2022,
      },
      {
        titleName: ClubPositionTitle.OfficerBroadcasting,
        startYear: 2022,
        endYear: 2023,
      },
      {
        titleName: ClubPositionTitle.OfficerBroadcasting,
        startYear: 2023,
        endYear: 2024,
      },
    ],
    image: handellQuiros2024,
    socialMedia: {
      instagram: 'handell_q',
    },
  },
  {
    firstName: 'Jacob',
    lastName: 'Kupferberg',
    majors: [],
    minors: [],
    graduationYear: 2017,
    positions: [
      {
        titleName: ClubPositionTitle.Treasurer,
        startYear: 2016,
        endYear: 2017,
      },
    ],
    image: jacobKupferberg2017,
  },
  {
    firstName: 'John',
    lastName: 'Macone',
    majors: [],
    minors: [],
    graduationYear: 2017,
    positions: [
      {
        titleName: ClubPositionTitle.EBoardMember,
        startYear: 2017,
        endYear: 2018,
      },
    ],
    image: johnMacone2017,
  },
  {
    firstName: 'Cody',
    lastName: 'Tomchak',
    majors: [],
    minors: [],
    graduationYear: 2024,
    positions: [
      {
        titleName: ClubPositionTitle.NewsAnchorMediaProduction,
        startYear: 2023,
        endYear: 2024,
      },
      {
        titleName: ClubPositionTitle.DirectorMarketing,
        startYear: 2024,
        endYear: 2025,
      },
    ],
    image: codyTomchak2023,
  },
  {
    firstName: 'Danny',
    lastName: 'Onuorah',
    majors: [],
    minors: [],
    graduationYear: 2025,
    positions: [
      {
        titleName: ClubPositionTitle.OfficerTechnology,
        startYear: 2023,
        endYear: 2024,
      },
    ],
    image: dannyOnuorah2023,
  },
  {
    firstName: 'Patrick',
    lastName: 'Masuda',
    majors: [],
    minors: [],
    graduationYear: 2026,
    positions: [
      {
        titleName: ClubPositionTitle.OfficerBroadcasting,
        startYear: 2023,
        endYear: 2024,
      },
      {
        titleName: ClubPositionTitle.OfficerBroadcasting,
        startYear: 2024,
        endYear: 2025,
      },
    ],
    image: patrickMasuda2026,
  },
  {
    firstName: 'John',
    lastName: 'Tran',
    majors: [],
    minors: [],
    graduationYear: 2026,
    positions: [
      {
        titleName: ClubPositionTitle.OfficerBroadcasting,
        startYear: 2024,
        endYear: 2025,
      },
    ],
    image: johnTran2026,
  },
  {
    firstName: 'Katherine',
    lastName: 'Zhao',
    majors: [],
    minors: [],
    graduationYear: 2026,
    positions: [
      {
        titleName: ClubPositionTitle.ManagerRecruitment,
        startYear: 2024,
        endYear: 2025,
      },
    ],
    image: katZhao2026,
  },
  {
    firstName: 'Gia',
    lastName: 'Simone',
    majors: [],
    minors: [],
    graduationYear: 2025,
    positions: [
      {
        titleName: ClubPositionTitle.ManagerSocialMedia,
        startYear: 2024,
        endYear: 2025,
      },
    ],
    image: giaSimone,
  },
  {
    firstName: 'Sophia',
    lastName: 'Yeh',
    majors: [],
    minors: [],
    graduationYear: 2026,
    positions: [
      {
        titleName: ClubPositionTitle.DirectorHumanResources,
        startYear: 2024,
        endYear: 2025,
      },
      {
        titleName: ClubPositionTitle.ManagerRecruitment,
        startYear: 2023,
        endYear: 2024,
      },
    ],
    image: sophiaYeh2026,
  },
  {
    firstName: 'Kilala',
    lastName: 'Yamamoto',
    majors: [],
    minors: [],
    graduationYear: 2027,
    positions: [
      {
        titleName: ClubPositionTitle.DirectorVideoProduction,
        startYear: 2024,
        endYear: 2025,
      },
    ],
    image: kilalaYamamoto2027,
  },
  {
    firstName: 'Malik',
    lastName: 'Lekmine',
    majors: [],
    minors: [],
    graduationYear: 2024,
    positions: [
      {
        titleName: ClubPositionTitle.OfficerHumanResources,
        startYear: 2022,
        endYear: 2023,
      },
      {
        titleName: ClubPositionTitle.OfficerHumanResources,
        startYear: 2023,
        endYear: 2024,
      },
    ],
    image: malikLekmine2024,
  },
]
