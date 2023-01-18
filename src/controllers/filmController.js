import Film from "../model/filmModel.js";

export const getFilms = async (_, res) => {
  const data = await Film.find();

  let filmId = 1;
  let trendingId = 1;
  let regularId = 1;

  const newData = data.map((modifiedData) => {
    return {
      id: filmId++,
      title: modifiedData.title,
      thumbnail: {
        ...(modifiedData.thumbnail.trending && {
          trending: {
            small: modifiedData.thumbnail.trending.small,
            large: modifiedData.thumbnail.trending.large,
            id: trendingId++,
          },
        }),
        regular: {
          small: modifiedData.thumbnail.regular.small,
          medium: modifiedData.thumbnail.regular.medium,
          large: modifiedData.thumbnail.regular.large,
          id: regularId++,
        },
      },
      year: modifiedData.year,
      category: modifiedData.category,
      rating: modifiedData.rating,
      isBookmarked: modifiedData.isBookmarked,
      isTrending: modifiedData.isTrending,
    };
  });
  return res.json(newData);
};
