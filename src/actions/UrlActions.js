export async function getCurrentRepo() {
  let returnVal = await chrome.tabs.query({currentWindow: true, active: true}, (tabs) => {
    const { url } = tabs[0];
    console.log('url', url);
    return url;
  });


  return Promise.resolve(returnVal);
}
