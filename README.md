# Project Overview

## Project name: Squirrel Safari

Link coming soon

## Project Description

Squirrel Safari is an updated version of my [P1 Squirrel Safari](https://github.com/timhausweiler/p1-squirrel-safari). This app's second version will not only allow users to read through other user's stories about observations of the squirrel population in Central Park, but in addition will also allow users to submit their own stories. These stories will then be added to our collection of stories and will be made available to read for all other users.

## Wireframes

<img src ="https://lh3.googleusercontent.com/pw/AM-JKLX2NpbbVJZUzy0EKVn-LsFcYNTVqNckBBiG23GE3Y60zxwOqULgprbd4G4wWA4GCWdJd9C_2_0twxAsOB_bfQg7wAVkYCUCYbICRATPzXb-hdbazeQi-Ijm0CHuwbZpO1Os72AsK-pDIJW-drMshJF5bw=w1928-h1162-no?authuser=0" alt = "Desktop Wireframe Home" width = 400>
<img src ="https://lh3.googleusercontent.com/pw/AM-JKLXXj6TMjiPl3pNRl4ji_6AIhl_oKZFwIbN5Ry06Zxpw7CE9VJPXanLuqHWKj4r2fne2Ks-IHMeOoPAHFBy1B2aXUL3hWY-r6mt9BI6UzwyAp1Pdnx_3QV5ubh0yA1LtPA1Hr28acbtfOxCs7xYZw3OwkQ=w1926-h1162-no?authuser=0" alt = "Desktop wireframe take a walk" width = 400>
<img src ="https://lh3.googleusercontent.com/pw/AM-JKLW9jQVWhNvQ8E_gam6Yv7jm4KnSFc7OV0r416mWCEn7xTCN6OKgXti2gaAjpDhTXlnrYnub_VQ7jg-880sE8ze20m8TW9G8cr78f9mmI-3wU3a_Ut1-188j7Tdurp-oB8mNSKOb1cHYnwgz8tU56oAexw=w1928-h1164-no?authuser=0" alt = "Desktop wireframe submit" width = 400>
<br/>
<img src ="https://lh3.googleusercontent.com/pw/AM-JKLUiCkVL2_teoQiWbcOh3A8xdjELJ8vMrsDdUgRIsKij7bZKL1hKpyiYtgJVfDMR3mlgnCuUUow556S_BE8EJfLIgctWKbXT2Pc4WSuJkxiTk1xqziIdE786n9BPU18XUv3KJmIMlLFd1HctzooEmboDyg=w524-h954-no?authuser=0" alt = "Mobile wireframe home" width = 200>
<img src ="https://lh3.googleusercontent.com/pw/AM-JKLXh9ppKI2t-N49Ztq0F_8_BwY2OG7kiuZxMkUPyQ0hRceOIuvbXskPP9UB6y1gviHbD1VO2M2phrNnOVa6fTdiqj1ATEjUboo6IocjAV20aqMym2Vp0Fj1f29GM1sqhRwqMTAWA739vec56cZdvc17MRQ=w522-h952-no?authuser=0" alt = "Mobile wireframe take a walk" width = 200>
<img src ="https://lh3.googleusercontent.com/pw/AM-JKLXSF9-KyftLLYjv4X6FhXe4gt_itnXc9IMBVEHbPttdi2wTMheoDFPTimhyWuLkLIyJ4P7fQDBKdZvbFM0Cfsc-GCv0_Ke7AyrG460NzErpNtyBrUI3tOEkA8E1DEEK2I7ssEI6vQsv15F8nGswIq9emQ=w526-h954-no?authuser=0" alt = "Mobile wireframe submit" width = 200>

## Component Hierarchy

<img src ="https://lh3.googleusercontent.com/pw/AM-JKLVgVrfxdbJzwwj_sZmn33g36wqXvrzewrw59pqIQ8jrqxwSHQVQPQj_olz6X5FEyHteUM-pb8Ch7xMLapIyTx9_B_llKHGnKgA23WISvgmQh4ywtzuclc98s-oqXPRXUGZZL1vdpiy1yWkQJVPlqlYGHA=w1274-h662-no?authuser=0" alt = "Component hierarchy" width = 400>

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

| Day     | Deliverable                               | Status   |
| ------- | ----------------------------------------- | -------- |
| Jan9-10 | Proposal Approval / Airtable Setup        | Complete |
| Jan 10  | Creating react-app and component Creation | Complete |
| Jan 11  | Get and Set Data                          | Complete |
| Jan 12  | Router functionality                      | Complete |
| Jan 13  | Styling and responsiveness                | WIP      |
| Jan 14  | Presentations                             |          |

## Timeframes

| Component                  | Priority | Estimated Time | Time Invested | Actual Time |
| -------------------------- | :------: | :------------: | :-----------: | :---------: |
| Proposal                   |    H     |      4hrs      |     4hrs      |    4hrs     |
| Airtable setup             |    H     |     .5hrs      |      1hr      |     1hr     |
| Initial setup of react app |    H     |      1hr       |      1hr      |     1hr     |
| Get functionality          |    H     |      4hrs      |     4hrs      |    4hrs     |
| Set functionality          |    H     |      4hrs      |     4hrs      |    4hrs     |
| Router functionality       |    H     |      4hrs      |     4hrs      |    4hrs     |
| Setting up components      |    H     |      4hrs      |     4hrs      |    4hrs     |
| Component functionality    |    H     |      8hrs      |     8hrs      |    8hrs     |
| Styling                    |    H     |      4hrs      |     5hrs      |    5hrs     |
| Responsiveness             |    H     |      4hrs      |     4hrs      |    4hrs     |
| Misc / bug fixes           |    H     |      4hrs      |     2hrs      |    2hrs     |
| Total                      |    H     |    41.5hrs     |     41hrs     |    41hrs    |

## SWOT Analysis

### Strengths:

I have a pretty precise idea of what I want my app to be able to do and how to implement it.

### Weaknesses:

I'm a little worried about styling and responsiveness.

### Opportunities:

Based on my current plan, I'll be able to put to work all the things I learned within Unit 2 of our course.

### Threats:

I'm a little worried about getting stuck with some of the details (especially styling): I should make sure that I work efficiently by first making sure my app's functionality is working before spending too much time on other, less important details.
