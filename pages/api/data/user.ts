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
        icon: "http://localhost:3000/_next/image?url=%2Fcode.png&w=64&q=75",
        position: {
          position: "Frontend",
          title:
            "Мне нравится кодировать вещи с нуля, и мне нравится воплощать идеи в жизнь в браузере.",
        },
        language: [{ name: "JavaScript" }],
        dev_tools: [
          { id: 1, name: "React" },
          { id: 2, name: "Next" },
          { id: 3, name: "Svelte" },
          { id: 4, name: "Redux Toolkit" },
          { id: 5, name: "TypeScript" },
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
        icon: "http://localhost:3000/_next/image?url=%2Fcode.png&w=64&q=75",
        position: {
          position: "Backend",
          title:
            "Мне нравится кодировать вещи с нуля, и мне нравится воплощать идеи в жизнь в браузере.",
        },
        language: [{ name: "JavaScript" }],
        dev_tools: [
          { id: 1, name: "Node" },
          { id: 2, name: "Strapi" },
          { id: 3, name: "Express" },
          { id: 4, name: "Mongoose" },
        ],
      },
    },

    {
      id: 3,
      frontend: {
        id: 1,
        icon: "http://localhost:3000/_next/image?url=%2Fcode.png&w=64&q=75",
        position: {
          position: "Design",
          title:
            "Мне нравится кодировать вещи с нуля, и мне нравится воплощать идеи в жизнь в браузере.",
        },
        language: [{ name: "UX/UI" }],
        dev_tools: [
          { id: 1, name: "Figma" },
          { id: 2, name: "Adobe Photoshop" },
          { id: 3, name: "Sketch" },
          { id: 4, name: "Webflow" },
          { id: 5, name: "Affinity Designer" },
        ],
      },
    },
  ],
};
