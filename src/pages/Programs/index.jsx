import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import { Cursor } from "../../components/Cursor";
import { Bubbles } from "../../components/Bubbles";
import { NavBar } from "../../components/NavBar";
import { SlideShow } from "../../components/slideShow";
import { AnimatePage } from "../../components/AnimatePage";

export function Programs() {
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
      <div className="scene-programs" onMouseMove={handleMouseMove}>
        <div className="background-programs">
          <Bubbles />
        </div>
        <div className="foreground-programs">
          <img src="/Foreground.png" alt="" className="curves" />
        </div>
        <div className="container-programs">
          <NavBar
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            actived={"programs"}
          />
          <h1 className="header-programs">Nossos programas</h1>
          <SlideShow
            slidesData={[
              {
                small: "/cow-small.jpg",
                image: "/coworking.jpg",
                title: "Espaço de Coworking Inspirador:",
                listData: [
                  "Ambiente colaborativo e inovador para sua equipe.",
                  "Networking com outros empreendedores visionários.",
                  "Infraestrutura completa com escritórios equipados e espaços de reunião.",
                  "Eventos e palestras inspiradoras com especialistas do setor.",
                ],
                listed: true,
              },
              {
                small: "/acel-small.jpg",
                image: "/aceleracao.jpg",
                title: "Programa de Aceleração Intensiva:",
                listData: [
                  "Transforme sua ideia em um negócio sólido e escalável.",
                  "Mentoria individualizada de especialistas experientes.",
                  "Workshops práticos e treinamentos especializados.",
                  "Acesso a uma rede exclusiva de investidores e parceiros estratégicos.",
                ],
                listed: true,
              },
              {
                small: "/mentoria-small.jpg",
                image: "/mentoria.jpg",
                title: "Mentoria Especializada:",
                listData: [
                  "Mentores renomados com expertise em diversas áreas.",
                  "Aconselhamento estratégico personalizado para impulsionar seu negócio.",
                  "Acesso a uma rede de contatos valiosa para parcerias e oportunidades de negócios.",
                ],
                listed: true,
              },
              {
                small: "/suporte-small.jpg",
                image: "/suporte.jpg",
                title: "Suporte Financeiro e Captação de Recursos:",
                listData: [
                  "Orientação na preparação de pitch decks e estratégias de captação de recursos.",
                  "Acesso a oportunidades de financiamento e investimento.",
                  "Conexões com fundos de investimento, anjos e programas de incentivo.",
                ],
                listed: true,
              },
              {
                small: "/networking-small.jpg",
                image: "/networking.jpg",
                title: "Networking e Eventos:",
                listData: [
                  "Eventos de networking exclusivos com investidores, empresários e especialistas do setor.",
                  "Participação em conferências, feiras e workshops relevantes.",
                  "Oportunidades de conexão com parceiros estratégicos e potenciais clientes.",
                ],
                listed: true,
              },
              {
                small: "/dev-small.jpg",
                image: "/desenvolvimento.jpg",
                title: "Programa de Desenvolvimento de Produto:",
                listData: [
                  "Suporte no desenvolvimento e aprimoramento do seu produto/serviço.",
                  "Validação de mercado e feedback especializado.",
                  "Workshops de design thinking, prototipagem e testes de usabilidade.",
                ],
                listed: true,
              },

              // Add more slide data here
            ]}
            buttons={false}
          />
          <Cursor />
        </div>
      </div>
    </AnimatePage>
  );
}
