export const getUnsplashImageUrl = (imageId: string, width: number = 600, height: number = 400, quality: number = 80) => {
  return `https://images.unsplash.com/${imageId}?w=${width}&h=${height}&fit=crop&auto=format&q=${quality}`;
};

export const defaultRecipeImages = [
  'photo-1621996346565-e3dbc353d2e5',
  'photo-1464349095431-e9a21285b5f3', 
  'photo-1565299624946-b28f40a0ca4b',
  'photo-1574071318508-1cdbab80d002', 
  'photo-1567620905732-2d1ec7ab7445',
  'photo-1565958011703-44f9829ba187',
  'photo-1551782450-a2132b4ba21d',
  'photo-1563379091339-03246963d321',
  'photo-1555939594-58d7cb561ad1',
  'photo-1586190848861-99aa4a171e90'
];

export const getRandomRecipeImage = (width: number = 600, height: number = 400) => {
  const randomImage = defaultRecipeImages[Math.floor(Math.random() * defaultRecipeImages.length)];
  return getUnsplashImageUrl(randomImage, width, height);
};