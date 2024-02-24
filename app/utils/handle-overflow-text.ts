const MAX_TITLE_LENGTH = 42;
const MAX_NAME_LENGTH = 20;

export const skipTitleView = (title: string) => {
  if (title.length > MAX_TITLE_LENGTH) {
    return title.substring(0, MAX_TITLE_LENGTH) + "...";
  }
  return title;
};

export const skipNameView = (name: string) => {
  if (name.length > MAX_NAME_LENGTH) {
    return name.substring(0, MAX_NAME_LENGTH) + "...";
  }
  return name;
};
