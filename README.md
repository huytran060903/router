# router

[FIRST DEMO VIDEO](https://drive.google.com/file/d/1jb4G5cMmHDgBdvWNm_KJuEYxppxVcBvl/view?usp=sharing)

- Need to hide the menu items in the left side which the user does not have permission to access
- Need to handle the unauthorized user to access the page (need to redirect to login page)
- import ProtectedUser from "./components/ProtectedFromUser.jsx"; need to name as ProtectedFromUser for more consistent
- Need to way to switch the user's role to test instead of modifying the code

[DEMO BASE ON FEEDBACK](https://drive.google.com/file/d/1qqeXRhXptH9_M2RPcfErN1FHmQvPn7OK/view?usp=sharing)

**How to run this exercise ?**

**Step1:** `git clone https://git.evizi.com/huy.tran/router.git`

**Step2:** `cd router`

**Step3:** `npm install`

**Step4:** `npm run dev`

Solutions for this exercise: I have used useEffect in each wrap router to check the role of user. If the user don't match with the conditional on the useEffect I will redirect user to `/inspections`. When you access to a specify page it will check useEffect that is wrapping element you accessing and in that useEffect i create a condition for user role.

**Test**:

![h1](https://github.com/huytran060903/router/blob/main/src/assets/images/Screenshot%202025-06-10%20071510.png?raw=true)

