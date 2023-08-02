import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import { Cursor } from "../../components/Cursor";
import { Bubbles } from "../../components/Bubbles";
import { NavBar } from "../../components/NavBar";
import { SlideShow } from "../../components/slideShow";
import { AnimatePage } from "../../components/AnimatePage";

export function StartUps() {
  const [isPinned, setIsPinned] = useState(false);

  const button = document.querySelector(".button");
  const area = document.querySelector(".button-area");
  const cursor1 = document.querySelector(".cursor1");
  const cursor2 = document.querySelector(".cursor2");
  const cursor3 = document.querySelector(".cursor3");
  const cursor4 = document.querySelector(".cursor4");
  const cursor5 = document.querySelector(".cursor5");
  const cursor6 = document.querySelector(".cursor6");
  const cursor = document.querySelector(".cursor");
  useEffect(() => {
    setIsPinned(true);
  }, []);
  const startOrbitAnimation = () => {
    cursor1.classList.add("float1");
    cursor2.classList.add("float2");
    cursor3.classList.add("float3");
    cursor4.classList.add("float4");
    cursor5.classList.add("float5");
    cursor6.classList.add("float6");
  };

  const stopOrbitAnimation = () => {
    cursor1.classList.remove("float1");
    cursor2.classList.remove("float2");
    cursor3.classList.remove("float3");
    cursor4.classList.remove("float4");
    cursor5.classList.remove("float5");
    cursor6.classList.remove("float6");
  };

  const handleMouseEnter = () => {
    setIsPinned(true);
    startOrbitAnimation();
  };

  const handleMouseLeave = () => {
    setIsPinned(false);
    stopOrbitAnimation();
  };

  const handleMouseMove = (e) => {
    const followerRect = cursor.getBoundingClientRect();
    const followerCenterX = followerRect.left + followerRect.width / 2;
    const followerCenterY = followerRect.top + followerRect.height / 2;
    const x = e.clientX;
    const y = e.clientY;

    if (isPinned) {
      const buttonRect = button.getBoundingClientRect();
      const buttonCenterX = buttonRect.left + buttonRect.width / 2;
      const buttonCenterY = buttonRect.top + buttonRect.height / 2;

      const buttonArea = area.getBoundingClientRect();
      const areaCenterX = buttonArea.left + buttonArea.width / 2;
      const areaCenterY = buttonArea.top + buttonArea.height / 2;
      const areadx = areaCenterX - x;
      const aready = areaCenterY - y;
      const distanceArea = Math.sqrt(areadx * areadx + aready * aready);

      if (distanceArea <= buttonArea.width / 2) {
        cursor6.style.cssText = `left: ${buttonCenterX}px; top:${buttonCenterY}px;`;
        cursor5.style.cssText = `left: ${buttonCenterX}px; top:${buttonCenterY}px;`;
        cursor4.style.cssText = `left: ${buttonCenterX}px; top:${buttonCenterY}px;`;
        cursor3.style.cssText = `left: ${buttonCenterX}px; top:${buttonCenterY}px;`;
        cursor2.style.cssText = `left: ${buttonCenterX}px; top:${buttonCenterY}px;`;
        cursor1.style.cssText = `left: ${buttonCenterX}px; top:${buttonCenterY}px;`;
        cursor.style.cssText = `left: ${x}px; top:${y}px;`;
        return;
      }
    }
    const dx = x - followerCenterX;
    const dy = y - followerCenterY;

    const newX = followerCenterX + dx * 1.2;
    const newY = followerCenterY + dy * 1.2;

    cursor.style.left = newX + "px";
    cursor.style.top = newY + "px";

    cursor1.style.left = cursor.style.left;
    cursor1.style.top = cursor.style.top;
    cursor2.style.left = cursor1.style.left;
    cursor2.style.top = cursor1.style.top;
    cursor3.style.left = cursor2.style.left;
    cursor3.style.top = cursor2.style.top;
    cursor4.style.left = cursor3.style.left;
    cursor4.style.top = cursor3.style.top;
    cursor5.style.left = cursor4.style.left;
    cursor5.style.top = cursor4.style.top;
    cursor6.style.left = cursor5.style.left;
    cursor6.style.top = cursor5.style.top;
  };

  return (
    <AnimatePage>
      <div className="scene-startup" onMouseMove={handleMouseMove}>
        <div className="background-startup">
          <Bubbles />
        </div>
        <div className="foreground-startup">
          <img src="/Foreground.png" alt="" className="curves" />
        </div>
        <div className="container-startup">
          <NavBar
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            actived={"startups"}
          />
          <h1 className="header-startup">StartUps em destaque</h1>
          <SlideShow
            slidesData={[
              {
                image:
                  "https://th.bing.com/th/id/OIP.NU9zscMHAn83CpLA9fDjrgHaHa?pid=ImgDet&rs=1",
                title: "SparkleCraft",
                slogan:
                  "Desperte a magia do conhecimento, enquanto brilha e cria!",
                description:
                  "A SparkleCraft is a startup that combines magic and technology...",
                listed: false,
                listData: [],
              },
              {
                image:
                  "https://th.bing.com/th/id/OIP.NU9zscMHAn83CpLA9fDjrgHaHa?pid=ImgDet&rs=1",
                title: "SparkleCraft",
                slogan:
                  "Desperte a magia do conhecimento, enquanto brilha e cria!",
                description:
                  "A SparkleCraft is a startup that combines magic and technology...",
                listed: false,
                listData: [],
              },
              {
                image:
                  "https://th.bing.com/th/id/OIP.NU9zscMHAn83CpLA9fDjrgHaHa?pid=ImgDet&rs=1",
                title: "SparkleCraft",
                slogan:
                  "Desperte a magia do conhecimento, enquanto brilha e cria!",
                description:
                  "A SparkleCraft is a startup that combines magic and technology...",
                listed: false,
                listData: [],
              },
              {
                image:
                  "https://th.bing.com/th/id/OIP.NU9zscMHAn83CpLA9fDjrgHaHa?pid=ImgDet&rs=1",
                title: "SparkleCraft",
                slogan:
                  "Desperte a magia do conhecimento, enquanto brilha e cria!",
                description:
                  "A SparkleCraft is a startup that combines magic and technology...",
                listed: false,
                listData: [],
              },
              // Add more slide data here
            ]}
            buttons={true}
          />
          <Cursor />
        </div>
      </div>
    </AnimatePage>
  );
}
