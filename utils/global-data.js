export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'Luke Zhong';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'I love technology and design. I am a developer with enthusiasm and focus on both Frontend and Backend development.'
    
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : 'lukeyzhong@gmail.com - (405)3348693';

  return {
    name,
    blogTitle,
    footerText,
  };
};
