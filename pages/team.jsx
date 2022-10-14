import styles from "../styles/teams.module.css";
import Line from "../components/utils/line";
import { useState } from "react";
import Head from "next/head";
import axios from "axios";
export default function team({ data }) {
  let innitalstate = 1;
  const [tabactive, settabactive] = useState(innitalstate);

  const activetab = (index) => {
    settabactive(index);
  };
  return (
    <div className={styles.team}>
       <Head>
        <title>Team at Gublootech</title>
        <meta name="description" content="Our achievements have only been possible thanks to the exemplary dedication, commitment, and competence of our employees. We hire the best and most competent people, who have a passion for what they do and the company they work for." />
        <meta name="robots" content="noindex"></meta>
        <meta name="googlebot" content="noindex"></meta>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div className={styles.about_heading}>
        <h1 className="heading">Our Team</h1>
        <Line />
      </div>
      {/* Banner Image */}
      <div className={styles.team_banner}>
        <img style={{ width: "100%" }} src="./static/teams-background.jpg" />
      </div>
      <div className="container">
        {/* Team Tabs tabs */}
        <p className="paragraph text-center">
          Our achievements have only been possible thanks to the exemplary
          dedication, commitment, and competence of our employees. We hire the
          best and most competent people, who have a passion for what they do
          and the company they work for.{" "}
        </p>

        <div className={styles.select_tab}>
          <select
            name=""
            id={styles.teams_tabs_select}
            onChange={(event) => activetab(parseInt(event.target.value))}
          >
            <option value="1">All</option>
            <option value="2">Director</option>
            <option value="3">CTO & GM</option>
            <option value="9">HR Department</option>
            <option value="4">Project Managment</option>
            <option value="5">Development</option>
            <option value="6">Sales</option>
            <option value="7">Creative</option>
            <option value="8">Admin</option>
            <option value="10">Accounts</option>
            <option value="11">Intern</option>
          </select>
        </div>

        <div className={styles.team_tabs}>
          <ul>
            <li
              className={tabactive === 1 ? styles.team_tab_active : ""}
              onClick={() => activetab(1)}
            >
              All
            </li>
            <li
              className={tabactive === 2 ? styles.team_tab_active : ""}
              onClick={() => activetab(2)}
            >
              Director
            </li>
            <li
              className={tabactive === 3 ? styles.team_tab_active : ""}
              onClick={() => activetab(3)}
            >
              CTO & GM
            </li>
            <li
              className={tabactive === 9 ? styles.team_tab_active : ""}
              onClick={() => activetab(9)}
            >
              HR Department
            </li>
            <li
              className={tabactive === 4 ? styles.team_tab_active : ""}
              onClick={() => activetab(4)}
            >
              Project Managment
            </li>
            <li
              className={tabactive === 5 ? styles.team_tab_active : ""}
              onClick={() => activetab(5)}
            >
              Development
            </li>
            <li
              className={tabactive === 6 ? styles.team_tab_active : ""}
              onClick={() => activetab(6)}
            >
              Sales
            </li>
            <li
              className={tabactive === 7 ? styles.team_tab_active : ""}
              onClick={() => activetab(7)}
            >
              Creative
            </li>
            <li
              className={tabactive === 8 ? styles.team_tab_active : ""}
              onClick={() => activetab(8)}
            >
              Admin
            </li>
            <li
              className={tabactive === 10 ? styles.team_tab_active : ""}
              onClick={() => activetab(10)}
            >
              Accounts
            </li>
            <li
              className={tabactive === 11 ? styles.team_tab_active : ""}
              onClick={() => activetab(11)}
            >
              Intern
            </li>
          </ul>
        </div>

        <div className={styles.teams_wraper}>
          {data.map((team, index) => {
            if (team.acf.designation === "Director") {
              return (
                <div
                  style={{ order: team.acf.order }}
                  className={
                    tabactive === 2 || tabactive === 1
                      ? styles.tab_data_active + " " + styles.team_wraper
                      : styles.tab_data_deactive
                  }
                  key={index}
                >
                  <div className={styles.team_img}>
                     {/* Normal Image */}
                    {team.acf.normal_image? <img className={styles.team_img_normal} src={team.acf.normal_image} alt="Director"/>: <img className={styles.team_img_normal}  src="https://backend.gublootechnologies.com/wp-content/uploads/2022/09/dummy-user-img.png" />}
                    {/* Hover Image */}
                    {team.acf.gif_image ?<img className={styles.team_img_hover} src={team.acf.gif_image} alt="Director" />: <img  className={styles.team_img_hover} src="https://backend.gublootechnologies.com/wp-content/uploads/2022/09/dummy-user-img.png" />}
                  </div>
                  <div className={styles.team_title}>
                    <h2 className="paragraph">
                      {team.title.rendered} <span>{team.acf.last_name}</span>
                    </h2>
                    <p>{team.acf.designation_detail}</p>
                  </div>
                </div>
              );
            }
            if (team.acf.designation === "CTO & GM") {
              return (
                <div
                  style={{ order: team.acf.order }}
                  className={
                    tabactive === 3 || tabactive === 1
                      ? styles.tab_data_active + " " + styles.team_wraper
                      : styles.tab_data_deactive
                  }
                  key={index}
                >
                  <div className={styles.team_img}>
                     {/* Normal Image */}
                    {team.acf.normal_image? <img className={styles.team_img_normal} src={team.acf.normal_image} alt="CTO & GM"/>: <img className={styles.team_img_normal}  src="https://backend.gublootechnologies.com/wp-content/uploads/2022/09/dummy-user-img.png" />}
                    {/* Hover Image */}
                    {team.acf.gif_image ?<img className={styles.team_img_hover} src={team.acf.gif_image} alt="CTO & GM" />: <img  className={styles.team_img_hover} src="https://backend.gublootechnologies.com/wp-content/uploads/2022/09/dummy-user-img.png" />}
                  </div>
                  <div className={styles.team_title}>
                    <h2 className="paragraph">
                      {team.title.rendered} <span>{team.acf.last_name}</span>
                    </h2>
                    <p>{team.acf.designation_detail}</p>
                  </div>
                </div>
              );
            }
            if ((team.acf.designation_detail ).includes( "Senior Developer")) {
              return (
                <div
                  style={{  order: team.acf.order }}
                  className={
                    tabactive === 5 || tabactive === 1
                      ? styles.tab_data_active + " " + styles.team_wraper
                      : styles.tab_data_deactive
                  }
                  key={index}
                >
                  <div className={styles.team_img}>
                     {/* Normal Image */}
                    {team.acf.normal_image? <img className={styles.team_img_normal} src={team.acf.normal_image} alt="Development Department"/>: <img className={styles.team_img_normal}  src="https://backend.gublootechnologies.com/wp-content/uploads/2022/09/dummy-user-img.png" />}
                    {/* Hover Image */}
                    {team.acf.gif_image ?<img className={styles.team_img_hover} src={team.acf.gif_image} alt="Development Department" />: <img  className={styles.team_img_hover} src="https://backend.gublootechnologies.com/wp-content/uploads/2022/09/dummy-user-img.png" />}
                  </div>
                  <div className={styles.team_title}>
                    <h2 className="paragraph">
                      {team.title.rendered} <span>{team.acf.last_name}</span>
                    </h2>
                    <p>{team.acf.designation_detail}</p>
                  </div>
                </div>
              );
            }
            if (team.acf.designation === "HR Department") {
              return (
                <div
                  style={{  order: team.acf.order }}
                  className={
                    tabactive === 9 || tabactive === 1
                      ? styles.tab_data_active + " " + styles.team_wraper
                      : styles.tab_data_deactive
                  }
                  key={index}
                >
                  <div className={styles.team_img}>
                     {/* Normal Image */}
                    {team.acf.normal_image? <img className={styles.team_img_normal} src={team.acf.normal_image} alt="HR Department"/>: <img className={styles.team_img_normal}  src="https://backend.gublootechnologies.com/wp-content/uploads/2022/09/dummy-user-img.png" />}
                    {/* Hover Image */}
                    {team.acf.gif_image ?<img className={styles.team_img_hover} src={team.acf.gif_image} alt="HR Department" />: <img  className={styles.team_img_hover} src="https://backend.gublootechnologies.com/wp-content/uploads/2022/09/dummy-user-img.png" />}
                  </div>
                  <div className={styles.team_title}>
                    <h2 className="paragraph">
                      {team.title.rendered} <span>{team.acf.last_name}</span>
                    </h2>
                    <p>{team.acf.designation_detail}</p>
                  </div>
                </div>
              );
            }
            if (team.acf.designation === "Project Management Department") {
              return (
                <div
                  style={{  order: team.acf.order }}
                  className={
                    tabactive === 4 || tabactive === 1
                      ? styles.tab_data_active + " " + styles.team_wraper
                      : styles.tab_data_deactive
                  }
                  key={index}
                >
                  <div className={styles.team_img}>
                    {/* Normal Image */}
                    {team.acf.normal_image? <img className={styles.team_img_normal} src={team.acf.normal_image} alt="Project Management Department"/>: <img className={styles.team_img_normal}  src="https://backend.gublootechnologies.com/wp-content/uploads/2022/09/dummy-user-img.png" />}
                    {/* Hover Image */}
                    {team.acf.gif_image ?<img className={styles.team_img_hover} src={team.acf.gif_image} alt="Project Management Department" />: <img  className={styles.team_img_hover} src="https://backend.gublootechnologies.com/wp-content/uploads/2022/09/dummy-user-img.png" />}
                  </div>
                  <div className={styles.team_title}>
                    <h2 className="paragraph">
                      {team.title.rendered} <span>{team.acf.last_name}</span>
                    </h2>
                    <p>{team.acf.designation_detail}</p>
                  </div>
                </div>
              );
            }
            if (team.acf.designation === "Development Department") {
              return (
                <div
                  style={{  order: team.acf.order }}
                  className={
                    tabactive === 5 || tabactive === 1
                      ? styles.tab_data_active + " " + styles.team_wraper
                      : styles.tab_data_deactive
                  }
                  key={index}
                >
                  <div className={styles.team_img}>
                     {/* Normal Image */}
                    {team.acf.normal_image? <img className={styles.team_img_normal} src={team.acf.normal_image} alt="Development Department"/>: <img className={styles.team_img_normal}  src="https://backend.gublootechnologies.com/wp-content/uploads/2022/09/dummy-user-img.png" />}
                    {/* Hover Image */}
                    {team.acf.gif_image ?<img className={styles.team_img_hover} src={team.acf.gif_image} alt="Development Department" />: <img  className={styles.team_img_hover} src="https://backend.gublootechnologies.com/wp-content/uploads/2022/09/dummy-user-img.png" />}
                  </div>
                  <div className={styles.team_title}>
                    <h2 className="paragraph">
                      {team.title.rendered} <span>{team.acf.last_name}</span>
                    </h2>
                    <p>{team.acf.designation_detail}</p>
                  </div>
                </div>
              );
            }
            if (team.acf.designation === "Design Department") {
              return (
                <div
                  style={{  order: team.acf.order }}
                  className={
                    tabactive === 7 || tabactive === 1
                      ? styles.tab_data_active + " " + styles.team_wraper
                      : styles.tab_data_deactive
                  }
                  key={index}
                >
                  <div className={styles.team_img}>
                     {/* Normal Image */}
                    {team.acf.normal_image? <img className={styles.team_img_normal} src={team.acf.normal_image} alt="Design Department"/>: <img className={styles.team_img_normal}  src="https://backend.gublootechnologies.com/wp-content/uploads/2022/09/dummy-user-img.png" />}
                    {/* Hover Image */}
                    {team.acf.gif_image ?<img className={styles.team_img_hover} src={team.acf.gif_image} alt="Design Department" />: <img  className={styles.team_img_hover} src="https://backend.gublootechnologies.com/wp-content/uploads/2022/09/dummy-user-img.png" />}
                  </div>
                  <div className={styles.team_title}>
                    <h2 className="paragraph">
                      {team.title.rendered} <span>{team.acf.last_name}</span>
                    </h2>
                    <p>{team.acf.designation_detail}</p>
                  </div>
                </div>
              );
            }
            if (team.acf.designation === "Sales Department") {
              return (
                <div
                  style={{  order: team.acf.order }}
                  className={
                    tabactive === 6 || tabactive === 1
                      ? styles.tab_data_active + " " + styles.team_wraper
                      : styles.tab_data_deactive
                  }
                  key={index}
                >
                  <div className={styles.team_img}>
                     {/* Normal Image */}
                    {team.acf.normal_image? <img className={styles.team_img_normal} src={team.acf.normal_image} alt="Sales Department"/>: <img className={styles.team_img_normal}  src="https://backend.gublootechnologies.com/wp-content/uploads/2022/09/dummy-user-img.png" />}
                    {/* Hover Image */}
                    {team.acf.gif_image ?<img className={styles.team_img_hover} src={team.acf.gif_image} alt="Sales Department" />: <img  className={styles.team_img_hover} src="https://backend.gublootechnologies.com/wp-content/uploads/2022/09/dummy-user-img.png" />}
                  </div>
                  <div className={styles.team_title}>
                    <h2 className="paragraph">
                      {team.title.rendered} <span>{team.acf.last_name}</span>
                    </h2>
                    <p>{team.acf.designation_detail}</p>
                  </div>
                </div>
              );
            }
            if (team.acf.designation === "Admin Department") {
              return (
                <div
                  style={{  order: team.acf.order }}
                  className={
                    tabactive === 8 || tabactive === 1
                      ? styles.tab_data_active + " " + styles.team_wraper
                      : styles.tab_data_deactive
                  }
                  key={index}
                >
                  <div className={styles.team_img}>
                     {/* Normal Image */}
                    {team.acf.normal_image? <img className={styles.team_img_normal} src={team.acf.normal_image} alt="Admin Department"/>: <img className={styles.team_img_normal}  src="https://backend.gublootechnologies.com/wp-content/uploads/2022/09/dummy-user-img.png" />}
                    {/* Hover Image */}
                    {team.acf.gif_image ?<img className={styles.team_img_hover} src={team.acf.gif_image} alt="Admin Department" />: <img  className={styles.team_img_hover} src="https://backend.gublootechnologies.com/wp-content/uploads/2022/09/dummy-user-img.png" />}
                  </div>
                  <div className={styles.team_title}>
                    <h2 className="paragraph">
                      {team.title.rendered} <span>{team.acf.last_name}</span>
                    </h2>
                    <p>{team.acf.designation_detail}</p>
                  </div>
                </div>
              );
            }
            if (team.acf.designation === "Accounts Department") {
              return (
                <div
                  style={{  order: team.acf.order }}
                  className={
                    tabactive === 10 || tabactive === 1
                      ? styles.tab_data_active + " " + styles.team_wraper
                      : styles.tab_data_deactive
                  }
                  key={index}
                >
                  <div className={styles.team_img}>
                     {/* Normal Image */}
                    {team.acf.normal_image? <img className={styles.team_img_normal} src={team.acf.normal_image} alt="Accounts Department"/>: <img className={styles.team_img_normal}  src="https://backend.gublootechnologies.com/wp-content/uploads/2022/09/dummy-user-img.png" />}
                    {/* Hover Image */}
                    {team.acf.gif_image ?<img className={styles.team_img_hover} src={team.acf.gif_image} alt="Accounts Department" />: <img  className={styles.team_img_hover} src="https://backend.gublootechnologies.com/wp-content/uploads/2022/09/dummy-user-img.png" />}
                  </div>
                  <div className={styles.team_title}>
                    <h2 className="paragraph">
                      {team.title.rendered} <span>{team.acf.last_name}</span>
                    </h2>
                    <p>{team.acf.designation_detail}</p>
                  </div>
                </div>
              );
            }
            if (team.acf.designation === "Intern") {
              return (
                <div
                  style={{  order: team.acf.order  }}
                  className={
                    tabactive === 11 || tabactive === 1
                      ? styles.tab_data_active + " " + styles.team_wraper
                      : styles.tab_data_deactive
                  }
                  key={index}
                >
                  <div className={styles.team_img}>
                     {/* Normal Image */}
                    {team.acf.normal_image? <img className={styles.team_img_normal} src={team.acf.normal_image} alt="Intern"/>: <img className={styles.team_img_normal}  src="https://backend.gublootechnologies.com/wp-content/uploads/2022/09/dummy-user-img.png" />}
                    {/* Hover Image */}
                    {team.acf.gif_image ?<img className={styles.team_img_hover} src={team.acf.gif_image} alt="Intern" />: <img  className={styles.team_img_hover} src="https://backend.gublootechnologies.com/wp-content/uploads/2022/09/dummy-user-img.png" />}
                  </div>
                  <div className={styles.team_title}>
                    <h2 className="paragraph">
                      {team.title.rendered} <span>{team.acf.last_name}</span>
                    </h2>
                    <p>{team.acf.designation_detail}</p>
                  </div>
                </div>
              );
            }
            return (
              <div>
                <h2>{team.acf.designation}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const getTeam = await fetch(
    "https://backend.gublootechnologies.com/wp-json/wp/v2/team?_embad&filter[order]=DESC&per_page=100"
  );
  const data = await getTeam.json();
  return { props: { data } };
}
