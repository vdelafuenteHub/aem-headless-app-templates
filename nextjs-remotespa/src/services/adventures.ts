import { getAdventureBySlug, getAllAdventures } from '@/apis/adventures';

export const getAdventures = async (slug?: string) => {
  let data;

  try {
    if (slug) {
      const res = await getAdventureBySlug({ slug });
      data = res?.data?.adventureList?.items[0] || {};
    } else {
      const res = await getAllAdventures();
      data = res?.data?.adventureList?.items || [];
    }
  } catch (e) {
    console.error(e);
  }

  return data;
};

export const getAdventurePaths = async () => {
  let data = [];

  try {
    const res = await getAdventures();
    data = res?.map(({ slug }: { slug: string }) => ({
      params: {
        path: [slug],
      },
    }));
  } catch (e) {
    console.error(e);
  }

  return data;
};
