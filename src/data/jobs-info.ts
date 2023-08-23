export type Job = {
  teamName: string
  desc: string
  form: string
  hidden: boolean
}

export const jobs: Array<Job> = [
  {
    teamName: 'Graphic Design',
    desc: 'Create visual content for promotion and the club in general',
    form: 'https://forms.gle/HnptTQcEN5RP2WhQ7',
    hidden: false,
  },
  {
    teamName: 'Media Production',
    desc: 'Capture moments at events hosted by the club',
    form: 'https://forms.gle/8raPQ4AtPxrLfmju8',
    hidden: false,
  },
  {
    teamName: 'Technology',
    desc: 'Contribute to open source utilized by the community',
    form: 'https://forms.gle/wVhWd5CWr8zaxANy9',
    hidden: false,
  },
  {
    teamName: 'Competitive',
    desc: 'Manage competitive teams within the club',
    form: 'https://forms.gle/mBUkQhryZhDjc7YH8',
    hidden: true,
  },
  {
    teamName: 'Partnership',
    desc: 'Help cultivate and maintain relationships between the club and partners',
    form: 'https://forms.gle/iCiqTvGrmWM8hiGZ9',
    hidden: false,
  },
  {
    teamName: 'Human Resources',
    desc: 'Perform internal affairs such as scheduling major events',
    form: 'https://forms.gle/LRpPzXgMrT8aCZcR6',
    hidden: false,
  },
  {
    teamName: 'Social Media',
    desc: 'Expand our brand online such as Twitter, Facebook, Discord, etc',
    form: 'https://forms.gle/8TKkaTs7bNgZ8p5A8',
    hidden: false,
  },
  {
    teamName: 'Broadcasting',
    desc: 'Assist with broadcasting our events and tournaments on Twitch or Youtube',
    form: 'https://forms.gle/WVyjs4CQoKWYtBGY9',
    hidden: false,
  },
]
