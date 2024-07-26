
'use client';
import Image from "next/image";
import styles from "./styles.module.css"
import React from 'react';
// import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';

import { useState, useEffect } from "react";


const Homepage = () => {
  // const skills = [
  //   { name: 'Painting', value: 57 },
  //   { name: 'Edting', value: 20 },
  //   { name: 'Business', value: 90 },
  //   { name: 'Decorative', value: 50 },
  // ];

  // const horizontalSkills = [
  //   { name: 'Creativity', value: 75 },
  //   { name: 'Cooking', value: 30 },
  //   { name: 'hced', value: 80 },
  //   { name: 'jid', value: 20 },
  // ];
  const [first_name, setfirst_name] = useState('')
  const [last_name, setlast_name] = useState('')
  const [email, setemail] = useState('')
  const [phone_number, setphone_number] = useState('')
  const [message, setmessage] = useState('');



  const fetchData = async () => {
    const data = { first_name: first_name, last_name: last_name, email: email, phone_number: phone_number, message: message }
    const formData= new FormData()
    formData.set("first_name", first_name);
    formData.set("last_name", last_name);
    formData.set("email", email);
    formData.set("phone_number", phone_number);
    formData.set("message", message);
    try {
      const result = await fetch('http://localhost:8000/contact', {
        method: "POST",
        body: formData,
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
  }







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
            <Image src="/thumbnail.jpeg" alt="Thumbnail Image" className={styles.thumbnail} height={100} width={100} />
            <div className={styles.overlay}>
              <Image src="/brown.webp" alt="Full Image" className={styles.fullImage} height={70} width={100} />
              <p className={styles.info}>This is detailed information about the portfolio item.</p>
            </div>
          </div>

          <div className={styles.portfolioCard}>
            <Image src="/thumbnail.jpeg" alt="Thumbnail Image" className={styles.thumbnail} height={100} width={100} />
            <div className={styles.overlay}>
              <Image src="/brown.webp" alt="Full Image" className={styles.fullImage} height={70} width={100} />
              <p className={styles.info}>This is detailed information about the portfolio item.</p>
            </div>
          </div>

          <div className={styles.portfolioCard}>
            <Image src="/thumbnail.jpeg" alt="Thumbnail Image" className={styles.thumbnail} height={100} width={100} />
            <div className={styles.overlay}>
              <Image src="/brown.webp" alt="Full Image" className={styles.fullImage} height={70} width={100} />
              <p className={styles.info}>This is detailed information about the portfolio item.</p>
            </div>
          </div>

          <div className={styles.portfolioCard}>
            <Image src="/thumbnail.jpeg" alt="Thumbnail Image" className={styles.thumbnail} height={100} width={100} />
            <div className={styles.overlay}>
              <Image src="/brown.webp" alt="Full Image" className={styles.fullImage} height={70} width={100} />
              <p className={styles.info}>This is detailed information about the portfolio item.</p>
            </div>
          </div>

          <div className={styles.portfolioCard}>
            <Image src="/thumbnail.jpeg" alt="Thumbnail Image" className={styles.thumbnail} height={100} width={100} />
            <div className={styles.overlay}>
              <Image src="/brown.webp" alt="Full Image" className={styles.fullImage} height={70} width={100} />
              <p className={styles.info}>This is detailed information about the portfolio item.</p>
            </div>
          </div>

          <div className={styles.portfolioCard}>
            <Image src="/thumbnail.jpeg" alt="Thumbnail Image" className={styles.thumbnail} height={100} width={100} />
            <div className={styles.overlay}>
              <Image src="/brown.webp" alt="Full Image" className={styles.fullImage} height={70} width={100} />
              <p className={styles.info}>This is detailed information about the portfolio item.</p>
            </div>
          </div>
        </div>
        {/* skills */}
        {/* <div className="skills-chart">
      <div className="circular-skills">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
                  <div className="circle-container">
                        <CircularProgressbar
                          value={skill.value}
                          text={`${skill.value}%`}
                          styles={buildStyles({
                            textColor: ' #482106',
                            pathColor: '#D9A760',
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
      <div className="horizontal-skills">
        {horizontalSkills.map((skill, index) => (
          <div key={index} className="horizontal-skill">
            <div className="skill-name">
              <p>{skill.name}</p>
              <p>{skill.value}%</p>
            </div>
            <div className="skill-bar">
              <div
                className="skill-bar-fill"
                style={{ width: `${skill.value}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
 */}

        {/* contact */}
        <div className={styles.container3}>
          <div className={styles.content}>
            <h1>Get in touch</h1>
            <p>frtgyhugvdrftgyuhhbgvfrtgyvcfgtyvftgyvf</p>
            <p>vfbghnjnbvcdrftg7yujnhbgvfcdxdrftgy</p>
          </div>
          <div className={styles.form} >
            <input value={first_name} type="text" id="first_name" name="name" placeholder=" First_Name" onChange={(event) => setfirst_name(event.target.value)} />
            <input value={last_name} type="text" id="first_name" name="name" placeholder=" Last_Name" onChange={(event) => setlast_name(event.target.value)} />
            <input type="email" value={email} id="email" name="email" placeholder="Mail" onChange={(event) => setemail(event.target.value)} />
            <input type="text" value={phone_number} id="phone_number" name="phone_number" placeholder="Phone_number" onChange={(event) => setphone_number(event.target.value)} />
            <input type="text" value={message} id="message" name="message" placeholder="Message" onChange={(event) => setmessage(event.target.value)} />
            <button type="submit" onClick={handleSubmit}>Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Homepage;