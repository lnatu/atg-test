import moment from 'moment';

export const sortBookByDate = books =>
  books.sort((a, b) => moment(b.volumeInfo.publishedDate)
    .format('X') - moment(a.volumeInfo.publishedDate)
    .format('X'));

export const sortBookByRating = books =>
  books.sort((a, b) => {
    const rcA = a.volumeInfo.ratingsCount || 0;
    const rcB = b.volumeInfo.ratingsCount || 0;

    return rcB - rcA;
  });

