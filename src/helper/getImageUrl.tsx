const publicUrl = process.env.PUBLIC_URL;

export async function getImageUrl(imgArray: string[]) {
  const updatedUrls = imgArray.map((url) => {
    return `${publicUrl}/uploads/${url}`;
  });

  return updatedUrls;
}

export function getSingleImageUrl(imgUrl: string) {
  return `https://api.newworldtrending.com/blog/uploads/${imgUrl}`;
}
