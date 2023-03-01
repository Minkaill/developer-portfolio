export const user = {
  position: {
    position: [
      { id: 1, title: "Frontend Developer" },
      { id: 2, title: "Backend Developer" },
    ],
    title: "Я разрабатываю и кодирую на React, и мне нравится то, что я делаю.",
  },
  aboutme: {
    title: "Привет, я Минкаил. Приятно познакомиться.",
    text: "Начав свой путь frontend-разработчика 3 года назад, я выполнял удаленную работу на фрилансе, участвовал в командных проектах и сотрудничал с талантливыми людьми, разрабатывая приложения для бизнеса, так и для потребителей. Я спокойно уверен в себе, любопытен от природы и постоянно работаю над совершенствованием своих навыков, решая по несколько задач за раз.",
  },
  skills: [
    {
      id: 1,
      frontend: {
        id: 1,
        icon: "/frontend.png",
        position: {
          position: "Frontend",
          title:
            "Мне нравится кодировать вещи с нуля, и мне нравится воплощать идеи в жизнь в браузере.",
        },
        language: [{ name: "JavaScript" }],
        dev_tools: [
          { id: 1, name: "TypeScript" },
          { id: 2, name: "React JS" },
          { id: 3, name: "Next JS" },
          { id: 4, name: "Svelte" },
          { id: 5, name: "Redux Toolkit" },
          { id: 6, name: "Babel" },
          { id: 7, name: "Webpack" },
          { id: 8, name: "REST API" },
        ],
      },
    },

    {
      id: 2,
      frontend: {
        id: 1,
        icon: "/backend.png",
        position: {
          position: "Backend",
          title:
            "Для правильного построения здания, нужен крепкий фундамент, именно этим мне и нравится заниматься на стороне сервера.",
        },
        language: [{ name: "JavaScript" }],
        dev_tools: [
          { id: 1, name: "Node" },
          { id: 2, name: "Strapi" },
          { id: 3, name: "MongoDB" },
          { id: 4, name: "Mongoose" },
          { id: 5, name: "Express" },
        ],
      },
    },

    {
      id: 3,
      frontend: {
        id: 1,
        icon: "/css.png",
        position: {
          position: "Other",
          title:
            "Я ценю простую структуру контента, чистые модели дизайна и продуманное взаимодействие.",
        },
        language: [{ name: "HTML - CSS" }],
        dev_tools: [
          { id: 1, name: "Tailwind UI - CSS" },
          { id: 2, name: "Flowbite" },
          { id: 3, name: "MUI" },
          { id: 4, name: "Bootsrap" },
          { id: 5, name: "AOS" },
          { id: 6, name: "Motion One" },
          { id: 7, name: "Figma" },
          { id: 8, name: "Adobe Photoshop" },
        ],
      },
    },
  ],
  companies: [
    {
      id: 1,
      icon: "/intocode.jpg",
      name: "Intocode",
    },
    {
      id: 2,
      icon: "/expovision.png",
      name: "Expovision",
    },
    {
      id: 3,
      icon: "/servos.png",
      name: "Servos",
    },
    {
      id: 4,
      icon: "/bilance.jpeg",
      name: "Bilance",
    },
  ],
};
