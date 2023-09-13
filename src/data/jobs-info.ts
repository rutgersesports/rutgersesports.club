export type Job = {
  departmentName: string
  desc: string
  form: string
  isHidden: boolean
}

export const jobs: Array<Job> = [
  {
    departmentName: "Artist's Alley",
    desc: "Register to become part of Artist's alley during Scarlet Knightmare (10/28)",
    form: 'https://forms.gle/LfGH6peTC4FojPYb8',
    isHidden: false,
  },
  {
    departmentName: 'Partnership',
    desc: 'Network with big esports industry members while cultivating sponsorships and partnerships',
    form: 'https://forms.gle/iCiqTvGrmWM8hiGZ9',
    isHidden: false,
  },
  {
    departmentName: 'Graphic Design',
    desc: 'Create visual content for social media promotions and stream layouts',
    form: 'https://forms.gle/HnptTQcEN5RP2WhQ7',
    isHidden: false,
  },
  {
    departmentName: 'Media Production',
    desc: 'Script, film trailers and capture moments at events hosted by the club',
    form: 'https://forms.gle/8raPQ4AtPxrLfmju8',
    isHidden: false,
  },
  {
    departmentName: 'Technology',
    desc: 'Contribute to open source utilized by the community',
    form: 'https://forms.gle/wVhWd5CWr8zaxANy9',
    isHidden: true,
  },
  {
    departmentName: 'Competitive',
    desc: 'Manage competitive teams within the club',
    form: 'https://forms.gle/mBUkQhryZhDjc7YH8',
    isHidden: true,
  },
  {
    departmentName: 'Human Resources',
    desc: 'Perform internal affairs such as conducting interviews and scheduling major events',
    form: 'https://forms.gle/LRpPzXgMrT8aCZcR6',
    isHidden: false,
  },
  {
    departmentName: 'Social Media',
    desc: 'Expand our brand online on our major platforms (Twitter, Instagram, Discord, etc)',
    form: 'https://forms.gle/8TKkaTs7bNgZ8p5A8',
    isHidden: false,
  },
  {
    departmentName: 'Broadcasting',
    desc: 'Assist with broadcasting our events and tournaments on Twitch or Youtube',
    form: 'https://forms.gle/WVyjs4CQoKWYtBGY9',
    isHidden: false,
  },
]
