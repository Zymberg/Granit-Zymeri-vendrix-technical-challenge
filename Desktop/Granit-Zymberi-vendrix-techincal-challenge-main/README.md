# ⚛️ Technical Challenge @ Vendrix

This challenge is designed to allow candidates an opportunity to demonstrate your ability as a software engineer. Implementing the listed requirements is designed to be completed within 2-4 hours.

## Why are we doing this?

As a financial technology company, we are very concerned with accurate and enriched data content with a UI/UX for everyone. This is an opportunity to demonstrate your ability to make product decisions, produce quality, well-documented code, and problem solve.

<br>

## About Vendrix

At Vendrix, we care about our customers' experience with expense management in a highly complex industry - construction. The Vendrix team has a strong background in the construction industry. We understand the headache of enterprise-level expense management. Our application aims to make this process easier through our Vendrix app and credit card.

For more information, visit [our website](https://vendrix.co).

<br>

---

<br>

# Development environment

## Prerequisites

You will need to have the following packages installed on your machine. You may already have everything needed. If not, installation instructions are linked below.

- Redis: [install](https://redis.io/docs/getting-started/#:~:text=Redis%20server%20process.-,Install%20Redis,-How%20you%20install)

- Node: version <= 16 and >= 10

- Yarn package manager: [install](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)

## Getting started

To get you started, this repo was created to include two development environments - frontend & backend.

- The "frontend" folder contains a Next.js, MUI template copied from [MUI Next.js with Typescript](https://github.com/mui/material-ui/tree/master/examples/nextjs-with-typescript) repository.

- The "backend" folder contains a Node, Express, Redis template.

###### Steps to complete:

**_IMPORTANT_**

1. Ensure you have above packages installed
2. Clone (do not fork) the repo: `git clone git@github.com:Vendrix-Inc/technical-challenge-2022.git`
3. Open the repo in VS Code
4. Create your own public repo under your Github account with the name `${firstName}-${lastName}-vendrix-technical-challenge`
5. Add your newly created git hub repository as a remote `git remote set-url origin https://github.com/user/repo.git`
6. Verify new remote is added `git remote -v`
   > origin https://github.com/user/repo.git (fetch)
   > origin https://github.com/user/repo.git (push)
7. Push the repository to the newly added remote (your github account) `git push --mirror origin`
8. Complete the challenge as described, committing your work often.
   _when ready to submit_
9. Email the Vendrix team to notify your submission with a link to your GitHub repo.

<br>

---

<br>

# Challenge Summary

Your challenge is split into two phases:

- In the **[first phase](#first-phase)**, your objective is to build a basic form to capture new user data.
- In the **[second phase](#second-phase)**, your objective is complete an endpoint which returns data queried from a GraphQL API.

## First Phase

###### _~2 hours - The frontend_

### Introduction

One of the basic functions of a client-side application is user input. A good form for a frontend application should be performant, intuitive, and accurate. Ensuring accuracy with our defined schemas requires data validation during data capture.

### Objective

The goal of this first phase is to implement a form as described in the [frontend README](./frontend/README.md)

Try your best to implement everything within the time frame. If you do find yourself running short on time, you may:

- drop behaviors of your choosing. Please **document the behaviors you drop and why**.
- only one browser support (of your choice)
- no touch screen support
- no dark mode support
- no right-to-left support

## Second phase

###### _~1-2 hours - The backend_

### Introduction

In our Vendrix app, we handle a lot of data and events. In this stripped backend API, there is only one entrypoint implemented ('/'). This endpoint is already complete with no additional work required and serves as the data provider to the frontend as outlined below.

#### Currently Implemented

##### Endpoint: '/'

###### Queries

- getAllUsers

###### Mutations

- createUser

#### Unimplemented (TODO)

##### Endpoint: '/cards/:cardId'

### Objectives

The goal of the second phase is to implement the missing endpoint as described in the [backend README](./backend/readme.md)

<br>

---

<br>

_Thanks!_
