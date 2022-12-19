import { React, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = ({ openModal, isModalOpen }) => {
  let router = useRouter();
  const openNav = (e) => {
    let ham = document.getElementById("ham");
    let cross = document.getElementById("cross");
    let navigationBar = document.getElementById("navbar");
    let navigationHeader = document.getElementById("header");
    navigationBar.style.backgroundColor = "#2c3135";
    navigationBar.style.height = "275px";
    navigationHeader.style.position = "sticky";
    navigationHeader.style.top = "0";
    ham.style.display = "none";
    cross.style.display = "block";
  };
  const closeNav = (e) => {
    let ham = document.getElementById("ham");
    let cross = document.getElementById("cross");
    let navigationBar = document.getElementById("navbar");
    let navigationHeader = document.getElementById("header");
    navigationBar.style.height = "75px";
    if (window.scrollY < 540) {
      navigationBar.style.backgroundColor = "transparent";
      navigationHeader.style.position = "static";
    }
    cross.style.display = "none";
    ham.style.display = "block";
  };
  useEffect(() => {
    let ham = document.getElementById("ham");
    let cross = document.getElementById("cross");
    let navigationBar = document.getElementById("navbar");
    let navigationHeader = document.getElementById("header");
    let appointmentModal = document.getElementById("appointment");
    let cta = document.getElementById("cta");
    if (window.innerWidth < 1024) {
      cta.classList.remove("blueBack");
      cta.classList.add("backTrans");
    }
    window.addEventListener("scroll", () => {
      if (window.scrollY > 540) {
        navigationBar.style.backgroundColor = "#2c3135";
        navigationHeader.style.position = "sticky";
        navigationHeader.style.top = "0";
        cta.classList.remove("blueBack");
        cta.classList.add("backTrans");
      } else {
        if (navigationBar.style.height !== "275px") {
          navigationBar.style.backgroundColor = "transparent";
          navigationHeader.style.position = "static";
          if (window.innerWidth > 1024) {
            cta.classList.remove("backTrans");
            cta.classList.add("blueBack");
          }
        }
      }
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1024) {
        if (window.scrollY <= 540) {
          cta.classList.remove("backTrans");
          cta.classList.add("blueBack");
        }
        ham.style.display = "none";
        cross.style.display = "none";
        navigationBar.style.height = "75px";
        if (window.scrollY < 540) {
          navigationBar.style.backgroundColor = "transparent";
          navigationHeader.style.position = "static";
        }
      }
      if (window.innerWidth < 1025) {
        cta.classList.remove("blueBack");
        cta.classList.add("backTrans");
        if (navigationBar.style.height === "75px") {
          ham.style.display = "block";
          cross.style.display = "none";
        }
      }
      if (window.innerHeight < 600) {
        appointmentModal.style.height = "100%";
      }
      if (window.innerHeight >= 600) {
        appointmentModal.style.height = "600px";
      }
    });
  }, []);

  return (
    <header id="header">
      <nav id="navbar" className={`${router.pathname === "/404" ? "nav-static" : ""}`}>
        <div className="logo ">
          <Link href="/">
            <a className={`${isModalOpen ? "notActive" : ""}`}>
              <div className="image">
                <Image
                  layout="fill"
                  objectFit="contain"
                  src={`${process.env.NEXT_PUBLIC_IMAGESPATH}/logo.png`}
                  alt="logo"
                  priority
                />
              </div>
            </a>
          </Link>
          <Link href="/">
            <a className={`${isModalOpen ? "notActive" : ""}`}>
              <h1>Bridgepointe</h1>
            </a>
          </Link>
        </div>
        <ul className="nav-list ">
          <li>
            <Link href="/">
              <a
                className={`${
                  router.pathname === "/" ? "isActive" : "isInActive"
                } ${isModalOpen ? "notActive" : "navLink"}`}
              >
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/services">
              <a
                className={`${
                  router.pathname === "/services" ? "isActive" : "isInActive"
                } ${isModalOpen ? "notActive" : "navLink"}`}
              >
                Services
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a
                className={`${
                  router.pathname === "/about" ? "isActive" : "isInActive"
                } ${isModalOpen ? "notActive" : "navLink"}`}
              >
                About
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a
                className={`${
                  router.pathname === "/contact" ? "isActive" : "isInActive"
                } ${isModalOpen ? "notActive" : "navLink"}`}
              >
                Contact
              </a>
            </Link>
          </li>
        </ul>
        <button
          className="cta  blueBack"
          id="cta"
          onClick={() => {
            openModal();
          }}
        >
          Request Appointment
        </button>
        <div id="ham" onClick={openNav}>
          <Image
            layout="fill"
            objectFit="contain"
            src={`${process.env.NEXT_PUBLIC_IMAGESPATH}/menu-icon.png`}
            alt="menu"
          />
        </div>
        <div id="cross" onClick={closeNav}>
          <Image
            layout="fill"
            objectFit="contain"
            src={`${process.env.NEXT_PUBLIC_IMAGESPATH}/close-icon.png`}
            alt="close"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
