async function closeLoginPopupIfPresent(page) 
{
  const closeBtn = page.locator('span.b3wTle');
  if (await closeBtn.isVisible()) {
    await closeBtn.click();
  }
}

function priceToNumber(priceText) {
  return Number(priceText.replace(/[^0-9]/g, ''));
}

function isSortedAscending(numbers) {
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < numbers[i - 1]) return false;
  }
  return true;
}



//Generates a random string, useful for unique names and emails
function randomString(length = 6)
{
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let result ='';
    for(let i = 0; i < length; i++)
    {
        result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return result;
}

//Returns a timestamp like "2026-10-12_14-30-05", handy for screenshot names
function getTimestamp()
{
    return new Date().toISOString().replace(/[:T]/g, '-').split('.')[0];
}

module.exports = {priceToNumber,isSortedAscending,closeLoginPopupIfPresent};