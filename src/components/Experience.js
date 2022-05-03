const Experience = () => {
    return (
        <div className="experience">
            <h2 className="text-glow">Experience</h2>

            <ul>
                <li>
                    <i>Weber State University</i> - Computer Engineering, 2018-2021
                    <ul>
                        <li>Graduated with High Honors</li>
                        <li>Courses on Object Oriented Programming, Automated Testing, Application Design Theory and Low-level embedded systems</li>                    
                    </ul>
                </li>
                <li>
                    <i>TNT</i> - Co-founder/Lead Developer, 2020-Present
                    <ul>
                        <li>
                            Overview and develop control system for window tint that can change its opacity <strong>from idea concept to production</strong>.
                        </li>
                        <li> Lead team of 3 people to create control system software using C & <strong>Python</strong>. </li>

                    </ul>
                </li>
                <li>
                    <i>Weber State University</i> - Research Assistant, 2020-2021
                    <ul>
                        <li>Developed motion detection algorithms given video data of a ball moving through the frame using <strong>Python</strong> machine learning libraries.</li>
                        <li>Used <strong>git</strong> to collaborate on software system</li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default Experience;