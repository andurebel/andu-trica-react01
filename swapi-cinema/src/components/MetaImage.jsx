import { useEffect, useState } from 'react';

const baseUrl =
  'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI';
const apiKey = '3474c8dc47mshc14d56efb29358ap1c3cc5jsn59ffb925e19c';
const host = 'contextualwebsearch-websearch-v1.p.rapidapi.com';

export const MetaImage = ({ term }) => {
  const [busy, setBusy] = useState(true);
  const [imageUrl, SetImageUrl] = useState('');

  useEffect(() => {
    const refinedSearchTerm = encodeURIComponent(`star wars ${term}`);
    const random = Math.floor(Math.random() * 3000) + 2;

    setTimeout(() => {
      fetch(
        `${baseUrl}?q=${refinedSearchTerm}&pageNumber=1&pageSize=1&autoCorrect=true`,
        {
          headers: {
            'x-rapidapi-key': apiKey,
            'x-rapidapi-host': host,
            useQueryString: true,
          },
        },
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const imageUrl = data.value[0].url;
          setBusy(false);
          SetImageUrl(imageUrl);
        });
    }, random);
  }, [term]);

  return (
    <>
      {busy ? (
        '...loading'
      ) : (
        <img className="img-fluid" src={imageUrl} alt={term}></img>
      )}
    </>
  );
};

export default MetaImage;
