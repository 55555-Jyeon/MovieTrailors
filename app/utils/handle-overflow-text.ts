const MAX_TITLE_LENGTH = 42;

export const skipTitleView = (title: string) => {
  if (title.length > MAX_TITLE_LENGTH) {
    return title.substring(0, MAX_TITLE_LENGTH) + "...";
  }
  return title;
};
