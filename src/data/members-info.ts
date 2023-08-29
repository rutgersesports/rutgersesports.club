import { StaticImageData } from 'next/image'
import adamBaugh2017 from '../images/members/adam-baugh.png'
import aedanDispenza2016 from '../images/members/aedan-dispenza.jpg'
import alexHer2022 from '../images/members/alex-her.jpg'
import alisonLiu2024 from '../images/members/alison-liu.jpg'
import andrewHarper2025 from '../images/members/andrew-harper.jpg'
import andrewHong2026 from '../images/members/andrew-hong.jpg'
import andrewPark2022 from '../images/members/andrew-park.jpg'
import anthonyZhang2025 from '../images/members/anthony-zhang.jpeg'
import byanneTan2025 from '../images/members/byanne-tan.jpg'
import eanneChang2023 from '../images/members/eanne-chiang.jpg'
import finnKliewer2024 from '../images/members/finn-kliewer.jpeg'
import ishaanKeswani2024 from '../images/members/ishaan-keswani.jpg'
import jonathanJackson2022 from '../images/members/jonathan-jackson.jpg'
import julianLee2021 from '../images/members/julian-lee.jpg'
import julieNghiem2023 from '../images/members/julie-nghiem.jpg'
import kylePerry2025 from '../images/members/kyle-perry.jpg'
import kamalPaspuleti from '../images/members/kamal-paspuleti.jpg'
import lunaLee2024 from '../images/members/luna-lee.jpg'
import sethSantos2021 from '../images/members/seth-santos.jpg'
import tiffanyChen2021 from '../images/members/tiffany-chen.jpg'
import rileyHerrera2025 from '../images/members/riley-herrera.png'
import victoriaChen2024 from '../images/members/victoria-chen.jpg'
import victorOkoye2023 from '../images/members/victor-okoye.jpg'
import vincenzoDiMatteo2022 from '../images/members/vincenzo-diMatteo.jpg'

export type ClubPosition = {
  titleName: ClubPositionTitle
  startYear: number
  endYear: number
}

export type Member = {
  firstName: string
  lastName: string
  majors: Array<AcademicStudy>
  minors: Array<AcademicStudy>
  graduationYear: number | null
  positions: Array<ClubPosition>

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
Associates are not meant to be in the timeline as their efforts were not recognized to
become an officer or higher.
*/
export enum ClubPositionTitle {
  President = 'President',
  VicePresident = 'Vice President',
  Treasurer = 'Treasurer',
  Secretary = 'Secretary',
  DirectorCompetitiveManagement = 'Director of Competitive Management',
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
  ManagerMediaProduction = 'Media Production Manager', // alias: 'Video Production Manager'
  ManagerGraphics = 'Graphics Manager',
  ManagerSocialMedia = 'Social Media Manager',
  ManagerRecruitment = 'Recruitment Manager',
  ManagerWebsite = 'Website Manager',
  ManagerBroadcasting = 'Broadcasting Manager',
  OfficerBroadcasting = 'Broadcasting Officer',
  OfficerHumanResources = 'Human Resources Officer',
  OfficerTechnology = 'Technology Officer',
  OfficerSocialMedia = 'Social Media Officer',
  OfficerGraphicDesign = 'Graphic Design Officer',
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
        titleName: ClubPositionTitle.ManagerRecruitment,
        startYear: 2022,
        endYear: 2023,
      },
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
  },
  {
    firstName: 'Ronald',
    lastName: 'Barrantes',
    majors: [AcademicStudy.ITI],
    minors: [],
    graduationYear: 2024,
    positions: [
      {
        titleName: ClubPositionTitle.Secretary,
        startYear: 2021,
        endYear: 2022,
      },
    ],
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
        titleName: ClubPositionTitle.DirectorVideoProduction,
        startYear: 2017,
        endYear: 2018,
      },
    ],
    image: julianLee2021,
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
    ],
    image: andrewHong2026,
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
    ],
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
        titleName: ClubPositionTitle.President,
        startYear: 2018,
        endYear: 2019,
      },
      {
        titleName: ClubPositionTitle.President,
        startYear: 2019,
        endYear: 2020,
      },
    ],
  },
  {
    firstName: 'Kyle',
    lastName: 'Frick',
    majors: [AcademicStudy.ComputerScience],
    minors: [],
    graduationYear: 2019,
    positions: [
      {
        titleName: ClubPositionTitle.VicePresident,
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
    firstName: 'Sebastian',
    lastName: 'Romero',
    majors: [AcademicStudy.HumanResources],
    minors: [AcademicStudy.Psychology, AcademicStudy.History],
    graduationYear: 2020,
    positions: [
      {
        titleName: ClubPositionTitle.DirectorHumanResources,
        startYear: 2017,
        endYear: 2018,
      },
      {
        titleName: ClubPositionTitle.DirectorHumanResources,
        startYear: 2018,
        endYear: 2019,
      },
      {
        titleName: ClubPositionTitle.VicePresident,
        startYear: 2017,
        endYear: 2018,
      },
      {
        titleName: ClubPositionTitle.VicePresident,
        startYear: 2018,
        endYear: 2019,
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
    ],
  },
  {
    firstName: 'Diego',
    lastName: 'Corea',
    majors: [AcademicStudy.ITI],
    minors: [],
    graduationYear: 2019,
    positions: [
      {
        titleName: ClubPositionTitle.ManagerSocialMedia,
        startYear: 2016,
        endYear: 2017,
      },
      {
        titleName: ClubPositionTitle.ManagerSocialMedia,
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
        startYear: 2016,
        endYear: 2017,
      },
      {
        titleName: ClubPositionTitle.DirectorCompetitiveManagement,
        startYear: 2017,
        endYear: 2018,
      },
      {
        titleName: ClubPositionTitle.DirectorCompetitiveManagement,
        startYear: 2018,
        endYear: 2019,
      },
    ],
  },
  {
    firstName: 'Alice',
    lastName: 'Balashova',
    majors: [],
    minors: [],
    graduationYear: 2019,
    positions: [
      {
        titleName: ClubPositionTitle.DirectorSocialMedia,
        startYear: 2017,
        endYear: 2018,
      },
    ],
  },
  {
    firstName: 'Aaron',
    lastName: 'Landry',
    majors: [AcademicStudy.EngineeringPhysics, AcademicStudy.AppliedPhysics],
    minors: [],
    graduationYear: 2019,
    positions: [
      {
        titleName: ClubPositionTitle.DirectorTechnology,
        startYear: 2017,
        endYear: 2018,
      },
      {
        titleName: ClubPositionTitle.ManagerWebsite,
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
        titleName: ClubPositionTitle.DirectorEvents,
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
        titleName: ClubPositionTitle.DirectorCompetitiveManagement,
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
  },
  {
    isFounder: true,
    firstName: 'Alex',
    lastName: 'Um',
    majors: [],
    minors: [],
    graduationYear: null,
    positions: [],
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
        titleName: ClubPositionTitle.DirectorGraphicDesign,
        startYear: 2016,
        endYear: 2017,
      },
    ],
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
      {
        titleName: ClubPositionTitle.OfficerHumanResources,
        startYear: 2023,
        endYear: 2024,
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
        titleName: ClubPositionTitle.DirectorEvents,
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
    isHidden: true,
    firstName: 'Gaurav',
    lastName: 'Deshpande',
    majors: [],
    minors: [],
    graduationYear: null,
    positions: [],
  },
  {
    isHidden: true,
    firstName: 'Jacob',
    lastName: 'Moffatt',
    majors: [],
    minors: [],
    graduationYear: null,
    positions: [],
  },
]
