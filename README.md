# router

[DEMO VIDEO](https://drive.google.com/file/d/1jb4G5cMmHDgBdvWNm_KJuEYxppxVcBvl/view?usp=sharing)


**How to run this exercise ?**

**Step1:** `git clone https://git.evizi.com/huy.tran/router.git`

**Step2:** `cd router`

**Step3:** `npm install`

**Step4:** `npm run dev`


Solutions for this exercise: I have used useEffect in each wrap router to check the role of user. If the user don't match with the conditional on the useEffect I will redirect user to `/inspections`. Example you have 2 components and `component2` is children of `component1` with this situation useEffect of `component1` will run before useEffect of `component2` that mean useEffect of component parent will run before useEffect of component children. Base on that i have define each wrap route and useUseEffect to check. 

