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
}

/*
Associates are not meant to be in the timeline as their efforts were not recognized to
become an officer or higher.
*/
enum ClubPositionTitle {
  Founder = 'Founder',
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
}

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
        startYear: 2021,
        endYear: 2022,
      },
    ],
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
        startYear: 2015,
        endYear: 2016,
      },
    ],
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
        startYear: 2019,
        endYear: 2020,
      },
      {
        titleName: ClubPositionTitle.President,
        startYear: 2020,
        endYear: 2021,
      },
    ],
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
  },
  {
    firstName: 'Eanne',
    lastName: 'Chiang',
    majors: [AcademicStudy.Accounting, AcademicStudy.Marketing],
    minors: [],
    graduationYear: null,
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
  },
  {
    firstName: 'Kamal',
    lastName: 'Paspuleti',
    majors: [AcademicStudy.ComputerEngineering],
    minors: [],
    graduationYear: 2023,
    positions: [
      {
        titleName: ClubPositionTitle.DirectorEvents,
        startYear: 2022,
        endYear: 2023,
      },
      {
        titleName: ClubPositionTitle.DirectorBroadcasting,
        startYear: 2021,
        endYear: 2022,
      },
      {
        titleName: ClubPositionTitle.Secretary,
        startYear: 2020,
        endYear: 2021,
      },
    ],
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
  },
  {
    firstName: 'Ishaan',
    lastName: 'Keswani',
    majors: [AcademicStudy.ComputerEngineering],
    minors: [],
    graduationYear: null,
    positions: [
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
  },
  {
    firstName: 'Andrew',
    lastName: 'Harper',
    majors: [AcademicStudy.Economics, AcademicStudy.ComputerScience],
    minors: [],
    graduationYear: null,
    positions: [
      {
        titleName: ClubPositionTitle.DirectorCompetitiveManagement,
        startYear: 2022,
        endYear: 2023,
      },
    ],
  },
  {
    firstName: 'Aditya',
    lastName: 'Grag',
    majors: [AcademicStudy.Finance],
    minors: [],
    graduationYear: null,
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
    graduationYear: null,
    positions: [
      {
        titleName: ClubPositionTitle.ManagerMediaProduction,
        startYear: 2022,
        endYear: 2023,
      },
    ],
  },
  {
    firstName: 'Alex',
    lastName: 'Her',
    majors: [AcademicStudy.ITI],
    minors: [],
    graduationYear: null,
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
    ],
  },
  {
    firstName: 'David',
    lastName: 'Sotimehin',
    majors: [AcademicStudy.PoliticalScience],
    minors: [AcademicStudy.CreativeWriting],
    graduationYear: null,
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
    graduationYear: null,
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
    majors: [],
    minors: [],
    graduationYear: null,
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
  },
  {
    firstName: 'Zain',
    lastName: 'Bhatti',
    majors: [AcademicStudy.Marketing],
    minors: [],
    graduationYear: null,
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
    graduationYear: null,
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
    graduationYear: null,
    positions: [
      {
        titleName: ClubPositionTitle.DirectorGraphicDesign,
        startYear: 2020,
        endYear: 2021,
      },
    ],
  },
  {
    firstName: 'Andrew',
    lastName: 'Park',
    majors: [AcademicStudy.ComputerScience, AcademicStudy.ElectricalEngineering],
    minors: [],
    graduationYear: null,
    positions: [
      {
        titleName: ClubPositionTitle.DirectorTechnology,
        startYear: 2020,
        endYear: 2021,
      },
    ],
  },
  {
    firstName: 'Julian',
    lastName: 'Lee',
    majors: [AcademicStudy.ComputerScience],
    minors: [],
    graduationYear: null,
    positions: [
      {
        titleName: ClubPositionTitle.DirectorVideoProduction,
        startYear: 2020,
        endYear: 2021,
      },
    ],
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
    ],
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
]
