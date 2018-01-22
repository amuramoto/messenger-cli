function checkToken (page_token) {
  page_token = !page_token ? process.env.MESSENGER_PAGE_TOKEN : page_token;
  if (!page_token) { 
    console.error('Page access token required');
    process.exit(1);
  } 
  return page_token;
}

module.exports = {
  checkToken
}