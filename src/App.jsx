import { useEffect, useState } from "react";
import {
  BsLinkedin,
  BsGithub,
  BsArrowDownShort,
  BsFillCheckCircleFill,
  BsFillTelephoneFill,
} from "react-icons/bs";
import {
  IoSchoolSharp,
  IoInformationCircle,
  IoClose,
  IoLocationSharp,
} from "react-icons/io5";
import { RiSuitcaseFill } from "react-icons/ri";
import { HiMail } from "react-icons/hi";
import me from "./assets/me.svg";
import meLight from "./assets/me-light.svg";
import realme from "./assets/polaroid.png";
import saap from "./assets/saap.png";
import kidsacademy from "./assets/Kids Academy.png";
import meunegocio from "./assets/Meu Negócio.png";
import saapprint1 from "./assets/saapprint1.png";
import saapprint2 from "./assets/saapprint2.png";
import kidsprint1 from "./assets/kidsprint1.png";
import kidsprint2 from "./assets/kidsprint2.png";
import meuprint1 from "./assets/meuprint1.png";
import meuprint2 from "./assets/meuprint2.png";
import bootstrap from "./assets/bootstrap 1.png";
import css from "./assets/css 1.png";
import html from "./assets/html-5 1.png";
import php from "./assets/php 1.png";
import figma from "./assets/figma 1.png";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import "./App.scss";

