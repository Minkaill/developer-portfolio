export type INavigation = {
  id: number;
  title: string;
  path: string;
};

export type IUser = {
  position: {
    position: {
      id: number;
      title: string;
    }[];
    title: string;
  };
  aboutme: {
    title: string;
    text: string;
  };
  skills: {
    id: number;
    frontend: {
      id: number;
      icon: string;
      position: {
        position: string;
        title: string;
      };
      language: {
        name: string;
      }[];
      dev_tools: {
        id: number;
        name: string;
      }[];
    };
  }[];
};
