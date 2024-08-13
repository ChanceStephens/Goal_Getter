// import React from 'react';

// export default function AboutPage() {
//     return (
//         <div className="about-container">
//             <div className="about-container-welcome">
//                 <h1>Welcome VSchool Students!</h1>
//                 <p>Congratulations on taking the first step towards becoming a full stack JavaScript web developer. As you begin this exciting journey, it's important to acknowledge that what lies ahead is a course that is both arduous and daunting.</p>
//                 <p>You're about to dive into a world of code, where challenges will test your skills and perseverance. This path will demand dedication, hard work, and a willingness to push through obstacles.</p>
//                 <p>But fear not! With this App, determination, and the support of your instructors and peers, you'll overcome every hurdle that comes your way. Remember, every line of code you write brings you one step closer to mastering the art of web development.</p>
//                 <p>This App was built by one of your peers, to help you with the struggle of balancing everyday life and becoming a web developer. By entering your start date, your desired finish date, and the total story points required to complete Stage 1, this App will calculate the average number of points you need daily to complete the course by the date you chose. After that, each day, even if it's 0, submit the number of story points you completed for the day, and watch your progress be tracked and posted. The app gives you the momentum of completing small tasks and goals. Eases your mind when you are ahead and want to spend time with the family or go out with your friends, or maybe you are behind and need to put in a couple of extra hours of school or request some help. Either way, you now have the tool to track your pace on the journey.</p>
//                 <p>So, embrace the journey ahead with enthusiasm and grit. Together, we'll navigate the complexities of JavaScript and emerge as skilled full stack developers ready to make an impact in the tech industry.</p>
//                 <p>Welcome aboard, and let's embark on this thrilling adventure together!</p>
//             </div>
//         </div>
//     );
// }


import React from 'react'
import './pages-styles/About.css'

export default function AboutPage() {

    return(
        <div className="about-container">
            <div className="about-container-welcome">
                <h1>Welcome VSchool Students!</h1>
                <p>  Congratulations on taking the first step towards becoming a full stack JavaScript web developer. As you begin this exciting journey, it's important to acknowledge that what lies ahead is a course that is both arduous and daunting.</p>
                <p>You're about to dive into a world of code, where challenges will test your skills and perseverance. This path will demand dedication, hard work, and a willingness to push through obstacles.</p>
                <p>But fear not! With the Goal Getter App, determination, and the support of your instructors and peers, you'll overcome every hurdle that comes your way. Remember, every line of code you write brings you one step closer to mastering the art of web development.</p>
                <p>The Goal Getter App was built by one of your peers, to help you with the struggle of balancing everyday life and becoming a web developer. By entering your start date, your desired finish date, and the total story points required to complete Stage 1, this App will calculate the average number of points you need daily to complete the course by the date you chose.  After that, each day, even if it's 0, submit the number of story points you completed for the day, and watch your progress be tracked and posted. This app gives you the momentum of completing small tasks and goals, eases your mind when you are ahead and want to spend time with the family or go out with your friends, or maybe you are behind and need to put in a couple of extra hours of school or request some help. Either way, you now have the tool to track your pace on the journey.</p>
                <p>So, embrace the journey ahead with enthusiasm and grit. Together, we'll navigate the complexities of JavaScript and emerge as skilled full stack developers ready to make an impact in the tech industry.</p> 
                <p>Welcome aboard, and let's embark on this thrilling adventure together!" </p>
            </div>
        </div>
    )
}