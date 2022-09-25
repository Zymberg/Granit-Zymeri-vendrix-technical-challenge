# 🧑‍💻 Technical Challenge @ Frontend

##### Start Frontend

1. Open a terminal in the "frontend" folder
2. Install the dependencies for the "frontend" folder: `yarn`
3. Start the client: `yarn dev`
4. Open http://0.0.0.0:3000/

The frontend challenge consists of a basic form to gather data for a new user. The tech stack used includes:

- next
- @mui
- react-query
- react-hook-form
- zod

In production, the framework for this form would be more complicated, with data caching and optimistic updates offering a seamless UX with large data sets, as well as extensive business logic defining our app flow. To save time, this framework has been stripped to a base state and has been mostly built out.

If you are unfamiliar with any package used in this challenge, make sure to reference the documentation! All packages used have extensive documentation and community support. Part of the challenge is testing your ability to navigate available documentation and community support.

#### !! ATTENTION !!

There is a known React hydration error (in development only) with the MUI/react-query stack used that is documented [here](https://github.com/mui/material-ui/issues/27512). The issue is related to the "styled-components" package, which we are NOT using, but it appears this issue is also related to the "emotion" package, which is the recommended and built-in package for MUI that we ARE using.

You may see the following error message while developing in this repo. Please ignore this expected error, you should still be able to complete the challenge.
<img src="/frontend/public/expected-error.png" width="100%" />

<br>

<br>

## Step 1. Review the Codebase & Configure Application

###### _~0.5 hours - Review/Configure_

### Step 1.1. Review Codebase

Take some time to familiarize yourself with the codebase. Notice how the folder structure is architected and think about what resources that have been provided can help you complete the challenge.

### Step 1.2. Configure application

Because we are using a Next.js frontend and accessing a locally hosted API, we must map client-side requests appropriately to avoid CORS issues.

- [x] Adjust app configuration in "next.config.js".

### Step 1.3. Configure schemas

Think about what data validations would be useful for a "users" document collection.

- [x] Adjust schemas in "src/schemas/users.ts".

<br>

## Step 2. Finish the form

###### _~0.5 hours - Finish form_

### Step 2.1. Add missing fields to form

The form in "src/components/forms/UserCreateUpdateForm.tsx" has been started to help demonstrate how an input component can be used with "react-hook-form" and MUI to construct form data.

- [x] Add the missing input fields and connect them to the form.

<br>

## Step 3. Submit valid data to the API

###### _~0.5 hours - Submit valid data_

### Step 3.1. Validate all fields

The form includes built-in validation via a "zod" schema resolver - specified in the configuration for the "useForm" hook.

Zod schemas includes built-in validation methods to make sure the input data is valid.

Validation is automatically ran within the "useForm" hook via the "zodResolver" using "onTouched" mode (validates on input touch and following onChange events..

- [x] Ensure that all form fields are validated before being submitted.

### Step 3.2. Submit data to API

Because we are leveraging "react-query", we must use the built-in query/mutation methods provided by the package. All query and mutation hooks and API calls have already been built and can be found in the "src/hooks" and "src/api" folders.

The "handleSave" function has already been built with the correct "react-query" query/mutation methods.

**Do not worry about implementing the "updateUser" mutation. Although the form is built to handle both cases and the mutation exists for "updateUser", we are only implementing the "createUser" mutation.**

- [x] Submit valid data to API

<br>

## Step 4. Maximize UI/UX

###### _~0.5 hours - Style form and list_

- [ ] Style/rearrange the "src/components/forms/UserCreateUpdateForm.tsx" component to maximize the UI/UX.

- [ ] Style/rearrange the "src/components/lists/UsersList.tsx" component to maximize the UI/UX.

<br>

## Step 5. Complete written portion

###### _~0.5 hours - Answer questions in README_

- [ ] Answer the below questions here in the README.

<br>

## Step 6. Finalize repo for submission

###### _~10 minutes - Finalize submission_

Before submitting your work, review the submission requirements that were provided in the invitation link.

**_Remember to NOT include "node_modules" or ".next" folders._**

<br>

<br>

---

# Tasks Checklist

Use the below checklist to help keep track of your completed work.

- [x] Example completed task

<br>

### Implementation

- [ ] Review the codebase
- [ ] Configure application in "next.config.js"
- [ ] Configure schemas in "src/schemas/users.ts"
- [ ] Add missing fields/inputs to the form
- [ ] Ensure all input fields are being validated correctly per the "zod" schema
- [ ] Submit valid data to the API
- [ ] Style/rearrange the UserCreateUpdateForm component
- [ ] Style/rearrange the UsersList component

<br>

### Written Portion

- [ ] In your own words, how could this form be optimized? Think in terms of both performance and UI/UX.

  > [YOUR RESPONSE]

- [ ] There is a way to optimize the "StringInput" component (src/components/input/StringInput.tsx) using a React feature. What React feature/s would you use to optimize the component and reduce rerenders?

  > [YOUR RESPONSE]

- [ ] What STEM subject/research/product excites you most and why?

  > [YOUR RESPONSE]

- [ ] Any other thoughts?

  > [YOUR RESPONSE]

  <br>

### Wrapping Up

- [ ] Remove "node_modules" and ".next" folders before submitting
- [ ] Submit per the instructions provided in the invitation
