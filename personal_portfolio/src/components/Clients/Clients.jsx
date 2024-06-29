import React, { useRef } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import ClientSlider from './ClientSlider';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Slide } from 'react-awesome-reveal';
import * as DiIcons from "react-icons/di";
import { SiRabbitmq, SiRobotframework, SiSelenium } from "react-icons/si";
import { FaLifeRing, FaAws, FaFileExcel } from "react-icons/fa";


let clients = [
    {
        name : "John Michel",
        position : "web developer",
        img_url : "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
        stars : 3,
        disc : `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`
    },
    {
        name : "John Michel",
        position : "web developer",
        img_url : "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
        stars : 4,
        disc : `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`
    },
    {
        name : "John Michel",
        position : "web developer",
        img_url : "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
        stars : 5,
        disc : `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`
    },
    {
        name : "John Michel",
        position : "web developer",
        img_url : "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
        stars : 5,
        disc : `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`
    },
]
var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]}

const skills = [
    {name : "Node Js",
     icon : <DiIcons.DiNodejs/>
    },
    {name : "Postgresql",
        icon : <DiIcons.DiPostgresql/>
       },
       {name : "React js",
        icon : <DiIcons.DiReact/>
       },
       {name : "Rabbitmq",
        icon : <SiRabbitmq/>
       },
       {name : "AWS",
        icon : <FaAws/>
       },
       {name : "Redis",
        icon : <DiIcons.DiRedis/>
       },
       {name : "Jira",
        icon : <DiIcons.DiJira/>
       },
       {name : "Robotframework",
        icon : <SiRobotframework/>
       },
       {name : "Selenium",
        icon : <SiSelenium/>
       },
       {name : "Django",
        icon : <DiIcons.DiDjango/>
       },
       {name : "Agile",
        icon : <FaLifeRing/>
       },
       {name : "Git",
        icon : <DiIcons.DiGit/>
       },
       {name : "HTML&CSS&JS",
        icon : <DiIcons.DiCode/>
       },
       {name : "Excel",
        icon : <FaFileExcel/>
       }
]

const Clients = () => {
    // const arrowRef = useRef(null);
    // let clientDisc = "";
    // clientDisc = clients.map((item, i) => (
    //     <ClientSlider item={item} key={i}/>
    // ))
    let skill;
    skill = skills.map((skill)=>{
        return (
            <div>{skill.name}<span className='iconskill'>{skill.icon}</span></div>
        )
    }) 
  return (
    <Container id='client'>
        <Slide direction="left">
            <span className="green">My Skills</span>
            <h1>Discover an overview of my technical and professional skills</h1>
        </Slide>
        <Testimonials>
            {/* <Slider ref={arrowRef} {...settings}>
                {clientDisc}
            </Slider>
            <Buttons>
                <button
                onClick={() => arrowRef.current.slickPrev()}
                ><IoIosArrowBack/></button>
                <button
                onClick={() => arrowRef.current.slickNext()}
                ><IoIosArrowForward/></button>
            </Buttons> */}
            <div className='skills'>
                {skill} 
            </div>
        </Testimonials>
    </Container>
  )
}

export default Clients

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 4rem 0;

    @media(max-width:840px){
        width: 90%;
    }

    span{
        font-weight: 700;
        text-transform: uppercase;
    }

    h1{
        padding-top: 1rem;
        text-transform: capitalize;
    }

    .slick-list, .slick-slider, .slick-track{
        padding: 0;
    }

    .slick-dots{
        text-align: left;
        margin-left: 1rem;
    }

    .slick-dots li button:before{
        content: "";
    }

    .slick-dots li button{
        width: 9px;
        height: 4px;
        background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
        padding: 0.1rem;
        margin-top: 1rem;
        transition: all 400ms ease-in-out;
        border-radius: 50px;
    }
    
    .slick-dots li.slick-active button{
        background: #01be96;
        width: 15px;
    }

    .slick-dots li{
        margin: 0;
    }
`

const Testimonials = styled.div`
    margin-top: 2rem;
    position: relative;

    .skills {
        background: rgb(45,45,58);
        border-radius: 0.7rem;
        padding: 1rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 2rem;
        color: #01be96;
        font-weight: bold;

        @media(max-width: 840px) {
            flex-direction: column; 
            align-items: center; 
        }
    }

    .iconskill {
        color: white;
        font-size: x-large;
        padding-left: 15px
    }
`
const Buttons = styled.div`
    position: absolute;
    right: 0.7rem;
    bottom: -2rem;

    button{
        background-color: transparent;
        margin-left: 0.5rem;
        border: none;
        color: #01be96;
        cursor: pointer;
        font-size: 1.1rem;
    }

    @media(max-width:530px){
        display: none;
    }
`