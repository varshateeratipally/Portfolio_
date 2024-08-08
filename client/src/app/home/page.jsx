
'use client';
import Image from "next/image";
import styles from "./styles.module.css"
import React from 'react';
import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const SkillsChart = () => {
  const [horizontalSkills, setHorizontalSkills] = useState([])
  const [circularSkills, setCircularSkills] = useState([])
  
  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/skills", {
          method:"GET",
          headers: { 'content-type': 'application/x-www-form-urlencoded' },
        });
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const allSkills = data.skills
        const fhorizontalSkills = allSkills.filter(skill => skill.layout === 'bar');
        const fcircularSkills = allSkills.filter(skill => skill.layout === 'circle');
        setHorizontalSkills(fhorizontalSkills);
        setCircularSkills(fcircularSkills);
      } catch (error) {
        console.log("error", error);
      }
    };
  
    fetchSkills();
  }, []);
  
  const SixProjects =() =>{
    const [name,setname]= useState([]);
    const [description,setdescription]=useState([]);

    useEffect(() =>{
      const fetchProjects = async () =>{
        try {
          const response = await fetch("http://127.0.0.1:8000/projects", {
            method:"GET",
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
          });
          
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          const allProjects = data.projects
          setname(name);
          setdescription(description);
        } catch (error) {
          console.log("error", error);
        }
      };
    
      fetchSkills();
    }, []);
  }
   
  
  return (
    <div className={styles.skillsChart}>
      <div className={styles.circularSkills}>
        {circularSkills.map((skill, index) => (
          <div key={index} className={styles.skill}>
            <div className={styles.circleContainer}>
              <CircularProgressbar
                value={skill.value}
                text={`${skill.value}%`}
                styles={buildStyles({
                  textColor: ' #482106',
                  pathColor: '#6a4a3a',
                  trailColor: '#D1D3D4',
                  textSize: '16px',
                  pathTransitionDuration: 0.5,
                  strokeLinecap: 'butt',
                  trailWidth: 4,
                })}
                strokeWidth={15}
              />
            </div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
      <div className={styles.horizontalSkills}>
        {horizontalSkills.map((skill, index) => (
          <div key={index} className={styles.horizontalSkill}>
            <div className={styles.skillName}>
              <p>{skill.name}</p>
              <p>{skill.value}%</p>
            </div>
            <div className={styles.skillBar}>
              <div
                className={styles.skillBarFill}
                style={{ width: `${skill.value}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};





const Homepage = () => {

  const [first_name, setfirst_name] = useState('')
  const [last_name, setlast_name] = useState('')
  const [email, setemail] = useState('')
  const [phone_number, setphone_number] = useState('')
  const [message, setmessage] = useState('');

  const fetchData = async () => {
    const data = new URLSearchParams()
    data.append("first_name", first_name);
    data.append("last_name", last_name);
    data.append("email", email);
    data.append("phone_number", phone_number);
    data.append("message", message);
    try {
      const result = await fetch('http://localhost:8000/contact', {
        method: "POST",
        body: data,
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        mode: 'no-cors'
      })


      const json = await result.json();
      console.log(json);
    } catch (error) {
      console.error("error feteching data", error);
    }
  }

  const handleSubmit = () => {
    fetchData();
  };

  return (
    <div className={styles.container}>
      <div>
        {/* navigation bar */}
        <div className={styles.navbar}>
          <ul className={styles.navitems}>
            <li>Home</li>
            <li>About</li>
            <li>Project</li>
            <li>Skills</li>
            <li>Contact</li>
          </ul>
        </div>
        {/* hero section */}
        <div className={styles.main}>
          <div className={styles.item1}>
            <p className={styles.int}>Hello,I'm</p>
            <p className={styles.intro}>Varsha Teeratipally</p>
            <p className={styles.introduction}>A full stack all around designer that may or may not include a guide for specific creative potential methods who framing and evaluating moves.</p>
          </div>
          <div className={styles.item2}></div>

        </div>
        {/* project section */}
        <div className={styles.container2}>
          <div className={styles.portfolioCard}>
            <Image src="/thumb2.jpg" alt="Thumbnail Image" className={styles.thumbnail} height={100} width={100} />
            <div className={styles.overlay}>
              <Image src="/brown.webp" alt="Full Image" className={styles.fullImage} height={70} width={100} />
              <p className={styles.info}>This is detailed information about the portfolio item.</p>
            </div>
          </div>

          <div className={styles.portfolioCard}>
            <Image src="/thumb2.jpg" alt="Thumbnail Image" className={styles.thumbnail} height={100} width={100} />
            <div className={styles.overlay}>
              <Image src="/brown.webp" alt="Full Image" className={styles.fullImage} height={70} width={100} />
              <p className={styles.info}>This is detailed information about the portfolio item.</p>
            </div>
          </div>

          <div className={styles.portfolioCard}>
            <Image src="/thumb2.jpg" alt="Thumbnail Image" className={styles.thumbnail} height={100} width={100} />
            <div className={styles.overlay}>
              <Image src="/brown.webp" alt="Full Image" className={styles.fullImage} height={70} width={100} />
              <p className={styles.info}>This is detailed information about the portfolio item.</p>
            </div>
          </div>

          <div className={styles.portfolioCard}>
            <Image src="/thumb2.jpg" alt="Thumbnail Image" className={styles.thumbnail} height={100} width={100} />
            <div className={styles.overlay}>
              <Image src="/brown.webp" alt="Full Image" className={styles.fullImage} height={70} width={100} />
              <p className={styles.info}>This is detailed information about the portfolio item.</p>
            </div>
          </div>

          <div className={styles.portfolioCard}>
            <Image src="/thumb2.jpg" alt="Thumbnail Image" className={styles.thumbnail} height={100} width={100} />
            <div className={styles.overlay}>
              <Image src="/brown.webp" alt="Full Image" className={styles.fullImage} height={70} width={100} />
              <p className={styles.info}>This is detailed information about the portfolio item.</p>
            </div>
          </div>

          <div className={styles.portfolioCard}>
            <Image src="/thumb2.jpg" alt="Thumbnail Image" className={styles.thumbnail} height={100} width={100} />
            <div className={styles.overlay}>
              <Image src="/brown.webp" alt="Full Image" className={styles.fullImage} height={70} width={100} />
              <p className={styles.info}>This is detailed information about the portfolio item.</p>
            </div>
          </div>
        </div>
        {/* skills */}
        <SkillsChart />
        {/* contact */}
        <div className={styles.container3}>
          <div className={styles.content}>
            <h1>Get in touch</h1>
            <p>frtgyhugvdrftgyuhhbgvfrtgyvcfgtyvftgyvf</p>
            <p>vfbghnjnbvcdrftg7yujnhbgvfcdxdrftgy</p>
          </div>
          <div className={styles.form} >
            <input value={first_name} type="text" id="first_name" name="name" placeholder=" First name" onChange={(event) => setfirst_name(event.target.value)} />
            <input value={last_name} type="text" id="first_name" name="name" placeholder=" Last name" onChange={(event) => setlast_name(event.target.value)} />
            <input type="email" value={email} id="email" name="email" placeholder="Mail" onChange={(event) => setemail(event.target.value)} />
            <input type="text" value={phone_number} id="phone_number" name="phone_number" placeholder="Phone number" onChange={(event) => setphone_number(event.target.value)} />
            <input type="text" value={message} id="message" name="message" placeholder="Message" onChange={(event) => setmessage(event.target.value)} />
            <button type="submit" onClick={handleSubmit}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Homepage;