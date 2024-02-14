/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";

import "aos/dist/aos.css";
import { styled } from "@mui/material/styles";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import Images from "./Images";

import "animate.css/animate.min.css";
import Divider from "@mui/material/Divider";
import { Helmet } from "react-helmet";

const MyPortfolio = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Portfolio - Sufian Mustafa</title>
        <meta
          name="description"
          content="Explore Sufian Mustafa's portfolio, a dynamic MERN stack website showcasing web development excellence. Discover React's component-based architecture, animated user experiences, responsive design with React MUI and Bootstrap, a personalized admin dashboard, and backend powered by Node.js, Express.js, and MongoDB. Explore performance optimization using mongoose-paginate and memory-cache, and find out about pivotal resources that shaped Sufian's journey into web development."
        />
        <link rel="canonical" href="https://sufianmustafa.com/#aboutmySite" />
      </Helmet>
      <Grid
        container
        spacing={1}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <br></br>
        <br></br>
        <br></br>

        <Grid item xs={11} style={{ overflow: "hidden", marginTop: "90px" }}>
          <br />
          <div className="moreproject glassEffect">
            <br></br>
            <div className="About3" data-aos="zoom-in">
              {" "}
              <h1> About My Portfolio</h1>
            </div>
            <br />
            <Grid item className="flex">
              <div
                className="itemabout item"
                style={{ width: "95%", padding: "10px" }}
              >
                <div style={{ height: "100%" }}>
                  <video
                    src={Images.FrontendVideo.src}
                    alt={Images.FrontendVideo.alt}
                    className="d-block w-100"
                    controls
                    autoPlay
                    loop
                    muted
                    controlsList="nodownload"
                    onCanPlayThrough={() => {}}
                    loading="lazy"
                    style={{
                      height: "100%",
                      width: "100%",
                      borderRadius: "10px",
                    }}
                  />
                </div>
              </div>
            </Grid>
            <br />
            <Grid item className="flex">
              <div
                className="itemabout item"
                style={{ width: "95%", padding: "10px" }}
              >
                <div className="flex">
                  <div
                    className="About3"
                    style={{
                      fontWeight: "400",

                      overflowX: "hidden",
                    }}
                  >
                    {" "}
                    <div className="about4">
                      <h3> MERN Stack Portfolio</h3>{" "}
                    </div>
                    <p data-aos="zoom-in" data-aos-delay="100">
                      <span> My website is</span> a fully-fledged MERN stack
                      website. The frontend is built using React, which offers
                      numerous benefits for my web development. <br></br>
                      <span>The design and code</span> you see here are a pure
                      reflection of my creative vision and technical expertise.
                      <span>React's component-based architecture</span>
                      promotes reusability, making it easier for me to manage
                      and maintain the codebase. With React's virtual DOM, my
                      website achieves optimal performance as it efficiently
                      updates only the necessary parts of the page, leading to
                      faster rendering and a smoother user experience <br />
                      <span>advantage of using React libraries</span> <br />
                      One significant advantage I have used while building my
                      website is React's ecosystem of libraries, including React
                      MUI and React Bootstrap, which offer a variety of
                      pre-designed components. By simply installing and
                      importing these libraries, I can effortlessly use their
                      components without the need for extensive coding. <br />
                      <span>This approach </span>not only speeds up my
                      development process but also ensures that I can use their
                      ready-to-use elements without much difficulty. As a
                      result, I don't have to spend a lot of time writing
                      complex code to achieve the desired functionalities and
                      styles, making the development process much more efficient
                      and enjoyable. <br />
                    </p>{" "}
                  </div>
                </div>
              </div>
            </Grid>
            <br></br>
            <br></br>
            <br />
            <br />
          </div>
        </Grid>
      </Grid>{" "}
      <br></br>
      <Divider style={{ width: "100%" }} />
      <br></br>
      <Grid
        container
        spacing={1}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <br></br>
        <br></br>
        <br></br>

        <Grid item xs={11} style={{ overflow: "hidden" }}>
          <div className="moreproject itemabout item">
            <br></br>

            <div className="About3">
              {" "}
              <h1 data-aos="zoom-in">
                {" "}
                Animation: A Powerful Tool for User Experience
              </h1>
            </div>
            <br />
            <Grid item className="flex">
              <div
                className="itemabout item"
                style={{ width: "95%", padding: "10px" }}
              >
                <div style={{ height: "100%" }}>
                  <video
                    src={Images.animation.src}
                    alt={Images.animation.alt}
                    className="d-block w-100"
                    controls
                    autoPlay
                    loop
                    muted
                    controlsList="nodownload"
                    onCanPlayThrough={() => {}}
                    loading="lazy"
                    style={{
                      height: "100%",
                      width: "100%",
                      borderRadius: "10px",
                    }}
                  />
                </div>
              </div>
            </Grid>
            <Grid item className="flex" style={{ padding: "10px" }}>
              <div
                className="itemabout item"
                style={{ width: "95%", padding: "10px" }}
              >
                <div className="flex">
                  <div
                    className="About3"
                    style={{
                      fontWeight: "400",

                      overflowX: "hidden",
                    }}
                  >
                    {" "}
                    <div className="about4">
                      <h3> Enhancing User Experience with Animation</h3>{" "}
                    </div>
                    <p
                      data-aos="zoom-in"
                      data-aos-delay="100"
                      style={{ overflow: "auto" }}
                    >
                      <span> I am proficient in adding animation</span>
                      to websites using a variety of technologies, including
                      Framer Motion, AOS, and animate.css. I believe that
                      animation can be a powerful tool for improving the user
                      experience of a website, and I love to use it to create
                      websites that are both visually appealing and interactive.
                      <span> In my own website</span>, I have used animation at
                      various points to help improve the user experience. For
                      Example: <br />
                      <span>Powerful Animation Libraries</span> <br />
                      I utilized the power of three animation libraries: AOS,
                      animate.css, and framer motion. AOS (Animate On Scroll)
                      allowed me to trigger animations as the user scrolls down
                      the page, creating a smooth and engaging effect.
                      animate.css provided a collection of pre-built CSS
                      animations that I could easily apply to different
                      elements, saving me time and effort in writing custom
                      animation code
                      <br />
                      <span>Power of Framer Motion</span> <br />
                      Lastly, framer motion enriched my website with more
                      advanced animations and interactive transitions, giving it
                      a more polished and professional touch.
                      <br />
                      <span>Flexible: Framer Motion</span>Framer Motion is very
                      flexible and can be used to create a variety of different
                      animations. The library includes a number of built-in
                      animation primitives, as well as the ability to create
                      custom animations. <br />
                      <span> pathlength motion:</span>It offers a wide range of
                      animation options, including path length motion, which I
                      have beautifully implemented on my homepage
                      <hr />I am passionate about using animation in web
                      development, and I believe that it can be a powerful tool
                      for creating websites that are both visually appealing and
                      interactive.
                    </p>{" "}
                  </div>
                </div>
              </div>
            </Grid>
            <br></br>
            <br></br>
          </div>
          <br />
          <br />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={1}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <br></br>
        <br></br>
        <br></br>

        <Grid item xs={11} style={{ overflow: "hidden" }}>
          <div className="moreproject itemabout item">
            <br></br>

            <div className="About3" data-aos="zoom-in">
              {" "}
              <h1> The Importance of Responsive Website Design</h1>
            </div>
            <br />
            <Grid item className="flex">
              <div
                className="itemabout item"
                style={{ width: "95%", padding: "10px" }}
              >
                <div style={{ height: "100%" }}>
                  <video
                    src={Images.responsive.src}
                    alt={Images.responsive.alt}
                    className="d-block w-100"
                    controls
                    autoPlay
                    loop
                    muted
                    controlsList="nodownload"
                    onCanPlayThrough={() => {}}
                    loading="lazy"
                    style={{
                      height: "100%",
                      width: "100%",
                      borderRadius: "10px",
                    }}
                  />
                </div>
              </div>
            </Grid>
            <Grid item className="flex" style={{ padding: "10px" }}>
              <div
                className="itemabout item"
                style={{ width: "95%", padding: "10px" }}
              >
                <div className="flex">
                  <div
                    className="About3"
                    style={{
                      fontWeight: "400",

                      overflowX: "hidden",
                    }}
                  >
                    {" "}
                    <div className="about4">
                      <h3> Responsive website </h3>{" "}
                    </div>
                    <p
                      data-aos="zoom-in"
                      data-aos-delay="100"
                      style={{ overflow: "auto" }}
                    >
                      <span>Throughout the development process,</span> I
                      invested considerable time and expertise to achieve
                      responsiveness at its best. <br />
                      <span>Creating a responsive website </span>demanded
                      significant effort and attention to detail, as it is one
                      of the most crucial aspects for any developer. Ensuring
                      that the website can be viewed and used on a variety of
                      devices, from desktop computers to smartphones and screen
                      sizes is essential for providing an optimal user
                      experience. <br />
                      <span>Big Hand to MaterialUI and Bootstrap</span> <br />
                      Gratefully, React MUI and React Bootstrap proved to be
                      invaluable resources in this endeavor.These powerful
                      component libraries provided a wide variety of pre-built,
                      mobile-friendly elements that made the process of
                      responsive design more straightforward and efficient. This
                      can save a lot of time and effort, as it eliminates the
                      need to write custom CSS for each screen size <br />
                      <span>Imp of Custom CSS</span> <br />
                      it's also essential to acknowledge that there may be times
                      when we need to use external CSS to make specific
                      components work perfectly on different devices and screen
                      sizes. <br />
                      <span>In my website, </span>I have also use external CSS
                      in a few places to make my components responsive. <hr />
                      <span>I am proud of the work</span> that I did in making
                      my website responsive, and I believe that it is a valuable
                      asset for any developer. <br />
                    </p>{" "}
                  </div>
                </div>
              </div>
            </Grid>
            <br></br>
            <br></br>
          </div>
          <br />
          <br />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={1}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <br></br>
        <br></br>
        <br></br>

        <Grid item xs={11} style={{ overflow: "hidden" }}>
          <div className="moreproject itemabout item">
            <br></br>

            <div className="About3" data-aos="zoom-in">
              {" "}
              <h1> Backend Part</h1>
            </div>
            <br />
            <Grid item className="flex">
              <div
                className="itemabout item"
                style={{ width: "95%", padding: "10px" }}
              >
                <div style={{ height: "100%" }}>
                  <video
                    src={Images.Backend.src}
                    alt={Images.Backend.alt}
                    className="d-block w-100"
                    controls
                    autoPlay
                    loop
                    muted
                    controlsList="nodownload"
                    onCanPlayThrough={() => {}}
                    loading="lazy"
                    style={{
                      height: "100%",
                      width: "100%",
                      borderRadius: "10px",
                    }}
                  />
                </div>
              </div>
            </Grid>
            <Grid item className="flex" style={{ padding: "10px" }}>
              <div
                className="itemabout item"
                style={{ width: "95%", padding: "10px" }}
              >
                <div className="flex">
                  <div
                    className="About3"
                    style={{
                      fontWeight: "400",

                      overflowX: "hidden",
                    }}
                  >
                    {" "}
                    <div className="about4">
                      <h3>
                        Node.js and Express.js: The Perfect Pair for Backend
                        Development{" "}
                      </h3>{" "}
                    </div>
                    <p data-aos="zoom-in" data-aos-delay="100">
                      <span>NodeJs and ExpressJS</span> For the backend of my
                      website, I have employed two main technologies: Node.js
                      and Express.js. Node.js is a server-side runtime
                      environment that allows me to run JavaScript code outside
                      of the web browser, making it suitable for server-side
                      applications. It offers fast and efficient performance,
                      enabling my website to handle various requests from users
                      effectively. <br />
                      <span>The Power of ExpressJS</span> <br />
                      Express.js, on the other hand, is a web application
                      framework that works with Node.js. It provides a set of
                      tools and features that simplifies the process of building
                      web applications and APIs. With Express.js, I can easily
                      define routes, handle HTTP requests, and manage data flow
                      within my backend. <br />
                      maintenance of my website <br />
                      <span>MongoDB as My Database Choice</span> <br />
                      As for the database, I am using MongoDB. MongoDB is a
                      NoSQL database, which means it stores data in a more
                      flexible and scalable way compared to traditional
                      relational databases. It allows me to organize and
                      retrieve data in a more dynamic manner, making it ideal
                      for handling the changing and evolving needs of my
                      website. <br />
                      <span>Creating a Strong Backend Foundation</span> <br />
                      By combining Node.js, Express.js, and MongoDB, I have
                      created a robust and efficient backend infrastructure that
                      supports the dynamic content and functionality of my MERN
                      stack website.
                      <br />
                    </p>{" "}
                  </div>
                </div>
              </div>
            </Grid>
            <br></br>
            <br></br>
          </div>
          <br />
          <br />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={1}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <br></br>
        <br></br>
        <br></br>

        <Grid item xs={11} style={{ overflow: "hidden" }}>
          <div className="moreproject itemabout item">
            <br></br>

            <div className="About3" data-aos="zoom-in">
              {" "}
              <h1> My Personalised Admin Dashboard</h1>
            </div>
            <br />
            <Grid item className="flex">
              <div
                className="itemabout item"
                style={{ width: "95%", padding: "10px" }}
              >
                <div style={{ height: "100%" }}>
                  <video
                    src={Images.admin.src}
                    alt={Images.admin.alt}
                    className="d-block w-100"
                    controls
                    autoPlay
                    loop
                    muted
                    controlsList="nodownload"
                    onCanPlayThrough={() => {}}
                    loading="lazy"
                    style={{
                      height: "100%",
                      width: "100%",
                      borderRadius: "10px",
                    }}
                  />
                </div>
              </div>
            </Grid>
            <Grid item className="flex" style={{ padding: "10px" }}>
              <div
                className="itemabout item"
                style={{ width: "95%", padding: "10px" }}
              >
                <div className="flex">
                  <div
                    className="About3"
                    style={{
                      fontWeight: "400",

                      overflowX: "hidden",
                    }}
                  >
                    {" "}
                    <div className="about4">
                      <h3> Admin Dashboard in my site</h3>{" "}
                    </div>
                    <p data-aos="zoom-in" data-aos-delay="100">
                      <span>I have decided to make</span> a personalized admin
                      dashboard for my website, which is accessible only to me.
                      This dashboard provides me with exclusive access to manage
                      and update various aspects of my website dynamically.
                      Through this administrative interface,
                      <span>I can effortlessly add, edit, or delete </span>
                      projects, blogs, and skills. The power lies in the
                      simplicity of the process, thanks to the libraries like
                      React MUI and React Bootstrap that I've integrated. <br />
                      <span>
                        An Admin Dashboard Makes Managing Website Content Easy{" "}
                      </span>{" "}
                      <br />
                      As I navigate through the dashboard, I am presented with
                      intuitive options, such as adding a new skill, project, or
                      blog, and also modifying the existing ones. <br />
                      maintenance of my website <br />
                      <span>
                        Enhanced Security & Control: Admin Privileges
                      </span>{" "}
                      <br />
                      Additionally, I can update my email and password securely,
                      and I have the ability to logout to ensure the security of
                      my admin privileges <br />
                      maintenance of my website <br />
                      <span>Benefits of Admin Dashboard</span> <br />
                      This personalized admin dashboard streamlines the content
                      management process, allowing me to keep my website
                      up-to-date and engaging for visitors without the need for
                      external assistance. The convenience and control it
                      provides have significantly enhanced the overall
                      management and maintenance of my website <br />
                    </p>{" "}
                  </div>
                </div>
              </div>
            </Grid>
            <br></br>
            <br></br>
          </div>
          <br />
          <br />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={1}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <br></br>
        <br></br>
        <br></br>

        <Grid item xs={11} style={{ overflow: "hidden" }}>
          <div className="moreproject itemabout item">
            <br></br>

            <div className="About3" data-aos="zoom-in">
              {" "}
              <h1> Enhancing Backend Performance</h1>
            </div>
            <br />
            <Grid item className="flex">
              <div
                className="itemabout item"
                style={{ width: "95%", padding: "10px" }}
              >
                <div style={{ height: "100%" }}>
                  <video
                    src={Images.performance.src}
                    alt={Images.performance.alt}
                    className="d-block w-100"
                    controls
                    autoPlay
                    loop
                    muted
                    controlsList="nodownload"
                    onCanPlayThrough={() => {}}
                    loading="lazy"
                    style={{
                      height: "100%",
                      width: "100%",
                      borderRadius: "10px",
                    }}
                  />
                </div>
              </div>
            </Grid>
            <Grid item className="flex" style={{ padding: "10px" }}>
              <div
                className="itemabout item"
                style={{ width: "95%", padding: "10px" }}
              >
                <div className="flex">
                  <div
                    className="About3"
                    style={{
                      fontWeight: "400",

                      overflowX: "hidden",
                    }}
                  >
                    {" "}
                    <div className="about4">
                      <h3> mongoose-paginate and memory-cache</h3>{" "}
                    </div>
                    <p data-aos="zoom-in" data-aos-delay="100">
                      <span> In this MERN stack project</span>, I meticulously
                      focused on optimizing backend performance to ensure a
                      seamless user experience. To achieve this, I strategically
                      incorporated two powerful tools:{" "}
                      <span>mongoose-paginate and memory-cache</span> <br />
                      <h2> 1. mongoose-paginate Integration</h2> To efficiently
                      manage and serve large datasets without compromising
                      response times, I leveraged the mongoose-paginate plugin.
                      By integrating this plugin into the Mongoose ODM (Object
                      Data Modeling) layer, I was able to implement pagination
                      seamlessly. This not only enabled the retrieval of data in
                      smaller, manageable chunks but also drastically reduced
                      query execution times. As a result, the backend exhibited
                      enhanced responsiveness even when dealing with extensive
                      data loads. <br />
                      <h2>2. memory-cache Implementation</h2> To further
                      optimize performance, I introduced the memory-cache
                      mechanism to the backend architecture. By strategically
                      caching frequently accessed data in memory, I
                      significantly reduced the need for repetitive database
                      queries. This proactive caching strategy led to remarkable
                      improvements in response times, particularly for
                      read-heavy operations. Moreover, I fine-tuned cache
                      expiration policies to ensure data consistency and
                      freshness, striking a balance between performance and data
                      integrity.
                      <br /> The synergy of mongoose-paginate and memory-cache
                      within the MERN stack ecosystem created a backend that not
                      only met but exceeded performance expectations. Users
                      experienced snappy interactions and reduced loading times,
                      resulting in a more engaging and satisfying application
                      experience overall.
                      <br /> This project not only showcased my technical
                      prowess in MERN stack development but also highlighted my
                      proficiency in optimizing critical performance metrics.
                      The judicious selection and implementation of these tools
                      underscored my commitment to crafting high-performing,
                      user-centric applications. <br />
                    </p>{" "}
                  </div>
                </div>
              </div>
            </Grid>
            <br></br>
            <br></br>
          </div>
          <br />
          <br />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={1}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <br></br>
        <br></br>
        <br></br>

        <Grid item xs={11} style={{ overflow: "hidden" }}>
          <div className="moreproject itemabout item">
            <br></br>

            <div className="About3" data-aos="zoom-in">
              {" "}
              <h1> The Pivotal Resources That Helped Me Become a Developer</h1>
            </div>
            <br />

            <Grid item className="flex">
              <div
                className="itemabout item"
                style={{ width: "95%", padding: "10px" }}
              >
                <div style={{ height: "100%" }}>
                  <video
                    src={Images.resources.src}
                    alt={Images.resources.alt}
                    className="d-block w-100"
                    controls
                    autoPlay
                    loop
                    muted
                    controlsList="nodownload"
                    onCanPlayThrough={() => {}}
                    loading="lazy"
                    style={{
                      height: "100%",
                      width: "100%",
                      borderRadius: "10px",
                    }}
                  />
                </div>
              </div>
            </Grid>
            <Grid item className="flex" style={{ padding: "10px" }}>
              <div
                className="itemabout item"
                style={{ width: "95%", padding: "10px" }}
              >
                <div className="flex">
                  <div
                    className="About3"
                    style={{
                      fontWeight: "400",

                      overflowX: "hidden",
                    }}
                  >
                    <div className="about4">
                      <h3> Resources </h3>{" "}
                    </div>
                    <p data-aos="zoom-in" data-aos-delay="100">
                      <span>Pivotal Resources in My Development Journey</span>{" "}
                      During my journey to become a developer, several
                      invaluable resources played a pivotal role in my growth.
                      These include prominent platforms such as YouTube,
                      w3schools, and Stack Overflow, Github, Codepen ETC.,
                      alongside innovative AI-based tools like ChatGPT and Bard.
                      <br />
                      <span>These platforms</span> have consistently proven to
                      be indispensable sources of knowledge and assistance
                      whenever I encountered challenges or obstacles during my
                      development endeavors. <br />
                      <span> What's remarkable</span>
                      is that everything I learned from these resources was
                      achieved without the help of any personal expert
                      developer.
                      <br />
                      <span> I have found these websites</span>
                      to be invaluable in my journey to become a developer. They
                      have helped me to learn new skills, solve problems, and
                      stay up-to-date on the latest trends in web development. I
                      would highly recommend these websites to anyone who is
                      interested in learning web development.
                      <br />
                    </p>{" "}
                  </div>
                </div>
              </div>
            </Grid>
            <br></br>
            <br></br>
          </div>
          <br />
          <br />
        </Grid>
      </Grid>
    </div>
  );
};

export default MyPortfolio;