export function App() {
  const [language, setLanguage] = useState("pt-BR");
  const [theme, setTheme] = useState("light");
  const [saapModal, setSaapModal] = useState(false);
  const [kidsModal, setKidsModal] = useState(false);
  const [meuModal, setMeuModal] = useState(false);

  useEffect(() => {
    const identifyLanguage = () => {
      const language = window.navigator.language;
      setLanguage(
        language === "pt-BR" || language === "en-US" ? language : "en-US"
      );
    };

    const identifyTheme = () => {
      const isDarkThemePreferred = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(isDarkThemePreferred ? "dark" : "light");
    };

    identifyLanguage();
    identifyTheme();
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor =
      theme === "dark" ? "#242323" : "#f5f5f5";

    document.body.style.color = theme === "dark" ? "#f5f5f5" : "#242323";
  }, [theme]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Container>
        <Navbar
          language={language}
          setLanguage={setLanguage}
          theme={theme}
          setTheme={setTheme}
          scrollToSection={scrollToSection}
        />
        <main className={theme}>
          <section id="home">
            <div className="home-presentation">
              <h1 className="my-name">
                {language === "pt-BR" ? (
                  <>
                    Olá, eu sou <span>Nardi</span>!
                  </>
                ) : (
                  <>
                    Hey, I am <span>Nardi</span>!
                  </>
                )}
              </h1>

              <p className="text">
                {language === "pt-BR" ? (
                  <>
                    Um <b>Desenvolvedor Web</b> em busca de desafios que me
                    permitam criar{" "}
                    <b>experiências interativas e funcionais na web</b>.
                    Sinta-se a vontade para navegar pelo meu portfolio!
                  </>
                ) : (
                  <>
                    A <b>Web Developer</b> looking for challenges that allow me
                    to create <b>interactive and functional web experiences</b>.
                    Feel free to browse through my portfolio!
                  </>
                )}
              </p>

              <div className="social">
                <a
                  href="https://www.linkedin.com/in/matheus-eduardo-nardi/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsLinkedin />
                </a>
                <a
                  href="https://github.com/matheusnardi"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsGithub />
                </a>
              </div>

              <p
                className="next-section"
                onClick={() => {
                  scrollToSection("about");
                }}
              >
                {language === "pt-BR"
                  ? "Veja um pouco sobre mim"
                  : "See a little about me"}
                <BsArrowDownShort />
              </p>
            </div>
            <div className="avatar">
              <img src={theme === "dark" ? me : meLight} alt="me" />
            </div>
          </section>
          <section id="about">
            <h1 className="title">
              {language === "pt-BR" ? "Sobre mim" : "About me"}
            </h1>
            <div className="text-img">
              <p className="text">
                {language === "pt-BR" ? (
                  <>
                    Olá, meu nome é Matheus Eduardo Nardi, mas você pode me
                    chamar de Nardi. Sou apaixonado por tecnologia e
                    desenvolvimento desde muito cedo. Aos 5 anos de idade, eu já
                    me aventurava no Paint e, sem querer, acabei baixando alguns
                    vírus. Claro, foi uma experiência acidental! Anos depois,
                    decidi cursar Informática para Internet na Etec Prefeito
                    Alberto Feres, onde adquiri uma base essencial para minha
                    carreira. Desde então, tenho me dedicado continuamente ao
                    aprimoramento dos meus conhecimentos e ao crescimento
                    profissional na área de desenvolvimento web. Meu objetivo é
                    estar sempre atualizado com as últimas tendências e
                    tecnologias, buscando soluções inovadoras e contribuindo
                    para o avanço do mundo digital.
                  </>
                ) : (
                  <>
                    Hello, my name is Matheus Eduardo Nardi, but you can call me
                    Nardi. I am passionate about technology and development from
                    a very early age. At 5 years old, I was already venturing
                    into Paint and, unintentionally, I ended up downloading some
                    viruses. Of course, it was an accidental experience! Years
                    later, I decided to study Internet Computing at Etec
                    Prefeito Alberto Feres, where I acquired an essential basis
                    for my career. Since then, I have been continuously
                    dedicating myself to improving my knowledge and professional
                    growth in the area of web development. My goal is to always
                    be up to date with the latest trends and technologies,
                    looking for innovative solutions and contributing to the
                    advancement of the digital world.
                  </>
                )}
              </p>
              <div className="real-me">
                <img src={realme} alt="real-me" />
              </div>
            </div>
            <p
              className="next-section"
              onClick={() => {
                scrollToSection("curriculum");
              }}
            >
              {language === "pt-BR"
                ? "Confira meu currículo"
                : "Check my curriculum"}
              <BsArrowDownShort />
            </p>
          </section>
          <section id="curriculum">
            <div className="education-skills">
              <div className="education">
                <h1 className="title">
                  <IoSchoolSharp />{" "}
                  {language === "pt-BR" ? <>Formação</> : <>Education</>}
                </h1>
                <div className="historic">
                  <div className="item">
                    <h3>
                      {language === "pt-BR" ? (
                        <>Tecnólogo de Sistemas para Internet</>
                      ) : (
                        <>Internet Systems Technologist</>
                      )}
                    </h3>
                    <p className="place">Fatec Antonio Brambilla</p>
                    <p>2020 - 2023</p>
                  </div>
                  <hr />
                  <div className="item">
                    <h3>
                      {language === "pt-BR" ? (
                        <>Introdução a aplicação web com React.js</>
                      ) : (
                        <>Introduction to web application with React.js</>
                      )}
                    </h3>
                    <p className="place">Venturus4Tech</p>
                    <p>2022</p>
                  </div>
                  <hr />
                  <div className="item">
                    <h3>
                      {language === "pt-BR" ? (
                        <>Técnico em Informática para Internet</>
                      ) : (
                        <>Internet IT Technician</>
                      )}
                    </h3>
                    <p className="place">Etec Prefeiro Alberto Feres</p>
                    <p>2019 - 2020</p>
                  </div>
                </div>
              </div>
              <div className="skills">
                <h1 className="title">
                  <BsFillCheckCircleFill />{" "}
                  {language === "pt-BR" ? <>Habilidades</> : <>Skills</>}
                </h1>
                <div className="tecnologies">
                  <div className="level advanced">
                    <h3>
                      {language === "pt-BR" ? <>Avançado</> : <>Advanced</>}{" "}
                      <hr />
                    </h3>
                    <div className="items">
                      <p>HTML</p>
                      <p>CSS</p>
                      <p>PHP</p>
                      <p>Javascript</p>
                      <p>React</p>
                    </div>
                  </div>
                  <div className="level intermediary">
                    <h3>
                      {language === "pt-BR" ? (
                        <>Intermediário</>
                      ) : (
                        <>Intermediary</>
                      )}{" "}
                      <hr />
                    </h3>
                    <div className="items">
                      <p>Bootstrap</p>
                      <p>SASS</p>
                      <p>Figma</p>
                      <p>Next.js</p>
                      <p>MySQL</p>
                      <p>Git</p>
                    </div>
                  </div>
                  <div className="level beginner">
                    <h3>
                      {language === "pt-BR" ? <>Iniciante</> : <>Beginner</>}{" "}
                      <hr />
                    </h3>
                    <div className="items">
                      <p>Photoshop</p>
                      <p>Node.js</p>
                      <p>Python</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="experience">
              <h1 className="title">
                <RiSuitcaseFill />{" "}
                {language === "pt-BR" ? (
                  <>Experiência Profissional</>
                ) : (
                  <>Professional Experience</>
                )}
              </h1>
              <div className="timeline"></div>
              {language === "pt-BR" ? (
                <div className="works">
                  <div className="item">
                    <div className="point"></div>
                    <h3>
                      <ul>
                        <li>Atendimento ao cliente</li>
                        <li>Solução de problemas</li>
                        <li>Configuração de equipamentos</li>
                        <li>Manipulação de processos fiscais</li>
                      </ul>
                      Suporte Técnico <IoInformationCircle />
                    </h3>
                    <p>Sismater</p>
                    <p>Janeiro 2021 - Maio 2021</p>
                  </div>
                  <div className="item">
                    <div className="point"></div>
                    <h3>
                      <ul>
                        <li>Design de interfaces web</li>
                        <li>Desenvolvimento de sistemas web</li>
                        <li>Manutenção de sistemas legado</li>
                        <li>Gerenciamento de projetos</li>
                      </ul>
                      Desenvolvedor Front-end <IoInformationCircle />
                    </h3>
                    <p>StarCorp</p>
                    <p>Dezembro 2022 - Junho 2023</p>
                  </div>
                  <div className="item">
                    <div className="point"></div>
                    <h3>
                      <ul>
                        <li>Desenvolvimento de Front e Back</li>
                        <li>Manutenção de funcionalidades</li>
                        <li>Vivência com Scrum</li>
                        <li>Manipulação de Lambda</li>
                      </ul>
                      Desenvolvedor Full Stack <IoInformationCircle />
                    </h3>
                    <p>TEBE</p>
                    <p>Junho 2023 - o momento</p>
                  </div>
                </div>
              ) : (
                <div className="works">
                  <div className="item">
                    <div className="point"></div>
                    <h3>
                      <ul>
                        <li>Customer service</li> <li>Troubleshooting</li>
                        <li>Equipment configuration</li>
                        <li>Manipulation of tax processes</li>
                      </ul>
                      Technical Support <IoInformationCircle />
                    </h3>
                    <p>Sismater</p>
                    <p>January 2021 - May 2021</p>
                  </div>
                  <div className="item">
                    <div className="point"></div>
                    <h3>
                      <ul>
                        <li>Design of web interfaces</li>
                        <li>Web systems development</li>
                        <li>Maintenance of legacy systems</li>
                        <li>Project Management</li>
                      </ul>
                      Front End Developer <IoInformationCircle />
                    </h3>
                    <p>StarCorp</p>
                    <p>December 2022 - June 2023</p>
                  </div>
                  <div className="item">
                    <div className="point"></div>
                    <h3>
                      <ul>
                        <li>Front and Back development</li>
                        <li>Feature maintenance</li>
                        <li>Experience with Scrum</li>
                        <li>Lambda handling</li>
                      </ul>
                      Full Stack Developer <IoInformationCircle />
                    </h3>
                    <p>TEBE</p>
                    <p>June 2023 - the moment</p>
                  </div>
                </div>
              )}
            </div>
            <p
              className="next-section"
              onClick={() => {
                scrollToSection("projects");
              }}
            >
              {language === "pt-BR"
                ? "Conheça meus projetos"
                : "Discover my projects"}
              <BsArrowDownShort />
            </p>
          </section>
          <section id="projects">
            <h1 className="title">
              {language === "pt-BR" ? "Projetos" : "Projects"}
            </h1>
            <div className="project-cards">
              <div className="card">
                <div className="texts">
                  <h2>SAAP</h2>
                  <p>
                    {language === "pt-BR"
                      ? "Sistema de Avaliação e Armazenamento de Projetos."
                      : "Project Evaluation and Storage System."}
                  </p>
                  <div className="buttons">
                    <p
                      onClick={() => {
                        setSaapModal(!saapModal);
                      }}
                    >
                      {language === "pt-BR"
                        ? "Visualizar Projeto"
                        : "View Project"}
                    </p>
                    <a
                      href="https://feiradeprojetos.com.br/login.php"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {language === "pt-BR" ? "Visitar Site" : "Visit Website"}
                    </a>
                  </div>
                </div>
                <div className="img">
                  <img src={saap} alt="saap" />
                </div>

                <div className={`modal ${saapModal && "show"}`}>
                  <div className="modal-card">
                    <div className="header">
                      <h1 className="title">
                        SAAP{" "}
                        <IoClose
                          onClick={() => {
                            setSaapModal(!saapModal);
                          }}
                        />
                      </h1>
                    </div>
                    <div className="body">
                      <div className="block">
                        <div className="left">
                          <h2>
                            {language === "pt-BR"
                              ? "Contextualização"
                              : "Context"}
                          </h2>
                          <p>
                            {language === "pt-BR"
                              ? "A avaliação de projetos é um procedimento amplamente utilizado nos ambientes acadêmicos, que proporciona a finalização de, por exemplo, trabalhos de conclusão de curso (TCC), emitindo notas e questionamentos sobre o trabalho avaliado. Devido à sua importância, os processos costumam ser grandes e demorados, para que os autores não sejam prejudicados por erros durante a avaliação. Além disso, as ferramentas utilizadas durante o evento são, em sua maioria, papéis impressos e canetas, para que o avaliador possa preencher suas considerações acerca do projeto."
                              : "The evaluation of projects is a procedure widely used in academic environments, which provides the finalization of, for example, course conclusion works (TCC), issuing notes and questions about the evaluated work. Due to their importance, processes are often large and time-consuming, so that authors are not hampered by errors during evaluation. In addition, the tools used during the event are mostly printed paper and pens, so that the evaluator can fill in his considerations about the project."}
                          </p>
                          <p>
                            {language === "pt-BR"
                              ? "O projeto SAAP consiste em uma aplicação web capaz de realizar feiras de avaliação totalmente online, acabando com os métodos manuais que utilizam da escrita e análises no papel. O site possuí usuários do tipo Aluno, Avaliador e Administrador, com cada um possuíndo diferentes funções para o correto funcionamento do sistema. Com o SAAP, é possível que um aluno crie uma equipe e envie seu projeto, depois um administrador define qual avaliador avaliará, para enfim o avaliador realizar a avaliação de todos os projetos definidos a ele."
                              : "The SAAP project consists of a web application capable of carrying out assessment fairs completely online, putting an end to manual methods that use writing and analysis on paper. The site has Users of the Student, Evaluator and Administrator type, with each one having different functions for the correct functioning of the system. With SAAP, it is possible for a student to create a team and send his project, then an administrator defines which evaluator will evaluate, so that the evaluator can evaluate all the projects defined for him."}
                          </p>
                        </div>
                        <div className="right">
                          <img src={saapprint1} alt="saapprint1" />
                        </div>
                      </div>
                      <div className="block">
                        <div className="left">
                          <h2>
                            {language === "pt-BR"
                              ? "Funcionalidades"
                              : "Features"}
                          </h2>

                          {language === "pt-BR" ? (
                            <>
                              <div className="list">
                                <p>Administrador</p>
                                <ul>
                                  <li>Geração de Relatório</li>
                                  <li>Visualização de Notas/Ranking</li>
                                  <li>Cadastro de Usuários</li>
                                  <li>Cadastro de Projetos e Equipes</li>
                                  <li>Cadastro de Instituições e Cursos</li>
                                  <li>Consulta e Edição de Usuários</li>
                                  <li>
                                    Consulta e Edição de Projetos e Equipes
                                  </li>
                                  <li>
                                    Consulta e Edição de Instituições e Cursos
                                  </li>
                                  <li>Consulta de Avaliações</li>
                                  <li>Definição de Avaliações</li>
                                </ul>
                              </div>
                              <div className="list">
                                <p>Avaliador</p>
                                <ul>
                                  <li>Avaliação de Projetos</li>
                                  <li>Alteração de Avaliações</li>
                                  <li>Visualização de Notas</li>
                                  <li>Visualização de outras avaliações</li>
                                  <li>Visualização de detalhes dos Projetos</li>
                                  <li>Envio de pedidos de correção</li>
                                  <li>Classificação de Projetos</li>
                                </ul>
                              </div>
                              <div className="list">
                                <p>Aluno</p>
                                <ul>
                                  <li>Cadastro e Alteração de Equipe</li>
                                  <li>Cadastro e Alteração de Projeto</li>
                                  <li>Adicionar membros a uma equipe</li>
                                  <li>Adicionar curso secundário</li>
                                </ul>
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="list">
                                <p>Administrator</p>
                                <ul>
                                  <li>Report Generation</li>
                                  <li>Grade/Ranking Visualization</li>
                                  <li>User Registration</li>
                                  <li>Project and Team Registration</li>
                                  <li>Institution and Course Registration</li>
                                  <li>User Query and Editing</li>
                                  <li>Project and Team Query and Editing</li>
                                  <li>
                                    Institution and Course Query and Editing
                                  </li>
                                  <li>Evaluation Query</li>
                                  <li>Evaluation Definition</li>
                                </ul>
                              </div>

                              <div className="list">
                                <p>Evaluator</p>
                                <ul>
                                  <li>Project Evaluation</li>
                                  <li>Evaluation Modification</li>
                                  <li>Grade Visualization</li>
                                  <li>Visualization of other evaluations</li>
                                  <li>Visualization of Project details</li>
                                  <li>Submission of correction requests</li>
                                  <li>Project Ranking</li>
                                </ul>
                              </div>

                              <div className="list">
                                <p>Student</p>
                                <ul>
                                  <li>Team Registration and Modification</li>
                                  <li>Project Registration and Modification</li>
                                  <li>Add members to a team</li>
                                  <li>Add secondary course</li>
                                </ul>
                              </div>
                            </>
                          )}
                        </div>
                        <div className="right">
                          <img src={saapprint2} alt="saapprint2" />
                        </div>
                      </div>
                      <div className="footer">
                        <h2>
                          {language === "pt-BR"
                            ? "Tecnologias"
                            : "Technologies"}
                        </h2>
                        <div className="imgs">
                          <img src={html} alt="html" />
                          <img src={css} alt="css" />
                          <img src={bootstrap} alt="bootstrap" />
                          <img src={php} alt="php" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {language === "pt-BR" ? (
                <>
                  <div className="card">
                    <div className="texts">
                      <h2>Kids Academy</h2>
                      <p>Site de cursos de programação infantis.</p>
                      <div className="buttons">
                        <p
                          onClick={() => {
                            setKidsModal(!kidsModal);
                          }}
                        >
                          Visualizar Projeto
                        </p>
                        <a
                          href="https://www.figma.com/file/EmqOKOjxeC4alfHIQzWNmX/Kids-Academy?node-id=233%3A109&t=8HQQqTPYyN8OlzOe-0"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Visitar Protótipo
                        </a>
                      </div>
                    </div>
                    <div className="img">
                      <img src={kidsacademy} alt="kidsacademy" />
                    </div>

                    <div className={`modal ${kidsModal && "show"}`}>
                      <div className="modal-card">
                        <div className="header">
                          <h1 className="title">
                            Kids Academy{" "}
                            <IoClose
                              onClick={() => {
                                setKidsModal(!kidsModal);
                              }}
                            />
                          </h1>
                        </div>
                        <div className="body">
                          <div className="block">
                            <div className="left">
                              <h2>Contextualização</h2>
                              <p>
                                A importância da educação na sociedade é
                                amplamente reconhecida, e com ela vem a
                                responsabilidade de garantir sua eficiência. No
                                entanto, o processo de aprendizado muitas vezes
                                é padronizado, seguindo um plano de ensino
                                básico, o que limita as possibilidades para os
                                alunos. Esse cenário é ainda mais restritivo
                                para crianças, que têm poucas oportunidades de
                                experimentar além do currículo tradicional,
                                devido à falta de instituições que ofereçam
                                abordagens diferenciadas e cursos diversificados
                                para esse público.
                              </p>
                              <p>
                                Com base nessa perspectiva, surgiu o projeto
                                Kids Academy, um ambiente online dedicado a
                                cursos de tecnologia para crianças. A concepção
                                desse projeto foi fundamentada na necessidade de
                                fornecer um espaço virtual que atendesse às
                                demandas específicas desse público. O design do
                                Kids Academy foi cuidadosamente planejado para
                                proporcionar familiaridade aos usuários,
                                mantendo a simplicidade e a praticidade como
                                pilares centrais, sempre priorizando a
                                experiência do usuário.
                              </p>
                            </div>
                            <div className="right">
                              <img src={kidsprint1} alt="kidsprint1" />
                            </div>
                          </div>
                          <div className="block">
                            <div className="left">
                              <h2>Funcionalidades</h2>

                              <div className="list">
                                <p>Aluno</p>
                                <ul>
                                  <li>Visualização das aulas</li>
                                  <li>Personalização de Perfil</li>
                                  <li>Realização de atividades</li>
                                  <li>Ajuda e Suporte</li>
                                </ul>
                              </div>

                              <div className="list">
                                <p>Responsável</p>
                                <ul>
                                  <li>Cadastro do aluno</li>
                                  <li>Acompanhamento de desempenho</li>
                                  <li>Atualização de plano</li>
                                </ul>
                              </div>
                            </div>
                            <div className="right">
                              <img src={kidsprint2} alt="kidsprint2" />
                            </div>
                          </div>
                          <div className="footer">
                            <h2>Tecnologias</h2>
                            <div className="imgs">
                              <img src={figma} alt="figma" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="texts">
                      <h2>Meu Negócio</h2>
                      <p>Mini ERP gratuito para gestão de negócios.</p>
                      <div className="buttons">
                        <p
                          onClick={() => {
                            setMeuModal(!meuModal);
                          }}
                        >
                          Visualizar Projeto
                        </p>
                        <a
                          href="https://www.figma.com/file/dxT7VlUBSuIrWlWURZDHuD/Meu-Neg%C3%B3cio?node-id=0%3A1&t=8HQQqTPYyN8OlzOe-0"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Visitar Protótipo
                        </a>
                      </div>
                    </div>
                    <div className="img">
                      <img src={meunegocio} alt="meunegocio" />
                    </div>

                    <div className={`modal ${meuModal && "show"}`}>
                      <div className="modal-card">
                        <div className="header">
                          <h1 className="title">
                            Meu Negócio{" "}
                            <IoClose
                              onClick={() => {
                                setMeuModal(!meuModal);
                              }}
                            />
                          </h1>
                        </div>
                        <div className="body">
                          <div className="block">
                            <div className="left">
                              <h2>Contextualização</h2>
                              <p>
                                O gerenciamento de recursos em um negócio é
                                extremamente complicado, considerando que
                                existem muitas questões financeiras envolvidas
                                no processo. Essa dificuldade é geralmente mais
                                visível naqueles que gerenciam o próprio
                                negócio, como papelarias, padarias e diversos
                                tipos de comércio, por terem de lidar com muitas
                                informações importantes, como estoque de
                                produtos, fluxo de caixa, gestão de
                                funcionários, cadastros de clientes etc. Para
                                resolver essa situação, negócios de grande porte
                                costumam contratar serviços que oferecem
                                sistemas de planejamento dos recursos da empresa
                                (ERP), que muitas vezes são caros demais para
                                pequenos empreendedores, e acabam não
                                compensando o dinheiro gasto.
                              </p>
                              <p>
                                Meu Negócio é um projeto de aplicação mobile,
                                que oferece um sistema completo de gerenciamento
                                de recursos de forma gratuita. O motivo dessa
                                ideia se deu ao fato de muitos empreendedores
                                autônomos terem dificuldade em cuidar do seu
                                negócio, pois a maioria das soluções ERP são
                                pagas. O aplicativo contém funções de caixa,
                                estoque, venda, controle de usuário e outros.
                              </p>
                            </div>
                            <div className="right">
                              <img src={meuprint1} alt="meuprint1" />
                            </div>
                          </div>
                          <div className="block">
                            <div className="left">
                              <h2>Funcionalidades</h2>

                              <div className="list">
                                <p>Administrador</p>
                                <ul>
                                  <li>Cadastro da Empresa</li>
                                  <li>Controle de Colaboradores</li>
                                  <li>Controle de Contas</li>
                                  <li>Controle de Caixa</li>
                                  <li>Controle de Estoque</li>
                                  <li>Geração de Relatórios</li>
                                  <li>Personalização do app</li>
                                  <li>Realização de Vendas</li>
                                </ul>
                              </div>

                              <div className="list">
                                <p>Colaborador</p>
                                <ul>
                                  <li>
                                    Funções do colaborador ficam a critério do
                                    Administrador, que pode permitir todas ou
                                    algumas.
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="right">
                              <img src={meuprint2} alt="meuprint2" />
                            </div>
                          </div>
                          <div className="footer">
                            <h2>Tecnologias</h2>
                            <div className="imgs">
                              <img src={figma} alt="figma" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="card">
                    <div className="texts">
                      <h2>Kids Academy</h2>
                      <p>Childrens programming courses website.</p>
                      <div className="buttons">
                        <p
                          onClick={() => {
                            setKidsModal(!kidsModal);
                          }}
                        >
                          View Project
                        </p>
                        <a
                          href="https://www.figma.com/file/EmqOKOjxeC4alfHIQzWNmX/Kids-Academy?node-id=233%3A109&t=8HQQqTPYyN8OlzOe-0"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Visit Prototype
                        </a>
                      </div>
                    </div>
                    <div className="img">
                      <img src={kidsacademy} alt="kidsacademy" />
                    </div>
                    <div className={`modal ${kidsModal && "show"}`}>
                      <div className="modal-card">
                        <div className="header">
                          <h1 className="title">
                            Kids Academy{" "}
                            <IoClose
                              onClick={() => {
                                setKidsModal(!kidsModal);
                              }}
                            />
                          </h1>
                        </div>
                        <div className="body">
                          <div className="block">
                            <div className="left">
                              <h2>Context</h2>
                              <p>
                                The importance of education in society is widely
                                recognized, and with it comes the responsibility
                                of ensuring its effectiveness. However, the
                                learning process is often standardized,
                                following a basic teaching plan, which limits
                                possibilities for students. This scenario is
                                even more restrictive for children, who have few
                                opportunities to experience beyond the
                                traditional curriculum due to the lack of
                                institutions offering differentiated approaches
                                and diverse courses for this audience.
                              </p>
                              <p>
                                Based on this perspective, the Kids Academy
                                project emerged, an online environment dedicated
                                to technology courses for children. The
                                conception of this project was based on the need
                                to provide a virtual space that meets the
                                specific demands of this audience. The design of
                                Kids Academy was carefully planned to provide
                                familiarity to users, maintaining simplicity and
                                practicality as central pillars, always
                                prioritizing the user experience.
                              </p>
                            </div>
                            <div className="right">
                              <img src={kidsprint1} alt="kidsprint1" />
                            </div>
                          </div>
                          <div className="block">
                            <div className="left">
                              <h2>Features</h2>
                              <div className="list">
                                <p>Student</p>
                                <ul>
                                  <li>Lesson viewing</li>
                                  <li>Profile customization</li>
                                  <li>Completing activities</li>
                                  <li>Help and support</li>
                                </ul>
                              </div>
                              <div className="list">
                                <p>Guardian</p>
                                <ul>
                                  <li>Student registration</li>
                                  <li>Performance monitoring</li>
                                  <li>Plan updates</li>
                                </ul>
                              </div>
                            </div>
                            <div className="right">
                              <img src={kidsprint2} alt="kidsprint2" />
                            </div>
                          </div>
                          <div className="footer">
                            <h2>Technologies</h2>
                            <div className="imgs">
                              <img src={figma} alt="figma" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="texts">
                      <h2>My Business</h2>
                      <p>Free mini ERP for business management.</p>
                      <div className="buttons">
                        <p
                          onClick={() => {
                            setMeuModal(!meuModal);
                          }}
                        >
                          View Project
                        </p>
                        <a
                          href="https://www.figma.com/file/dxT7VlUBSuIrWlWURZDHuD/Meu-Neg%C3%B3cio?node-id=0%3A1&t=8HQQqTPYyN8OlzOe-0"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Visit Prototype
                        </a>
                      </div>
                    </div>
                    <div className="img">
                      <img src={meunegocio} alt="meunegocio" />
                    </div>
                    <div className={`modal ${meuModal && "show"}`}>
                      <div className="modal-card">
                        <div className="header">
                          <h1 className="title">
                            My Business{" "}
                            <IoClose
                              onClick={() => {
                                setMeuModal(!meuModal);
                              }}
                            />
                          </h1>
                        </div>
                        <div className="body">
                          <div className="block">
                            <div className="left">
                              <h2>Context</h2>
                              <p>
                                Managing resources in a business is extremely
                                complicated, considering that there are many
                                financial issues involved in the process. This
                                difficulty is often more visible in those who
                                manage their own business, such as stationery
                                stores, bakeries, and various types of commerce,
                                as they have to deal with many important pieces
                                of information, such as product inventory, cash
                                flow, employee management, customer records,
                                etc. To solve this situation, large businesses
                                often hire services that offer enterprise
                                resource planning systems (ERPs), which are
                                often too expensive for small entrepreneurs and
                                end up not justifying the money spent.
                              </p>
                              <p>
                                My Business is a mobile application project that
                                offers a complete resource management system for
                                free. The reason behind this idea is that many
                                self-employed entrepreneurs have difficulty
                                taking care of their business because most ERP
                                solutions are paid. The application contains
                                functions for cash, inventory, sales, user
                                control, and more.
                              </p>
                            </div>
                            <div className="right">
                              <img src={meuprint1} alt="meuprint1" />
                            </div>
                          </div>
                          <div className="block">
                            <div className="left">
                              <h2>Features</h2>
                              <div className="list">
                                <p>Administrator</p>
                                <ul>
                                  <li>Company registration</li>
                                  <li>Employee management</li>
                                  <li>Account management</li>
                                  <li>Cash management</li>
                                  <li>Inventory control</li>
                                  <li>Report generation</li>
                                  <li>App customization</li>
                                  <li>Sales execution</li>
                                </ul>
                              </div>
                              <div className="list">
                                <p>Employee</p>
                                <ul>
                                  <li>
                                    Employee functions are at the discretion of
                                    the Administrator, who can allow all or some
                                    of them.
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="right">
                              <img src={meuprint2} alt="meuprint2" />
                            </div>
                          </div>
                          <div className="footer">
                            <h2>Technologies</h2>
                            <div className="imgs">
                              <img src={figma} alt="figma" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
            <p
              className="next-section"
              onClick={() => {
                scrollToSection("contact");
              }}
            >
              {language === "pt-BR" ? "Entre em contato" : "Contact me"}
              <BsArrowDownShort />
            </p>
          </section>
          <section id="contact">
            <h1 className="title">{language === "pt-BR" ? "Contato" : "Contact"}</h1>
            <div className="block">
              <div className="form">
                <p>{language === "pt-BR" ? "Me envie uma mensagem!" : "Send me a message!"}</p>
                <div className="form-fields">
                  <input type="text" name="name" placeholder={language === "pt-BR" ? "Nome Completo" : "Your Name"} />
                  <input
                    type="email"
                    name="email"
                    placeholder={language === "pt-BR" ? "Endereço de E-mail" : "E-mail Address"}
                  />
                </div>
                <textarea
                  name="message"
                  className="message"
                  cols="30"
                  rows="10"
                  placeholder={language === "pt-BR" ? "Mensagem para Contato..." : "Message to Contact..."}
                ></textarea>
                <input
                  className="button"
                  type="submit"
                  value={language === "pt-BR" ? "Enviar Mensagem" : "Send Message"}
                />
              </div>
              <div className="info">
                <p>Matheus Eduardo Nardi</p>
                <div className="contact-info">
                  <p>
                    <IoLocationSharp /> Araras, SP
                  </p>
                  <p>
                    <BsFillTelephoneFill /> +55 19 999309823
                  </p>
                  <p>
                    <HiMail /> nardi.matheus@outlook.com
                  </p>
                </div>
                <div className="social">
                  <a
                    href="https://www.linkedin.com/in/matheus-eduardo-nardi/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsLinkedin />
                  </a>
                  <a
                    href="https://github.com/matheusnardi"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsGithub />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className={theme}>
          <Container custom="custom-footer-style">
            <p>
              <b>
                {language === "pt-BR"
                  ? "Desenvolvido por Matheus Nardi"
                  : "Developed by Matheus Nardi"}
              </b>
            </p>
            <p className="my-name" onClick={() => scrollToSection("home")}>
              {"</Nardi>"}
            </p>
          </Container>
        </footer>
      </Container>
    </>
  );
}

export default App;
