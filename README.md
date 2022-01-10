# Project Overview 

## Project name: Squirrel Safari

Link coming soon

## Project Description

Squirrel Safari is an updated version of my [P1 Squirrel Safari](https://github.com/timhausweiler/p1-squirrel-safari). This app's second version will not only allow users to read through other user's stories about observations of the squirrel population in Central Park, but in addition will also allow users to submit their own stories. These stories will then be added to our collection of stories and will be made available to read for all other users.

## Wireframes

![Desktop wireframe home](https://lh3.googleusercontent.com/pw/AM-JKLX2NpbbVJZUzy0EKVn-LsFcYNTVqNckBBiG23GE3Y60zxwOqULgprbd4G4wWA4GCWdJd9C_2_0twxAsOB_bfQg7wAVkYCUCYbICRATPzXb-hdbazeQi-Ijm0CHuwbZpO1Os72AsK-pDIJW-drMshJF5bw=w1928-h1162-no?authuser=0)
![Desktop wireframe take a walk](https://lh3.googleusercontent.com/pw/AM-JKLXXj6TMjiPl3pNRl4ji_6AIhl_oKZFwIbN5Ry06Zxpw7CE9VJPXanLuqHWKj4r2fne2Ks-IHMeOoPAHFBy1B2aXUL3hWY-r6mt9BI6UzwyAp1Pdnx_3QV5ubh0yA1LtPA1Hr28acbtfOxCs7xYZw3OwkQ=w1926-h1162-no?authuser=0)
![Desktop wireframe submit](https://lh3.googleusercontent.com/pw/AM-JKLW9jQVWhNvQ8E_gam6Yv7jm4KnSFc7OV0r416mWCEn7xTCN6OKgXti2gaAjpDhTXlnrYnub_VQ7jg-880sE8ze20m8TW9G8cr78f9mmI-3wU3a_Ut1-188j7Tdurp-oB8mNSKOb1cHYnwgz8tU56oAexw=w1928-h1164-no?authuser=0)

![Mobile wireframe home](https://lh3.googleusercontent.com/pw/AM-JKLUiCkVL2_teoQiWbcOh3A8xdjELJ8vMrsDdUgRIsKij7bZKL1hKpyiYtgJVfDMR3mlgnCuUUow556S_BE8EJfLIgctWKbXT2Pc4WSuJkxiTk1xqziIdE786n9BPU18XUv3KJmIMlLFd1HctzooEmboDyg=w524-h954-no?authuser=0)
![Mobile wireframe take a walk](https://lh3.googleusercontent.com/pw/AM-JKLXh9ppKI2t-N49Ztq0F_8_BwY2OG7kiuZxMkUPyQ0hRceOIuvbXskPP9UB6y1gviHbD1VO2M2phrNnOVa6fTdiqj1ATEjUboo6IocjAV20aqMym2Vp0Fj1f29GM1sqhRwqMTAWA739vec56cZdvc17MRQ=w522-h952-no?authuser=0)
![Mobile wireframe submit](https://lh3.googleusercontent.com/pw/AM-JKLXSF9-KyftLLYjv4X6FhXe4gt_itnXc9IMBVEHbPttdi2wTMheoDFPTimhyWuLkLIyJ4P7fQDBKdZvbFM0Cfsc-GCv0_Ke7AyrG460NzErpNtyBrUI3tOEkA8E1DEEK2I7ssEI6vQsv15F8nGswIq9emQ=w526-h954-no?authuser=0)


## Component Hierarchy

![Component hierarchy](https://lh3.googleusercontent.com/pw/AM-JKLVgVrfxdbJzwwj_sZmn33g36wqXvrzewrw59pqIQ8jrqxwSHQVQPQj_olz6X5FEyHteUM-pb8Ch7xMLapIyTx9_B_llKHGnKgA23WISvgmQh4ywtzuclc98s-oqXPRXUGZZL1vdpiy1yWkQJVPlqlYGHA=w1274-h662-no?authuser=0)

## API and Data Sample

[Airtable](https://airtable.com/invite/l?inviteId=invEqngm0hclCeYsR&inviteToken=3029fa974c49db8b771dc40c01ef6368683ee7c8bf13dff490146d4515136bdd&utm_source=email) 

Airtable is returning the data for this base as follows:

```
{
    "records": [
        {
            "id": "recB6TTY0qU6PMDku",
            "fields": {
                "Name": "Tim",
                "Date": "2021-12-31",
                "Location": "Northern Half",
                "Your story": "Saw a squirrel - it was cool!"
            },
            "createdTime": "2022-01-10T11:38:32.000Z"
        },
        {
            "id": "recXZyiKMib16PyUL",
            "fields": {},
            "createdTime": "2022-01-10T11:38:32.000Z"
        },
        {
            "id": "reczZW7Kr3s9Kf1pF",
            "fields": {},
            "createdTime": "2022-01-10T11:38:32.000Z"
        }
    ],
    "offset": "itrIR7V99jwPOqk0q/reczZW7Kr3s9Kf1pF"
}
```

### MVP/PostMVP

#### MVP

- Landing page
- "Take a walk"-functionality that loads random story from API and renders it
- "Submit your own"-functionality that allows users to submit their own story

#### PostMVP

- Header for easier navigation
- Edit submitted story
- Overview of all stories submitted
- Delete submitted story

## Project Schedule

| Day      | Deliverable                                | Status   |
| -------- | ------------------------------------------ | -------- |
| Jan9-10  | Proposal Approval / Airtable Setup         | WIP      |
| Jan 10   | Creating react-app and component Creation  |          |
| Jan 11   | Get and Set Data                           |          |
| Jan 12   | Router functionality                       |          |
| Jan 13   | Styling and responsiveness                 |          |
| Jan 14   | Presentations                              |          |

## Timeframes

| Component                 | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------- | :------: | :------------: | :-----------: | :---------: |
| Proposal                  |    H     |      2hrs      |     2hrs      |    2hrs     |
| Airtable setup            |    H     |     .5hrs      |      1hr      |     1hr     |
| Clickable icons           |    H     |      1hrs      |      1hr      |     1hr     |
| Data population pg 1      |    H     |      3hrs      |     3hrs      |    3hrs     |
| Data population pg 2      |    H     |      3hrs      |     2hrs      |    2hrs     |
| Data population pg 3      |    H     |      3hrs      |     2hrs      |    2hrs     |
| Form creation pg 1        |    H     |      2hrs      |     2hrs      |    2hrs     |
| Form creation pg 2        |    H     |      2hrs      |     1 hr      |    1 hr     |
| Form creation pg 3        |    H     |      2hrs      |     1 hr      |     1hr     |
| Data creation/update pg 1 |    H     |      3hrs      |     3hrs      |    3hrs     |
| Data creation/update pg 2 |    H     |      3hrs      |      1hr      |     1hr     |
| Data creation/update pg 3 |    H     |      3hrs      |      1hr      |     1hr     |
| Data deletion pg 1        |    H     |      2hrs      |      1hr      |     1hr     |
| Data deletion pg 2        |    H     |      2hrs      |      1hr      |     1hr     |
| Data deletion pg 3        |    H     |      2hrs      |      1hr      |     1hr     |
| Component CSS pg 1        |    H     |      3hrs      |     4hrs      |    4hrs     |
| Component CSS pg 2        |    H     |      3hrs      |     4hrs      |    4hrs     |
| Component CSS pg 3        |    H     |      3hrs      |     4hrs      |    4hrs     |
| Total                     |    H     |    42.5hrs     |     35hrs     |    35hrs    |

## SWOT Analysis

### Strengths:

I have a good understanding of what i want my application to look like and what exactly I want it to do. As such, I can better plan for what needs to be done and how long it will take. I also know which labs and excercise I can reference if I get lost along the way.

### Weaknesses:

I am still not terribly clear on CRUD and how to make sure I can carry each aspect out for this project. Additionally, I prefer to stick to functional components but given the parameters of the project, I'll need to use class components, as well. I will likely use most of my research time/manager help on these matters.

### Opportunities:

This project is the culmination of the last 2 weeks and will give me an opportunity to solidify my understanding of react. I also happen to be interested in the function of my app given my interests, so I am motivated to make it look usable and attractive.

### Threats:

Whenever I get stuck with an error or an issue, I tend to go down a rabbit hole of online searches and debugging. Often times, I don't timebox these episodes and lose a lot of time. While this is typically a favorable characteristic in a developer, I'll need to make sure I know when to ask for help.
