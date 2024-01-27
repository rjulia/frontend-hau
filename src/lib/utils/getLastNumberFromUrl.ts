function getLastNumberFromUrl(url: string): string {
  const urlParts = url.split('/');
  const lastPart = urlParts[urlParts.length - 1];
  const lastNumber = parseInt(lastPart, 10);
  return lastNumber.toString();
}

export default getLastNumberFromUrl;