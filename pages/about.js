import Link from 'next/link'
import Layout from '../component/Layout'
import './App.css'

export default () => {
    return (
        <Layout>
            <h1>About Me</h1>

            <br />
            <p>I'm a very creative and curios person. What interests me the most is the ability to create things that will help people or provide some sort of entertainment. This drives my interest in programming and video editing.</p>
            <p>I began my career in Communication Networking, Information Technology, allowing me to learn the Networking part of IT, how devices communicate with each other, with which i have worked for about 5 years.</p>
            <p>Due to my interest in creating, i taught myself programming languages such as HTML, CSS, Javascript, ReactJS which was used to create this online CV, and IOS Swift.</p>
            <p>My current role is at a security company as a technical support Engineer, with which we help our clients with SSL, SMIME and Code signing ceritifcates which is used to secure the respective website, device, orapplication.</p>


            <p>See my work experience below</p> <br />

            <h3>Work Experience</h3>
                <br></br>
                <p><strong>Technical Support Engineer, Digicert</strong></p>
                <p>July 2018 - Present</p>
                <ul>
                    <li>Provide technical support for DigiCert clients, offering web security, and digital certificates using protocols such as the SSL, TLS etc.</li>
                    <li>Provide assistance in PKI structure, Codesigning, HTML, DNS, S/MIME and SMTP.</li>
                    <li>Work with the IIS servers, Apache, Tomcat and more in assisting the customers to install digital Certificates</li>
                </ul>

                <br></br>
                <p><strong>LAN Support Engineer, Imparatech</strong></p>
                <p>November 2016 - June 2018</p>
                <ul>
                    <li>Provide technical support on mobile devices i.e. Android smartphones and tablets</li>
                    <li>Configure and test android mobile devices</li>
                    <li>Enrolment of android mobile devices using SAP Afaria</li>
                    <li>Identify and troubleshoot faulty equipment\devices and provide technical support to Emergency Support Staff</li>
                    <li>SAP GUI support</li>
                    <li>Hardware Support</li>
                    <li>Resolution of calls received through IT Service Desk within a defined SLA</li>
                    <li>Knowledge and skills transfer</li>
                    <li>Support 3G and wireless networks</li>
                    <li>Apply ITIL methodology</li>
                </ul>

                <br></br>
                <p><strong>Technical Support Analyst, NSC Global</strong></p>
                <p>March 2014 - January 2016</p>
                <ul>
                    <li>Provide technical support on mobile devices i.e. Android smartphones and tablets</li>
                    <li>Prepare and issue daily KPI report to Senior Management</li>
                    <li>Collate and issue the external RAID log</li>
                    <li>Providing regular status reports and statistical analysis</li>
                    <li>Provide advice and assistance to the different teams in the writing of their processes and procedures</li>
                    <li>Maintain a register of processes and procedures</li>
                    <li>Ensure PES clearance procedures are carried out for every new candidate on a timely basis</li>
                </ul>

                <br></br>
                <p><strong>Systems and Network Administrator, The Data Factory</strong></p>
                <p>March 2013 - June 2013</p>
                <ul>
                    <li>D-link Firewall and network configuration</li>
                    <li>Daily backup on window server 2008</li>
                    <li>Desktop Support</li>
                </ul>


                <p>See my Education experience below</p> <br />

                <h3>Education</h3>
                    <br></br>
                    <p><strong>Cape Peninsula University of Technology</strong></p>
                    <p>Bachelor's degree, Information Technology</p>
                    <p>2012</p>


                    <br></br>
                    <p><strong>Cape Peninsula University of Technology</strong></p>
                    <p>National Diploma, Information Technology</p>
                    <p>2009 - 2011</p>
                
        </Layout>
    );
    
}